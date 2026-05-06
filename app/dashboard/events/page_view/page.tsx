"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";
import RealtimeSection from "@/components/RealtimeSection";
import { PageViewAnalyticsData } from "@/types/analytics";

const BG     = "#030712";
const CARD   = "#0d1117";
const BORDER = "#1f2937";
const MUTED  = "#6b7280";
const DIM    = "#9ca3af";
const ACCENT = "#3b82f6";
const TT     = { backgroundColor: CARD, border: `1px solid ${BORDER}`, borderRadius: "8px", fontSize: "12px", color: "#f9fafb" };

type RangeKey = "today" | "7days" | "28days" | "90days" | "12months";
const RANGES: Record<RangeKey, { label: string; startDate: string; endDate: string }> = {
  today:      { label: "Today",          startDate: "today",      endDate: "today" },
  "7days":    { label: "Last 7 days",    startDate: "7daysAgo",   endDate: "today" },
  "28days":   { label: "Last 28 days",   startDate: "28daysAgo",  endDate: "today" },
  "90days":   { label: "Last 90 days",   startDate: "90daysAgo",  endDate: "today" },
  "12months": { label: "Last 12 months", startDate: "365daysAgo", endDate: "today" },
};
const RANGE_KEYS: RangeKey[] = ["today", "7days", "28days", "90days", "12months"];

function formatSeconds(sec: number): string {
  if (sec < 60) return `${sec}s`;
  return `${Math.floor(sec / 60)}m ${sec % 60}s`;
}

