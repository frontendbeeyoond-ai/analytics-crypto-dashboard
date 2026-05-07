import { BetaAnalyticsDataClient } from "@google-analytics/data";
import { DocumentsAnalyticsData, FilterParams, GlobalParamRow, GlobalParamsData, NewsletterAnalyticsData, OnlineShopAnalyticsData, PageViewAnalyticsData, PageTitleRow, PresaleAnalyticsData, ScrollDepthDetailData, SocialClickAnalyticsData, TrustpilotAnalyticsData } from "@/types/analytics";

// Initialize GA4 client with service account
let analyticsClient: BetaAnalyticsDataClient | null = null;

function getAnalyticsClient(): BetaAnalyticsDataClient {
  if (!analyticsClient) {
    // Option 1: full JSON blob
    const serviceAccountJson = process.env.GA4_SERVICE_ACCOUNT_JSON;
    if (serviceAccountJson && serviceAccountJson !== "sample") {
      try {
        analyticsClient = new BetaAnalyticsDataClient({
          credentials: JSON.parse(serviceAccountJson),
          fallback: true,
        });
        return analyticsClient;
      } catch {
        throw new Error("Failed to parse GA4_SERVICE_ACCOUNT_JSON");
      }
    }

    // Option 2: individual GOOGLE_* env vars (from .env.local or service-account.json fields)
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY;
    if (clientEmail && privateKey) {
      analyticsClient = new BetaAnalyticsDataClient({
        credentials: {
          client_email: clientEmail,
          private_key: privateKey.replace(/\\n/g, "\n"),
        },
        fallback: true,
      });
      return analyticsClient;
    }

    throw new Error(
      "No GA4 credentials found. Set GA4_SERVICE_ACCOUNT_JSON or GOOGLE_CLIENT_EMAIL + GOOGLE_PRIVATE_KEY."
    );
  }
  return analyticsClient;
}

// Get property ID from environment
function getPropertyId(): string {
  const propertyId = process.env.GA4_PROPERTY_ID;
  if (!propertyId || propertyId === "sample") {
    throw new Error("GA4_PROPERTY_ID is not configured");
  }
  return propertyId;
}

// Build date range from filters
function buildDateRange(filters: FilterParams): { startDate: string; endDate: string } {
  const endDate = filters.end_date || "today";
  const startDate = filters.start_date || "30daysAgo";
  return { startDate, endDate };
}

// Format GA4 date (YYYYMMDD) to readable format
function formatDate(dateStr: string): string {
  if (!dateStr || dateStr.length !== 8) return dateStr;
  const year = dateStr.substring(0, 4);
  const month = dateStr.substring(4, 6);
  const day = dateStr.substring(6, 8);
  return `${year}-${month}-${day}`;
}

// Fetch Core KPIs from GA4
export async function fetchCoreKPIs(filters: FilterParams) {
  const client = getAnalyticsClient();
  const propertyId = getPropertyId();
  const { startDate, endDate } = buildDateRange(filters);

  const response = await client.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [{ startDate, endDate }],
    metrics: [
      { name: "totalUsers" },
      { name: "activeUsers" },
      { name: "newUsers" },
      { name: "screenPageViews" },
      { name: "bounceRate" },
      { name: "averageSessionDuration" },
    ],
  });

  const row = response[0]?.rows?.[0]?.metricValues;

  const getMetricValue = (metricValues: any, index: number): number => {
    if (!metricValues || !metricValues[index]) return 0;
    const value = parseFloat(metricValues[index].value);
    return isNaN(value) ? 0 : value;
  };

  const totalUsers = getMetricValue(row, 0);
  const activeUsers = getMetricValue(row, 1);
  const newUsers = getMetricValue(row, 2);
  const pageViews = getMetricValue(row, 3);
  const bounceRate = getMetricValue(row, 4);
  const avgSessionDuration = Math.round(getMetricValue(row, 5));

  return {
    totalUsers: Math.round(totalUsers),
    activeUsers: Math.round(activeUsers),
    newUsers: Math.round(newUsers),
    pageViews: Math.round(pageViews),
    bounceRate: Math.round(bounceRate * 10) / 10,
    avgSessionDuration,
  };
}

// Fetch Event Counts
export async function fetchEventCounts(filters: FilterParams) {
  const client = getAnalyticsClient();
  const propertyId = getPropertyId();
  const { startDate, endDate } = buildDateRange(filters);

  const eventNames = [
    "page_view",
    "presale_click_cta",
    "online_shop_click",
    "documents_click",
    "newsletter_signup",
    "social_click",
    "trustpilot_click",
    "scroll_depth",
    "session_end",
  ];

  const response = await client.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [{ startDate, endDate }],
    dimensions: [{ name: "eventName" }],
    metrics: [{ name: "eventCount" }],
  });

  const rows = response[0]?.rows || [];
  const eventCounts: Record<string, number> = {};

  rows.forEach((row: any) => {
    const eventName = row.dimensionValues?.[0]?.value || "";
    const count = parseInt(row.metricValues?.[0]?.value || "0", 10);
    eventCounts[eventName] = count;
  });

  // Get total events for percentage calculation
  const totalEvents = Object.values(eventCounts).reduce((a, b) => a + b, 0);
  const pageViews = eventCounts["page_view"] || 0;

  return {
    eventCounts,
    totalEvents,
    pageViews,
  };
}

// Calculate CTRs from event counts
export function calculateCTRs(
  eventCounts: Record<string, number>,
  pageViews: number
) {
  const presaleClicks = eventCounts["presale_click_cta"] || 0;
  const shopClicks = eventCounts["online_shop_click"] || 0;
  const documentsClicks = eventCounts["documents_click"] || 0;
  const newsletterSignups = eventCounts["newsletter_signup"] || 0;
  const socialClicks = eventCounts["social_click"] || 0;
  const trustpilotClicks = eventCounts["trustpilot_click"] || 0;

  return {
    presaleCTR: pageViews > 0 ? Math.round((presaleClicks / pageViews) * 1000) / 10 : 0,
    shopCTR: pageViews > 0 ? Math.round((shopClicks / pageViews) * 1000) / 10 : 0,
    documentsCTR: pageViews > 0 ? Math.round((documentsClicks / pageViews) * 1000) / 10 : 0,
    newsletterConversion: pageViews > 0 ? Math.round((newsletterSignups / pageViews) * 1000) / 10 : 0,
    socialCTR: pageViews > 0 ? Math.round((socialClicks / pageViews) * 1000) / 10 : 0,
    trustpilotCTR: pageViews > 0 ? Math.round((trustpilotClicks / pageViews) * 1000) / 10 : 0,
  };
}

// Fetch Users Over Time
export async function fetchUsersOverTime(filters: FilterParams) {
  const client = getAnalyticsClient();
  const propertyId = getPropertyId();
  const { startDate, endDate } = buildDateRange(filters);

  const response = await client.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [{ startDate, endDate }],
    dimensions: [{ name: "date" }],
    metrics: [
      { name: "totalUsers" },
      { name: "activeUsers" },
    ],
    orderBys: [
      {
        dimension: {
          dimensionName: "date",
        },
      },
    ],
  });

  const rows = response[0]?.rows || [];

  return rows.map((row: any) => ({
    date: formatDate(row.dimensionValues?.[0]?.value || ""),
    value: parseInt(row.metricValues?.[0]?.value || "0", 10),
  }));
}

