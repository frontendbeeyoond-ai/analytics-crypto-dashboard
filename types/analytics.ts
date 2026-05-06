// Analytics Event Types (Original Mock Data Types)
export type DeviceType = "mobile" | "desktop" | "tablet";
export type EventName =
  | "page_view"
  | "presale_click_cta"
  | "online_shop_click"
  | "documents_click"
  | "newsletter_signup"
  | "social_click"
  | "trustpilot_click"
  | "scroll_depth"
  | "session_end";

export type TrafficSource =
  | "google"
  | "twitter"
  | "facebook"
  | "linkedin"
  | "direct"
  | "referral";

export type Country =
  | "United States"
  | "United Kingdom"
  | "Germany"
  | "France"
  | "Spain"
  | "Italy"
  | "Canada"
  | "Australia"
  | "Japan"
  | "Brazil";

export type BrowserType = "Chrome" | "Firefox" | "Safari" | "Edge" | "Opera";

// Original Analytics Event (for mock data compatibility)
export interface AnalyticsEvent {
  id: string;
  event_name: EventName;
  device_type: DeviceType;
  country: Country;
  traffic_source: TrafficSource;
  campaign_id: string | null;
  campaign_name: string | null;
  utm_medium: string | null;
  page_name: "homepage";
  page_url: string;
  timestamp: string;
  browser_type: BrowserType;
  page_load_time: number;
  cta_location?: string;
  button_text?: string;
  destination_url?: string;
  click_location?: string;
  platform?: string;
  signup_status?: string;
  scroll_percentage?: number;
  session_duration?: number;
  session_id: string;
}

// Filter Parameters
export interface FilterParams {
  start_date?: string;
  end_date?: string;
  device_type?: DeviceType | "all";
  traffic_source?: TrafficSource | "all";
  campaign_name?: string | "all";
  country?: Country | "all";
}

// ============== GA4 API Types ==============

// KPI Metrics from GA4
export interface GA4KPIs {
  totalUsers: number;
  activeUsers: number;
  newUsers: number;
  pageViews: number;
  presaleCTR: number;
  shopCTR: number;
  documentsCTR: number;
  newsletterConversion: number;
  socialCTR: number;
  trustpilotCTR: number;
  bounceRate: number;
  avgSessionDuration: number;
}

// Chart Data Types
export interface ChartDataPoint {
  date: string;
  value: number;
}

export interface DimensionValue {
  dimension: string;
  value: number;
}

// Breakdowns
export interface SignupStatusBreakdown {
  status: string;
  count: number;
}

export interface SignupLocationBreakdown {
  location: string;
  count: number;
}

export interface SocialPlatformBreakdown {
  platform: string;
  count: number;
}

export interface CountryBreakdown {
  country: string;
  sessions: number;
}

export interface TrafficSourceBreakdown {
  source: string;
  sessions: number;
}

// Scroll Depth Distribution
export interface ScrollDepthBucket {
  range: string;
  percentage: number;
  count: number;
}

// Full GA4 Analytics Response
export interface GA4AnalyticsResponse {
  kpis: GA4KPIs;
  events: EventCountData[];
  charts: {
    usersOverTime: ChartDataPoint[];
    scrollDepth: ScrollDepthBucket[];
    trafficSource: TrafficSourceBreakdown[];
    country: CountryBreakdown[];
  };
  breakdowns: {
    signupStatus: SignupStatusBreakdown[];
    signupLocation: SignupLocationBreakdown[];
    socialPlatform: SocialPlatformBreakdown[];
  };
}

// ============== Legacy Types (for backward compatibility) ==============

export interface AnalyticsResponse {
  events: AnalyticsEvent[];
  total: number;
  filtered: number;
}

export interface AggregatedMetrics {
  totalUsers: number;
  pageViews: number;
  presaleCTR: number;
  newsletterConversion: number;
  bounceRate: number;
  avgSessionDuration: number;
  scrollDepthDistribution: ScrollDepthBucket[];
  trafficSourceDistribution: TrafficSourceData[];
  campaignPerformance: CampaignData[];
  eventCounts: EventCountData[];
  funnelData: FunnelStep[];
}

export interface TrafficSourceData {
  source: TrafficSource | string;
  count: number;
  percentage: number;
}

export interface CampaignData {
  name: string;
  impressions: number;
  clicks: number;
  ctr: number;
  conversions: number;
  conversionRate: number;
}

export interface EventCountData {
  eventName: string;
  count: number;
  percentage: number;
  conversionRate: number;
}

export interface FunnelStep {
  step: string;
  count: number;
  percentage: number;
}

