"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import RealtimeSection from "@/components/RealtimeSection";
import { ScrollDepthDetailData } from "@/types/analytics";

const BG     = "#030712";
const CARD   = "#0d1117";
const BORDER = "#1f2937";
const MUTED  = "#6b7280";
const DIM    = "#9ca3af";
const ACCENT = "#ec4899";

function rangeLabel(start: string, end: string): string {
  if (start === "today" && end === "today") return "Today";
  if (start === "7daysAgo" && end === "today") return "Last 7 days";
  if (start === "28daysAgo" && end === "today") return "Last 28 days";
  if (start === "90daysAgo" && end === "today") return "Last 90 days";
  if (start === "365daysAgo" && end === "today") return "Last 12 months";
  return `${start} – ${end}`;
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

export default function ScrollDepthDetailPage() {
  const [data, setData]           = useState<ScrollDepthDetailData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError]         = useState<string | null>(null);
  const searchParams = useSearchParams();
  const startDate    = searchParams.get("start_date") || "28daysAgo";
  const endDate      = searchParams.get("end_date")   || "today";
  const [retryAt, setRetryAt]     = useState(0);

  useEffect(() => {
    async function load() {
      setIsLoading(true);
      setError(null);
      try {
        const params = new URLSearchParams({ start_date: startDate, end_date: endDate });
        const res = await fetch(`/api/analytics/scroll-depth?${params}`);
        if (!res.ok) {
          const body = await res.json().catch(() => ({}));
          throw new Error(body.details || body.error || `Server error ${res.status}`);
        }
        setData(await res.json() as ScrollDepthDetailData);
      } catch (e) {
        setError(e instanceof Error ? e.message : "Unknown error");
      } finally {
        setIsLoading(false);
      }
    }
    load();
  }, [startDate, endDate, retryAt]);

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
          <h1 className="text-2xl font-bold text-white">Scroll Depth</h1>
          <p className="mt-1 text-sm" style={{ color: MUTED }}>Detailed analytics for <code className="rounded px-1 py-0.5 text-xs" style={{ background: "#1f2937", color: ACCENT }}>scroll_depth</code> events · GA4</p>
        </div>
      </div>

      {/* Loading */}
      {isLoading && (
        <div className="flex items-center justify-center py-24">
          <div className="h-10 w-10 animate-spin rounded-full border-4" style={{ borderColor: "#831843", borderTopColor: ACCENT }} />
          <span className="ml-4 text-sm" style={{ color: MUTED }}>Loading scroll depth analytics…</span>
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
          <p className="text-base font-semibold text-red-400">Failed to load scroll depth analytics</p>
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
            <RealtimeSection eventName="scroll_depth" accentColor="indigo" />
          </div>

          {/* Country breakdown */}
          <div className="rounded-xl overflow-hidden" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
            <div className="px-6 py-4" style={{ borderBottom: `1px solid ${BORDER}` }}>
              <h2 className="text-base font-semibold text-white">Event Count by Country</h2>
              <p className="mt-0.5 text-xs" style={{ color: MUTED }}>scroll_depth events by country · {rangeLabel(startDate, endDate)}</p>
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
