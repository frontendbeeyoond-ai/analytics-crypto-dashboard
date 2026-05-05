"use client";

import React from "react";

interface KPICardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  color?: "blue" | "purple" | "green" | "amber" | "red";
}

const colorClasses = {
  blue: {
    iconBg: "#1e3a5f",
    icon: "#60a5fa",
    ring: "group-hover:ring-blue-800",
  },
  purple: {
    iconBg: "#2e1065",
    icon: "#a78bfa",
    ring: "group-hover:ring-purple-800",
  },
  green: {
    iconBg: "#052e16",
    icon: "#34d399",
    ring: "group-hover:ring-green-800",
  },
  amber: {
    iconBg: "#451a03",
    icon: "#fbbf24",
    ring: "group-hover:ring-amber-800",
  },
  red: {
    iconBg: "#450a0a",
    icon: "#f87171",
    ring: "group-hover:ring-red-800",
  },
};

export default function KPICard({
  title,
  value,
  subtitle,
  icon,
  trend,
  color = "blue",
}: KPICardProps) {
  const colors = colorClasses[color];

  return (
    <div
      className={`group relative overflow-hidden rounded-xl p-6 shadow-sm ring-1 transition-all hover:shadow-md hover:ring-2 ${colors.ring}`}
      style={{ background: "#0d1117" }}
    >
      <div
        className="absolute -right-4 -top-4 h-24 w-24 rounded-full opacity-20"
        style={{ background: colors.iconBg }}
      />

      <div className="relative flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium" style={{ color: "#6b7280" }}>{title}</p>
          <div className="mt-2 flex items-baseline gap-2">
            <p className="text-3xl font-bold text-white">{value}</p>
            {subtitle && (
              <span className="text-sm" style={{ color: "#4b5563" }}>{subtitle}</span>
            )}
          </div>

          {trend && (
            <div className="mt-3 flex items-center gap-1">
              <span
                className="inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium"
                style={trend.isPositive
                  ? { background: "#052e16", color: "#86efac" }
                  : { background: "#450a0a", color: "#fca5a5" }
                }
              >
                <svg
                  className={`h-3 w-3 ${trend.isPositive ? "" : "rotate-180"}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                {Math.abs(trend.value)}%
              </span>
              <span className="text-xs" style={{ color: "#4b5563" }}>vs last period</span>
            </div>
          )}
        </div>

        <div className="rounded-lg p-3" style={{ background: colors.iconBg }}>
          <div style={{ color: colors.icon }}>{icon}</div>
        </div>
      </div>
    </div>
  );
}

export const Icons = {
  Users: () => (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  Eye: () => (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  ),
  Cursor: () => (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
    </svg>
  ),
  Mail: () => (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  Clock: () => (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Bounce: () => (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  ),
};