function DateRangePicker({ value, onChange }: { value: RangeKey; onChange: (k: RangeKey) => void }) {
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
        style={{ background: CARD, border: `1px solid ${BORDER}` }}
      >
        <svg className="h-4 w-4 shrink-0" style={{ color: ACCENT }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        {RANGES[value].label}
        <svg className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} style={{ color: MUTED }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-48 rounded-xl shadow-2xl py-2 z-50" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
          {RANGE_KEYS.map((k) => (
            <button key={k} onClick={() => { onChange(k); setOpen(false); }}
              className="flex w-full items-center gap-2.5 px-4 py-2 text-sm text-left transition-colors hover:bg-white/5"
              style={{ color: value === k ? ACCENT : DIM }}
            >
              <span className={`h-1.5 w-1.5 rounded-full shrink-0 ${value === k ? "bg-blue-400" : "bg-transparent"}`} />
              {RANGES[k].label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function KPICard({ label, value, sub, accent = ACCENT }: { label: string; value: string | number; sub?: string; accent?: string }) {
  return (
    <div className="rounded-xl p-5" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
      <p className="text-xs font-medium uppercase tracking-wider" style={{ color: MUTED }}>{label}</p>
      <p className="mt-2 text-3xl font-bold text-white">{value}</p>
      {sub && <p className="mt-1 text-xs" style={{ color: MUTED }}>{sub}</p>}
    </div>
  );
}

function EngagementCard({ label, value, sub, icon, accent }: { label: string; value: string; sub?: string; icon: React.ReactNode; accent: string }) {
  return (
    <div className="rounded-xl p-5" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
      <div className="flex items-start justify-between gap-2">
        <p className="text-xs font-medium uppercase tracking-wider leading-tight" style={{ color: MUTED }}>{label}</p>
        <div className="rounded-lg p-2 shrink-0" style={{ background: `${accent}22`, color: accent }}>{icon}</div>
      </div>
      <p className="mt-3 text-2xl font-bold text-white">{value}</p>
      {sub && <p className="mt-1 text-xs" style={{ color: MUTED }}>{sub}</p>}
    </div>
  );
}

export default function PageViewDetailPage() {
  const [data, setData]           = useState<PageViewAnalyticsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError]         = useState<string | null>(null);
  const [rangeKey, setRangeKey]   = useState<RangeKey>("28days");
  const [retryAt, setRetryAt]     = useState(0);

  useEffect(() => {
    async function load() {
      setIsLoading(true);
      setError(null);
      try {
        const { startDate, endDate } = RANGES[rangeKey];
        const params = new URLSearchParams({ start_date: startDate, end_date: endDate });
        const res = await fetch(`/api/analytics/pageview?${params}`);
        if (!res.ok) {
          const body = await res.json().catch(() => ({}));
          throw new Error(body.details || body.error || `Server error ${res.status}`);
        }
        setData(await res.json() as PageViewAnalyticsData);
      } catch (e) {
        setError(e instanceof Error ? e.message : "Unknown error");
      } finally {
        setIsLoading(false);
      }
    }
    load();
  }, [rangeKey, retryAt]);

  const totalPT = data?.pageTitleBreakdown?.reduce((s, r) => s + r.eventCount, 0) ?? 0;

  return (
    <div className="min-h-screen p-6" style={{ background: BG }}>

      {/* Header */}
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <Link
            href="/dashboard/events"
            className="mb-2 inline-flex items-center gap-1.5 text-xs font-medium transition-colors hover:text-white"
            style={{ color: MUTED }}
          >
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Events Overview
          </Link>
          <h1 className="text-2xl font-bold text-white">Page View</h1>
          <p className="mt-1 text-sm" style={{ color: MUTED }}>Detailed analytics for <code className="rounded px-1 py-0.5 text-xs" style={{ background: "#1f2937", color: ACCENT }}>page_view</code> events · GA4</p>
        </div>
        <DateRangePicker value={rangeKey} onChange={setRangeKey} />
      </div>

      {/* Loading */}
      {isLoading && (
        <div className="flex items-center justify-center py-24">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-900 border-t-blue-500" />
          <span className="ml-4 text-sm" style={{ color: MUTED }}>Loading page view analytics…</span>
        </div>
      )}

      {/* Error */}
      {error && !isLoading && (
        <div className="flex flex-col items-center justify-center py-24 gap-4">
          <div className="rounded-full p-4" style={{ background: "#1c0a0a", border: "1px solid #7f1d1d" }}>
            <svg className="h-8 w-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-base font-semibold text-red-400">Failed to load page view analytics</p>
          <p className="text-sm" style={{ color: MUTED }}>{error}</p>
          <button onClick={() => setRetryAt(Date.now())}
            className="rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
            style={{ background: CARD, border: `1px solid ${BORDER}` }}
          >
            Retry
          </button>
        </div>
      )}

      {!isLoading && data && (
        <>
          {/* KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <KPICard label="Event Count" value={data.totalEvents.toLocaleString()} />
            <KPICard label="Total Users" value={data.totalUsers.toLocaleString()} />
            <KPICard label="Event Count per Active User" value={data.eventsPerActiveUser.toLocaleString()} sub={`${data.activeUsers.toLocaleString()} active users`} />
          </div>

          {/* Events in Last 30 Minutes — realtime chart */}
          <div className="mb-8">
            <RealtimeSection eventName="page_view" accentColor="blue" />
          </div>

          {/* Events per session + Events over time */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-8">
            <div className="rounded-xl p-5" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
              <p className="text-xs font-medium uppercase tracking-wider" style={{ color: MUTED }}>Events per Session</p>
              <p className="mt-2 text-3xl font-bold text-white">{data.eventsPerSession.toLocaleString()}</p>
              <p className="mt-1 text-xs" style={{ color: MUTED }}>{data.sessions.toLocaleString()} sessions</p>
            </div>
            <div className="lg:col-span-3 rounded-xl p-6" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
              <h2 className="text-base font-semibold text-white mb-1">Events Over Time</h2>
              <p className="text-xs mb-4" style={{ color: MUTED }}>Daily page_view count · {RANGES[rangeKey].label}</p>
              <div className="h-40">
                {data.eventsOverTime.length > 0 ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data.eventsOverTime.map((d) => ({ ...d, label: d.date.slice(5) }))} margin={{ top: 4, right: 8, bottom: 0, left: 0 }}>
                      <defs>
                        <linearGradient id="gradPV" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%"  stopColor={ACCENT} stopOpacity={0.3} />
                          <stop offset="95%" stopColor={ACCENT} stopOpacity={0.02} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke={BORDER} />
                      <XAxis dataKey="label" tick={{ fontSize: 10, fill: "#4b5563" }} axisLine={false} tickLine={false} interval="preserveStartEnd" />
                      <YAxis tick={{ fontSize: 10, fill: "#4b5563" }} axisLine={false} tickLine={false} allowDecimals={false} />
                      <Tooltip contentStyle={TT} />
                      <Area type="monotone" dataKey="value" stroke={ACCENT} fill="url(#gradPV)" strokeWidth={2} dot={false} activeDot={{ r: 4 }} name="Page Views" />
                    </AreaChart>
                  </ResponsiveContainer>
                ) : (
                  <p className="flex h-full items-center justify-center text-sm" style={{ color: MUTED }}>No data available</p>
                )}
              </div>
            </div>
          </div>

          {/* User Engagement */}
          <div className="mb-8">
            <h2 className="text-base font-semibold text-white mb-4">User Engagement</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <EngagementCard
                label="Engaged Sessions"
                value={data.engagedSessions.toLocaleString()}
                accent="#8b5cf6"
                icon={<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
              />
              <EngagementCard
                label="Engagement Rate"
                value={`${data.engagementRate}%`}
                accent="#10b981"
                icon={<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>}
              />
              <EngagementCard
                label="Avg. Engagement Time"
                value={formatSeconds(data.avgEngagementTimeSec)}
                accent="#f59e0b"
                icon={<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>}
              />
              <EngagementCard
                label="Engaged Sessions / User"
                value={data.engagedSessionsPerUser.toLocaleString()}
                accent="#ec4899"
                icon={<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>}
              />
            </div>
          </div>

          {/* Page Title breakdown */}
          <div className="mb-8 rounded-xl overflow-hidden" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
            <div className="px-6 py-4" style={{ borderBottom: `1px solid ${BORDER}` }}>
              <h2 className="text-base font-semibold text-white">Page Title</h2>
              <p className="mt-0.5 text-xs" style={{ color: MUTED }}>Title · % of total · Avg. time · Event count</p>
            </div>
            {data.pageTitleBreakdown.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead style={{ background: "#111827" }}>
                    <tr>
                      {["Title", "% Total", "Avg. Time", "Event Count"].map((h, i) => (
                        <th key={h} className={`px-5 py-3 text-xs font-medium uppercase tracking-wider ${i === 0 ? "text-left" : "text-right"}`} style={{ color: MUTED }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {data.pageTitleBreakdown.map((row, i) => (
                      <tr key={i} style={{ borderBottom: `1px solid ${BORDER}` }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.03)")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "")}
                      >
                        <td className="px-5 py-3">
                          <span className="block max-w-xs truncate font-medium text-white" title={row.title}>{row.title}</span>
                          <span className="mt-0.5 block text-xs" style={{ color: MUTED }}>{row.totalUsers.toLocaleString()} users</span>
                        </td>
                        <td className="px-5 py-3 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <div className="h-1.5 w-14 overflow-hidden rounded-full" style={{ background: BORDER }}>
                              <div className="h-full rounded-full" style={{ width: `${Math.min(row.percentage, 100)}%`, background: ACCENT }} />
                            </div>
                            <span className="w-12 text-right text-xs" style={{ color: MUTED }}>{row.percentage}%</span>
                          </div>
                        </td>
                        <td className="px-5 py-3 text-right text-white">{formatSeconds(row.avgTimeSec)}</td>
                        <td className="px-5 py-3 text-right font-semibold text-white">{row.eventCount.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="px-6 py-8 text-center text-sm" style={{ color: MUTED }}>No page title data available</p>
            )}
          </div>

          {/* Country breakdown */}
          <div className="rounded-xl overflow-hidden" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
            <div className="px-6 py-4" style={{ borderBottom: `1px solid ${BORDER}` }}>
              <h2 className="text-base font-semibold text-white">By Country</h2>
              <p className="mt-0.5 text-xs" style={{ color: MUTED }}>page_view events by country</p>
            </div>
            {data.countryBreakdown.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead style={{ background: "#111827" }}>
                    <tr>
                      {["Country", "Event Count", "Users"].map((h, i) => (
                        <th key={h} className={`px-5 py-3 text-xs font-medium uppercase tracking-wider ${i === 0 ? "text-left" : "text-right"}`} style={{ color: MUTED }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {data.countryBreakdown.map((row, i) => {
                      const maxEc = data.countryBreakdown[0]?.eventCount ?? 1;
                      const pct = maxEc > 0 ? (row.eventCount / maxEc) * 100 : 0;
                      return (
                        <tr key={i} style={{ borderBottom: `1px solid ${BORDER}` }}
                          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.03)")}
                          onMouseLeave={(e) => (e.currentTarget.style.background = "")}
                        >
                          <td className="px-5 py-3 font-medium text-white">{row.dimension}</td>
                          <td className="px-5 py-3 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <div className="h-1.5 w-16 overflow-hidden rounded-full" style={{ background: BORDER }}>
                                <div className="h-full rounded-full" style={{ width: `${Math.min(pct, 100)}%`, background: ACCENT }} />
                              </div>
                              <span className="font-semibold text-white">{row.eventCount.toLocaleString()}</span>
                            </div>
                          </td>
                          <td className="px-5 py-3 text-right" style={{ color: DIM }}>{row.totalUsers.toLocaleString()}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="px-6 py-8 text-center text-sm" style={{ color: MUTED }}>No country data available</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}