// Fetch Scroll Depth Distribution
export async function fetchScrollDepth(filters: FilterParams) {
  const client = getAnalyticsClient();
  const propertyId = getPropertyId();
  const { startDate, endDate } = buildDateRange(filters);

  const response = await client.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [{ startDate, endDate }],
    dimensions: [{ name: "customEvent:scroll_percentage" }],
    metrics: [{ name: "eventCount" }],
    dimensionFilter: {
      filter: {
        fieldName: "eventName",
        stringFilter: {
          matchType: "EXACT",
          value: "scroll_depth",
        },
      },
    },
  });

  const rows = response[0]?.rows || [];
  const scrollData: Record<string, number> = {};

  rows.forEach((row: any) => {
    const percentage = row.dimensionValues?.[0]?.value || "0";
    const count = parseInt(row.metricValues?.[0]?.value || "0", 10);

    // Bucket into ranges
    const value = parseInt(percentage, 10);
    let bucket: string;
    if (value <= 25) bucket = "0-25%";
    else if (value <= 50) bucket = "25-50%";
    else if (value <= 75) bucket = "50-75%";
    else bucket = "75-100%";

    scrollData[bucket] = (scrollData[bucket] || 0) + count;
  });

  const total = Object.values(scrollData).reduce((a, b) => a + b, 0);

  return Object.entries(scrollData)
    .map(([range, count]) => ({
      range,
      count,
      percentage: total > 0 ? Math.round((count / total) * 1000) / 10 : 0,
    }))
    .sort((a, b) => {
      const order = ["0-25%", "25-50%", "50-75%", "75-100%"];
      return order.indexOf(a.range) - order.indexOf(b.range);
    });
}

// Fetch Traffic Source Distribution
export async function fetchTrafficSources(filters: FilterParams) {
  const client = getAnalyticsClient();
  const propertyId = getPropertyId();
  const { startDate, endDate } = buildDateRange(filters);

  const response = await client.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [{ startDate, endDate }],
    dimensions: [{ name: "sessionSource" }],
    metrics: [{ name: "sessions" }],
    orderBys: [
      {
        metric: {
          metricName: "sessions",
        },
        desc: true,
      },
    ],
  });

  const rows = response[0]?.rows || [];
  const totalSessions = rows.reduce(
    (sum: number, row: any) => sum + parseInt(row.metricValues?.[0]?.value || "0", 10),
    0
  );

  return rows.slice(0, 10).map((row: any) => {
    const source = row.dimensionValues?.[0]?.value || "unknown";
    const sessions = parseInt(row.metricValues?.[0]?.value || "0", 10);
    return {
      source,
      sessions,
      percentage: totalSessions > 0 ? Math.round((sessions / totalSessions) * 1000) / 10 : 0,
    };
  });
}

// Fetch Country Breakdown
export async function fetchCountryBreakdown(filters: FilterParams) {
  const client = getAnalyticsClient();
  const propertyId = getPropertyId();
  const { startDate, endDate } = buildDateRange(filters);

  const response = await client.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [{ startDate, endDate }],
    dimensions: [{ name: "country" }],
    metrics: [{ name: "sessions" }],
    orderBys: [
      {
        metric: {
          metricName: "sessions",
        },
        desc: true,
      },
    ],
  });

  const rows = response[0]?.rows || [];

  return rows.slice(0, 15).map((row: any) => ({
    country: row.dimensionValues?.[0]?.value || "Unknown",
    sessions: parseInt(row.metricValues?.[0]?.value || "0", 10),
  }));
}

// Fetch Signup Status Breakdown
export async function fetchSignupStatus(filters: FilterParams) {
  const client = getAnalyticsClient();
  const propertyId = getPropertyId();
  const { startDate, endDate } = buildDateRange(filters);

  const response = await client.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [{ startDate, endDate }],
    dimensions: [{ name: "customEvent:signup_status" }],
    metrics: [{ name: "eventCount" }],
    dimensionFilter: {
      filter: {
        fieldName: "eventName",
        stringFilter: {
          matchType: "EXACT",
          value: "newsletter_signup",
        },
      },
    },
  });

  const rows = response[0]?.rows || [];

  return rows.map((row: any) => ({
    status: row.dimensionValues?.[0]?.value || "unknown",
    count: parseInt(row.metricValues?.[0]?.value || "0", 10),
  }));
}

// Fetch Signup Location Breakdown
export async function fetchSignupLocation(filters: FilterParams) {
  const client = getAnalyticsClient();
  const propertyId = getPropertyId();
  const { startDate, endDate } = buildDateRange(filters);

  const response = await client.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [{ startDate, endDate }],
    dimensions: [{ name: "customEvent:signup_location" }],
    metrics: [{ name: "eventCount" }],
    dimensionFilter: {
      filter: {
        fieldName: "eventName",
        stringFilter: {
          matchType: "EXACT",
          value: "newsletter_signup",
        },
      },
    },
  });

  const rows = response[0]?.rows || [];

  return rows.map((row: any) => ({
    location: row.dimensionValues?.[0]?.value || "unknown",
    count: parseInt(row.metricValues?.[0]?.value || "0", 10),
  }));
}

// Fetch Social Platform Breakdown
export async function fetchSocialPlatform(filters: FilterParams) {
  const client = getAnalyticsClient();
  const propertyId = getPropertyId();
  const { startDate, endDate } = buildDateRange(filters);

  const response = await client.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [{ startDate, endDate }],
    dimensions: [{ name: "customEvent:platform" }],
    metrics: [{ name: "eventCount" }],
    dimensionFilter: {
      filter: {
        fieldName: "eventName",
        stringFilter: {
          matchType: "EXACT",
          value: "social_click",
        },
      },
    },
  });

  const rows = response[0]?.rows || [];

  return rows.map((row: any) => ({
    platform: row.dimensionValues?.[0]?.value || "unknown",
    count: parseInt(row.metricValues?.[0]?.value || "0", 10),
  }));
}

// Fetch Funnel Data
export async function fetchFunnelData(filters: FilterParams) {
  const client = getAnalyticsClient();
  const propertyId = getPropertyId();
  const { startDate, endDate } = buildDateRange(filters);

  // Get page views
  const pvResponse = await client.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [{ startDate, endDate }],
    metrics: [{ name: "screenPageViews" }],
    dimensionFilter: {
      filter: {
        fieldName: "eventName",
        stringFilter: {
          matchType: "EXACT",
          value: "page_view",
        },
      },
    },
  });

  const pageViews = parseInt(pvResponse[0]?.rows?.[0]?.metricValues?.[0]?.value || "0", 10);

  // Get scroll 50%+ sessions (approximated via engagement)
  const engagementResponse = await client.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [{ startDate, endDate }],
    metrics: [{ name: "engagedSessions" }],
  });

  const engagedSessions = parseInt(engagementResponse[0]?.rows?.[0]?.metricValues?.[0]?.value || "0", 10);

  // Get presale clicks
  const presaleResponse = await client.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [{ startDate, endDate }],
    metrics: [{ name: "eventCount" }],
    dimensionFilter: {
      filter: {
        fieldName: "eventName",
        stringFilter: {
          matchType: "EXACT",
          value: "presale_click_cta",
        },
      },
    },
  });

  const presaleClicks = parseInt(presaleResponse[0]?.rows?.[0]?.metricValues?.[0]?.value || "0", 10);

  // Get newsletter signups
  const signupResponse = await client.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [{ startDate, endDate }],
    metrics: [{ name: "eventCount" }],
    dimensionFilter: {
      filter: {
        fieldName: "eventName",
        stringFilter: {
          matchType: "EXACT",
          value: "newsletter_signup",
        },
      },
    },
  });

  const newsletterSignups = parseInt(signupResponse[0]?.rows?.[0]?.metricValues?.[0]?.value || "0", 10);

  const base = pageViews || 1;

  return [
    { step: "Page View", count: pageViews, percentage: 100 },
    { step: "Scroll 50%+", count: engagedSessions, percentage: Math.round((engagedSessions / base) * 1000) / 10 },
    { step: "Presale Click", count: presaleClicks, percentage: Math.round((presaleClicks / base) * 1000) / 10 },
    { step: "Newsletter Signup", count: newsletterSignups, percentage: Math.round((newsletterSignups / base) * 1000) / 10 },
  ];
}

function settle<T>(p: Promise<T>, fallback: T): Promise<T> {
  return p.catch((err) => {
    console.warn("GA4 query failed, using fallback:", err?.message ?? err);
    return fallback;
  });
}

