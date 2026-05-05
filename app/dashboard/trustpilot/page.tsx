"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrustpilotAnalyticsData } from "@/types/analytics";
import RealtimeSection from "@/components/RealtimeSection";

const CARD: React.CSSProperties = { background: "#0d1117", border: "1px solid #1f2937" };
const TT: React.CSSProperties = { backgroundColor: "#0d1117", border: "1px solid #1f2937", borderRadius: "8px", fontSize: "12px", color: "#f9fafb" };

function KPICard({ label, value, highlight }: { label: string; value: string | number; highlight?: boolean }) {
  return (
    <div className="rounded-xl p-6" style={highlight ? { background: "#451a03", border: "1px solid #b45309" } : CARD}>
      <p className="text-xs font-medium uppercase tracking-wider" style={{ color: highlight ? "#fde68a" : "#6b7280" }}>{label}</p>
      <p className="mt-2 text-3xl font-bold text-white">{value}</p>
    </div>
  );
}

function EventsOverTimeChart({ data }: { data: { date: string; value: number }[] }) {
  if (!data || data.length === 0) return null;
  const formatted = data.map((d) => ({ ...d, label: d.date.slice(5) }));
  return (
    <div className="rounded-xl p-6" style={CARD}>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Trustpilot Clicks Over Time</h3>
      <p className="mt-1 text-xs" style={{ color: "#4b5563" }}>Daily event count</p>
      <div className="mt-4 h-52">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={formatted} margin={{ top: 4, right: 8, bottom: 0, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
            <XAxis dataKey="label" tick={{ fontSize: 11, fill: "#4b5563" }} axisLine={false} tickLine={false} interval="preserveStartEnd" />
            <YAxis tick={{ fontSize: 11, fill: "#4b5563" }} axisLine={false} tickLine={false} allowDecimals={false} />
            <Tooltip contentStyle={TT} labelFormatter={(l) => `Date: ${l}`} formatter={(v: number) => [v.toLocaleString(), "Trustpilot Clicks"]} />
            <Line type="monotone" dataKey="value" stroke="#F59E0B" strokeWidth={2} dot={false} activeDot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function TrustpilotAnalyticsPage() {
  const [data, setData] = useState<TrustpilotAnalyticsData | null>(null);
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
        const res = await fetch(`/api/analytics/trustpilot${qs ? `?${qs}` : ""}`, { cache: "no-store" });
        if (!res.ok) { const b = await res.json().catch(() => ({})); throw new Error(b.details || b.error || "Failed to fetch trustpilot analytics"); }
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
                <div className="rounded-lg p-2" style={{ background: "#451a03", color: "#fbbf24" }}>
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">trustpilot_click</h1>
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
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-amber-900 border-t-amber-500" />
            <p className="mt-4 text-sm" style={{ color: "#4b5563" }}>Loading trustpilot analytics…</p>
          </div>
        )}
        {data && (
          <>
            <section className="mb-8 grid gap-4 sm:grid-cols-3">
              <KPICard label="Number of Events" value={data.totalEvents.toLocaleString()} />
              <KPICard label="Total Users" value={data.totalUsers.toLocaleString()} />
              <KPICard label="Events per Session" value={data.eventsPerSession} />
            </section>
            <section className="mb-8 grid gap-4 sm:grid-cols-3">
              <KPICard label="Events of the Last 30 Minutes" value={data.eventsLast30Min.toLocaleString()} highlight />
              <KPICard label="Total Sessions" value={data.sessions.toLocaleString()} />
            </section>
            <section className="mb-8"><EventsOverTimeChart data={data.eventsOverTime} /></section>
            <section className="mb-8"><RealtimeSection eventName="trustpilot_click" accentColor="amber" /></section>
          </>
        )}
      </main>
    </div>
  );
}

export default function TrustpilotPage() {
  return <Suspense><TrustpilotAnalyticsPage /></Suspense>;
}
