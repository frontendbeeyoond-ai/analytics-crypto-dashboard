"use client";

import Link from "next/link";
import { EventCountData, FilterParams } from "@/types/analytics";

interface DataTableProps {
  data: EventCountData[];
  filters?: FilterParams;
}

const CARD: React.CSSProperties = { background: "#0d1117", border: "1px solid #1f2937" };

import React from "react";

const eventNameLabels: Record<string, string> = {
  page_view: "Page View",
  presale_click_cta: "Presale Click",
  online_shop_click: "Online Shop Click",
  documents_click: "Documents Click",
  newsletter_signup: "Newsletter Signup",
  social_click: "Social Click",
  trustpilot_click: "Trustpilot Click",
  scroll_depth: "Scroll Depth",
  session_end: "Session End",
};

const eventIcons: Record<string, React.ReactNode> = {
  page_view: (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  ),
  presale_click_cta: (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2z" />
    </svg>
  ),
  online_shop_click: (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  documents_click: (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  newsletter_signup: (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  social_click: (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
    </svg>
  ),
  trustpilot_click: (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  ),
  scroll_depth: (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  ),
  session_end: (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

function buildDetailHref(base: string, filters?: FilterParams): string {
  if (!filters) return base;
  const params = new URLSearchParams();
  if (filters.start_date) params.set("start_date", filters.start_date);
  if (filters.end_date) params.set("end_date", filters.end_date);
  if (filters.device_type && filters.device_type !== "all") params.set("device_type", filters.device_type);
  if (filters.traffic_source && filters.traffic_source !== "all") params.set("traffic_source", filters.traffic_source);
  if (filters.campaign_name && filters.campaign_name !== "all") params.set("campaign_name", filters.campaign_name);
  if (filters.country && filters.country !== "all") params.set("country", filters.country);
  const qs = params.toString();
  return qs ? `${base}?${qs}` : base;
}

export default function DataTable({ data, filters }: DataTableProps) {
  if (data.length === 0) {
    return (
      <div className="rounded-xl p-6" style={CARD}>
        <h3 className="text-lg font-semibold text-white">Events Overview</h3>
        <p className="mt-1 text-sm" style={{ color: "#6b7280" }}>Distribution of tracked events</p>
        <div className="mt-8 flex flex-col items-center justify-center py-12">
          <svg className="h-12 w-12" style={{ color: "#374151" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          <p className="mt-4 text-sm" style={{ color: "#6b7280" }}>No event data available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl overflow-hidden" style={CARD}>
      <div className="px-6 py-4" style={{ borderBottom: "1px solid #1f2937" }}>
        <h3 className="text-lg font-semibold text-white">Events Overview</h3>
        <p className="mt-1 text-sm" style={{ color: "#6b7280" }}>Distribution of tracked events</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead style={{ background: "#111827" }}>
            <tr>
              {["Event Name", "Event Count", "% of Total", "Conversion Rate"].map((h, i) => (
                <th key={h} className={`whitespace-nowrap px-6 py-3 text-xs font-medium uppercase tracking-wider ${i === 0 ? "text-left" : "text-right"}`} style={{ color: "#6b7280" }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row) => {
              const detailBase: Record<string, string> = {
                newsletter_signup: "/dashboard/newsletter",
                page_view: "/dashboard/events/page_view",
                scroll_depth: "/dashboard/events/scroll_depth",
                social_click: "/dashboard/events/social_click",
                presale_click_cta: "/dashboard/presale",
                online_shop_click: "/dashboard/onlineshop",
                documents_click: "/dashboard/documents",
                trustpilot_click: "/dashboard/trustpilot",
              };
              const href = detailBase[row.eventName]
                ? buildDetailHref(detailBase[row.eventName], filters)
                : undefined;
              return (
                <tr
                  key={row.eventName}
                  className={`transition-colors ${href ? "group" : ""}`}
                  style={{ borderBottom: "1px solid #1f2937" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.03)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "")}
                >
                  <td className="whitespace-nowrap px-6 py-4">
                    {href ? (
                      <Link href={href} className="flex items-center gap-3">
                        <div className="rounded-lg p-2" style={{ background: "#1e3a5f", color: "#60a5fa" }}>
                          {eventIcons[row.eventName]}
                        </div>
                        <span className="text-sm font-medium text-blue-400 underline-offset-2 group-hover:underline">
                          {eventNameLabels[row.eventName]}
                        </span>
                        <svg className="h-3.5 w-3.5" style={{ color: "#3b82f6" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ) : (
                      <div className="flex items-center gap-3">
                        <div className="rounded-lg p-2" style={{ background: "#1e3a5f", color: "#60a5fa" }}>
                          {eventIcons[row.eventName] || (
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          )}
                        </div>
                        <span className="text-sm font-medium text-white">
                          {eventNameLabels[row.eventName] || row.eventName}
                        </span>
                      </div>
                    )}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-semibold text-white">
                    {row.count.toLocaleString()}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-right">
                    <span className="inline-flex rounded-full px-2.5 py-0.5 text-sm font-medium" style={{ background: "#1f2937", color: "#9ca3af" }}>
                      {row.percentage}%
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-right">
                    <span
                      className="text-sm font-medium"
                      style={{
                        color: row.conversionRate > 5 ? "#34d399" : row.conversionRate > 1 ? "#fbbf24" : "#6b7280",
                      }}
                    >
                      {row.conversionRate}%
                    </span>
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