// ============== Newsletter Detail Types ==============

export interface NewsletterBreakdownRow {
  dimension: string;
  eventCount: number;
  totalUsers: number;
}

export interface NewsletterAnalyticsData {
  totalEvents: number;
  totalUsers: number;
  activeUsers: number;
  eventsPerActiveUser: number;
  eventsPerSession: number;
  sessions: number;
  eventsLast30Min: number;
  eventsOverTime: ChartDataPoint[];
  signupStatus: NewsletterBreakdownRow[];
  signupLocation: NewsletterBreakdownRow[];
  emailBreakdown: NewsletterBreakdownRow[];
  countryBreakdown: NewsletterBreakdownRow[];
}

// ============== Presale Click Detail Types ==============

export interface PresaleAnalyticsData {
  totalEvents: number;
  totalUsers: number;
  activeUsers: number;
  eventsPerActiveUser: number;
  eventsPerSession: number;
  sessions: number;
  eventsLast30Min: number;
  eventsOverTime: ChartDataPoint[];
  countryBreakdown: NewsletterBreakdownRow[];
  ctaLocationBreakdown: NewsletterBreakdownRow[];
  destinationUrlBreakdown: NewsletterBreakdownRow[];
  buttonTextBreakdown: NewsletterBreakdownRow[];
  presaleDestinationUrlBreakdown: NewsletterBreakdownRow[];
}

// ============== Trustpilot Click Detail Types ==============

export interface TrustpilotAnalyticsData {
  totalEvents: number;
  totalUsers: number;
  eventsPerSession: number;
  sessions: number;
  eventsLast30Min: number;
  eventsOverTime: ChartDataPoint[];
}

// ============== Online Shop Click Detail Types ==============

export interface OnlineShopAnalyticsData {
  totalEvents: number;
  totalUsers: number;
  activeUsers: number;
  eventsPerActiveUser: number;
  eventsPerSession: number;
  sessions: number;
  eventsLast30Min: number;
  eventsOverTime: ChartDataPoint[];
  countryBreakdown: NewsletterBreakdownRow[];
  destinationUrlBreakdown: NewsletterBreakdownRow[];
  buttonTextBreakdown: NewsletterBreakdownRow[];
}

// ============== Documents Click Detail Types ==============

export interface DocumentsAnalyticsData {
  totalEvents: number;
  totalUsers: number;
  activeUsers: number;
  eventsPerActiveUser: number;
  eventsPerSession: number;
  sessions: number;
  eventsLast30Min: number;
  eventsOverTime: ChartDataPoint[];
  clickLocationBreakdown: NewsletterBreakdownRow[];
  destinationPageBreakdown: NewsletterBreakdownRow[];
  ctaNameBreakdown: NewsletterBreakdownRow[];
}

// ============== Global Parameters Types ==============

export interface GlobalParamRow {
  dimension: string;
  count: number;
  users: number;
  percentage: number;
}

export interface GlobalParamsData {
  deviceType: GlobalParamRow[];
  country: GlobalParamRow[];
  trafficSource: GlobalParamRow[];
  campaignId: GlobalParamRow[];
  campaignName: GlobalParamRow[];
  utmMedium: GlobalParamRow[];
  pagePath: GlobalParamRow[];
  pageLocation: GlobalParamRow[];
  browserType: GlobalParamRow[];
  pageLoadTime: GlobalParamRow[];
  lastUpdated: string;
  dateRange: { startDate: string; endDate: string };
}

// ============== Page View Detail Types ==============

export interface PageViewAnalyticsData {
  totalEvents: number;
  totalUsers: number;
  activeUsers: number;
  eventsPerActiveUser: number;
  eventsPerSession: number;
  sessions: number;
  eventsLast30Min: number;
  // User Engagement
  engagedSessions: number;
  engagementRate: number;
  avgEngagementTimeSec: number;
  engagedSessionsPerUser: number;
  // Charts
  eventsOverTime: ChartDataPoint[];
  // Country breakdown
  countryBreakdown: NewsletterBreakdownRow[];
}

// ============== Website Analytics Types ==============

export interface WebsiteAnalyticsData {
  kpis: {
    totalPageviews: number;
    totalSessions: number;
    avgBounceRate: number;
    avgDuration: number;
  };
  trafficOverTime: { date: string; pageviews: number; sessions: number }[];
  languageBreakdown: { language: string; sessions: number; percentage: number }[];
  topPages: { path: string; pageviews: number; users: number; percentage: number }[];
  deviceBreakdown: { device: string; sessions: number; percentage: number }[];
  countryBreakdown: { country: string; sessions: number; percentage: number }[];
}
