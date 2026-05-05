"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { NewsletterAnalyticsData, NewsletterBreakdownRow } from "@/types/analytics";
import RealtimeSection from "@/components/RealtimeSection";

const CARD: React.CSSProperties = { background: "#0d1117", border: "1px solid #1f2937" };
const TT: React.CSSProperties = { backgroundColor: "#0d1117", border: "1px solid #1f2937", borderRadius: "8px", fontSize: "12px", color: "#f9fafb" };

function KPICard({ label, value, highlight }: { label: string; value: string | number; highlight?: boolean }) {
  return (
    <div className="rounded-xl p-6" style={highlight ? { background: "#1d4ed8", border: "1px solid #1e40af" } : CARD}>
      <p className="text-xs font-medium uppercase tracking-wider" style={{ color: highlight ? "#bfdbfe" : "#6b7280" }}>{label}</p>
      <p className="mt-2 text-3xl font-bold text-white">{value}</p>
    </div>
  );
}

function BreakdownTable({ title, rows, dimensionLabel, totalEvents }: { title: string; rows: NewsletterBreakdownRow[]; dimensionLabel: string; totalEvents: number }) {
  const [selected, setSelected] = useState<string | null>(null);

  if (!rows || rows.length === 0) {
    return (
      <div className="rounded-xl p-6" style={CARD}>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-white">{title}</h3>
        <p className="mt-6 text-center text-sm" style={{ color: "#4b5563" }}>No data available</p>
      </div>
    );
  }

  return (
    <div className="rounded-xl overflow-hidden" style={CARD}>
      <div className="px-5 py-4" style={{ borderBottom: "1px solid #1f2937" }}>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-white">{title}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead style={{ background: "#111827" }}>
            <tr>
              {[dimensionLabel, "Number of Events", "Total Users", "% Share"].map((h, i) => (
                <th key={h} className={`px-5 py-3 text-xs font-medium uppercase tracking-wider ${i === 0 ? "text-left" : "text-right"}`} style={{ color: "#6b7280" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              const isSelected = selected === row.dimension;
              const share = totalEvents > 0 ? ((row.eventCount / totalEvents) * 100).toFixed(1) : "0.0";
              return (
                <tr
                  key={row.dimension}
                  onClick={() => setSelected(isSelected ? null : row.dimension)}
                  className="cursor-pointer transition-colors"
                  style={{ borderBottom: "1px solid #1f2937", background: isSelected ? "rgba(30,58,95,0.4)" : undefined }}
                  onMouseEnter={(e) => { if (!isSelected) e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = isSelected ? "rgba(30,58,95,0.4)" : ""; }}
                >
                  <td className="px-5 py-3 font-medium text-white">
                    <div className="flex items-center gap-2">
                      {isSelected && <span className="h-2 w-2 rounded-full bg-blue-400 shrink-0" />}
                      <span>{row.dimension}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3 text-right font-semibold text-white">{row.eventCount.toLocaleString()}</td>
                  <td className="px-5 py-3 text-right" style={{ color: "#9ca3af" }}>{row.totalUsers.toLocaleString()}</td>
                  <td className="px-5 py-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <div className="h-1.5 w-16 overflow-hidden rounded-full" style={{ background: "#1f2937" }}>
                        <div className="h-full rounded-full bg-blue-500" style={{ width: `${Math.min(parseFloat(share), 100)}%` }} />
                      </div>
                      <span className="w-10 text-right" style={{ color: "#6b7280" }}>{share}%</span>
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

function EventsOverTimeChart({ data }: { data: { date: string; value: number }[] }) {
  if (!data || data.length === 0) {
    return (
      <div className="rounded-xl p-6" style={CARD}>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Newsletter Signups Over Time</h3>
        <p className="mt-6 text-center text-sm" style={{ color: "#4b5563" }}>No data available</p>
      </div>
    );
  }
  const formatted = data.map((d) => ({ ...d, label: d.date.slice(5) }));
  return (
    <div className="rounded-xl p-6" style={CARD}>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Newsletter Signups Over Time</h3>
      <p className="mt-1 text-xs" style={{ color: "#4b5563" }}>Daily event count</p>
      <div className="mt-4 h-56">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={formatted} margin={{ top: 4, right: 8, bottom: 0, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
            <XAxis dataKey="label" tick={{ fontSize: 11, fill: "#4b5563" }} axisLine={false} tickLine={false} interval="preserveStartEnd" />
            <YAxis tick={{ fontSize: 11, fill: "#4b5563" }} axisLine={false} tickLine={false} allowDecimals={false} />
            <Tooltip contentStyle={TT} labelFormatter={(l) => `Date: ${l}`} formatter={(v: number) => [v.toLocaleString(), "Events"]} />
            <Line type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={2} dot={false} activeDot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function NewsletterAnalyticsPage() {
  const [data, setData] = useState<NewsletterAnalyticsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshKey, setRefreshKey] = useState(0);
  const [lastFetched, setLastFetched] = useState<Date | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); setError(null);
      try {
        const qs = searchParams.toString();
        const res = await fetch(`/api/analytics/newsletter${qs ? `?${qs}` : ""}`, { cache: "no-store" });
        if (!res.ok) { const b = await res.json().catch(() => ({})); throw new Error(b.details || b.error || "Failed to fetch newsletter analytics"); }
        setData(await res.json());
        setLastFetched(new Date());
      } catch (err) { setError(err instanceof Error ? err.message : "An error occurred"); }
      finally { setIsLoading(false); }
    };
    fetchData();
  }, [refreshKey, searchParams]);

  return (
    <div className="min-h-screen" style={{ background: "#030712" }}>
      <header style={{ background: "#0d1117", borderBottom: "1px solid #1f2937" }}>
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Link href="/dashboard" className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors hover:bg-white/5" style={{ color: "#6b7280" }}>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                Back
              </Link>
              <div className="h-5 w-px" style={{ background: "#1f2937" }} />
              <div className="flex items-center gap-2.5">
                <div className="rounded-lg p-2" style={{ background: "#1e3a5f", color: "#60a5fa" }}>
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">newsletter_signup</h1>
                  <p className="text-xs" style={{ color: "#4b5563" }}>Live from Google Analytics 4{lastFetched && ` · updated ${lastFetched.toLocaleTimeString()}`}</p>
                </div>
              </div>
            </div>
            <button onClick={() => setRefreshKey((k) => k + 1)} disabled={isLoading} className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors hover:bg-white/5 disabled:opacity-50" style={{ border: "1px solid #1f2937", color: "#9ca3af" }}>
              <svg className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
              {isLoading ? "Refreshing…" : "Refresh"}
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {error && <div className="mb-6 rounded-lg p-4 text-sm text-red-400" style={{ background: "#1c0a0a", border: "1px solid #7f1d1d" }}>{error}</div>}
        {isLoading && !data && (
          <div className="flex flex-col items-center justify-center py-24">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-900 border-t-blue-500" />
            <p className="mt-4 text-sm" style={{ color: "#4b5563" }}>Loading newsletter analytics…</p>
          </div>
        )}
        {data && (
          <>
            <section className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <KPICard label="Number of Events" value={data.totalEvents.toLocaleString()} />
              <KPICard label="Total Users" value={data.totalUsers.toLocaleString()} />
              <KPICard label="Active Users" value={data.activeUsers.toLocaleString()} />
              <KPICard label="Events per Active User" value={data.eventsPerActiveUser} />
            </section>
            <section className="mb-8 grid gap-4 sm:grid-cols-3">
              <KPICard label="Events of the Last 30 Minutes" value={data.eventsLast30Min.toLocaleString()} highlight />
              <KPICard label="Events per Session" value={data.eventsPerSession} />
              <KPICard label="Total Sessions" value={data.sessions.toLocaleString()} />
            </section>
            <section className="mb-8"><EventsOverTimeChart data={data.eventsOverTime} /></section>
            <section className="mb-8"><RealtimeSection eventName="newsletter_signup" accentColor="blue" /></section>
            <section className="mb-8 grid gap-6 lg:grid-cols-2">
              <BreakdownTable title="Signup Status" rows={data.signupStatus} dimensionLabel="Status" totalEvents={data.totalEvents} />
              <BreakdownTable title="Signup Location" rows={data.signupLocation} dimensionLabel="Location" totalEvents={data.totalEvents} />
            </section>
            <section className="mb-8 grid gap-6 lg:grid-cols-2">
              <BreakdownTable title="Country" rows={data.countryBreakdown} dimensionLabel="Country" totalEvents={data.totalEvents} />
              <BreakdownTable title="E-mail" rows={data.emailBreakdown} dimensionLabel="E-mail" totalEvents={data.totalEvents} />
            </section>
          </>
        )}
      </main>
    </div>
  );
}

export default function NewsletterPage() {
  return <Suspense><NewsletterAnalyticsPage /></Suspense>;
}