// Main function to fetch all GA4 data
export async function fetchAllGA4Data(filters: FilterParams) {
  try {
    // Core queries must succeed; optional custom-dimension queries fall back to empty arrays.
    const [
      coreKPIs,
      eventData,
      usersOverTime,
      scrollDepth,
      trafficSources,
      countries,
      signupStatus,
      signupLocation,
      socialPlatform,
      funnelData,
      campaignPerformance,
    ] = await Promise.all([
      fetchCoreKPIs(filters),
      fetchEventCounts(filters),
      fetchUsersOverTime(filters),
      settle(fetchScrollDepth(filters), []),
      fetchTrafficSources(filters),
      fetchCountryBreakdown(filters),
      settle(fetchSignupStatus(filters), []),
      settle(fetchSignupLocation(filters), []),
      settle(fetchSocialPlatform(filters), []),
      fetchFunnelData(filters),
      settle(fetchCampaignPerformance(filters), []),
    ]);

    // Calculate CTRs
    const ctrs = calculateCTRs(eventData.eventCounts, eventData.pageViews);

    // Build event counts array
    const eventNames = [
      "page_view",
      "presale_click_cta",
      "online_shop_click",
      "documents_click",
      "newsletter_signup",
      "social_click",
      "trustpilot_click",
      "scroll_depth",
      "session_end",
    ];

    const eventCounts = eventNames.map((name) => ({
      eventName: name,
      count: eventData.eventCounts[name] || 0,
      percentage:
        eventData.totalEvents > 0
          ? Math.round((eventData.eventCounts[name] || 0) / eventData.totalEvents * 1000) / 10
          : 0,
      conversionRate:
        eventData.pageViews > 0
          ? Math.round((eventData.eventCounts[name] || 0) / eventData.pageViews * 1000) / 10
          : 0,
    }));

    return {
      kpis: {
        ...coreKPIs,
        ...ctrs,
      },
      events: eventCounts,
      charts: {
        usersOverTime,
        scrollDepth,
        trafficSource: trafficSources,
        country: countries,
      },
      breakdowns: {
        signupStatus,
        signupLocation,
        socialPlatform,
      },
      funnelData,
      campaignPerformance,
      _meta: {
        totalEvents: eventData.totalEvents,
        filteredEvents: eventData.totalEvents,
      },
    };
  } catch (error) {
    console.error("Error fetching GA4 data:", error);
    throw error;
  }
}

// Fetch Campaign Performance by UTM campaign name
export async function fetchCampaignPerformance(filters: FilterParams) {
  const client = getAnalyticsClient();
  const propertyId = getPropertyId();
  const { startDate, endDate } = buildDateRange(filters);

  const response = await client.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [{ startDate, endDate }],
    dimensions: [{ name: "sessionCampaignName" }],
    metrics: [
      { name: "sessions" },
      { name: "engagedSessions" },
      { name: "conversions" },
    ],
    orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
    limit: 10,
  });

  const rows = response[0]?.rows || [];

  return rows
    .filter((row: any) => {
      const name = row.dimensionValues?.[0]?.value;
      return name && name !== "(not set)";
    })
    .map((row: any) => {
      const impressions = parseInt(row.metricValues?.[0]?.value || "0", 10);
      const clicks = parseInt(row.metricValues?.[1]?.value || "0", 10);
      const conversions = parseInt(row.metricValues?.[2]?.value || "0", 10);
      return {
        name: row.dimensionValues?.[0]?.value as string,
        impressions,
        clicks,
        ctr: impressions > 0 ? Math.round((clicks / impressions) * 1000) / 10 : 0,
        conversions,
        conversionRate: clicks > 0 ? Math.round((conversions / clicks) * 1000) / 10 : 0,
      };
    });
}

// Fetch detailed Newsletter Signup analytics
export async function fetchNewsletterDetail(filters: FilterParams): Promise<NewsletterAnalyticsData> {
  const client = getAnalyticsClient();
  const propertyId = getPropertyId();
  const { startDate, endDate } = buildDateRange(filters);

  const eventFilter = {
    filter: {
      fieldName: "eventName",
      stringFilter: { matchType: "EXACT" as const, value: "newsletter_signup" },
    },
  };

  function parseBreakdownRows(result: any): { dimension: string; eventCount: number; totalUsers: number }[] {
    const rows = result?.[0]?.rows || [];
    return rows.map((row: any) => ({
      dimension: row.dimensionValues?.[0]?.value || "unknown",
      eventCount: parseInt(row.metricValues?.[0]?.value || "0", 10),
      totalUsers: parseInt(row.metricValues?.[1]?.value || "0", 10),
    }));
  }

  const [kpiResult, overTimeResult, statusResult, locationResult, emailResult, countryResult] =
    await Promise.all([
      client.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [{ startDate, endDate }],
        metrics: [
          { name: "eventCount" },
          { name: "totalUsers" },
          { name: "activeUsers" },
          { name: "sessions" },
        ],
        dimensionFilter: eventFilter,
      }),
      client.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [{ startDate, endDate }],
        dimensions: [{ name: "date" }],
        metrics: [{ name: "eventCount" }],
        dimensionFilter: eventFilter,
        orderBys: [{ dimension: { dimensionName: "date" } }],
      }),
      settle(
        client.runReport({
          property: `properties/${propertyId}`,
          dateRanges: [{ startDate, endDate }],
          dimensions: [{ name: "customEvent:signup_status" }],
          metrics: [{ name: "eventCount" }, { name: "totalUsers" }],
          dimensionFilter: eventFilter,
        }),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        [null] as any
      ),
      settle(
        client.runReport({
          property: `properties/${propertyId}`,
          dateRanges: [{ startDate, endDate }],
          dimensions: [{ name: "customEvent:signup_location" }],
          metrics: [{ name: "eventCount" }, { name: "totalUsers" }],
          dimensionFilter: eventFilter,
        }),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        [null] as any
      ),
      settle(
        client.runReport({
          property: `properties/${propertyId}`,
          dateRanges: [{ startDate, endDate }],
          dimensions: [{ name: "customEvent:e-mail" }],
          metrics: [{ name: "eventCount" }, { name: "totalUsers" }],
          dimensionFilter: eventFilter,
          orderBys: [{ metric: { metricName: "eventCount" }, desc: true }],
        }),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        [null] as any
      ),
      client.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [{ startDate, endDate }],
        dimensions: [{ name: "country" }],
        metrics: [{ name: "eventCount" }, { name: "totalUsers" }],
        dimensionFilter: eventFilter,
        orderBys: [{ metric: { metricName: "eventCount" }, desc: true }],
      }),
    ]);

  const kpiRow = kpiResult?.[0]?.rows?.[0]?.metricValues;
  const totalEvents = parseInt(kpiRow?.[0]?.value || "0", 10);
  const totalUsers = parseInt(kpiRow?.[1]?.value || "0", 10);
  const activeUsers = parseInt(kpiRow?.[2]?.value || "0", 10);
  const sessions = parseInt(kpiRow?.[3]?.value || "0", 10);

  const eventsOverTime = (overTimeResult?.[0]?.rows || []).map((row: any) => ({
    date: formatDate(row.dimensionValues?.[0]?.value || ""),
    value: parseInt(row.metricValues?.[0]?.value || "0", 10),
  }));

  // Realtime — isolated so failures don't crash the page
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let realtimeResult: any = null;
  try {
    realtimeResult = await client.runRealtimeReport({
      property: `properties/${propertyId}`,
      metrics: [{ name: "eventCount" }],
      dimensionFilter: eventFilter,
      minuteRanges: [{ name: "last30min", startMinutesAgo: 29, endMinutesAgo: 0 }],
    });
  } catch { /* realtime unavailable — silently fall back to 0 */ }

  const realtimeRows = realtimeResult?.[0]?.rows || [];
  const eventsLast30Min = realtimeRows.reduce(
    (sum: number, row: any) => sum + parseInt(row.metricValues?.[0]?.value || "0", 10),
    0
  );

  return {
    totalEvents,
    totalUsers,
    activeUsers,
    eventsPerActiveUser: activeUsers > 0 ? Math.round((totalEvents / activeUsers) * 10) / 10 : 0,
    eventsPerSession: sessions > 0 ? Math.round((totalEvents / sessions) * 100) / 100 : 0,
    sessions,
    eventsLast30Min,
    eventsOverTime,
    signupStatus: parseBreakdownRows(statusResult),
    signupLocation: parseBreakdownRows(locationResult),
    emailBreakdown: parseBreakdownRows(emailResult),
    countryBreakdown: parseBreakdownRows(countryResult).slice(0, 15),
  };
}

