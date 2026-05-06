"use client";

import { useState, useEffect, useRef } from "react";
import {
  AreaChart, Area,
  PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";
import { WebsiteAnalyticsData } from "@/types/analytics";

// ── Theme ─────────────────────────────────────────────────────────────────────
const BG      = "#030712";
const CARD    = "#0d1117";
const BORDER  = "#1f2937";
const MUTED   = "#6b7280";
const DIM     = "#9ca3af";
const TT      = { backgroundColor: CARD, border: `1px solid ${BORDER}`, borderRadius: "8px", fontSize: "12px", color: "#f9fafb" };

// ── Date range picker ─────────────────────────────────────────────────────────
type RangeKey = "today" | "7days" | "28days" | "90days" | "12months";
interface RangeOption { label: string; startDate: string; endDate: string }
const RANGE_OPTIONS: Record<RangeKey, RangeOption> = {
  today:      { label: "Today",           startDate: "today",       endDate: "today" },
  "7days":    { label: "Last 7 days",     startDate: "7daysAgo",    endDate: "today" },
  "28days":   { label: "Last 28 days",    startDate: "28daysAgo",   endDate: "today" },
  "90days":   { label: "Last 90 days",    startDate: "90daysAgo",   endDate: "today" },
  "12months": { label: "Last 12 months",  startDate: "365daysAgo",  endDate: "today" },
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
        <svg className="h-4 w-4 shrink-0" style={{ color: "#60a5fa" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        {RANGE_OPTIONS[value].label}
        <svg className={`h-4 w-4 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} style={{ color: MUTED }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-48 rounded-xl shadow-2xl py-2 z-50" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
          {RANGE_KEYS.map((k) => (
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

// ── KPI card ──────────────────────────────────────────────────────────────────
function KPICard({
  label, value, sub, icon, accent,
}: {
  label: string; value: string; sub?: string; icon: React.ReactNode; accent: string;
}) {
  return (
    <div className="rounded-xl p-5" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
      <div className="flex items-start justify-between gap-2">
        <p className="text-xs font-medium uppercase tracking-wider leading-tight" style={{ color: MUTED }}>{label}</p>
        <div className="rounded-lg p-2 shrink-0" style={{ background: `${accent}22`, color: accent }}>{icon}</div>
      </div>
      <p className="mt-3 text-3xl font-bold text-white">{value}</p>
      {sub && <p className="mt-1 text-xs" style={{ color: MUTED }}>{sub}</p>}
    </div>
  );
}

// ── Colors ────────────────────────────────────────────────────────────────────
const DEVICE_COLORS: Record<string, string> = {
  desktop: "#3b82f6",
  mobile:  "#8b5cf6",
  tablet:  "#10b981",
};
const DEVICE_FALLBACK = ["#3b82f6", "#8b5cf6", "#10b981", "#f59e0b"];

const LANG_COLORS: Record<string, string> = {
  EN:    "#3b82f6",
  DE:    "#f59e0b",
  Other: "#6b7280",
};

function formatDuration(sec: number): string {
  if (sec < 60) return `${sec}s`;
  return `${Math.floor(sec / 60)}m ${sec % 60}s`;
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function WebsiteAnalyticsPage() {
  const [data,      setData]      = useState<WebsiteAnalyticsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error,     setError]     = useState<string | null>(null);
  const [rangeKey,  setRangeKey]  = useState<RangeKey>("28days");
  const [retryAt,   setRetryAt]   = useState(0);

  useEffect(() => {
    async function load() {
      setIsLoading(true);
      setError(null);
      try {
        const { startDate, endDate } = RANGE_OPTIONS[rangeKey];
        const params = new URLSearchParams({ start_date: startDate, end_date: endDate });
        const res = await fetch(`/api/analytics/website?${params}`);
        if (!res.ok) {
          const body = await res.json().catch(() => ({}));
          throw new Error(body.details || body.error || `Server error ${res.status}`);
        }
        setData(await res.json() as WebsiteAnalyticsData);
      } catch (e) {
        setError(e instanceof Error ? e.message : "Unknown error");
      } finally {
        setIsLoading(false);
      }
    }
    load();
  }, [rangeKey, retryAt]);

  const traffic = data?.trafficOverTime ?? [];

  return (
    <div className="min-h-screen p-6" style={{ background: BG }}>

      {/* Header */}
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Website Analytics</h1>
          <p className="mt-1 text-sm" style={{ color: MUTED }}>Traffic, pages, devices &amp; geography · GA4</p>
        </div>
        <DateRangePicker value={rangeKey} onChange={setRangeKey} />
      </div>

      {/* Loading */}
      {isLoading && (
        <div className="flex items-center justify-center py-24">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-900 border-t-blue-500" />
          <span className="ml-4 text-sm" style={{ color: MUTED }}>Loading analytics…</span>
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
          <div className="text-center max-w-md">
            <p className="text-base font-semibold text-red-400">Failed to load website analytics</p>
            <p className="mt-1 text-sm" style={{ color: MUTED }}>{error}</p>
          </div>
          <button
            onClick={() => setRetryAt(Date.now())}
            className="mt-2 rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
            style={{ background: CARD, border: `1px solid ${BORDER}` }}
          >
            Retry
          </button>
        </div>
      )}

      {!isLoading && data && (
        <>
          {/* ── KPI Cards ─────────────────────────────────────────────────── */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <KPICard
              label="Total Pageviews"
              value={data.kpis.totalPageviews.toLocaleString()}
              accent="#3b82f6"
              icon={
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              }
            />
            <KPICard
              label="Total Sessions"
              value={data.kpis.totalSessions.toLocaleString()}
              accent="#10b981"
              icon={
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              }
            />
            <KPICard
              label="Avg. Bounce Rate"
              value={`${data.kpis.avgBounceRate}%`}
              accent="#f59e0b"
              icon={
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              }
            />
            <KPICard
              label="Avg. Duration"
              value={formatDuration(data.kpis.avgDuration)}
              accent="#8b5cf6"
              icon={
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                </svg>
              }
            />
          </div>

          {/* ── Traffic chart (Pageviews vs Sessions) ──────────────────────── */}
          <div className="mb-8 rounded-xl p-6" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
            <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="text-base font-semibold text-white">
                  Traffic — {RANGE_OPTIONS[rangeKey].label}
                </h2>
                <p className="mt-0.5 text-xs" style={{ color: MUTED }}>Pageviews vs Sessions</p>
              </div>
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-1.5">
                  <span className="inline-block h-2 w-5 rounded-full" style={{ background: "#3b82f6" }} />
                  <span className="text-xs" style={{ color: DIM }}>Pageviews</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="inline-block h-2 w-5 rounded-full" style={{ background: "#8b5cf6" }} />
                  <span className="text-xs" style={{ color: DIM }}>Sessions</span>
                </div>
              </div>
            </div>

            <div className="h-64">
              {traffic.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={traffic.map((d) => ({ ...d, label: d.date.slice(5) }))}
                    margin={{ top: 4, right: 8, bottom: 0, left: 0 }}
                  >
                    <defs>
                      <linearGradient id="gradPV" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.25} />
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.02} />
                      </linearGradient>
                      <linearGradient id="gradSess" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.25} />
                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.02} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
                    <XAxis
                      dataKey="label"
                      tick={{ fontSize: 11, fill: "#4b5563" }}
                      axisLine={false}
                      tickLine={false}
                      interval="preserveStartEnd"
                    />
                    <YAxis tick={{ fontSize: 11, fill: "#4b5563" }} axisLine={false} tickLine={false} allowDecimals={false} />
                    <Tooltip contentStyle={TT} />
                    <Area type="monotone" dataKey="pageviews" stroke="#3b82f6" fill="url(#gradPV)" strokeWidth={2} dot={false} activeDot={{ r: 4 }} />
                    <Area type="monotone" dataKey="sessions"  stroke="#8b5cf6" fill="url(#gradSess)" strokeWidth={2} dot={false} activeDot={{ r: 4 }} />
                  </AreaChart>
                </ResponsiveContainer>
              ) : (
                <div className="flex h-full items-center justify-center">
                  <p className="text-sm" style={{ color: MUTED }}>No traffic data available</p>
                </div>
              )}
            </div>
          </div>

          {/* ── Language + Device row ─────────────────────────────────────── */}
          <div className="mb-8 grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Language breakdown */}
            <div className="rounded-xl p-6" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
              <h2 className="text-base font-semibold text-white">Language Version — EN vs DE</h2>
              <p className="mt-0.5 mb-6 text-xs" style={{ color: MUTED }}>Sessions by site language · last 30 days</p>
              {data.languageBreakdown.length > 0 ? (
                <div className="space-y-4">
                  {data.languageBreakdown.map((item) => (
                    <div key={item.language}>
                      <div className="mb-1.5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="h-2.5 w-2.5 rounded-full" style={{ background: LANG_COLORS[item.language] ?? "#6b7280" }} />
                          <span className="text-sm font-semibold text-white">{item.language}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-medium text-white">{item.sessions.toLocaleString()}</span>
                          <span className="w-12 text-right text-xs" style={{ color: MUTED }}>{item.percentage}%</span>
                        </div>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full" style={{ background: "#1f2937" }}>
                        <div
                          className="h-full rounded-full transition-all duration-700"
                          style={{ width: `${item.percentage}%`, background: LANG_COLORS[item.language] ?? "#6b7280" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="py-8 text-center text-sm" style={{ color: MUTED }}>No language data available</p>
              )}
            </div>

            {/* Device breakdown donut */}
            <div className="rounded-xl p-6" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
              <h2 className="text-base font-semibold text-white">Device Breakdown</h2>
              <p className="mt-0.5 mb-4 text-xs" style={{ color: MUTED }}>Traffic by device type · last 30 days</p>
              {data.deviceBreakdown.length > 0 ? (
                <>
                  <div className="h-52">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={data.deviceBreakdown}
                          cx="50%"
                          cy="50%"
                          innerRadius={62}
                          outerRadius={88}
                          paddingAngle={3}
                          dataKey="sessions"
                          nameKey="device"
                        >
                          {data.deviceBreakdown.map((entry, i) => (
                            <Cell
                              key={entry.device}
                              fill={DEVICE_COLORS[entry.device.toLowerCase()] ?? DEVICE_FALLBACK[i % DEVICE_FALLBACK.length]}
                            />
                          ))}
                        </Pie>
                        <Tooltip
                          contentStyle={TT}
                          formatter={(v: number, name: string) => [`${v.toLocaleString()} sessions`, name]}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-3 flex flex-wrap justify-center gap-x-5 gap-y-2">
                    {data.deviceBreakdown.map((d, i) => (
                      <div key={d.device} className="flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full shrink-0" style={{ background: DEVICE_COLORS[d.device.toLowerCase()] ?? DEVICE_FALLBACK[i % DEVICE_FALLBACK.length] }} />
                        <span className="text-xs capitalize" style={{ color: DIM }}>{d.device}</span>
                        <span className="text-xs font-semibold text-white">{d.percentage}%</span>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <p className="py-8 text-center text-sm" style={{ color: MUTED }}>No device data available</p>
              )}
            </div>
          </div>

          {/* ── Top Pages + Country row ───────────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Top Pages */}
            <div className="rounded-xl overflow-hidden" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
              <div className="px-6 py-4" style={{ borderBottom: `1px solid ${BORDER}` }}>
                <h2 className="text-base font-semibold text-white">Top Pages</h2>
                <p className="mt-0.5 text-xs" style={{ color: MUTED }}>By total pageviews</p>
              </div>
              <table className="w-full text-sm">
                <thead style={{ background: "#111827" }}>
                  <tr>
                    <th className="px-5 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: MUTED }}>Page</th>
                    <th className="px-5 py-3 text-right text-xs font-medium uppercase tracking-wider" style={{ color: MUTED }}>Pageviews</th>
                    <th className="px-5 py-3 text-right text-xs font-medium uppercase tracking-wider" style={{ color: MUTED }}>Share</th>
                  </tr>
                </thead>
                <tbody>
                  {data.topPages.length > 0 ? data.topPages.map((p, i) => (
                    <tr
                      key={i}
                      style={{ borderBottom: `1px solid ${BORDER}` }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.03)")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "")}
                    >
                      <td className="px-5 py-3">
                        <span className="block max-w-[180px] truncate text-sm font-medium text-white" title={p.path}>{p.path}</span>
                        <span className="mt-0.5 block text-xs" style={{ color: MUTED }}>{p.users.toLocaleString()} users</span>
                      </td>
                      <td className="px-5 py-3 text-right font-semibold text-white">{p.pageviews.toLocaleString()}</td>
                      <td className="px-5 py-3 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <div className="h-1.5 w-14 overflow-hidden rounded-full" style={{ background: "#1f2937" }}>
                            <div className="h-full rounded-full bg-blue-500" style={{ width: `${Math.min(p.percentage, 100)}%` }} />
                          </div>
                          <span className="w-10 text-right text-xs" style={{ color: MUTED }}>{p.percentage}%</span>
                        </div>
                      </td>
                    </tr>
                  )) : (
                    <tr><td colSpan={3} className="px-5 py-8 text-center text-sm" style={{ color: MUTED }}>No page data available</td></tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Traffic by Country */}
            <div className="rounded-xl overflow-hidden" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
              <div className="px-6 py-4" style={{ borderBottom: `1px solid ${BORDER}` }}>
                <h2 className="text-base font-semibold text-white">Traffic by Country</h2>
                <p className="mt-0.5 text-xs" style={{ color: MUTED }}>Top countries by sessions · last 30 days</p>
              </div>
              <table className="w-full text-sm">
                <thead style={{ background: "#111827" }}>
                  <tr>
                    <th className="px-5 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: MUTED }}>Country</th>
                    <th className="px-5 py-3 text-right text-xs font-medium uppercase tracking-wider" style={{ color: MUTED }}>Sessions</th>
                    <th className="px-5 py-3 text-right text-xs font-medium uppercase tracking-wider" style={{ color: MUTED }}>Share</th>
                  </tr>
                </thead>
                <tbody>
                  {data.countryBreakdown.length > 0 ? data.countryBreakdown.map((c, i) => (
                    <tr
                      key={i}
                      style={{ borderBottom: `1px solid ${BORDER}` }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.03)")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "")}
                    >
                      <td className="px-5 py-3 font-medium text-white">{c.country}</td>
                      <td className="px-5 py-3 text-right font-semibold text-white">{c.sessions.toLocaleString()}</td>
                      <td className="px-5 py-3 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <div className="h-1.5 w-14 overflow-hidden rounded-full" style={{ background: "#1f2937" }}>
                            <div className="h-full rounded-full" style={{ width: `${Math.min(c.percentage, 100)}%`, background: "#10b981" }} />
                          </div>
                          <span className="w-10 text-right text-xs" style={{ color: MUTED }}>{c.percentage}%</span>
                        </div>
                      </td>
                    </tr>
                  )) : (
                    <tr><td colSpan={3} className="px-5 py-8 text-center text-sm" style={{ color: MUTED }}>No country data available</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
