"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { GlobalParamsData, GlobalParamRow } from "@/types/analytics";

const CARD: React.CSSProperties = {
  background: "#0d1117",
  border: "1px solid #1f2937",
};
const ACCENT = "#14B8A6";

function BreakdownTable({
  title,
  dimensionLabel,
  countLabel,
  rows,
  truncate,
}: {
  title: string;
  dimensionLabel: string;
  countLabel: string;
  rows: GlobalParamRow[];
  truncate?: boolean;
}) {
  const [selected, setSelected] = useState<string | null>(null);
  if (!rows || rows.length === 0) {
    return (
      <div className="rounded-xl p-6" style={CARD}>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
          {title}
        </h3>
        <p className="mt-6 text-center text-sm" style={{ color: "#4b5563" }}>
          No data available
        </p>
      </div>
    );
  }
  return (
    <div className="rounded-xl overflow-hidden" style={CARD}>
      <div className="px-5 py-4" style={{ borderBottom: "1px solid #1f2937" }}>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
          {title}
        </h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead style={{ background: "#111827" }}>
            <tr>
              {[dimensionLabel, countLabel, "Users", "% Share"].map((h, i) => (
                <th
                  key={h}
                  className={`px-5 py-3 text-xs font-medium uppercase tracking-wider ${i === 0 ? "text-left" : "text-right"}`}
                  style={{
                    color: "#6b7280",
                    ...(i === 3 ? { width: "1px", whiteSpace: "nowrap" } : {}),
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              const isSelected = selected === row.dimension;
              const displayLabel =
                truncate && row.dimension.length > 52
                  ? row.dimension.slice(0, 50) + "…"
                  : row.dimension;
              return (
                <tr
                  key={row.dimension}
                  onClick={() => setSelected(isSelected ? null : row.dimension)}
                  title={truncate ? row.dimension : undefined}
                  className="cursor-pointer transition-colors"
                  style={{
                    borderBottom: "1px solid #1f2937",
                    background: isSelected
                      ? "rgba(20,184,166,0.08)"
                      : undefined,
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected)
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.03)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = isSelected
                      ? "rgba(20,184,166,0.08)"
                      : "";
                  }}
                >
                  <td className="px-5 py-3 font-medium text-white">
                    <div className="flex items-center gap-2">
                      {isSelected && (
                        <span
                          className="h-2 w-2 shrink-0 rounded-full"
                          style={{ background: ACCENT }}
                        />
                      )}
                      <span className="break-all">{displayLabel}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3 text-right font-semibold text-white">
                    {row.count.toLocaleString()}
                  </td>
                  <td
                    className="px-5 py-3 text-right"
                    style={{ color: "#9ca3af" }}
                  >
                    {row.users.toLocaleString()}
                  </td>
                  <td className="px-5 py-3" style={{ whiteSpace: "nowrap" }}>
                    <div className="flex items-center justify-end gap-2">
                      <div
                        className="h-1.5 w-16 overflow-hidden rounded-full"
                        style={{ background: "#1f2937" }}
                      >
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${Math.min(row.percentage, 100)}%`,
                            background: ACCENT,
                          }}
                        />
                      </div>
                      <span
                        className="inline-block w-12 text-right"
                        style={{
                          color: "#6b7280",
                          fontVariantNumeric: "tabular-nums",
                        }}
                      >
                        {row.percentage}%
                      </span>
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

function GlobalParamsInnerPage() {
  const [data, setData] = useState<GlobalParamsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshKey, setRefreshKey] = useState(0);
  const [lastFetched, setLastFetched] = useState<Date | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const qs = searchParams.toString();
        const res = await fetch(
          `/api/analytics/global-params${qs ? `?${qs}` : ""}`,
          { cache: "no-store" },
        );
        if (!res.ok) {
          const b = await res.json().catch(() => ({}));
          throw new Error(
            b.details || b.error || "Failed to fetch global parameters",
          );
        }
        setData(await res.json());
        setLastFetched(new Date());
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [refreshKey, searchParams]);

  return (
    <div className="min-h-screen" style={{ background: "#030712" }}>
      <header
        style={{ background: "#0d1117", borderBottom: "1px solid #1f2937" }}
      >
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Link
                href="/dashboard"
                className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors hover:bg-white/5"
                style={{ color: "#6b7280" }}
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back
              </Link>
              <div className="h-5 w-px" style={{ background: "#1f2937" }} />
              <div className="flex items-center gap-2.5">
                <div
                  className="rounded-lg p-2"
                  style={{ background: "#042f2e", color: "#2dd4bf" }}
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">
                    Global Parameters
                  </h1>
                  <p className="text-xs" style={{ color: "#4b5563" }}>
                    Mandatory event dimensions — Live from Google Analytics 4
                    {lastFetched &&
                      ` · updated ${lastFetched.toLocaleTimeString()}`}
                  </p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setRefreshKey((k) => k + 1)}
              disabled={isLoading}
              className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors hover:bg-white/5 disabled:opacity-50"
              style={{ border: "1px solid #1f2937", color: "#9ca3af" }}
            >
              <svg
                className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              {isLoading ? "Refreshing…" : "Refresh"}
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {error && (
          <div
            className="mb-6 rounded-lg p-4 text-sm text-red-400"
            style={{ background: "#1c0a0a", border: "1px solid #7f1d1d" }}
          >
            {error}
          </div>
        )}
        {isLoading && !data && (
          <div className="flex flex-col items-center justify-center py-24">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-teal-900 border-t-teal-500" />
            <p className="mt-4 text-sm" style={{ color: "#4b5563" }}>
              Loading global parameters…
            </p>
          </div>
        )}
        {data && (
          <>
            {/* Date range + timestamp */}
            <div className="mb-8 flex flex-wrap items-center gap-3">
              <span
                className="rounded-full px-3 py-1 text-xs font-medium"
                style={{
                  background: "#042f2e",
                  color: "#2dd4bf",
                  border: "1px solid #0d9488",
                }}
              >
                {data.dateRange.startDate} → {data.dateRange.endDate}
              </span>
              <span className="text-xs" style={{ color: "#4b5563" }}>
                Last updated: {new Date(data.lastUpdated).toLocaleString()}
              </span>
            </div>

            {/* Row 1: Device Type + UTM Medium (2 cols) | Browser Type (full width) */}
            <section className="mb-6 grid gap-4 lg:grid-cols-2">
              <BreakdownTable
                title="Device Type"
                dimensionLabel="Device"
                countLabel="Sessions"
                rows={data.deviceType}
              />
              <BreakdownTable
                title="UTM Medium"
                dimensionLabel="Medium"
                countLabel="Sessions"
                rows={data.utmMedium}
              />
            </section>
            <section className="mb-6">
              <BreakdownTable
                title="Browser Type"
                dimensionLabel="Browser"
                countLabel="Sessions"
                rows={data.browserType}
              />
            </section>

            {/* Row 2: Traffic Source | Campaign Name */}
            <section className="mb-6 grid gap-4 lg:grid-cols-2">
              <BreakdownTable
                title="Traffic Source"
                dimensionLabel="Source"
                countLabel="Sessions"
                rows={data.trafficSource}
              />
              <BreakdownTable
                title="Campaign Name"
                dimensionLabel="Campaign"
                countLabel="Sessions"
                rows={data.campaignName}
              />
            </section>

            {/* Row 3: Campaign ID | Page Load Time */}
            <section className="mb-6 grid gap-4 lg:grid-cols-2">
              <BreakdownTable
                title="Campaign ID"
                dimensionLabel="Campaign ID"
                countLabel="Sessions"
                rows={data.campaignId}
              />
              <BreakdownTable
                title="Page Load Time"
                dimensionLabel="Load Time (ms)"
                countLabel="Events"
                rows={data.pageLoadTime}
              />
            </section>

            {/* Row 4: Country */}
            <section className="mb-6">
              <BreakdownTable
                title="Country"
                dimensionLabel="Country"
                countLabel="Sessions"
                rows={data.country}
              />
            </section>

            {/* Row 5: Page Path */}
            <section className="mb-6">
              <BreakdownTable
                title="Page Name / Path"
                dimensionLabel="Page Path"
                countLabel="Page Views"
                rows={data.pagePath}
                truncate
              />
            </section>

            {/* Row 6: Page URL */}
            <section className="mb-6">
              <BreakdownTable
                title="Page URL"
                dimensionLabel="URL"
                countLabel="Page Views"
                rows={data.pageLocation}
                truncate
              />
            </section>
          </>
        )}
      </main>
    </div>
  );
}

export default function GlobalParamsPage() {
  return (
    <Suspense>
      <GlobalParamsInnerPage />
    </Suspense>
  );
}
