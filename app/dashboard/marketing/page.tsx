"use client";

import { useState, useEffect } from "react";

interface CampaignRow {
  name: string;
  impressions: number;
  clicks: number;
  ctr: number;
  conversions: number;
  conversionRate: number;
}

interface FunnelStep {
  step: string;
  count: number;
  percentage?: number;
}

interface DashboardData {
  campaignPerformance: CampaignRow[];
  funnelData: FunnelStep[];
  charts: {
    trafficSource: { source: string; sessions: number; percentage: number }[];
  };
}

const CARD_BG = "#0d1117";
const BORDER = "#1f2937";
const TEXT_MUTED = "#6b7280";
const TEXT_DIM = "#9ca3af";

const SOURCE_COLORS: Record<string, string> = {
  google: "#3b82f6",
  twitter: "#1da1f2",
  facebook: "#1877f2",
  linkedin: "#0a66c2",
  direct: "#10b981",
  referral: "#f59e0b",
};

function getSourceColor(s: string) {
  return SOURCE_COLORS[s.toLowerCase()] ?? "#6b7280";
}

function StatCard({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="rounded-xl p-5" style={{ background: CARD_BG, border: `1px solid ${BORDER}` }}>
      <p className="text-xs font-medium uppercase tracking-wider" style={{ color: TEXT_MUTED }}>{label}</p>
      <p className="mt-2 text-3xl font-bold text-white">{value}</p>
      {sub && <p className="mt-1 text-xs" style={{ color: TEXT_DIM }}>{sub}</p>}
    </div>
  );
}

export default function MarketingAnalyticsPage() {
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

  const campaigns = data?.campaignPerformance ?? [];
  const funnel = data?.funnelData ?? [];
  const traffic = data?.charts.trafficSource ?? [];

  const totalImpressions = campaigns.reduce((s, c) => s + c.impressions, 0);
  const totalClicks = campaigns.reduce((s, c) => s + c.clicks, 0);
  const totalConversions = campaigns.reduce((s, c) => s + c.conversions, 0);
  const avgCtr = campaigns.length > 0
    ? (campaigns.reduce((s, c) => s + c.ctr, 0) / campaigns.length).toFixed(2)
    : "0.00";

  return (
    <div className="min-h-screen p-6" style={{ background: "#030712" }}>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Marketing Analytics</h1>
        <p className="mt-1 text-sm" style={{ color: TEXT_MUTED }}>Campaign performance, funnel, and traffic source data</p>
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

      {!isLoading && data && (
        <>
          {/* KPI row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <StatCard label="Total Impressions" value={totalImpressions.toLocaleString()} />
            <StatCard label="Total Clicks" value={totalClicks.toLocaleString()} />
            <StatCard label="Conversions" value={totalConversions.toLocaleString()} />
            <StatCard label="Avg CTR" value={`${avgCtr}%`} />
          </div>

          {/* Funnel + Traffic */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Funnel */}
            <div className="rounded-xl p-6" style={{ background: CARD_BG, border: `1px solid ${BORDER}` }}>
              <h2 className="text-base font-semibold text-white mb-4">Conversion Funnel</h2>
              {funnel.length > 0 ? (
                <div className="space-y-3">
                  {funnel.map((step, i) => {
                    const maxCount = funnel[0]?.count ?? 1;
                    const pct = maxCount > 0 ? (step.count / maxCount) * 100 : 0;
                    return (
                      <div key={i}>
                        <div className="flex justify-between text-sm mb-1">
                          <span style={{ color: TEXT_DIM }}>{step.step}</span>
                          <span className="text-white font-medium">{step.count.toLocaleString()}</span>
                        </div>
                        <div className="h-2 rounded-full overflow-hidden" style={{ background: "#1f2937" }}>
                          <div
                            className="h-full rounded-full"
                            style={{ width: `${pct}%`, background: `hsl(${220 - i * 25}, 70%, 55%)` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p className="text-sm py-8 text-center" style={{ color: TEXT_MUTED }}>No funnel data</p>
              )}
            </div>

            {/* Traffic sources */}
            <div className="rounded-xl p-6" style={{ background: CARD_BG, border: `1px solid ${BORDER}` }}>
              <h2 className="text-base font-semibold text-white mb-4">Traffic Sources</h2>
              {traffic.length > 0 ? (
                <div className="space-y-3">
                  {traffic.map((t, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full shrink-0" style={{ background: getSourceColor(t.source) }} />
                      <span className="flex-1 text-sm capitalize" style={{ color: TEXT_DIM }}>{t.source}</span>
                      <div className="w-28 h-2 rounded-full overflow-hidden" style={{ background: "#1f2937" }}>
                        <div
                          className="h-full rounded-full"
                          style={{ width: `${t.percentage}%`, background: getSourceColor(t.source) }}
                        />
                      </div>
                      <span className="w-16 text-right text-sm font-medium text-white">{t.sessions.toLocaleString()}</span>
                      <span className="w-12 text-right text-xs" style={{ color: TEXT_MUTED }}>{t.percentage.toFixed(1)}%</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm py-8 text-center" style={{ color: TEXT_MUTED }}>No traffic data</p>
              )}
            </div>
          </div>

          {/* Campaign table */}
          <div className="rounded-xl p-6" style={{ background: CARD_BG, border: `1px solid ${BORDER}` }}>
            <h2 className="text-base font-semibold text-white mb-4">Campaign Performance</h2>
            {campaigns.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ borderBottom: `1px solid ${BORDER}` }}>
                      {["Campaign", "Impressions", "Clicks", "CTR", "Conversions", "Conv. Rate"].map((h) => (
                        <th
                          key={h}
                          className="pb-3 text-left font-semibold text-xs uppercase tracking-wider"
                          style={{ color: TEXT_MUTED }}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {campaigns.map((c, i) => (
                      <tr key={i} style={{ borderBottom: `1px solid ${BORDER}` }}>
                        <td className="py-3 font-medium text-white">{c.name}</td>
                        <td className="py-3" style={{ color: TEXT_DIM }}>{c.impressions.toLocaleString()}</td>
                        <td className="py-3" style={{ color: TEXT_DIM }}>{c.clicks.toLocaleString()}</td>
                        <td className="py-3">
                          <span className="px-2 py-0.5 rounded text-xs font-medium" style={{ background: "#1e3a5f", color: "#93c5fd" }}>
                            {c.ctr.toFixed(2)}%
                          </span>
                        </td>
                        <td className="py-3" style={{ color: TEXT_DIM }}>{c.conversions.toLocaleString()}</td>
                        <td className="py-3">
                          <span className="px-2 py-0.5 rounded text-xs font-medium" style={{ background: "#052e16", color: "#86efac" }}>
                            {c.conversionRate.toFixed(2)}%
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-sm py-8 text-center" style={{ color: TEXT_MUTED }}>No campaign data available</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}
