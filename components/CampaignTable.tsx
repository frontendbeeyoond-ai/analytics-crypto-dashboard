"use client";

import React from "react";
import { CampaignData } from "@/types/analytics";

const CARD: React.CSSProperties = { background: "#0d1117", border: "1px solid #1f2937" };

export default function CampaignTable({ data }: { data: CampaignData[] }) {
  if (data.length === 0) {
    return (
      <div className="rounded-xl p-6" style={CARD}>
        <h3 className="text-lg font-semibold text-white">Campaign Performance</h3>
        <p className="mt-1 text-sm" style={{ color: "#6b7280" }}>Analytics by marketing campaign</p>
        <div className="mt-8 flex flex-col items-center justify-center py-12">
          <svg className="h-12 w-12" style={{ color: "#374151" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
          </svg>
          <p className="mt-4 text-sm" style={{ color: "#6b7280" }}>No campaign data available</p>
        </div>
      </div>
    );
  }

  const rankColors: React.CSSProperties[] = [
    { background: "#2e1065", color: "#c4b5fd" },
    { background: "#1e3a5f", color: "#93c5fd" },
    { background: "#052e16", color: "#86efac" },
    { background: "#1f2937", color: "#9ca3af" },
  ];

  return (
    <div className="rounded-xl overflow-hidden" style={CARD}>
      <div className="px-6 py-4" style={{ borderBottom: "1px solid #1f2937" }}>
        <h3 className="text-lg font-semibold text-white">Campaign Performance</h3>
        <p className="mt-1 text-sm" style={{ color: "#6b7280" }}>Analytics by marketing campaign</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead style={{ background: "#111827" }}>
            <tr>
              {["Campaign","Impressions","Clicks","CTR","Conversions","Conv. Rate"].map((h, i) => (
                <th
                  key={h}
                  className={`whitespace-nowrap px-6 py-3 text-xs font-medium uppercase tracking-wider ${i === 0 ? "text-left" : "text-right"}`}
                  style={{ color: "#6b7280" }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((campaign, index) => (
              <tr
                key={campaign.name}
                style={{ borderBottom: "1px solid #1f2937" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.03)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "")}
              >
                <td className="whitespace-nowrap px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold" style={rankColors[Math.min(index, 3)]}>
                      {index + 1}
                    </div>
                    <span className="text-sm font-medium text-white">{campaign.name}</span>
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-right text-sm" style={{ color: "#9ca3af" }}>{campaign.impressions.toLocaleString()}</td>
                <td className="whitespace-nowrap px-6 py-4 text-right text-sm" style={{ color: "#9ca3af" }}>{campaign.clicks.toLocaleString()}</td>
                <td className="whitespace-nowrap px-6 py-4 text-right">
                  <span className="inline-flex rounded-full px-2.5 py-0.5 text-sm font-medium"
                    style={campaign.ctr > 5 ? { background: "#052e16", color: "#86efac" } : campaign.ctr > 2 ? { background: "#451a03", color: "#fde68a" } : { background: "#1f2937", color: "#9ca3af" }}
                  >
                    {campaign.ctr}%
                  </span>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-right text-sm" style={{ color: "#9ca3af" }}>{campaign.conversions.toLocaleString()}</td>
                <td className="whitespace-nowrap px-6 py-4 text-right">
                  <span className="text-sm font-medium"
                    style={{ color: campaign.conversionRate > 10 ? "#34d399" : campaign.conversionRate > 5 ? "#fbbf24" : "#6b7280" }}
                  >
                    {campaign.conversionRate}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
