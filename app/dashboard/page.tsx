"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import KPICard, { Icons } from "@/components/KPIcard";
import { FunnelChart, TrafficPieChart, BehaviorCharts } from "@/components/Charts";
import DataTable from "@/components/DataTable";
import CampaignTable from "@/components/CampaignTable";
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
  _meta?: { totalEvents: number; filteredEvents: number };
}

// ── Date range picker ─────────────────────────────────────────────────────────
type RangeKey = "last30min" | "last60min" | "today" | "7days" | "28days" | "90days" | "12months";
interface RangeOption { label: string; startDate: string; endDate: string }

const RANGE_OPTIONS: Record<RangeKey, RangeOption> = {
  last30min:  { label: "Last 30 minutes", startDate: "today",       endDate: "today" },
  last60min:  { label: "Last 60 minutes", startDate: "today",       endDate: "today" },
  today:      { label: "Today",           startDate: "today",       endDate: "today" },
  "7days":    { label: "Last 7 days",     startDate: "7daysAgo",    endDate: "today" },
  "28days":   { label: "Last 28 days",    startDate: "28daysAgo",   endDate: "today" },
  "90days":   { label: "Last 90 days",    startDate: "90daysAgo",   endDate: "today" },
  "12months": { label: "Last 12 months",  startDate: "365daysAgo",  endDate: "today" },
};

const REALTIME_KEYS:   RangeKey[] = ["last30min", "last60min"];
const HISTORICAL_KEYS: RangeKey[] = ["today", "7days", "28days", "90days", "12months"];

const CARD_BG = "#0d1117";
const BORDER  = "#1f2937";
const MUTED   = "#6b7280";
const DIM     = "#9ca3af";