// Fetch detailed Page View analytics
export async function fetchPageViewDetail(filters: FilterParams): Promise<PageViewAnalyticsData> {
  const client = getAnalyticsClient();
  const propertyId = getPropertyId();
  const { startDate, endDate } = buildDateRange(filters);

  const pageViewFilter = {
    filter: {
      fieldName: "eventName",
      stringFilter: { matchType: "EXACT" as const, value: "page_view" },
    },
  };

  function parseBreakdownRows(result: any): { dimension: string; eventCount: number; totalUsers: number }[] {
    const rows = result?.[0]?.rows || [];
    return rows.map((row: any) => ({
      dimension: row.dimensionValues?.[0]?.value || "unknown",
      eventCount: parseInt(row.metricValues?.[0]?.value || "0", 10),
      totalUsers: parseInt(row.metricValues?.[1]?.value || "0", 10),
    }));
  }

  const [kpiResult, engagementResult, overTimeResult, countryResult, pageTitleResult] =
    await Promise.all([
      // Core KPIs scoped to page_view events
      client.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [{ startDate, endDate }],
        metrics: [
          { name: "eventCount" },
          { name: "totalUsers" },
          { name: "activeUsers" },
          { name: "sessions" },
        ],
        dimensionFilter: pageViewFilter,
      }),
      // User engagement metrics (session-level, not scoped to event)
      client.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [{ startDate, endDate }],
        metrics: [
          { name: "engagedSessions" },
          { name: "engagementRate" },
          { name: "averageSessionDuration" },
          { name: "activeUsers" },
        ],
      }),
      // Daily page_view counts over time
      client.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [{ startDate, endDate }],
        dimensions: [{ name: "date" }],
        metrics: [{ name: "eventCount" }],
        dimensionFilter: pageViewFilter,
        orderBys: [{ dimension: { dimensionName: "date" } }],
      }),
      // Country breakdown for page_view
      client.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [{ startDate, endDate }],
        dimensions: [{ name: "country" }],
        metrics: [{ name: "eventCount" }, { name: "totalUsers" }],
        dimensionFilter: pageViewFilter,
        orderBys: [{ metric: { metricName: "eventCount" }, desc: true }],
      }),
      // Page title breakdown (session-level metrics; no event filter)
      settle(
        client.runReport({
          property: `properties/${propertyId}`,
          dateRanges: [{ startDate, endDate }],
          dimensions: [{ name: "pageTitle" }],
          metrics: [{ name: "screenPageViews" }, { name: "totalUsers" }, { name: "userEngagementDuration" }],
          orderBys: [{ metric: { metricName: "screenPageViews" }, desc: true }],
          limit: 20,
        }),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        [null] as any
      ),
    ]);

  // Realtime query is isolated — a synchronous throw or API rejection must not crash the page
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let realtimeResult: any = null;
  try {
    const rt = await client.runRealtimeReport({
      property: `properties/${propertyId}`,
      metrics: [{ name: "eventCount" }],
      dimensionFilter: pageViewFilter,
      minuteRanges: [{ name: "last30min", startMinutesAgo: 29, endMinutesAgo: 0 }],
    });
    realtimeResult = rt;
  } catch {
    // Realtime API unavailable or permission denied — silently fall back to 0
  }

  const kpiRow = kpiResult?.[0]?.rows?.[0]?.metricValues;
  const totalEvents = parseInt(kpiRow?.[0]?.value || "0", 10);
  const totalUsers = parseInt(kpiRow?.[1]?.value || "0", 10);
  const activeUsers = parseInt(kpiRow?.[2]?.value || "0", 10);
  const sessions = parseInt(kpiRow?.[3]?.value || "0", 10);

  const engRow = engagementResult?.[0]?.rows?.[0]?.metricValues;
  const engagedSessions = parseInt(engRow?.[0]?.value || "0", 10);
  const engagementRate = Math.round(parseFloat(engRow?.[1]?.value || "0") * 1000) / 10;
  const avgEngagementTimeSec = Math.round(parseFloat(engRow?.[2]?.value || "0"));
  const engActiveUsers = parseInt(engRow?.[3]?.value || "0", 10);
  const engagedSessionsPerUser =
    engActiveUsers > 0 ? Math.round((engagedSessions / engActiveUsers) * 100) / 100 : 0;

  const eventsOverTime = (overTimeResult?.[0]?.rows || []).map((row: any) => ({
    date: formatDate(row.dimensionValues?.[0]?.value || ""),
    value: parseInt(row.metricValues?.[0]?.value || "0", 10),
  }));

  const realtimeRows = realtimeResult?.[0]?.rows || [];
  const eventsLast30Min = realtimeRows.reduce(
    (sum: number, row: any) => sum + parseInt(row.metricValues?.[0]?.value || "0", 10),
    0
  );

  const pageTitleRows: PageTitleRow[] = (() => {
    const rows = pageTitleResult?.[0]?.rows || [];
    const totalEvt = rows.reduce((s: number, r: any) => s + parseInt(r.metricValues?.[0]?.value || "0", 10), 0);
    return rows
      .filter((r: any) => {
        const t = r.dimensionValues?.[0]?.value;
        return t && t !== "(not set)";
      })
      .map((row: any) => {
        const ec = parseInt(row.metricValues?.[0]?.value || "0", 10);
        const tu = parseInt(row.metricValues?.[1]?.value || "0", 10);
        const engTime = parseFloat(row.metricValues?.[2]?.value || "0");
        return {
          title: row.dimensionValues?.[0]?.value as string,
          eventCount: ec,
          totalUsers: tu,
          percentage: totalEvt > 0 ? Math.round((ec / totalEvt) * 1000) / 10 : 0,
          avgTimeSec: ec > 0 ? Math.round(engTime / ec) : 0,
        };
      });
  })();

  return {
    totalEvents,
    totalUsers,
    activeUsers,
    eventsPerActiveUser: activeUsers > 0 ? Math.round((totalEvents / activeUsers) * 10) / 10 : 0,
    eventsPerSession: sessions > 0 ? Math.round((totalEvents / sessions) * 100) / 100 : 0,
    sessions,
    eventsLast30Min,
    engagedSessions,
    engagementRate,
    avgEngagementTimeSec,
    engagedSessionsPerUser,
    eventsOverTime,
    countryBreakdown: parseBreakdownRows(countryResult).slice(0, 15),
    pageTitleBreakdown: pageTitleRows,
  };
}

// Fetch minute-by-minute realtime data for a single event (last 30 minutes)
export interface RealtimeMinuteData {
  minutesAgo: number;
  count: number;
}

export interface RealtimeData {
  total: number;
  minuteData: RealtimeMinuteData[];
}

