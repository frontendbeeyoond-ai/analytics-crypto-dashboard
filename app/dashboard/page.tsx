"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import KPICard, { Icons } from "@/components/KPIcard";
import { FunnelChart, TrafficPieChart, BehaviorCharts } from "@/components/Charts";
import DataTable from "@/components/DataTable";
import CampaignTable from "@/components/CampaignTable";
import Filters from "@/components/Filters";
import { FilterParams, GA4KPIs, EventCountData, FunnelStep } from "@/types/analytics";

interface DashboardData {
  source: "ga4" | "mock";
  kpis: GA4KPIs;
  events: EventCountData[];
  charts: {
    usersOverTime: { date: string; value: number }[];
    scrollDepth: { range: string; percentage: number; count: number }[];
    trafficSource: { source: string; sessions: number; percentage: number }[];
    country: { country: string; sessions: number }[];
  };
  breakdowns: {
    signupStatus: { status: string; count: number }[];
    signupLocation: { location: string; count: number }[];
    socialPlatform: { platform: string; count: number }[];
  };
  funnelData: FunnelStep[];
  campaignPerformance: {
    name: string;
    impressions: number;
    clicks: number;
    ctr: number;
    conversions: number;
    conversionRate: number;
  }[];
  _meta?: {
    totalEvents: number;
    filteredEvents: number;
  };
}

function formatDuration(seconds: number): string {
  if (seconds < 60) return `${seconds}s`;
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}m ${s}s`;
}

export default function DashboardPage() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [filters, setFilters] = useState<FilterParams>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // Build query string from filters
        const params = new URLSearchParams();
        if (filters.start_date) params.append("start_date", filters.start_date);
        if (filters.end_date) params.append("end_date", filters.end_date);
        if (filters.device_type && filters.device_type !== "all")
          params.append("device_type", filters.device_type);
        if (filters.traffic_source && filters.traffic_source !== "all")
          params.append("traffic_source", filters.traffic_source);
        if (filters.campaign_name && filters.campaign_name !== "all")
          params.append("campaign_name", filters.campaign_name);
        if (filters.country && filters.country !== "all")
          params.append("country", filters.country);

        const response = await fetch(`/api/analytics?${params.toString()}`);

        if (!response.ok) {
          throw new Error("Failed to fetch analytics data");
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        console.error("Dashboard error:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [filters]);

  // Handle filter changes
  const handleFilterChange = (newFilters: FilterParams) => {
    setFilters(newFilters);
  };

  // Get total events count
  const totalEvents = data?._meta?.filteredEvents ?? data?.events.reduce((sum, e) => sum + e.count, 0) ?? 0;

  return (
    <div className="min-h-screen" style={{ background: '#030712' }}>
      {/* Header */}
      <header style={{ background: '#0d1117', borderBottom: '1px solid #1f2937' }}>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">Analytics Dashboard</h1>
              <p className="mt-1 text-sm" style={{ color: '#6b7280' }}>
                {data?.source === "ga4" ? "Connected to Google Analytics 4" : "Demo mode with mock data"}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 rounded-lg px-3 py-1.5" style={{ background: '#052e16' }}>
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
                </span>
                <span className="text-sm font-medium text-green-400">
                  {data?.source === "ga4" ? "GA4" : "Demo"}
                </span>
              </div>
              <span className="text-sm" style={{ color: '#6b7280' }}>
                {totalEvents.toLocaleString()} events loaded
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Filters */}
        <section className="mb-8">
          <Filters onFilterChange={handleFilterChange} isLoading={isLoading} />
        </section>

        {/* Error State */}
        {error && (
          <div className="mb-8 rounded-lg p-4" style={{ background: '#1c0a0a', border: '1px solid #7f1d1d' }}>
            <div className="flex gap-3">
              <svg className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="text-sm font-medium text-red-400">Error loading data</h3>
                <p className="mt-1 text-sm text-red-500">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Loading State */}
        {isLoading && !data ? (
          <div className="flex flex-col items-center justify-center py-24">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-900 border-t-blue-500"></div>
            <p className="mt-4 text-sm" style={{ color: '#6b7280' }}>Loading analytics data...</p>
          </div>
        ) : data ? (
          <>
            {/* KPI Cards */}
            <section className="mb-8">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                <KPICard
                  title="Total Users"
                  value={data.kpis.totalUsers.toLocaleString()}
                  icon={<Icons.Users />}
                  color="blue"
                />
                <KPICard
                  title="Active Users"
                  value={data.kpis.activeUsers.toLocaleString()}
                  icon={<Icons.Users />}
                  color="green"
                />
                <KPICard
                  title="New Users"
                  value={data.kpis.newUsers.toLocaleString()}
                  icon={<Icons.Users />}
                  color="purple"
                />
                <KPICard
                  title="Avg. Interaction Duration"
                  value={formatDuration(data.kpis.avgSessionDuration)}
                  icon={<Icons.Clock />}
                  color="amber"
                />
                <KPICard
                  title="Number of Events"
                  value={(data._meta?.totalEvents ?? 0).toLocaleString()}
                  icon={<Icons.Eye />}
                  color="blue"
                />
              </div>
            </section>

            {/* Funnel and Traffic Charts */}
            <section className="mb-8 grid gap-6 lg:grid-cols-2">
              <FunnelChart data={data.funnelData} />
              <TrafficPieChart
                data={data.charts.trafficSource.map((t) => ({
                  source: t.source as any,
                  count: t.sessions,
                  percentage: t.percentage,
                }))}
              />
            </section>

            {/* Behavior Charts */}
            <section className="mb-8">
              <BehaviorCharts scrollData={data.charts.scrollDepth} />
            </section>
            {/* Global Parameters link */}
            <section className="mb-8">
              <Link href="/dashboard/global-params" className="flex items-center justify-between rounded-xl px-6 py-5 transition-colors hover:bg-white/5" style={{ background: "#0d1117", border: "1px solid #1f2937" }}>
                <div className="flex items-center gap-4">
                  <div className="rounded-lg p-2.5" style={{ background: "#042f2e", color: "#2dd4bf" }}>
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Global Parameters</p>
                    <p className="text-xs" style={{ color: "#6b7280" }}>device_type · country · traffic_source · campaign · utm_medium · page · browser · page_load_time</p>
                  </div>
                </div>
                <svg className="h-4 w-4 shrink-0" style={{ color: "#4b5563" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </section>
            {/* Campaign Table */}
            {data.campaignPerformance && data.campaignPerformance.length > 0 && (
              <section className="mb-8">
                <CampaignTable data={data.campaignPerformance} />
              </section>
            )}

            {/* Events Table */}
            <section className="mb-8">
              <DataTable data={data.events} filters={filters} />
            </section>

           
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-24">
            <svg className="h-12 w-12" style={{ color: '#374151' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <p className="mt-4 text-sm" style={{ color: '#6b7280' }}>No data available</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid #1f2937', background: '#030712' }}>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-sm" style={{ color: '#4b5563' }}>
            Analytics Dashboard - {data?.source === "ga4" ? "Google Analytics 4" : "Mock Data Demo"}
          </p>
        </div>
      </footer>
    </div>
  );
}
