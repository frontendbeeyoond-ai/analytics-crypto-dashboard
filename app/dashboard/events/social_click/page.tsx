"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";
import RealtimeSection from "@/components/RealtimeSection";
import { SocialClickAnalyticsData } from "@/types/analytics";

const BG     = "#030712";
const CARD   = "#0d1117";
const BORDER = "#1f2937";
const MUTED  = "#6b7280";
const DIM    = "#9ca3af";
const ACCENT = "#f97316";
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
              <span className={`h-1.5 w-1.5 rounded-full shrink-0 ${value === k ? "bg-orange-400" : "bg-transparent"}`} />
              {RANGES[k].label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function KPICard({ label, value, sub }: { label: string; value: string | number; sub?: string }) {
  return (
    <div className="rounded-xl p-5" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
      <p className="text-xs font-medium uppercase tracking-wider" style={{ color: MUTED }}>{label}</p>
      <p className="mt-2 text-3xl font-bold text-white">{value}</p>
      {sub && <p className="mt-1 text-xs" style={{ color: MUTED }}>{sub}</p>}
    </div>
  );
}

interface BreakdownRow { dimension: string; eventCount: number; totalUsers: number }

function BreakdownTable({
  title, dimensionLabel, rows, totalEvents, truncate,
}: {
  title: string; dimensionLabel: string; rows: BreakdownRow[]; totalEvents: number; truncate?: boolean;
}) {
  if (!rows || rows.length === 0) {
    return (
      <div className="rounded-xl p-6" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-1">{title}</h3>
        <p className="mt-6 text-center text-sm" style={{ color: MUTED }}>No data available</p>
      </div>
    );
  }
  return (
    <div className="rounded-xl overflow-hidden" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
      <div className="px-5 py-4" style={{ borderBottom: `1px solid ${BORDER}` }}>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-white">{title}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead style={{ background: "#111827" }}>
            <tr>
              {[dimensionLabel, "Events", "Users", "% Share"].map((h, i) => (
                <th key={h} className={`px-5 py-3 text-xs font-medium uppercase tracking-wider ${i === 0 ? "text-left" : "text-right"}`} style={{ color: MUTED }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => {
              const share = totalEvents > 0 ? ((row.eventCount / totalEvents) * 100).toFixed(1) : "0.0";
              const label = truncate && row.dimension.length > 48 ? row.dimension.slice(0, 46) + "…" : row.dimension;
              return (
                <tr key={i} style={{ borderBottom: `1px solid ${BORDER}` }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.03)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "")}
                >
                  <td className="px-5 py-3 font-medium text-white" title={truncate ? row.dimension : undefined}>
                    {label}
                  </td>
                  <td className="px-5 py-3 text-right font-semibold text-white">{row.eventCount.toLocaleString()}</td>
                  <td className="px-5 py-3 text-right" style={{ color: DIM }}>{row.totalUsers.toLocaleString()}</td>
                  <td className="px-5 py-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <div className="h-1.5 w-16 overflow-hidden rounded-full" style={{ background: BORDER }}>
                        <div className="h-full rounded-full" style={{ width: `${Math.min(parseFloat(share), 100)}%`, background: ACCENT }} />
                      </div>
                      <span className="w-10 text-right text-xs" style={{ color: MUTED }}>{share}%</span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function SocialClickDetailPage() {
  const [data, setData]           = useState<SocialClickAnalyticsData | null>(null);
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
        const res = await fetch(`/api/analytics/social-click?${params}`);
        if (!res.ok) {
          const body = await res.json().catch(() => ({}));
          throw new Error(body.details || body.error || `Server error ${res.status}`);
        }
        setData(await res.json() as SocialClickAnalyticsData);
      } catch (e) {
        setError(e instanceof Error ? e.message : "Unknown error");
      } finally {
        setIsLoading(false);
      }
    }
    load();
  }, [rangeKey, retryAt]);

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
          <h1 className="text-2xl font-bold text-white">Social Media Click</h1>
          <p className="mt-1 text-sm" style={{ color: MUTED }}>Detailed analytics for <code className="rounded px-1 py-0.5 text-xs" style={{ background: "#1f2937", color: ACCENT }}>social_click</code> events · GA4</p>
        </div>
        <DateRangePicker value={rangeKey} onChange={setRangeKey} />
      </div>

      {/* Loading */}
      {isLoading && (
        <div className="flex items-center justify-center py-24">
          <div className="h-10 w-10 animate-spin rounded-full border-4" style={{ borderColor: "#431407", borderTopColor: ACCENT }} />
          <span className="ml-4 text-sm" style={{ color: MUTED }}>Loading social click analytics…</span>
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
          <p className="text-base font-semibold text-red-400">Failed to load social click analytics</p>
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
            <KPICard
              label="Event Count per Active User"
              value={data.eventsPerActiveUser.toLocaleString()}
              sub={`${data.activeUsers.toLocaleString()} active users`}
            />
          </div>

          {/* Events in Last 30 Minutes — realtime chart */}
          <div className="mb-8">
            <RealtimeSection eventName="social_click" accentColor="orange" />
          </div>

          {/* Events per session — daily chart */}
          <div className="mb-8 rounded-xl p-6" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
              <div>
                <h2 className="text-base font-semibold text-white">Events Over Time</h2>
                <p className="mt-0.5 text-xs" style={{ color: MUTED }}>
                  Daily social_click count · {RANGES[rangeKey].label} · {data.eventsPerSession.toLocaleString()} events/session
                </p>
              </div>
              <div className="rounded-lg px-3 py-1.5 text-xs font-medium" style={{ background: "#431407", color: "#fb923c" }}>
                {data.sessions.toLocaleString()} sessions
              </div>
            </div>
            <div className="h-52">
              {data.eventsOverTime.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data.eventsOverTime.map((d) => ({ ...d, label: d.date.slice(5) }))} margin={{ top: 4, right: 8, bottom: 0, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={BORDER} />
                    <XAxis dataKey="label" tick={{ fontSize: 11, fill: "#4b5563" }} axisLine={false} tickLine={false} interval="preserveStartEnd" />
                    <YAxis tick={{ fontSize: 11, fill: "#4b5563" }} axisLine={false} tickLine={false} allowDecimals={false} />
                    <Tooltip contentStyle={TT} labelFormatter={(l) => `Date: ${l}`} formatter={(v: number) => [v.toLocaleString(), "Social Clicks"]} />
                    <Line type="monotone" dataKey="value" stroke={ACCENT} strokeWidth={2} dot={false} activeDot={{ r: 4 }} />
                  </LineChart>
                </ResponsiveContainer>
              ) : (
                <div className="flex h-full items-center justify-center">
                  <p className="text-sm" style={{ color: MUTED }}>No data available</p>
                </div>
              )}
            </div>
          </div>

          {/* Country + Click Location */}
          <div className="mb-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <BreakdownTable
              title="Event Count by Country"
              dimensionLabel="Country"
              rows={data.countryBreakdown}
              totalEvents={data.totalEvents}
            />
            <BreakdownTable
              title="Click Location"
              dimensionLabel="Location"
              rows={data.clickLocationBreakdown}
              totalEvents={data.totalEvents}
            />
          </div>

          {/* Destination URL */}
          <BreakdownTable
            title="Destination URL"
            dimensionLabel="URL"
            rows={data.destinationUrlBreakdown}
            totalEvents={data.totalEvents}
            truncate
          />
        </>
      )}
    </div>
  );
}
