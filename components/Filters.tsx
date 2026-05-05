"use client";

import React, { useState, useEffect, useCallback } from "react";
import { FilterParams } from "@/types/analytics";

interface FiltersProps {
  onFilterChange: (filters: FilterParams) => void;
  isLoading?: boolean;
}


const INPUT_STYLE: React.CSSProperties = {
  width: "100%",
  borderRadius: "8px",
  border: "1px solid #1f2937",
  background: "#111827",
  padding: "8px 12px",
  fontSize: "14px",
  color: "#f9fafb",
  outline: "none",
};

export default function Filters({ onFilterChange, isLoading }: FiltersProps) {
  const [filters, setFilters] = useState<FilterParams>({
    start_date: "",
    end_date: "",
    device_type: "all",
    traffic_source: "all",
    campaign_name: "all",
    country: "all",
  });
  const [debounceTimer, setDebounceTimer] = useState<NodeJS.Timeout | null>(null);

  const handleFilterChange = useCallback(
    (key: keyof FilterParams, value: string) => {
      setFilters((prev) => ({ ...prev, [key]: value }));
      if (debounceTimer) clearTimeout(debounceTimer);
      const timer = setTimeout(() => {
        onFilterChange({ ...filters, [key]: value });
      }, 300);
      setDebounceTimer(timer);
    },
    [filters, onFilterChange, debounceTimer]
  );

  useEffect(() => {
    return () => { if (debounceTimer) clearTimeout(debounceTimer); };
  }, [debounceTimer]);

  const handleReset = () => {
    const defaultFilters: FilterParams = {
      start_date: "", end_date: "", device_type: "all",
      traffic_source: "all", campaign_name: "all", country: "all",
    };
    setFilters(defaultFilters);
    onFilterChange(defaultFilters);
  };

  const hasActiveFilters =
    filters.start_date || filters.end_date ||
    filters.device_type !== "all" || filters.traffic_source !== "all" ||
    filters.campaign_name !== "all" || filters.country !== "all";

  return (
    <div className="rounded-xl p-4" style={{ background: "#0d1117", border: "1px solid #1f2937" }}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {/* Start Date */}
        <div className="space-y-1">
          <label htmlFor="start_date" className="block text-xs font-medium" style={{ color: "#6b7280" }}>
            Start Date
          </label>
          <input
            type="date"
            id="start_date"
            value={filters.start_date || ""}
            onChange={(e) => handleFilterChange("start_date", e.target.value)}
            style={INPUT_STYLE}
          />
        </div>

        {/* End Date */}
        <div className="space-y-1">
          <label htmlFor="end_date" className="block text-xs font-medium" style={{ color: "#6b7280" }}>
            End Date
          </label>
          <input
            type="date"
            id="end_date"
            value={filters.end_date || ""}
            onChange={(e) => handleFilterChange("end_date", e.target.value)}
            style={INPUT_STYLE}
          />
        </div>

        {/* Reset */}
        <div className="flex items-end">
          <button
            onClick={handleReset}
            disabled={!hasActiveFilters || isLoading}
            className="flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors"
            style={hasActiveFilters
              ? { background: "#1f2937", color: "#d1d5db" }
              : { background: "#111827", color: "#4b5563", cursor: "not-allowed" }
            }
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Reset
          </button>
        </div>
      </div>

      {/* Active filter badges */}
      {hasActiveFilters && (
        <div className="mt-4 flex flex-wrap items-center gap-2 pt-4" style={{ borderTop: "1px solid #1f2937" }}>
          <span className="text-xs" style={{ color: "#6b7280" }}>Active filters:</span>
          {filters.start_date && (
            <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium" style={{ background: "#1e3a5f", color: "#93c5fd" }}>
              From: {filters.start_date}
            </span>
          )}
          {filters.end_date && (
            <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium" style={{ background: "#1e3a5f", color: "#93c5fd" }}>
              To: {filters.end_date}
            </span>
          )}
          {filters.device_type !== "all" && (
            <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium" style={{ background: "#2e1065", color: "#c4b5fd" }}>
              Device: {filters.device_type}
            </span>
          )}
          {filters.traffic_source !== "all" && (
            <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium" style={{ background: "#052e16", color: "#86efac" }}>
              Source: {filters.traffic_source}
            </span>
          )}
          {filters.country !== "all" && (
            <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium" style={{ background: "#451a03", color: "#fde68a" }}>
              Country: {filters.country}
            </span>
          )}
        </div>
      )}

      {isLoading && (
        <div className="mt-4 flex items-center gap-2 pt-4" style={{ borderTop: "1px solid #1f2937" }}>
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-blue-500 border-t-transparent" />
          <span className="text-sm" style={{ color: "#6b7280" }}>Updating data...</span>
        </div>
      )}
    </div>
  );
}