export async function fetchRealtimeData(eventName: string): Promise<RealtimeData> {
  const client = getAnalyticsClient();
  const propertyId = getPropertyId();

  const eventFilter = {
    filter: {
      fieldName: "eventName",
      stringFilter: { matchType: "EXACT" as const, value: eventName },
    },
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let result: any = null;
  try {
    result = await client.runRealtimeReport({
      property: `properties/${propertyId}`,
      dimensions: [{ name: "minutesAgo" }],
      metrics: [{ name: "eventCount" }],
      dimensionFilter: eventFilter,
      minuteRanges: [{ name: "last30min", startMinutesAgo: 29, endMinutesAgo: 0 }],
    });
  } catch {
    // Realtime API unavailable — return zeros
  }

  // Pre-fill all 30 minutes with zero counts
  const minuteMap: Record<number, number> = {};
  for (let i = 0; i <= 29; i++) minuteMap[i] = 0;

  const rows = result?.[0]?.rows || [];
  rows.forEach((row: any) => {
    const ago = parseInt(row.dimensionValues?.[0]?.value || "0", 10);
    const count = parseInt(row.metricValues?.[0]?.value || "0", 10);
    minuteMap[ago] = count;
  });

  // Index 0 = 29m ago (oldest), index 29 = 0m ago (newest) — left-to-right timeline
  const minuteData: RealtimeMinuteData[] = Array.from({ length: 30 }, (_, i) => ({
    minutesAgo: 29 - i,
    count: minuteMap[29 - i] || 0,
  }));

  const total = Object.values(minuteMap).reduce((a, b) => a + b, 0);
  return { total, minuteData };
}

// Fetch detailed Presale Click analytics
export async function fetchPresaleDetail(filters: FilterParams): Promise<PresaleAnalyticsData> {
  const client = getAnalyticsClient();
  const propertyId = getPropertyId();
  const { startDate, endDate } = buildDateRange(filters);

  const presaleFilter = {
    filter: {
      fieldName: "eventName",
      stringFilter: { matchType: "EXACT" as const, value: "presale_click_cta" },
    },
  };

  function parseRows(result: any): { dimension: string; eventCount: number; totalUsers: number }[] {
    const rows = result?.[0]?.rows || [];
    return rows.map((row: any) => ({
      dimension: row.dimensionValues?.[0]?.value || "unknown",
      eventCount: parseInt(row.metricValues?.[0]?.value || "0", 10),
      totalUsers: parseInt(row.metricValues?.[1]?.value || "0", 10),
    }));
  }

  function customDimReport(dimension: string) {
    return settle(
      client.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [{ startDate, endDate }],
        dimensions: [{ name: dimension }],
        metrics: [{ name: "eventCount" }, { name: "totalUsers" }],
        dimensionFilter: presaleFilter,
        orderBys: [{ metric: { metricName: "eventCount" }, desc: true }],
      }),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [null] as any
    );
  }

  const [kpiResult, overTimeResult, countryResult, ctaResult, destUrlResult, btnTextResult, presaleDestResult] =
    await Promise.all([
      client.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [{ startDate, endDate }],
        metrics: [
          { name: "eventCount" },
          { name: "totalUsers" },
          { name: "activeUsers" },
          { name: "sessions" },
        ],
        dimensionFilter: presaleFilter,
      }),
      client.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [{ startDate, endDate }],
        dimensions: [{ name: "date" }],
        metrics: [{ name: "eventCount" }],
        dimensionFilter: presaleFilter,
        orderBys: [{ dimension: { dimensionName: "date" } }],
      }),
      client.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [{ startDate, endDate }],
        dimensions: [{ name: "country" }],
        metrics: [{ name: "eventCount" }, { name: "totalUsers" }],
        dimensionFilter: presaleFilter,
        orderBys: [{ metric: { metricName: "eventCount" }, desc: true }],
      }),
      customDimReport("customEvent:cta_location"),
      customDimReport("customEvent:destination_url"),
      customDimReport("customEvent:button_text"),
      customDimReport("customEvent:presale_destination_url"),
    ]);

  const kpiRow = kpiResult?.[0]?.rows?.[0]?.metricValues;
  const totalEvents = parseInt(kpiRow?.[0]?.value || "0", 10);
  const totalUsers = parseInt(kpiRow?.[1]?.value || "0", 10);
  const activeUsers = parseInt(kpiRow?.[2]?.value || "0", 10);
  const sessions = parseInt(kpiRow?.[3]?.value || "0", 10);

  const eventsOverTime = (overTimeResult?.[0]?.rows || []).map((row: any) => ({
    date: formatDate(row.dimensionValues?.[0]?.value || ""),
    value: parseInt(row.metricValues?.[0]?.value || "0", 10),
  }));

  // Realtime — isolated so failures don't crash the page
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let realtimeResult: any = null;
  try {
    realtimeResult = await client.runRealtimeReport({
      property: `properties/${propertyId}`,
      metrics: [{ name: "eventCount" }],
      dimensionFilter: presaleFilter,
      minuteRanges: [{ name: "last30min", startMinutesAgo: 29, endMinutesAgo: 0 }],
    });
  } catch { /* realtime unavailable — silently fall back to 0 */ }

  const realtimeRows = realtimeResult?.[0]?.rows || [];
  const eventsLast30Min = realtimeRows.reduce(
    (sum: number, row: any) => sum + parseInt(row.metricValues?.[0]?.value || "0", 10),
    0
  );

  return {
    totalEvents,
    totalUsers,
    activeUsers,
    eventsPerActiveUser: activeUsers > 0 ? Math.round((totalEvents / activeUsers) * 10) / 10 : 0,
    eventsPerSession: sessions > 0 ? Math.round((totalEvents / sessions) * 100) / 100 : 0,
    sessions,
    eventsLast30Min,
    eventsOverTime,
    countryBreakdown: parseRows(countryResult).slice(0, 15),
    ctaLocationBreakdown: parseRows(ctaResult),
    destinationUrlBreakdown: parseRows(destUrlResult),
    buttonTextBreakdown: parseRows(btnTextResult),
    presaleDestinationUrlBreakdown: parseRows(presaleDestResult),
  };
}

// Fetch detailed Online Shop Click analytics
export async function fetchOnlineShopDetail(filters: FilterParams): Promise<OnlineShopAnalyticsData> {
  const client = getAnalyticsClient();
  const propertyId = getPropertyId();
  const { startDate, endDate } = buildDateRange(filters);

  const shopFilter = {
    filter: {
      fieldName: "eventName",
      stringFilter: { matchType: "EXACT" as const, value: "online_shop_click" },
    },
  };

  function parseRows(result: any): { dimension: string; eventCount: number; totalUsers: number }[] {
    const rows = result?.[0]?.rows || [];
    return rows.map((row: any) => ({
      dimension: row.dimensionValues?.[0]?.value || "unknown",
      eventCount: parseInt(row.metricValues?.[0]?.value || "0", 10),
      totalUsers: parseInt(row.metricValues?.[1]?.value || "0", 10),
    }));
  }

  function customDimReport(dimension: string) {
    return settle(
      client.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [{ startDate, endDate }],
        dimensions: [{ name: dimension }],
        metrics: [{ name: "eventCount" }, { name: "totalUsers" }],
        dimensionFilter: shopFilter,
        orderBys: [{ metric: { metricName: "eventCount" }, desc: true }],
      }),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [null] as any
    );
  }

  const [kpiResult, overTimeResult, countryResult, destUrlResult, btnTextResult] =
    await Promise.all([
      client.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [{ startDate, endDate }],
        metrics: [
          { name: "eventCount" },
          { name: "totalUsers" },
          { name: "activeUsers" },
          { name: "sessions" },
        ],
        dimensionFilter: shopFilter,
      }),
      client.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [{ startDate, endDate }],
        dimensions: [{ name: "date" }],
        metrics: [{ name: "eventCount" }],
        dimensionFilter: shopFilter,
        orderBys: [{ dimension: { dimensionName: "date" } }],
      }),
      client.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [{ startDate, endDate }],
        dimensions: [{ name: "country" }],
        metrics: [{ name: "eventCount" }, { name: "totalUsers" }],
        dimensionFilter: shopFilter,
        orderBys: [{ metric: { metricName: "eventCount" }, desc: true }],
      }),
      customDimReport("customEvent:destination_url"),
      customDimReport("customEvent:button_text"),
    ]);

  const kpiRow = kpiResult?.[0]?.rows?.[0]?.metricValues;
  const totalEvents = parseInt(kpiRow?.[0]?.value || "0", 10);
  const totalUsers = parseInt(kpiRow?.[1]?.value || "0", 10);
  const activeUsers = parseInt(kpiRow?.[2]?.value || "0", 10);
  const sessions = parseInt(kpiRow?.[3]?.value || "0", 10);

  const eventsOverTime = (overTimeResult?.[0]?.rows || []).map((row: any) => ({
    date: formatDate(row.dimensionValues?.[0]?.value || ""),
    value: parseInt(row.metricValues?.[0]?.value || "0", 10),
  }));

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let realtimeResult: any = null;
  try {
    realtimeResult = await client.runRealtimeReport({
      property: `properties/${propertyId}`,
      metrics: [{ name: "eventCount" }],
      dimensionFilter: shopFilter,
      minuteRanges: [{ name: "last30min", startMinutesAgo: 29, endMinutesAgo: 0 }],
    });
  } catch { /* realtime unavailable */ }

  const realtimeRows = realtimeResult?.[0]?.rows || [];
  const eventsLast30Min = realtimeRows.reduce(
    (sum: number, row: any) => sum + parseInt(row.metricValues?.[0]?.value || "0", 10),
    0
  );

  return {
    totalEvents,
    totalUsers,
    activeUsers,
    eventsPerActiveUser: activeUsers > 0 ? Math.round((totalEvents / activeUsers) * 10) / 10 : 0,
    eventsPerSession: sessions > 0 ? Math.round((totalEvents / sessions) * 100) / 100 : 0,
    sessions,
    eventsLast30Min,
    eventsOverTime,
    countryBreakdown: parseRows(countryResult).slice(0, 15),
    destinationUrlBreakdown: parseRows(destUrlResult),
    buttonTextBreakdown: parseRows(btnTextResult),
  };
}

