import {
  AnalyticsEvent,
  AggregatedMetrics,
  ScrollDepthBucket,
  TrafficSourceData,
  CampaignData,
  EventCountData,
  FunnelStep,
  EventName,
  TrafficSource,
} from "@/types/analytics";

// Calculate total unique users (sessions)
export function calculateTotalUsers(events: AnalyticsEvent[]): number {
  const uniqueSessions = new Set(events.map((e) => e.session_id));
  return uniqueSessions.size;
}

// Calculate total page views
export function calculatePageViews(events: AnalyticsEvent[]): number {
  return events.filter((e) => e.event_name === "page_view").length;
}

// Calculate Presale Click-Through Rate
export function calculatePresaleCTR(events: AnalyticsEvent[]): number {
  const pageViews = calculatePageViews(events);
  if (pageViews === 0) return 0;

  const presaleClicks = events.filter((e) => e.event_name === "presale_click_cta").length;
  return (presaleClicks / pageViews) * 100;
}

// Calculate Newsletter Conversion Rate
export function calculateNewsletterConversion(events: AnalyticsEvent[]): number {
  const pageViews = calculatePageViews(events);
  if (pageViews === 0) return 0;

  const signups = events.filter(
    (e) => e.event_name === "newsletter_signup" && e.signup_status === "success"
  ).length;
  return (signups / pageViews) * 100;
}

// Calculate Bounce Rate (sessions with only page_view)
export function calculateBounceRate(events: AnalyticsEvent[]): number {
  const sessionEvents = groupEventsBySession(events);

  let bouncedSessions = 0;

  for (const sessionId in sessionEvents) {
    const session = sessionEvents[sessionId];
    const eventNames = new Set(session.map((e) => e.event_name));

    // Bounce = only page_view, no other interactions
    if (eventNames.size === 1 && eventNames.has("page_view")) {
      bouncedSessions++;
    }
  }

  const totalSessions = Object.keys(sessionEvents).length;
  if (totalSessions === 0) return 0;

  return (bouncedSessions / totalSessions) * 100;
}

// Calculate Average Session Duration
export function calculateAvgSessionDuration(events: AnalyticsEvent[]): number {
  const sessionEndEvents = events.filter((e) => e.event_name === "session_end" && e.session_duration !== undefined);

  if (sessionEndEvents.length === 0) return 0;

  const totalDuration = sessionEndEvents.reduce((sum, e) => sum + (e.session_duration || 0), 0);
  return Math.round(totalDuration / sessionEndEvents.length);
}

// Group events by session
function groupEventsBySession(events: AnalyticsEvent[]): Record<string, AnalyticsEvent[]> {
  const grouped: Record<string, AnalyticsEvent[]> = {};

  for (const event of events) {
    if (!grouped[event.session_id]) {
      grouped[event.session_id] = [];
    }
    grouped[event.session_id].push(event);
  }

  return grouped;
}

// Calculate Scroll Depth Distribution
export function calculateScrollDepthDistribution(events: AnalyticsEvent[]): ScrollDepthBucket[] {
  const scrollEvents = events.filter(
    (e) => e.event_name === "scroll_depth" && e.scroll_percentage !== undefined
  );

  if (scrollEvents.length === 0) {
    return [
      { range: "0-25%", percentage: 0, count: 0 },
      { range: "25-50%", percentage: 0, count: 0 },
      { range: "50-75%", percentage: 0, count: 0 },
      { range: "75-100%", percentage: 0, count: 0 },
    ];
  }

  const buckets: Record<string, number> = {
    "0-25%": 0,
    "25-50%": 0,
    "50-75%": 0,
    "75-100%": 0,
  };

  for (const event of scrollEvents) {
    const scroll = event.scroll_percentage!;
    if (scroll <= 25) buckets["0-25%"]++;
    else if (scroll <= 50) buckets["25-50%"]++;
    else if (scroll <= 75) buckets["50-75%"]++;
    else buckets["75-100%"]++;
  }

  const total = scrollEvents.length;
  return Object.entries(buckets).map(([range, count]) => ({
    range,
    count,
    percentage: Math.round((count / total) * 100 * 10) / 10,
  }));
}

// Calculate Traffic Source Distribution
export function calculateTrafficSourceDistribution(
  events: AnalyticsEvent[]
): TrafficSourceData[] {
  const sourceCounts: Record<string, number> = {};
  const pageViewEvents = events.filter((e) => e.event_name === "page_view");

  for (const event of pageViewEvents) {
    const source = event.traffic_source;
    sourceCounts[source] = (sourceCounts[source] || 0) + 1;
  }

  const total = pageViewEvents.length;
  if (total === 0) return [];

  const allSources: TrafficSource[] = ["google", "twitter", "facebook", "linkedin", "direct", "referral"];

  return allSources
    .map((source) => ({
      source,
      count: sourceCounts[source] || 0,
      percentage: Math.round(((sourceCounts[source] || 0) / total) * 100 * 10) / 10,
    }))
    .filter((item) => item.count > 0)
    .sort((a, b) => b.count - a.count);
}

