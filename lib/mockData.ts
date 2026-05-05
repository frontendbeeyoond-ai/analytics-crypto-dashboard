import {
  AnalyticsEvent,
  EventName,
  DeviceType,
  TrafficSource,
  Country,
  BrowserType,
  FilterParams,
} from "@/types/analytics";

// Configuration constants
const DEVICES: DeviceType[] = ["mobile", "desktop", "tablet"];
const DEVICE_WEIGHTS = [0.55, 0.35, 0.1]; // Mobile dominant

const TRAFFIC_SOURCES: TrafficSource[] = [
  "google",
  "twitter",
  "facebook",
  "linkedin",
  "direct",
  "referral",
];
const SOURCE_WEIGHTS = [0.35, 0.15, 0.12, 0.08, 0.2, 0.1];

const COUNTRIES: Country[] = [
  "United States",
  "United Kingdom",
  "Germany",
  "France",
  "Spain",
  "Italy",
  "Canada",
  "Australia",
  "Japan",
  "Brazil",
];
const COUNTRY_WEIGHTS = [
  0.32, 0.15, 0.12, 0.08, 0.06, 0.05, 0.08, 0.05, 0.04, 0.05,
];

const BROWSERS: BrowserType[] = ["Chrome", "Firefox", "Safari", "Edge", "Opera"];
const BROWSER_WEIGHTS = [0.65, 0.15, 0.1, 0.08, 0.02];

const CAMPAIGNS = [
  { id: "camp_001", name: "Spring Sale 2024" },
  { id: "camp_002", name: "Product Launch" },
  { id: "camp_003", name: "Holiday Promo" },
  { id: "camp_004", name: "Brand Awareness" },
  { id: "camp_005", name: "Retargeting Q1" },
];

const CTA_LOCATIONS = ["header", "hero", "sidebar", "footer", "mid_page"];
const BUTTON_TEXTS = [
  "Get Started",
  "Learn More",
  "Shop Now",
  "Download",
  "Sign Up",
  "Contact Us",
];
const CLICK_LOCATIONS = ["top", "middle", "bottom", "left", "right"];
const PLATFORMS = ["ios", "android", "web"];
const SIGNUP_STATUSES = ["success", "pending", "failed"];