function DateRangePicker({
  value,
  onChange,
}: {
  value: RangeKey;
  onChange: (k: RangeKey) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function outside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", outside);
    return () => document.removeEventListener("mousedown", outside);
  }, []);

  return (
    <div className="relative shrink-0" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/5"
        style={{ background: CARD_BG, border: `1px solid ${BORDER}` }}
      >
        <svg className="h-4 w-4 shrink-0" style={{ color: "#60a5fa" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        {RANGE_OPTIONS[value].label}
        <svg
          className={`h-4 w-4 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          style={{ color: MUTED }}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div
          className="absolute right-0 mt-2 w-52 rounded-xl shadow-2xl py-2 z-50"
          style={{ background: CARD_BG, border: `1px solid ${BORDER}` }}
        >
          {/* Realtime group */}
          <div className="px-3 pb-1">
            <p className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: MUTED }}>Realtime</p>
          </div>
          {REALTIME_KEYS.map((k) => (
            <button
              key={k}
              onClick={() => { onChange(k); setOpen(false); }}
              className="flex w-full items-center gap-2.5 px-4 py-2 text-sm text-left transition-colors hover:bg-white/5"
              style={{ color: value === k ? "#60a5fa" : DIM }}
            >
              <span className={`h-1.5 w-1.5 rounded-full shrink-0 ${value === k ? "bg-blue-400" : "bg-transparent"}`} />
              {RANGE_OPTIONS[k].label}
            </button>
          ))}

          <div className="my-1 mx-3" style={{ borderTop: `1px solid ${BORDER}` }} />

          {/* Historical group */}
          <div className="px-3 pb-1">
            <p className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: MUTED }}>Historical</p>
          </div>
          {HISTORICAL_KEYS.map((k) => (
            <button
              key={k}
              onClick={() => { onChange(k); setOpen(false); }}
              className="flex w-full items-center gap-2.5 px-4 py-2 text-sm text-left transition-colors hover:bg-white/5"
              style={{ color: value === k ? "#60a5fa" : DIM }}
            >
              <span className={`h-1.5 w-1.5 rounded-full shrink-0 ${value === k ? "bg-blue-400" : "bg-transparent"}`} />
              {RANGE_OPTIONS[k].label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function formatDuration(seconds: number): string {
  if (seconds < 60) return `${seconds}s`;
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}m ${s}s`;
}

export default function DashboardPage() {
  const [rangeKey,  setRangeKey]  = useState<RangeKey>("28days");
  const [data,      setData]      = useState<DashboardData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error,     setError]     = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const { startDate, endDate } = RANGE_OPTIONS[rangeKey];
        const params = new URLSearchParams({ start_date: startDate, end_date: endDate });
        const response = await fetch(`/api/analytics?${params}`);
        if (!response.ok) throw new Error("Failed to fetch analytics data");
        setData(await response.json());
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        console.error("Dashboard error:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [rangeKey]);

  const filters: FilterParams = {
    start_date: RANGE_OPTIONS[rangeKey].startDate,
    end_date:   RANGE_OPTIONS[rangeKey].endDate,
  };

  const totalEvents = data?._meta?.filteredEvents ?? data?.events.reduce((sum, e) => sum + e.count, 0) ?? 0;

  return (
    <div className="min-h-screen" style={{ background: "#030712" }}>

      {/* ── Header ──────────────────────────────────────────────────────── */}
      <header style={{ background: CARD_BG, borderBottom: `1px solid ${BORDER}` }}>
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Left: title */}
            <div>
              <h1 className="text-2xl font-bold text-white">Analytics Dashboard</h1>
              <div className="mt-1 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                <p className="text-sm" style={{ color: MUTED }}>
                  {data?.source === "ga4" ? "Connected to Google Analytics 4" : "Loading..."}
                </p>
              </div>
            </div>

            {/* Right: event count + date range picker */}
            <div className="flex items-center gap-3">
              {totalEvents > 0 && (
                <span className="hidden sm:inline text-sm" style={{ color: MUTED }}>
                  {totalEvents.toLocaleString()} events
                </span>
              )}
              {isLoading && (
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-blue-500 border-t-transparent" />
              )}
              <DateRangePicker value={rangeKey} onChange={setRangeKey} />
            </div>
          </div>
        </div>
      </header>

      {/* ── Main content ─────────────────────────────────────────────────── */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        {/* Error */}
        {error && (
          <div className="mb-8 rounded-lg p-4" style={{ background: "#1c0a0a", border: "1px solid #7f1d1d" }}>
            <div className="flex gap-3">
              <svg className="h-5 w-5 text-red-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="text-sm font-medium text-red-400">Error loading data</h3>
                <p className="mt-1 text-sm text-red-500">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Loading skeleton */}
        {isLoading && !data && (
          <div className="flex flex-col items-center justify-center py-24">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-900 border-t-blue-500" />
            <p className="mt-4 text-sm" style={{ color: MUTED }}>Loading analytics data…</p>
          </div>
        )}

        {data && (
          <>
            {/* KPI Cards */}
            <section className="mb-8">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                <KPICard title="Total Users"    value={data.kpis.totalUsers.toLocaleString()}    icon={<Icons.Users />} color="blue" />
                <KPICard title="Active Users"   value={data.kpis.activeUsers.toLocaleString()}   icon={<Icons.Users />} color="green" />
                <KPICard title="New Users"      value={data.kpis.newUsers.toLocaleString()}      icon={<Icons.Users />} color="purple" />
                <KPICard title="Avg. Interaction Duration" value={formatDuration(data.kpis.avgSessionDuration)} icon={<Icons.Clock />} color="amber" />
                <KPICard title="Number of Events" value={(data._meta?.totalEvents ?? 0).toLocaleString()} icon={<Icons.Eye />} color="blue" />
              </div>
            </section>

            {/* Funnel + Traffic charts */}
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

            {/* Behavior (scroll depth) chart */}
            <section className="mb-8">
              <BehaviorCharts scrollData={data.charts.scrollDepth} />
            </section>

            {/* Global Parameters link */}
            <section className="mb-8">
              <Link
                href="/dashboard/global-params"
                className="flex items-center justify-between rounded-xl px-6 py-5 transition-colors hover:bg-white/5"
                style={{ background: CARD_BG, border: `1px solid ${BORDER}` }}
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-lg p-2.5" style={{ background: "#042f2e", color: "#2dd4bf" }}>
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Global Parameters</p>
                    <p className="text-xs" style={{ color: MUTED }}>device_type · country · traffic_source · campaign · utm_medium · page · browser · page_load_time</p>
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

            {/* Events Overview Table */}
            {/* <section className="mb-8">
              <DataTable data={data.events} filters={filters} />
            </section> */}
          </>
        )}
      </main>

      {/* Footer */}
      <footer style={{ borderTop: `1px solid ${BORDER}`, background: "#030712" }}>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-sm" style={{ color: "#4b5563" }}>
            Analytics Dashboard — {data?.source === "ga4" ? "Google Analytics 4" : "Mock Data Demo"}
          </p>
        </div>
      </footer>
    </div>
  );
}