// Calculate Campaign Performance
export function calculateCampaignPerformance(events: AnalyticsEvent[]): CampaignData[] {
  const campaigns: Record<string, {
    impressions: number;
    clicks: number;
    conversions: number;
  }> = {};

  const clickEvents = events.filter((e) =>
    ["presale_click_cta", "online_shop_click", "documents_click", "social_click", "trustpilot_click"].includes(e.event_name)
  );

  const conversionEvents = events.filter((e) => e.event_name === "newsletter_signup" && e.signup_status === "success");

  // Count impressions (page views) per campaign
  for (const event of events.filter((e) => e.event_name === "page_view")) {
    if (event.campaign_name) {
      if (!campaigns[event.campaign_name]) {
        campaigns[event.campaign_name] = { impressions: 0, clicks: 0, conversions: 0 };
      }
      campaigns[event.campaign_name].impressions++;
    }
  }

  // Count clicks per campaign
  for (const event of clickEvents) {
    if (event.campaign_name) {
      if (!campaigns[event.campaign_name]) {
        campaigns[event.campaign_name] = { impressions: 0, clicks: 0, conversions: 0 };
      }
      campaigns[event.campaign_name].clicks++;
    }
  }

  // Count conversions per campaign
  for (const event of conversionEvents) {
    if (event.campaign_name) {
      if (!campaigns[event.campaign_name]) {
        campaigns[event.campaign_name] = { impressions: 0, clicks: 0, conversions: 0 };
      }
      campaigns[event.campaign_name].conversions++;
    }
  }

  return Object.entries(campaigns)
    .map(([name, data]) => ({
      name,
      impressions: data.impressions,
      clicks: data.clicks,
      ctr: data.impressions > 0 ? Math.round((data.clicks / data.impressions) * 100 * 10) / 10 : 0,
      conversions: data.conversions,
      conversionRate: data.clicks > 0 ? Math.round((data.conversions / data.clicks) * 100 * 10) / 10 : 0,
    }))
    .sort((a, b) => b.impressions - a.impressions);
}

// Calculate Event Counts
export function calculateEventCounts(events: AnalyticsEvent[]): EventCountData[] {
  const eventTypes: EventName[] = [
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

  const counts: Record<string, number> = {};
  for (const eventType of eventTypes) {
    counts[eventType] = events.filter((e) => e.event_name === eventType).length;
  }

  const total = events.length;
  const pageViews = calculatePageViews(events);

  return eventTypes
    .map((eventName) => ({
      eventName,
      count: counts[eventName],
      percentage: total > 0 ? Math.round((counts[eventName] / total) * 100 * 10) / 10 : 0,
      conversionRate: pageViews > 0 ? Math.round((counts[eventName] / pageViews) * 100 * 10) / 10 : 0,
    }))
    .filter((item) => item.count > 0)
    .sort((a, b) => b.count - a.count);
}

// Calculate Funnel Data
export function calculateFunnelData(events: AnalyticsEvent[]): FunnelStep[] {
  const pageViews = calculatePageViews(events);
  const sessionsWithScroll50 = new Set(
    events
      .filter((e) => e.event_name === "scroll_depth" && (e.scroll_percentage || 0) >= 50)
      .map((e) => e.session_id)
  ).size;
  const presaleClicks = events.filter((e) => e.event_name === "presale_click_cta").length;
  const newsletterSignups = events.filter(
    (e) => e.event_name === "newsletter_signup" && e.signup_status === "success"
  ).length;

  const base = pageViews || 1;

  return [
    {
      step: "Page View",
      count: pageViews,
      percentage: 100,
    },
    {
      step: "Scroll 50%+",
      count: sessionsWithScroll50,
      percentage: Math.round((sessionsWithScroll50 / base) * 100 * 10) / 10,
    },
    {
      step: "Presale Click",
      count: presaleClicks,
      percentage: Math.round((presaleClicks / base) * 100 * 10) / 10,
    },
    {
      step: "Newsletter Signup",
      count: newsletterSignups,
      percentage: Math.round((newsletterSignups / base) * 100 * 10) / 10,
    },
  ];
}

// Calculate Session Duration Over Time
export function calculateSessionDurationOverTime(
  events: AnalyticsEvent[]
): { date: string; avgDuration: number }[] {
  const sessionEndEvents = events.filter(
    (e) => e.event_name === "session_end" && e.session_duration !== undefined
  );

  const dailyDurations: Record<string, number[]> = {};

  for (const event of sessionEndEvents) {
    const date = new Date(event.timestamp).toISOString().split("T")[0];
    if (!dailyDurations[date]) {
      dailyDurations[date] = [];
    }
    dailyDurations[date].push(event.session_duration || 0);
  }

  return Object.entries(dailyDurations)
    .map(([date, durations]) => ({
      date,
      avgDuration: Math.round(durations.reduce((a, b) => a + b, 0) / durations.length),
    }))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(-14); // Last 14 days
}

// Calculate all metrics at once
export function calculateAllMetrics(events: AnalyticsEvent[]): AggregatedMetrics {
  return {
    totalUsers: calculateTotalUsers(events),
    pageViews: calculatePageViews(events),
    presaleCTR: Math.round(calculatePresaleCTR(events) * 10) / 10,
    newsletterConversion: Math.round(calculateNewsletterConversion(events) * 10) / 10,
    bounceRate: Math.round(calculateBounceRate(events) * 10) / 10,
    avgSessionDuration: calculateAvgSessionDuration(events),
    scrollDepthDistribution: calculateScrollDepthDistribution(events),
    trafficSourceDistribution: calculateTrafficSourceDistribution(events),
    campaignPerformance: calculateCampaignPerformance(events),
    eventCounts: calculateEventCounts(events),
    funnelData: calculateFunnelData(events),
  };
}

// Format duration for display
export function formatDuration(seconds: number): string {
  if (seconds < 60) {
    return `${seconds}s`;
  }
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}m ${remainingSeconds}s`;
}

// Format percentage for display
export function formatPercentage(value: number): string {
  return `${value.toFixed(1)}%`;
}