// Utility functions
function weightedRandom<T>(items: T[], weights: number[]): T {
  const total = weights.reduce((a, b) => a + b, 0);
  let random = Math.random() * total;

  for (let i = 0; i < items.length; i++) {
    random -= weights[i];
    if (random <= 0) return items[i];
  }

  return items[items.length - 1];
}

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomFloat(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

function generateId(): string {
  return `evt_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

function generateSessionId(): string {
  return `sess_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

function generateTimestamp(daysBack: number = 30): string {
  const now = new Date();
  const past = new Date(now.getTime() - randomInt(0, daysBack * 24 * 60 * 60 * 1000));
  const hours = randomInt(0, 23);
  const minutes = randomInt(0, 59);
  const seconds = randomInt(0, 59);

  past.setHours(hours, minutes, seconds);
  return past.toISOString();
}

// Generate a single event
function generateEvent(sessionId: string): AnalyticsEvent {
  const device = weightedRandom(DEVICES, DEVICE_WEIGHTS);
  const source = weightedRandom(TRAFFIC_SOURCES, SOURCE_WEIGHTS);
  const country = weightedRandom(COUNTRIES, COUNTRY_WEIGHTS);
  const browser = weightedRandom(BROWSERS, BROWSER_WEIGHTS);

  // Determine if this is a campaign-driven visit
  const hasCampaign = Math.random() > 0.6;
  const campaign = hasCampaign
    ? CAMPAIGNS[randomInt(0, CAMPAIGNS.length - 1)]
    : null;

  // UTM medium based on source
  const utmMediums: Record<TrafficSource, string | null> = {
    google: "cpc",
    twitter: "social",
    facebook: "social",
    linkedin: "social",
    direct: null,
    referral: "referral",
  };

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

  const eventName = eventTypes[randomInt(0, eventTypes.length - 1)];

  const baseEvent: AnalyticsEvent = {
    id: generateId(),
    event_name: eventName,
    device_type: device,
    country,
    traffic_source: source,
    campaign_id: campaign?.id ?? null,
    campaign_name: campaign?.name ?? null,
    utm_medium: utmMediums[source],
    page_name: "homepage",
    page_url: "https://example.com/",
    timestamp: generateTimestamp(),
    browser_type: browser,
    page_load_time: randomInt(800, 5000),
    session_id: sessionId,
  };

  // Add event-specific properties
  switch (eventName) {
    case "presale_click_cta":
    case "online_shop_click":
    case "documents_click":
    case "social_click":
    case "trustpilot_click":
      return {
        ...baseEvent,
        cta_location: CTA_LOCATIONS[randomInt(0, CTA_LOCATIONS.length - 1)],
        button_text: BUTTON_TEXTS[randomInt(0, BUTTON_TEXTS.length - 1)],
        destination_url: `https://example.com/${eventName.replace("_click", "")}`,
        click_location: CLICK_LOCATIONS[randomInt(0, CLICK_LOCATIONS.length - 1)],
      };

    case "newsletter_signup":
      return {
        ...baseEvent,
        signup_status: SIGNUP_STATUSES[randomInt(0, 2)],
        platform: PLATFORMS[randomInt(0, 2)],
      };

    case "scroll_depth":
      return {
        ...baseEvent,
        scroll_percentage: randomInt(10, 100),
      };

    case "session_end":
      return {
        ...baseEvent,
        session_duration: randomInt(15, 600), // 15s to 10min
        scroll_percentage: randomInt(20, 100),
      };

    default:
      return baseEvent;
  }
}

// Generate complete session with multiple events
function generateSession(): AnalyticsEvent[] {
  const sessionId = generateSessionId();
  const events: AnalyticsEvent[] = [];
  const numEvents = randomInt(3, 12);

  // Always start with page_view
  const pageViewEvent: AnalyticsEvent = {
    id: generateId(),
    event_name: "page_view",
    device_type: weightedRandom(DEVICES, DEVICE_WEIGHTS),
    country: weightedRandom(COUNTRIES, COUNTRY_WEIGHTS),
    traffic_source: weightedRandom(TRAFFIC_SOURCES, SOURCE_WEIGHTS),
    campaign_id: Math.random() > 0.6 ? CAMPAIGNS[randomInt(0, CAMPAIGNS.length - 1)].id : null,
    campaign_name: Math.random() > 0.6 ? CAMPAIGNS[randomInt(0, CAMPAIGNS.length - 1)].name : null,
    utm_medium: null,
    page_name: "homepage",
    page_url: "https://example.com/",
    timestamp: generateTimestamp(),
    browser_type: weightedRandom(BROWSERS, BROWSER_WEIGHTS),
    page_load_time: randomInt(800, 5000),
    session_id: sessionId,
  };
  events.push(pageViewEvent);

  // Generate subsequent events
  for (let i = 1; i < numEvents; i++) {
    const event = generateEvent(sessionId);
    // Ensure timestamp is after previous events
    const prevTime = new Date(events[events.length - 1].timestamp);
    const newTime = new Date(prevTime.getTime() + randomInt(5000, 120000));
    events.push({
      ...event,
      timestamp: newTime.toISOString(),
    });
  }

  // Always end with session_end
  const lastTime = new Date(events[events.length - 1].timestamp);
  const sessionEndTime = new Date(lastTime.getTime() + randomInt(10000, 300000));

  events.push({
    id: generateId(),
    event_name: "session_end",
    device_type: events[0].device_type,
    country: events[0].country,
    traffic_source: events[0].traffic_source,
    campaign_id: events[0].campaign_id,
    campaign_name: events[0].campaign_name,
    utm_medium: events[0].utm_medium,
    page_name: "homepage",
    page_url: "https://example.com/",
    timestamp: sessionEndTime.toISOString(),
    browser_type: events[0].browser_type,
    page_load_time: randomInt(800, 5000),
    session_id: sessionId,
    session_duration: Math.floor((sessionEndTime.getTime() - new Date(events[0].timestamp).getTime()) / 1000),
    scroll_percentage: randomInt(20, 100),
  });

  return events;
}

// Generate all mock events
export function generateMockData(eventCount: number = 1500): AnalyticsEvent[] {
  const allEvents: AnalyticsEvent[] = [];
  const sessionsNeeded = Math.ceil(eventCount / 5);

  for (let i = 0; i < sessionsNeeded; i++) {
    const sessionEvents = generateSession();
    allEvents.push(...sessionEvents);
  }

  // Sort by timestamp
  allEvents.sort(
    (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
  );

  // Trim to requested count if needed
  return allEvents.slice(0, eventCount + 500); // Generate extra for realism
}

// Filter events based on params
export function filterEvents(
  events: AnalyticsEvent[],
  filters: FilterParams
): AnalyticsEvent[] {
  return events.filter((event) => {
    // Date range filter
    if (filters.start_date) {
      const startDate = new Date(filters.start_date);
      const eventDate = new Date(event.timestamp);
      if (eventDate < startDate) return false;
    }

    if (filters.end_date) {
      const endDate = new Date(filters.end_date);
      endDate.setHours(23, 59, 59, 999);
      const eventDate = new Date(event.timestamp);
      if (eventDate > endDate) return false;
    }

    // Device type filter
    if (filters.device_type && filters.device_type !== "all") {
      if (event.device_type !== filters.device_type) return false;
    }

    // Traffic source filter
    if (filters.traffic_source && filters.traffic_source !== "all") {
      if (event.traffic_source !== filters.traffic_source) return false;
    }

    // Campaign filter
    if (filters.campaign_name && filters.campaign_name !== "all") {
      if (event.campaign_name !== filters.campaign_name) return false;
    }

    // Country filter
    if (filters.country && filters.country !== "all") {
      if (event.country !== filters.country) return false;
    }

    return true;
  });
}

// Singleton for mock data
let mockDataCache: AnalyticsEvent[] | null = null;

export function getMockData(): AnalyticsEvent[] {
  if (!mockDataCache) {
    mockDataCache = generateMockData(1500);
  }
  return mockDataCache;
}

// Reset cache (useful for testing)
export function resetMockData(): void {
  mockDataCache = null;
}