// Fetch detailed Documents Click analytics
export async function fetchDocumentsDetail(filters: FilterParams): Promise<DocumentsAnalyticsData> {
  const client = getAnalyticsClient();
  const propertyId = getPropertyId();
  const { startDate, endDate } = buildDateRange(filters);

  const docsFilter = {
    filter: {
      fieldName: "eventName",
      stringFilter: { matchType: "EXACT" as const, value: "documents_click" },
    },
  };

  function parseRows(result: any): { dimension: string; eventCount: number; totalUsers: number }[] {
    const rows = result?.[0]?.rows || [];
    return rows.map((row: any) => ({
      dimension: row.dimensionValues?.[0]?.value || "unknown",
      eventCount: parseInt(row.metricValues?.[0]?.value || "0", 10),
      totalUsers: parseInt(row.metricValues?.[1]?.value || "0", 10),
    }));
  }

  function customDimReport(dimension: string) {
    return settle(
      client.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [{ startDate, endDate }],
        dimensions: [{ name: dimension }],
        metrics: [{ name: "eventCount" }, { name: "totalUsers" }],
        dimensionFilter: docsFilter,
        orderBys: [{ metric: { metricName: "eventCount" }, desc: true }],
      }),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [null] as any
    );
  }

  const [kpiResult, overTimeResult, clickLocationResult, destPageResult, ctaNameResult] =
    await Promise.all([
      client.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [{ startDate, endDate }],
        metrics: [
          { name: "eventCount" },
          { name: "totalUsers" },
          { name: "activeUsers" },
          { name: "sessions" },
        ],
        dimensionFilter: docsFilter,
      }),
      client.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [{ startDate, endDate }],
        dimensions: [{ name: "date" }],
        metrics: [{ name: "eventCount" }],
        dimensionFilter: docsFilter,
        orderBys: [{ dimension: { dimensionName: "date" } }],
      }),
      customDimReport("customEvent:click_location"),
      customDimReport("customEvent:destination_page"),
      customDimReport("customEvent:cta_name"),
    ]);

  const kpiRow = kpiResult?.[0]?.rows?.[0]?.metricValues;
  const totalEvents = parseInt(kpiRow?.[0]?.value || "0", 10);
  const totalUsers = parseInt(kpiRow?.[1]?.value || "0", 10);
  const activeUsers = parseInt(kpiRow?.[2]?.value || "0", 10);
  const sessions = parseInt(kpiRow?.[3]?.value || "0", 10);

  const eventsOverTime = (overTimeResult?.[0]?.rows || []).map((row: any) => ({
    date: formatDate(row.dimensionValues?.[0]?.value || ""),
    value: parseInt(row.metricValues?.[0]?.value || "0", 10),
  }));

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let realtimeResult: any = null;
  try {
    realtimeResult = await client.runRealtimeReport({
      property: `properties/${propertyId}`,
      metrics: [{ name: "eventCount" }],
      dimensionFilter: docsFilter,
      minuteRanges: [{ name: "last30min", startMinutesAgo: 29, endMinutesAgo: 0 }],
    });
  } catch { /* realtime unavailable */ }

  const realtimeRows = realtimeResult?.[0]?.rows || [];
  const eventsLast30Min = realtimeRows.reduce(
    (sum: number, row: any) => sum + parseInt(row.metricValues?.[0]?.value || "0", 10),
    0
  );

  return {
    totalEvents,
    totalUsers,
    activeUsers,
    eventsPerActiveUser: activeUsers > 0 ? Math.round((totalEvents / activeUsers) * 10) / 10 : 0,
    eventsPerSession: sessions > 0 ? Math.round((totalEvents / sessions) * 100) / 100 : 0,
    sessions,
    eventsLast30Min,
    eventsOverTime,
    clickLocationBreakdown: parseRows(clickLocationResult),
    destinationPageBreakdown: parseRows(destPageResult),
    ctaNameBreakdown: parseRows(ctaNameResult),
  };
}

// Fetch Global Parameters breakdown (device, country, source, campaign, browser, etc.)
export async function fetchGlobalParamsData(filters: FilterParams): Promise<GlobalParamsData> {
  const client = getAnalyticsClient();
  const propertyId = getPropertyId();
  const { startDate, endDate } = buildDateRange(filters);

  function sessionReport(dimension: string) {
    return client.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [{ startDate, endDate }],
      dimensions: [{ name: dimension }],
      metrics: [{ name: "sessions" }, { name: "totalUsers" }],
      orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
      limit: 20,
    });
  }

  function pageReport(dimension: string) {
    return client.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [{ startDate, endDate }],
      dimensions: [{ name: dimension }],
      metrics: [{ name: "screenPageViews" }, { name: "totalUsers" }],
      orderBys: [{ metric: { metricName: "screenPageViews" }, desc: true }],
      limit: 15,
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function parseRows(result: any, maxRows: number = 15): GlobalParamRow[] {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rows = (result?.[0]?.rows || []).filter((r: any) => {
      const v = r.dimensionValues?.[0]?.value;
      return v && v !== "(not set)" && v !== "(not provided)";
    });
    const total = rows.reduce(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (sum: number, row: any) => sum + parseInt(row.metricValues?.[0]?.value || "0", 10),
      0
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return rows.slice(0, maxRows).map((row: any) => {
      const count = parseInt(row.metricValues?.[0]?.value || "0", 10);
      const users = parseInt(row.metricValues?.[1]?.value || "0", 10);
      return {
        dimension: row.dimensionValues[0].value as string,
        count,
        users,
        percentage: total > 0 ? Math.round((count / total) * 1000) / 10 : 0,
      };
    });
  }

  const [
    deviceResult,
    countryResult,
    sourceResult,
    campaignIdResult,
    campaignNameResult,
    mediumResult,
    pagePathResult,
    pageLocResult,
    browserResult,
    pageLoadResult,
  ] = await Promise.all([
    sessionReport("deviceCategory"),
    sessionReport("country"),
    sessionReport("sessionSource"),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    settle(sessionReport("sessionCampaignId"), [null] as any),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    settle(sessionReport("sessionCampaignName"), [null] as any),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    settle(sessionReport("sessionMedium"), [null] as any),
    pageReport("pagePath"),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    settle(pageReport("pageLocation"), [null] as any),
    sessionReport("browser"),
    settle(
      client.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [{ startDate, endDate }],
        dimensions: [{ name: "customEvent:page_load_time" }],
        metrics: [{ name: "eventCount" }, { name: "totalUsers" }],
        orderBys: [{ metric: { metricName: "eventCount" }, desc: true }],
        limit: 10,
      }),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [null] as any
    ),
  ]);

  return {
    deviceType: parseRows(deviceResult, 3),
    country: parseRows(countryResult, 15),
    trafficSource: parseRows(sourceResult, 10),
    campaignId: parseRows(campaignIdResult, 10),
    campaignName: parseRows(campaignNameResult, 10),
    utmMedium: parseRows(mediumResult, 10),
    pagePath: parseRows(pagePathResult, 10),
    pageLocation: parseRows(pageLocResult, 10),
    browserType: parseRows(browserResult, 10),
    pageLoadTime: parseRows(pageLoadResult, 10),
    lastUpdated: new Date().toISOString(),
    dateRange: { startDate, endDate },
  };
}

