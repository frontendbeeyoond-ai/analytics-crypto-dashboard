"use client";

import { useState, useEffect, useCallback } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface MinuteData { minutesAgo: number; count: number; }
interface RealtimeData { total: number; minuteData: MinuteData[]; }

const ACCENT_BAR: Record<string, string> = {
  blue: "#3B82F6", green: "#10B981", purple: "#8B5CF6",
  orange: "#F97316", indigo: "#6366F1", amber: "#F59E0B",
};
const ACCENT_TEXT: Record<string, string> = {
  blue: "#60a5fa", green: "#34d399", purple: "#a78bfa",
  orange: "#fb923c", indigo: "#818cf8", amber: "#fbbf24",
};
const ACCENT_BG: Record<string, string> = {
  blue: "#1e3a5f", green: "#052e16", purple: "#2e1065",
  orange: "#431407", indigo: "#1e1b4b", amber: "#451a03",
};

export default function RealtimeSection({
  eventName,
  accentColor = "blue",
}: {
  eventName: string;
  accentColor?: "blue" | "green" | "purple" | "orange" | "indigo" | "amber";
}) {
  const [data, setData] = useState<RealtimeData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const bar = ACCENT_BAR[accentColor] ?? "#3B82F6";
  const textColor = ACCENT_TEXT[accentColor] ?? "#60a5fa";
  const bgColor = ACCENT_BG[accentColor] ?? "#1e3a5f";

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch(`/api/analytics/realtime?event=${encodeURIComponent(eventName)}`, { cache: "no-store" });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.details || body.error || "Failed to fetch realtime data");
      }
      setData(await res.json());
      setLastUpdated(new Date());
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  }, [eventName]);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 30_000);
    return () => clearInterval(interval);
  }, [fetchData]);

  const chartData = data?.minuteData.map((d) => ({
    label: d.minutesAgo === 0 ? "now" : `${d.minutesAgo}m`,
    count: d.count,
  })) ?? [];

  return (
    <div className="rounded-xl overflow-hidden" style={{ background: "#0d1117", border: "1px solid #1f2937" }}>
      <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: "1px solid #1f2937" }}>
        <div className="flex items-center gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Realtime Activity</h3>
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: bar }} />
              <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: bar }} />
            </span>
            <span className="text-xs font-semibold uppercase" style={{ color: textColor }}>Live</span>
          </div>
        </div>
        <span className="text-xs" style={{ color: "#4b5563" }}>
          {lastUpdated ? `Updated ${lastUpdated.toLocaleTimeString()} · auto-refreshes every 30s` : "Loading…"}
        </span>
      </div>

      <div className="p-5">
        {error && (
          <div className="mb-4 rounded-lg p-3 text-sm" style={{ background: "#1c0a0a", border: "1px solid #7f1d1d", color: "#f87171" }}>
            {error}
          </div>
        )}

        {isLoading && !data && (
          <div className="flex items-center justify-center py-10">
            <div className="h-7 w-7 animate-spin rounded-full border-4" style={{ borderColor: "#1f2937", borderTopColor: bar }} />
          </div>
        )}

        {data && (
          <>
            <div className="mb-5 inline-flex items-baseline gap-2 rounded-lg px-4 py-3" style={{ background: bgColor }}>
              <span className="text-3xl font-bold" style={{ color: textColor }}>{data.total.toLocaleString()}</span>
              <span className="text-sm" style={{ color: "#9ca3af" }}>events in the last 30 minutes</span>
            </div>

            <div className="h-44">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 4, right: 4, bottom: 0, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" vertical={false} />
                  <XAxis dataKey="label" tick={{ fontSize: 10, fill: "#4b5563" }} axisLine={false} tickLine={false} interval={4} />
                  <YAxis tick={{ fontSize: 10, fill: "#4b5563" }} axisLine={false} tickLine={false} allowDecimals={false} />
                  <Tooltip
                    contentStyle={{ backgroundColor: "#0d1117", border: "1px solid #1f2937", borderRadius: "8px", fontSize: "12px", color: "#f9fafb" }}
                    labelFormatter={(l) => l === "now" ? "Current minute" : `${l} ago`}
                    formatter={(v: number) => [v.toLocaleString(), "Events"]}
                    cursor={{ fill: "rgba(255,255,255,0.04)" }}
                  />
                  <Bar dataKey="count" fill={bar} radius={[2, 2, 0, 0]} maxBarSize={20} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
