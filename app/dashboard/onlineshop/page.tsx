"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { OnlineShopAnalyticsData } from "@/types/analytics";
import RealtimeSection from "@/components/RealtimeSection";

const CARD: React.CSSProperties = { background: "#0d1117", border: "1px solid #1f2937" };
const TT: React.CSSProperties = { backgroundColor: "#0d1117", border: "1px solid #1f2937", borderRadius: "8px", fontSize: "12px", color: "#f9fafb" };

function KPICard({ label, value, highlight }: { label: string; value: string | number; highlight?: boolean }) {
  return (
    <div className="rounded-xl p-6" style={highlight ? { background: "#431407", border: "1px solid #c2410c" } : CARD}>
      <p className="text-xs font-medium uppercase tracking-wider" style={{ color: highlight ? "#fed7aa" : "#6b7280" }}>{label}</p>
      <p className="mt-2 text-3xl font-bold text-white">{value}</p>
    </div>
  );
}

function EventsOverTimeChart({ data }: { data: { date: string; value: number }[] }) {
  if (!data || data.length === 0) return null;
  const formatted = data.map((d) => ({ ...d, label: d.date.slice(5) }));
  return (
    <div className="rounded-xl p-6" style={CARD}>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Online Shop Clicks Over Time</h3>
      <p className="mt-1 text-xs" style={{ color: "#4b5563" }}>Daily event count</p>
      <div className="mt-4 h-52">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={formatted} margin={{ top: 4, right: 8, bottom: 0, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
            <XAxis dataKey="label" tick={{ fontSize: 11, fill: "#4b5563" }} axisLine={false} tickLine={false} interval="preserveStartEnd" />
            <YAxis tick={{ fontSize: 11, fill: "#4b5563" }} axisLine={false} tickLine={false} allowDecimals={false} />
            <Tooltip contentStyle={TT} labelFormatter={(l) => `Date: ${l}`} formatter={(v: number) => [v.toLocaleString(), "Shop Clicks"]} />
            <Line type="monotone" dataKey="value" stroke="#F97316" strokeWidth={2} dot={false} activeDot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

interface BreakdownRow { dimension: string; eventCount: number; totalUsers: number; }

function BreakdownTable({ title, dimensionLabel, rows, totalEvents, truncate }: { title: string; dimensionLabel: string; rows: BreakdownRow[]; totalEvents: number; truncate?: boolean }) {
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
              {[dimensionLabel,"Events","Users","% Share"].map((h, i) => (
                <th key={h} className={`px-5 py-3 text-xs font-medium uppercase tracking-wider ${i === 0 ? "text-left" : "text-right"}`} style={{ color: "#6b7280" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              const isSelected = selected === row.dimension;
              const share = totalEvents > 0 ? ((row.eventCount / totalEvents) * 100).toFixed(1) : "0.0";
              const displayLabel = truncate && row.dimension.length > 48 ? row.dimension.slice(0, 46) + "…" : row.dimension;
              return (
                <tr key={row.dimension} onClick={() => setSelected(isSelected ? null : row.dimension)} title={truncate ? row.dimension : undefined}
                  className="cursor-pointer transition-colors"
                  style={{ borderBottom: "1px solid #1f2937", background: isSelected ? "rgba(67,20,7,0.5)" : undefined }}
                  onMouseEnter={(e) => { if (!isSelected) e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = isSelected ? "rgba(67,20,7,0.5)" : ""; }}
                >
                  <td className="px-5 py-3 font-medium text-white">
                    <div className="flex items-center gap-2">
                      {isSelected && <span className="h-2 w-2 shrink-0 rounded-full bg-orange-400" />}
                      <span className="break-all">{displayLabel}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3 text-right font-semibold text-white">{row.eventCount.toLocaleString()}</td>
                  <td className="px-5 py-3 text-right" style={{ color: "#9ca3af" }}>{row.totalUsers.toLocaleString()}</td>
                  <td className="px-5 py-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <div className="h-1.5 w-16 overflow-hidden rounded-full" style={{ background: "#1f2937" }}>
                        <div className="h-full rounded-full bg-orange-500" style={{ width: `${Math.min(parseFloat(share), 100)}%` }} />
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

function OnlineShopAnalyticsPage() {
  const [data, setData] = useState<OnlineShopAnalyticsData | null>(null);
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
        const res = await fetch(`/api/analytics/onlineshop${qs ? `?${qs}` : ""}`, { cache: "no-store" });
        if (!res.ok) { const b = await res.json().catch(() => ({})); throw new Error(b.details || b.error || "Failed to fetch online shop analytics"); }
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
                <div className="rounded-lg p-2" style={{ background: "#431407", color: "#fb923c" }}>
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">online_shop_click</h1>
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
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-orange-900 border-t-orange-500" />
            <p className="mt-4 text-sm" style={{ color: "#4b5563" }}>Loading online shop analytics…</p>
          </div>
        )}
        {data && (
          <>
            <section className="mb-8 grid gap-4 sm:grid-cols-3">
              <KPICard label="Number of Events" value={data.totalEvents.toLocaleString()} />
              <KPICard label="Total Users" value={data.totalUsers.toLocaleString()} />
              <KPICard label="Events per Active User" value={data.eventsPerActiveUser} />
            </section>
            <section className="mb-8 grid gap-4 sm:grid-cols-3">
              <KPICard label="Events of the Last 30 Minutes" value={data.eventsLast30Min.toLocaleString()} highlight />
              <KPICard label="Events per Session" value={data.eventsPerSession} />
              <KPICard label="Total Sessions" value={data.sessions.toLocaleString()} />
            </section>
            <section className="mb-8"><EventsOverTimeChart data={data.eventsOverTime} /></section>
            <section className="mb-8"><RealtimeSection eventName="online_shop_click" accentColor="orange" /></section>
            <section className="mb-8 grid gap-6 lg:grid-cols-2">
              <BreakdownTable title="Number of Events after Country" dimensionLabel="Country" rows={data.countryBreakdown} totalEvents={data.totalEvents} />
              <BreakdownTable title="Destination URL" dimensionLabel="URL" rows={data.destinationUrlBreakdown} totalEvents={data.totalEvents} truncate />
            </section>
            <section className="mb-8">
              <BreakdownTable title="Button Text" dimensionLabel="Button Text" rows={data.buttonTextBreakdown} totalEvents={data.totalEvents} />
            </section>
          </>
        )}
      </main>
    </div>
  );
}

export default function OnlineShopPage() {
  return <Suspense><OnlineShopAnalyticsPage /></Suspense>;
}