// Fetch detailed Trustpilot Click analytics
export async function fetchTrustpilotDetail(filters: FilterParams): Promise<TrustpilotAnalyticsData> {
  const client = getAnalyticsClient();
  const propertyId = getPropertyId();
  const { startDate, endDate } = buildDateRange(filters);

  const trustpilotFilter = {
    filter: {
      fieldName: "eventName",
      stringFilter: { matchType: "EXACT" as const, value: "trustpilot_click" },
    },
  };

  const [kpiResult, overTimeResult] = await Promise.all([
    client.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [{ startDate, endDate }],
      metrics: [
        { name: "eventCount" },
        { name: "totalUsers" },
        { name: "sessions" },
      ],
      dimensionFilter: trustpilotFilter,
    }),
    client.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [{ startDate, endDate }],
      dimensions: [{ name: "date" }],
      metrics: [{ name: "eventCount" }],
      dimensionFilter: trustpilotFilter,
      orderBys: [{ dimension: { dimensionName: "date" } }],
    }),
  ]);

  const kpiRow = kpiResult?.[0]?.rows?.[0]?.metricValues;
  const totalEvents = parseInt(kpiRow?.[0]?.value || "0", 10);
  const totalUsers = parseInt(kpiRow?.[1]?.value || "0", 10);
  const sessions = parseInt(kpiRow?.[2]?.value || "0", 10);

  const eventsOverTime = (overTimeResult?.[0]?.rows || []).map((row: any) => ({
    date: formatDate(row.dimensionValues?.[0]?.value || ""),
    value: parseInt(row.metricValues?.[0]?.value || "0", 10),
  }));

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let realtimeResult: any = null;
  try {
    realtimeResult = await client.runRealtimeReport({
      property: `properties/${propertyId}`,
      metrics: [{ name: "eventCount" }],
      dimensionFilter: trustpilotFilter,
      minuteRanges: [{ name: "last30min", startMinutesAgo: 29, endMinutesAgo: 0 }],
    });
  } catch { /* realtime unavailable */ }

  const realtimeRows = realtimeResult?.[0]?.rows || [];
  const eventsLast30Min = realtimeRows.reduce(
    (sum: number, row: any) => sum + parseInt(row.metricValues?.[0]?.value || "0", 10),
    0
  );

  return {
    totalEvents,
    totalUsers,
    eventsPerSession: sessions > 0 ? Math.round((totalEvents / sessions) * 100) / 100 : 0,
    sessions,
    eventsLast30Min,
    eventsOverTime,
  };
}

// Fetch detailed Social Click analytics
export async function fetchSocialClickDetail(filters: FilterParams): Promise<SocialClickAnalyticsData> {
  const client = getAnalyticsClient();
  const propertyId = getPropertyId();
  const { startDate, endDate } = buildDateRange(filters);

  const socialFilter = {
    filter: {
      fieldName: "eventName",
      stringFilter: { matchType: "EXACT" as const, value: "social_click" },
    },
  };

  function parseRows(result: any): { dimension: string; eventCount: number; totalUsers: number }[] {
    const rows = result?.[0]?.rows || [];
    return rows.map((row: any) => ({
      dimension: row.dimensionValues?.[0]?.value || "unknown",
      eventCount: parseInt(row.metricValues?.[0]?.value || "0", 10),
      totalUsers: parseInt(row.metricValues?.[1]?.value || "0", 10),
    }));
  }

  function customDimReport(dimension: string) {
    return settle(
      client.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [{ startDate, endDate }],
        dimensions: [{ name: dimension }],
        metrics: [{ name: "eventCount" }, { name: "totalUsers" }],
        dimensionFilter: socialFilter,
        orderBys: [{ metric: { metricName: "eventCount" }, desc: true }],
      }),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [null] as any
    );
  }

  const [kpiResult, overTimeResult, countryResult, clickLocationResult, destUrlResult] =
    await Promise.all([
      client.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [{ startDate, endDate }],
        metrics: [
          { name: "eventCount" },
          { name: "totalUsers" },
          { name: "activeUsers" },
          { name: "sessions" },
        ],
        dimensionFilter: socialFilter,
      }),
      client.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [{ startDate, endDate }],
        dimensions: [{ name: "date" }],
        metrics: [{ name: "eventCount" }],
        dimensionFilter: socialFilter,
        orderBys: [{ dimension: { dimensionName: "date" } }],
      }),
      client.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [{ startDate, endDate }],
        dimensions: [{ name: "country" }],
        metrics: [{ name: "eventCount" }, { name: "totalUsers" }],
        dimensionFilter: socialFilter,
        orderBys: [{ metric: { metricName: "eventCount" }, desc: true }],
      }),
      customDimReport("customEvent:click_location"),
      customDimReport("customEvent:destination_url"),
    ]);

  const kpiRow = kpiResult?.[0]?.rows?.[0]?.metricValues;
  const totalEvents = parseInt(kpiRow?.[0]?.value || "0", 10);
  const totalUsers = parseInt(kpiRow?.[1]?.value || "0", 10);
  const activeUsers = parseInt(kpiRow?.[2]?.value || "0", 10);
  const sessions = parseInt(kpiRow?.[3]?.value || "0", 10);

  const eventsOverTime = (overTimeResult?.[0]?.rows || []).map((row: any) => ({
    date: formatDate(row.dimensionValues?.[0]?.value || ""),
    value: parseInt(row.metricValues?.[0]?.value || "0", 10),
  }));

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let realtimeResult: any = null;
  try {
    realtimeResult = await client.runRealtimeReport({
      property: `properties/${propertyId}`,
      metrics: [{ name: "eventCount" }],
      dimensionFilter: socialFilter,
      minuteRanges: [{ name: "last30min", startMinutesAgo: 29, endMinutesAgo: 0 }],
    });
  } catch { /* realtime unavailable */ }

  const realtimeRows = realtimeResult?.[0]?.rows || [];
  const eventsLast30Min = realtimeRows.reduce(
    (sum: number, row: any) => sum + parseInt(row.metricValues?.[0]?.value || "0", 10),
    0
  );

  const countryRows = (countryResult?.[0]?.rows || []).filter((r: any) => {
    const c = r.dimensionValues?.[0]?.value;
    return c && c !== "(not set)";
  });

  return {
    totalEvents,
    totalUsers,
    activeUsers,
    eventsPerActiveUser: activeUsers > 0 ? Math.round((totalEvents / activeUsers) * 10) / 10 : 0,
    eventsPerSession: sessions > 0 ? Math.round((totalEvents / sessions) * 100) / 100 : 0,
    sessions,
    eventsLast30Min,
    eventsOverTime,
    countryBreakdown: countryRows.slice(0, 15).map((row: any) => ({
      dimension: row.dimensionValues?.[0]?.value as string,
      eventCount: parseInt(row.metricValues?.[0]?.value || "0", 10),
      totalUsers: parseInt(row.metricValues?.[1]?.value || "0", 10),
    })),
    clickLocationBreakdown: parseRows(clickLocationResult),
    destinationUrlBreakdown: parseRows(destUrlResult),
  };
}

// Fetch detailed Scroll Depth analytics
export async function fetchScrollDepthDetail(filters: FilterParams): Promise<ScrollDepthDetailData> {
  const client = getAnalyticsClient();
  const propertyId = getPropertyId();
  const { startDate, endDate } = buildDateRange(filters);

  const scrollFilter = {
    filter: {
      fieldName: "eventName",
      stringFilter: { matchType: "EXACT" as const, value: "scroll_depth" },
    },
  };

  const [kpiResult, countryResult] = await Promise.all([
    client.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [{ startDate, endDate }],
      metrics: [
        { name: "eventCount" },
        { name: "totalUsers" },
        { name: "activeUsers" },
      ],
      dimensionFilter: scrollFilter,
    }),
    client.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [{ startDate, endDate }],
      dimensions: [{ name: "country" }],
      metrics: [{ name: "eventCount" }, { name: "totalUsers" }],
      dimensionFilter: scrollFilter,
      orderBys: [{ metric: { metricName: "eventCount" }, desc: true }],
    }),
  ]);

  const kpiRow = kpiResult?.[0]?.rows?.[0]?.metricValues;
  const totalEvents = parseInt(kpiRow?.[0]?.value || "0", 10);
  const totalUsers = parseInt(kpiRow?.[1]?.value || "0", 10);
  const activeUsers = parseInt(kpiRow?.[2]?.value || "0", 10);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let realtimeResult: any = null;
  try {
    realtimeResult = await client.runRealtimeReport({
      property: `properties/${propertyId}`,
      metrics: [{ name: "eventCount" }],
      dimensionFilter: scrollFilter,
      minuteRanges: [{ name: "last30min", startMinutesAgo: 29, endMinutesAgo: 0 }],
    });
  } catch { /* realtime unavailable */ }

  const realtimeRows = realtimeResult?.[0]?.rows || [];
  const eventsLast30Min = realtimeRows.reduce(
    (sum: number, row: any) => sum + parseInt(row.metricValues?.[0]?.value || "0", 10),
    0
  );

  const countryBreakdown = (countryResult?.[0]?.rows || [])
    .filter((r: any) => {
      const c = r.dimensionValues?.[0]?.value;
      return c && c !== "(not set)";
    })
    .slice(0, 15)
    .map((row: any) => ({
      dimension: row.dimensionValues?.[0]?.value as string,
      eventCount: parseInt(row.metricValues?.[0]?.value || "0", 10),
      totalUsers: parseInt(row.metricValues?.[1]?.value || "0", 10),
    }));

  return {
    totalEvents,
    totalUsers,
    activeUsers,
    eventsPerActiveUser: activeUsers > 0 ? Math.round((totalEvents / activeUsers) * 10) / 10 : 0,
    eventsLast30Min,
    countryBreakdown,
  };
}

