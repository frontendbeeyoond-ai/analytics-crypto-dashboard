"use client";

import { useState, useEffect } from "react";

interface GA4KPIs {
  totalUsers: number;
  activeUsers: number;
  newUsers: number;
  pageViews: number;
  bounceRate: number;
  avgSessionDuration: number;
}

interface UserPoint {
  date: string;
  value: number;
}

interface CountryRow {
  country: string;
  sessions: number;
}

interface DashboardData {
  source: "ga4" | "mock";
  kpis: GA4KPIs;
  charts: {
    usersOverTime: UserPoint[];
    country: CountryRow[];
    scrollDepth: { range: string; percentage: number; count: number }[];
  };
}

const CARD_BG = "#0d1117";
const BORDER = "#1f2937";
const TEXT_MUTED = "#6b7280";
const TEXT_DIM = "#9ca3af";

function formatDuration(s: number) {
  if (s < 60) return `${s}s`;
  return `${Math.floor(s / 60)}m ${s % 60}s`;
}

function KPICard({ label, value, color = "#3b82f6" }: { label: string; value: string; color?: string }) {
  return (
    <div className="rounded-xl p-5" style={{ background: CARD_BG, border: `1px solid ${BORDER}` }}>
      <div className="w-2 h-2 rounded-full mb-3" style={{ background: color }} />
      <p className="text-xs font-medium uppercase tracking-wider" style={{ color: TEXT_MUTED }}>{label}</p>
      <p className="mt-2 text-3xl font-bold text-white">{value}</p>
    </div>
  );
}

export default function AppAnalyticsPage() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      setIsLoading(true);
      try {
        const res = await fetch("/api/analytics");
        if (!res.ok) throw new Error("Failed to fetch analytics");
        setData(await res.json());
      } catch (e) {
        setError(e instanceof Error ? e.message : "Unknown error");
      } finally {
        setIsLoading(false);
      }
    }
    load();
  }, []);

  const kpis = data?.kpis;
  const usersOverTime = data?.charts.usersOverTime ?? [];
  const countries = data?.charts.country ?? [];
  const scrollDepth = data?.charts.scrollDepth ?? [];

  const maxUsers = usersOverTime.length > 0 ? Math.max(...usersOverTime.map((d) => d.value)) : 1;
  const maxSessions = countries.length > 0 ? Math.max(...countries.map((c) => c.sessions)) : 1;

  return (
    <div className="min-h-screen p-6" style={{ background: "#030712" }}>
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">App Analytics</h1>
          <p className="mt-1 text-sm" style={{ color: TEXT_MUTED }}>
            User behavior, engagement metrics, and geographic breakdown
          </p>
        </div>
        {data && (
          <div className="flex items-center gap-2 rounded-lg px-3 py-1.5" style={{ background: "#052e16" }}>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <span className="text-xs font-medium text-green-400">
              {data.source === "ga4" ? "Live GA4" : "Demo"}
            </span>
          </div>
        )}
      </div>

      {isLoading && (
        <div className="flex items-center justify-center py-24">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-900 border-t-blue-500" />
          <span className="ml-4 text-sm" style={{ color: TEXT_MUTED }}>Loading...</span>
        </div>
      )}

      {error && (
        <div className="mb-6 rounded-lg p-4" style={{ background: "#1c0a0a", border: "1px solid #7f1d1d" }}>
          <p className="text-sm text-red-400">{error}</p>
        </div>
      )}

      {!isLoading && kpis && (
        <>
          {/* KPI grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <KPICard label="Total Users" value={kpis.totalUsers.toLocaleString()} color="#3b82f6" />
            <KPICard label="Active Users" value={kpis.activeUsers.toLocaleString()} color="#10b981" />
            <KPICard label="New Users" value={kpis.newUsers.toLocaleString()} color="#8b5cf6" />
            <KPICard label="Page Views" value={kpis.pageViews.toLocaleString()} color="#f59e0b" />
            <KPICard label="Bounce Rate" value={`${(kpis.bounceRate * 100).toFixed(1)}%`} color="#ef4444" />
            <KPICard label="Avg. Session Duration" value={formatDuration(kpis.avgSessionDuration)} color="#06b6d4" />
          </div>

          {/* Users over time + Scroll depth */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Users over time sparkline */}
            <div className="rounded-xl p-6" style={{ background: CARD_BG, border: `1px solid ${BORDER}` }}>
              <h2 className="text-base font-semibold text-white mb-4">Users Over Time</h2>
              {usersOverTime.length > 0 ? (
                <div className="space-y-1.5">
                  {usersOverTime.slice(-14).map((d, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="w-24 text-xs shrink-0" style={{ color: TEXT_MUTED }}>{d.date}</span>
                      <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: "#1f2937" }}>
                        <div
                          className="h-full rounded-full"
                          style={{ width: `${(d.value / maxUsers) * 100}%`, background: "#3b82f6" }}
                        />
                      </div>
                      <span className="w-12 text-right text-xs font-medium text-white shrink-0">
                        {d.value.toLocaleString()}
                      </span>
                    </div>
                  ))}
                  {usersOverTime.length > 14 && (
                    <p className="text-xs mt-2" style={{ color: TEXT_MUTED }}>Showing last 14 days</p>
                  )}
                </div>
              ) : (
                <p className="text-sm py-8 text-center" style={{ color: TEXT_MUTED }}>No data</p>
              )}
            </div>

            {/* Scroll depth */}
            <div className="rounded-xl p-6" style={{ background: CARD_BG, border: `1px solid ${BORDER}` }}>
              <h2 className="text-base font-semibold text-white mb-4">Scroll Depth Engagement</h2>
              {scrollDepth.length > 0 ? (
                <div className="space-y-4">
                  {scrollDepth.map((s, i) => {
                    const colors = ["#3b82f6", "#8b5cf6", "#10b981", "#f59e0b"];
                    return (
                      <div key={i}>
                        <div className="flex justify-between text-sm mb-1.5">
                          <span style={{ color: TEXT_DIM }}>{s.range}</span>
                          <span className="text-white font-medium">{s.percentage.toFixed(1)}%</span>
                        </div>
                        <div className="h-3 rounded-full overflow-hidden" style={{ background: "#1f2937" }}>
                          <div
                            className="h-full rounded-full transition-all"
                            style={{ width: `${s.percentage}%`, background: colors[i % colors.length] }}
                          />
                        </div>
                        <p className="text-xs mt-1" style={{ color: TEXT_MUTED }}>{s.count.toLocaleString()} users</p>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p className="text-sm py-8 text-center" style={{ color: TEXT_MUTED }}>No scroll data</p>
              )}
            </div>
          </div>

          {/* Countries */}
          <div className="rounded-xl p-6" style={{ background: CARD_BG, border: `1px solid ${BORDER}` }}>
            <h2 className="text-base font-semibold text-white mb-4">Top Countries by Sessions</h2>
            {countries.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                {countries.map((c, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-5 text-xs text-center font-semibold shrink-0" style={{ color: TEXT_MUTED }}>
                      {i + 1}
                    </span>
                    <span className="flex-1 text-sm text-white truncate">{c.country}</span>
                    <div className="w-24 h-1.5 rounded-full overflow-hidden shrink-0" style={{ background: "#1f2937" }}>
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${(c.sessions / maxSessions) * 100}%`, background: "#3b82f6" }}
                      />
                    </div>
                    <span className="w-16 text-right text-sm font-medium text-white shrink-0">
                      {c.sessions.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm py-8 text-center" style={{ color: TEXT_MUTED }}>No country data</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}
