"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { ScrollDepthBucket, TrafficSourceData } from "@/types/analytics";

const COLORS = [
  "#3B82F6",
  "#8B5CF6",
  "#10B981",
  "#F59E0B",
  "#EF4444",
  "#6366F1",
  "#EC4899",
  "#14B8A6",
  "#F97316",
  "#84CC16",
];

const CARD: React.CSSProperties = {
  background: "#0d1117",
  border: "1px solid #1f2937",
};
const TOOLTIP_STYLE: React.CSSProperties = {
  backgroundColor: "#1f2937",
  border: "1px solid #374151",
  borderRadius: "8px",
  fontSize: "12px",
  color: "#f9fafb",
};
const TOOLTIP_LABEL_STYLE: React.CSSProperties = {
  color: "#f9fafb",
  fontWeight: 600,
};
const TOOLTIP_ITEM_STYLE: React.CSSProperties = { color: "#d1d5db" };
const GRID_STROKE = "#1f2937";
const AXIS_TICK = { fontSize: 12, fill: "#6b7280" };
const AXIS_LINE = { stroke: "#1f2937" };

// ─── Funnel Chart ──────────────────────────────────────────────────────────────

interface FunnelStep {
  step: string;
  count: number;
  percentage: number;
}

export function FunnelChart({ data }: { data: FunnelStep[] }) {
  const maxCount = data[0]?.count || 1;
  return (
    <div className="rounded-xl p-6" style={CARD}>
      <h3 className="text-lg font-semibold text-white">Conversion Funnel</h3>
      <p className="mt-1 text-sm" style={{ color: "#6b7280" }}>
        User journey through conversion steps
      </p>
      <div className="mt-6 space-y-4">
        {data.map((step, index) => {
          const widthPercent = (step.count / maxCount) * 100;
          const isLast = index === data.length - 1;
          return (
            <div key={step.step} className="relative">
              <div className="flex items-center justify-between">
                <span
                  className="text-sm font-medium"
                  style={{ color: "#d1d5db" }}
                >
                  {step.step}
                </span>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-white">
                    {step.count.toLocaleString()}
                  </span>
                  <span
                    className="rounded-full px-2 py-1 text-xs font-medium"
                    style={{ background: "#1e3a5f", color: "#93c5fd" }}
                  >
                    {step.percentage}%
                  </span>
                </div>
              </div>
              <div
                className="mt-2 h-8 w-full overflow-hidden rounded-lg"
                style={{ background: "#1f2937" }}
              >
                <div
                  className={`h-full rounded-lg transition-all duration-500 ${isLast ? "bg-linear-to-r from-green-600 to-green-500" : "bg-linear-to-r from-blue-600 to-blue-500"}`}
                  style={{ width: `${Math.max(widthPercent, 5)}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Scroll Depth Chart ────────────────────────────────────────────────────────

export function ScrollDepthChart({ data }: { data: ScrollDepthBucket[] }) {
  if (!data || data.length === 0) return null;
  return (
    <div className="rounded-xl p-6" style={CARD}>
      <h3 className="text-lg font-semibold text-white">Scroll Depth</h3>
      <p className="mt-1 text-sm" style={{ color: "#6b7280" }}>
        Distribution of user scroll behaviour
      </p>
      <div className="mt-6 h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical">
            <CartesianGrid
              strokeDasharray="3 3"
              horizontal={true}
              vertical={false}
              stroke={GRID_STROKE}
            />
            <XAxis
              type="number"
              tick={AXIS_TICK}
              tickFormatter={(v) => `${v}%`}
              axisLine={AXIS_LINE}
            />
            <YAxis
              dataKey="range"
              type="category"
              tick={AXIS_TICK}
              axisLine={AXIS_LINE}
              width={70}
            />
            <Tooltip
              formatter={(value: number) => [`${value}%`, "Percentage"]}
              contentStyle={TOOLTIP_STYLE}
              labelStyle={TOOLTIP_LABEL_STYLE}
              itemStyle={TOOLTIP_ITEM_STYLE}
            />
            <Bar
              dataKey="percentage"
              fill="#8B5CF6"
              radius={[0, 4, 4, 0]}
              barSize={32}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

// ─── Users Over Time Chart ─────────────────────────────────────────────────────

export function UsersOverTimeChart({
  data,
}: {
  data: { date: string; value: number }[];
}) {
  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric" });
  return (
    <div className="rounded-xl p-6" style={CARD}>
      <h3 className="text-lg font-semibold text-white">Users Over Time</h3>
      <p className="mt-1 text-sm" style={{ color: "#6b7280" }}>
        Daily active users for the selected period
      </p>
      <div className="mt-6 h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke={GRID_STROKE} />
            <XAxis
              dataKey="date"
              tick={AXIS_TICK}
              tickFormatter={formatDate}
              axisLine={AXIS_LINE}
              interval="preserveStartEnd"
            />
            <YAxis tick={AXIS_TICK} axisLine={AXIS_LINE} />
            <Tooltip
              formatter={(value: number) => [value.toLocaleString(), "Users"]}
              labelFormatter={formatDate}
              contentStyle={TOOLTIP_STYLE}
              labelStyle={TOOLTIP_LABEL_STYLE}
              itemStyle={TOOLTIP_ITEM_STYLE}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#3B82F6"
              strokeWidth={2}
              dot={{ fill: "#3B82F6", strokeWidth: 2, r: 3 }}
              activeDot={{ r: 5, fill: "#3B82F6" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

// ─── Traffic Pie Chart ─────────────────────────────────────────────────────────

export function TrafficPieChart({ data }: { data: TrafficSourceData[] }) {
  const total = data.reduce((sum, item) => sum + item.count, 0);
  return (
    <div className="rounded-xl p-6" style={CARD}>
      <h3 className="text-lg font-semibold text-white">Traffic Sources</h3>
      <p className="mt-1 text-sm" style={{ color: "#6b7280" }}>
        Distribution by acquisition channel
      </p>
      <div className="mt-6 h-72">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="45%"
              innerRadius={55}
              outerRadius={85}
              paddingAngle={2}
              dataKey="count"
              nameKey="source"
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              formatter={(value: number, name: string) => [
                `${((value / total) * 100).toFixed(1)}%  (${value.toLocaleString()} sessions)`,
                name ? name.charAt(0).toUpperCase() + name.slice(1) : name,
              ]}
              contentStyle={TOOLTIP_STYLE}
              labelStyle={TOOLTIP_LABEL_STYLE}
              itemStyle={TOOLTIP_ITEM_STYLE}
            />
            <Legend
              verticalAlign="bottom"
              height={36}
              formatter={(value) => (
                <span style={{ fontSize: 12, color: "#9ca3af" }}>
                  {value ? value.charAt(0).toUpperCase() + value.slice(1) : ""}
                </span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

// ─── Country Table ─────────────────────────────────────────────────────────────

export function CountryTable({
  data,
}: {
  data: { country: string; sessions: number }[];
}) {
  const maxSessions = data[0]?.sessions || 1;
  return (
    <div className="rounded-xl p-6" style={CARD}>
      <h3 className="text-lg font-semibold text-white">Top Countries</h3>
      <p className="mt-1 text-sm" style={{ color: "#6b7280" }}>
        Sessions by country
      </p>
      <div className="mt-4 space-y-3">
        {data.slice(0, 8).map((row, i) => (
          <div key={row.country} className="flex items-center gap-3">
            <span
              className="w-5 text-right text-xs font-medium"
              style={{ color: "#4b5563" }}
            >
              {i + 1}
            </span>
            <div className="flex-1">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium" style={{ color: "#d1d5db" }}>
                  {row.country}
                </span>
                <span className="font-semibold text-white">
                  {row.sessions.toLocaleString()}
                </span>
              </div>
              <div
                className="mt-1 h-1.5 w-full overflow-hidden rounded-full"
                style={{ background: "#1f2937" }}
              >
                <div
                  className="h-full rounded-full bg-blue-500"
                  style={{ width: `${(row.sessions / maxSessions) * 100}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Signup Breakdown ──────────────────────────────────────────────────────────

interface SignupBreakdownProps {
  status: { status: string; count: number }[];
  location: { location: string; count: number }[];
}

export function SignupBreakdown({ status, location }: SignupBreakdownProps) {
  const statusColors: Record<string, React.CSSProperties> = {
    success: { background: "#052e16", color: "#86efac" },
    pending: { background: "#451a03", color: "#fde68a" },
    failed: { background: "#450a0a", color: "#fca5a5" },
  };

  const locationLabel = (loc: string) =>
    loc.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  const hasStatus = status.length > 0;
  const hasLocation = location.length > 0;
  if (!hasStatus && !hasLocation) return null;

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {hasStatus && (
        <div className="rounded-xl p-6" style={CARD}>
          <h3 className="text-lg font-semibold text-white">
            Newsletter Signup Status
          </h3>
          <p className="mt-1 text-sm" style={{ color: "#6b7280" }}>
            Outcome of newsletter signup events
          </p>
          <div className="mt-5 flex flex-wrap gap-4">
            {status.map((s) => (
              <div
                key={s.status}
                className="flex flex-1 flex-col items-center justify-center rounded-xl p-4"
                style={{ background: "#111827" }}
              >
                <span
                  className="rounded-full px-2.5 py-0.5 text-xs font-medium"
                  style={
                    statusColors[s.status] ?? {
                      background: "#1f2937",
                      color: "#9ca3af",
                    }
                  }
                >
                  {s.status}
                </span>
                <span className="mt-2 text-2xl font-bold text-white">
                  {s.count.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {hasLocation && (
        <div className="rounded-xl p-6" style={CARD}>
          <h3 className="text-lg font-semibold text-white">Signup Location</h3>
          <p className="mt-1 text-sm" style={{ color: "#6b7280" }}>
            Where on the page users signed up
          </p>
          <div className="mt-4 space-y-3">
            {location.map((loc) => {
              const maxCount = Math.max(...location.map((l) => l.count));
              return (
                <div key={loc.location} className="flex items-center gap-3">
                  <div className="flex-1">
                    <div className="flex items-center justify-between text-sm">
                      <span
                        className="font-medium"
                        style={{ color: "#d1d5db" }}
                      >
                        {locationLabel(loc.location)}
                      </span>
                      <span className="font-semibold text-white">
                        {loc.count.toLocaleString()}
                      </span>
                    </div>
                    <div
                      className="mt-1 h-1.5 w-full overflow-hidden rounded-full"
                      style={{ background: "#1f2937" }}
                    >
                      <div
                        className="h-full rounded-full bg-purple-500"
                        style={{ width: `${(loc.count / maxCount) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── BehaviorCharts ────────────────────────────────────────────────────────────

export function BehaviorCharts({
  scrollData,
}: {
  scrollData: ScrollDepthBucket[];
}) {
  if (!scrollData || scrollData.length === 0) return null;
  return <ScrollDepthChart data={scrollData} />;
}