// Fetch comprehensive Website Analytics data
export async function fetchWebsiteAnalytics(filters: FilterParams) {
  const client = getAnalyticsClient();
  const propertyId = getPropertyId();
  const { startDate, endDate } = buildDateRange(filters);

  const [kpiResult, trafficResult, langResult, pagesResult, deviceResult, countryResult] =
    await Promise.all([
      // KPIs for selected range
      settle(
        client.runReport({
          property: `properties/${propertyId}`,
          dateRanges: [{ startDate, endDate }],
          metrics: [
            { name: "screenPageViews" },
            { name: "sessions" },
            { name: "bounceRate" },
            { name: "averageSessionDuration" },
          ],
        }),
        [null] as any
      ),
      // Traffic over time (daily) for selected range
      settle(
        client.runReport({
          property: `properties/${propertyId}`,
          dateRanges: [{ startDate, endDate }],
          dimensions: [{ name: "date" }],
          metrics: [{ name: "screenPageViews" }, { name: "sessions" }],
          orderBys: [{ dimension: { dimensionName: "date" } }],
        }),
        [null] as any
      ),
      // Language breakdown for selected range
      settle(
        client.runReport({
          property: `properties/${propertyId}`,
          dateRanges: [{ startDate, endDate }],
          dimensions: [{ name: "language" }],
          metrics: [{ name: "sessions" }],
          orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
          limit: 20,
        }),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        [null] as any
      ),
      // Top pages for selected range
      settle(
        client.runReport({
          property: `properties/${propertyId}`,
          dateRanges: [{ startDate, endDate }],
          dimensions: [{ name: "pagePath" }],
          metrics: [{ name: "screenPageViews" }, { name: "totalUsers" }],
          orderBys: [{ metric: { metricName: "screenPageViews" }, desc: true }],
          limit: 15,
        }),
        [null] as any
      ),
      // Device breakdown for selected range
      settle(
        client.runReport({
          property: `properties/${propertyId}`,
          dateRanges: [{ startDate, endDate }],
          dimensions: [{ name: "deviceCategory" }],
          metrics: [{ name: "sessions" }],
          orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
        }),
        [null] as any
      ),
      // Country breakdown for selected range
      settle(
        client.runReport({
          property: `properties/${propertyId}`,
          dateRanges: [{ startDate, endDate }],
          dimensions: [{ name: "country" }],
          metrics: [{ name: "sessions" }, { name: "totalUsers" }],
          orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
          limit: 10,
        }),
        [null] as any
      ),
    ]);

  // KPIs
  const kpiRow = kpiResult[0]?.rows?.[0]?.metricValues;
  const totalPageviews = parseInt(kpiRow?.[0]?.value || "0", 10);
  const totalSessions  = parseInt(kpiRow?.[1]?.value || "0", 10);
  const avgBounceRate  = Math.round(parseFloat(kpiRow?.[2]?.value || "0") * 1000) / 10;
  const avgDuration    = Math.round(parseFloat(kpiRow?.[3]?.value || "0"));

  // Traffic over time
  const trafficOverTime = (trafficResult[0]?.rows || []).map((row: any) => ({
    date:      formatDate(row.dimensionValues?.[0]?.value || ""),
    pageviews: parseInt(row.metricValues?.[0]?.value || "0", 10),
    sessions:  parseInt(row.metricValues?.[1]?.value || "0", 10),
  }));

  // Language breakdown grouped: EN, DE, Other
  const langRows = (langResult?.[0]?.rows || []).map((row: any) => ({
    lang:     (row.dimensionValues?.[0]?.value || "").toLowerCase(),
    sessions: parseInt(row.metricValues?.[0]?.value || "0", 10),
  }));
  const totalLang  = langRows.reduce((s: number, r: any) => s + r.sessions, 0);
  const enSess     = langRows.filter((r: any) => r.lang.startsWith("en")).reduce((s: number, r: any) => s + r.sessions, 0);
  const deSess     = langRows.filter((r: any) => r.lang.startsWith("de")).reduce((s: number, r: any) => s + r.sessions, 0);
  const otherSess  = totalLang - enSess - deSess;
  const pct = (n: number) => totalLang > 0 ? Math.round((n / totalLang) * 1000) / 10 : 0;
  const languageBreakdown = [
    { language: "EN",    sessions: enSess,    percentage: pct(enSess) },
    { language: "DE",    sessions: deSess,    percentage: pct(deSess) },
    ...(otherSess > 0 ? [{ language: "Other", sessions: otherSess, percentage: pct(otherSess) }] : []),
  ];

  // Top pages (exclude (not set))
  const pageRows = (pagesResult[0]?.rows || []).filter((r: any) => {
    const p = r.dimensionValues?.[0]?.value;
    return p && p !== "(not set)";
  });
  const totalPV = pageRows.reduce((s: number, r: any) => s + parseInt(r.metricValues?.[0]?.value || "0", 10), 0);
  const topPages = pageRows.slice(0, 10).map((row: any) => {
    const pv = parseInt(row.metricValues?.[0]?.value || "0", 10);
    return {
      path:       row.dimensionValues?.[0]?.value as string,
      pageviews:  pv,
      users:      parseInt(row.metricValues?.[1]?.value || "0", 10),
      percentage: totalPV > 0 ? Math.round((pv / totalPV) * 1000) / 10 : 0,
    };
  });

  // Device breakdown
  const devRows = deviceResult[0]?.rows || [];
  const totalDev = devRows.reduce((s: number, r: any) => s + parseInt(r.metricValues?.[0]?.value || "0", 10), 0);
  const deviceBreakdown = devRows.map((row: any) => {
    const s = parseInt(row.metricValues?.[0]?.value || "0", 10);
    return {
      device:     row.dimensionValues?.[0]?.value as string,
      sessions:   s,
      percentage: totalDev > 0 ? Math.round((s / totalDev) * 1000) / 10 : 0,
    };
  });

  // Country breakdown (exclude (not set))
  const cRows = (countryResult[0]?.rows || []).filter((r: any) => {
    const c = r.dimensionValues?.[0]?.value;
    return c && c !== "(not set)";
  });
  const totalCoun = cRows.reduce((s: number, r: any) => s + parseInt(r.metricValues?.[0]?.value || "0", 10), 0);
  const countryBreakdown = cRows.slice(0, 10).map((row: any) => {
    const s = parseInt(row.metricValues?.[0]?.value || "0", 10);
    return {
      country:    row.dimensionValues?.[0]?.value as string,
      sessions:   s,
      users:      parseInt(row.metricValues?.[1]?.value || "0", 10),
      percentage: totalCoun > 0 ? Math.round((s / totalCoun) * 1000) / 10 : 0,
    };
  });

  return {
    kpis: { totalPageviews, totalSessions, avgBounceRate, avgDuration },
    trafficOverTime,
    languageBreakdown,
    topPages,
    deviceBreakdown,
    countryBreakdown,
  };
}
