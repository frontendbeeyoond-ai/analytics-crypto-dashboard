"use client";

import { useState, useEffect } from "react";
import DataTable from "@/components/DataTable";
import { FilterParams } from "@/types/analytics";
import Filters from "@/components/Filters";
interface EventRow {
  name: string;
  count: number;
}

interface DashboardData {
  events: EventRow[];
  _meta?: { totalEvents: number };
}

const CARD_BG = "#0d1117";
const BORDER = "#1f2937";
const TEXT_MUTED = "#6b7280";
const TEXT_DIM = "#9ca3af";

const EVENT_COLORS: Record<string, string> = {
  page_view: "#3b82f6",
  presale_click_cta: "#8b5cf6",
  newsletter_signup: "#10b981",
  online_shop_click: "#f59e0b",
  documents_click: "#06b6d4",
  trustpilot_click: "#22c55e",
  social_click: "#f97316",
  scroll_depth: "#ec4899",
  session_end: "#6b7280",
};

function getEventColor(name: string) {
  return EVENT_COLORS[name] ?? "#60a5fa";
}

function EventBar({ name, count, max }: { name: string; count: number; max: number }) {
  const pct = max > 0 ? (count / max) * 100 : 0;
  const color = getEventColor(name);
  return (
    <div className="flex items-center gap-3 py-3" style={{ borderBottom: `1px solid ${BORDER}` }}>
      <div className="w-40 shrink-0 text-sm font-medium text-white truncate" title={name}>
        {name}
      </div>
      <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: "#1f2937" }}>
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${pct}%`, background: color }}
        />
      </div>
      <div className="w-20 text-right text-sm font-semibold text-white shrink-0">
        {count.toLocaleString()}
      </div>
      <div className="w-14 text-right text-xs shrink-0" style={{ color: TEXT_MUTED }}>
        {pct.toFixed(1)}%
      </div>
    </div>
  );
}

export default function GTMEventsPage() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<FilterParams>({});

  useEffect(() => {
    async function load() {
      setIsLoading(true);
      try {
        const res = await fetch("/api/analytics");
        if (!res.ok) throw new Error("Failed to fetch analytics");
        const json = await res.json();
        setData(json);
      } catch (e) {
        setError(e instanceof Error ? e.message : "Unknown error");
      } finally {
        setIsLoading(false);
      }
    }
    load();
  }, []);

  const events: EventRow[] = data?.events ?? [];
  const totalFired = events.reduce((s, e) => s + e.count, 0);
  const maxCount = events.length > 0 ? Math.max(...events.map((e) => e.count)) : 1;
  const uniqueEvents = events.length;

  return (
    <div className="min-h-screen p-6" style={{ background: "#030712" }}>
      {/* Page title */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">GTM Events</h1>
        <p className="mt-1 text-sm" style={{ color: TEXT_MUTED }}>
          Google Tag Manager event tracking from GA4
        </p>
      </div>


      {/* Loading */}
      {isLoading && (
        <div className="flex items-center justify-center py-24">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-900 border-t-blue-500" />
          <span className="ml-4 text-sm" style={{ color: TEXT_MUTED }}>Loading events...</span>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="mb-6 rounded-lg p-4" style={{ background: "#1c0a0a", border: `1px solid #7f1d1d` }}>
          <p className="text-sm text-red-400">{error}</p>
        </div>
      )}

      {!isLoading && data && (
        <>

          {/* KPI row */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <div className="rounded-xl p-5" style={{ background: CARD_BG, border: `1px solid ${BORDER}` }}>
              <p className="text-xs font-medium uppercase tracking-wider" style={{ color: TEXT_MUTED }}>Total Events Fired</p>
              <p className="mt-2 text-3xl font-bold text-white">{totalFired.toLocaleString()}</p>
            </div>
            <div className="rounded-xl p-5" style={{ background: CARD_BG, border: `1px solid ${BORDER}` }}>
              <p className="text-xs font-medium uppercase tracking-wider" style={{ color: TEXT_MUTED }}>Unique Event Types</p>
              <p className="mt-2 text-3xl font-bold text-white">{uniqueEvents}</p>
            </div>
            <div className="rounded-xl p-5 col-span-2 lg:col-span-1" style={{ background: CARD_BG, border: `1px solid ${BORDER}` }}>
              <p className="text-xs font-medium uppercase tracking-wider" style={{ color: TEXT_MUTED }}>Top Event</p>
              <p className="mt-2 text-xl font-bold text-white truncate">
                {events[0]?.name ?? "—"}
              </p>
              <p className="text-sm mt-0.5" style={{ color: TEXT_DIM }}>
                {events[0]?.count.toLocaleString() ?? "0"} triggers
              </p>
            </div>
          </div>
          {/* events lisyt */}
           <section className="mb-8">
             <DataTable data={data.events} />
            </section>


          {/* Events breakdown */}
          <div className="rounded-xl p-6" style={{ background: CARD_BG, border: `1px solid ${BORDER}` }}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-semibold text-white">Event Breakdown</h2>
              <span className="text-xs px-2 py-1 rounded-full font-medium" style={{ background: "#1e3a5f", color: "#93c5fd" }}>
                {uniqueEvents} events
              </span>
            </div>

            {/* Column headers */}
            <div className="flex items-center gap-3 pb-2 mb-1" style={{ borderBottom: `1px solid ${BORDER}` }}>
              <div className="w-40 text-xs font-semibold uppercase tracking-wider" style={{ color: TEXT_MUTED }}>Event Name</div>
              <div className="flex-1 text-xs font-semibold uppercase tracking-wider" style={{ color: TEXT_MUTED }}>Distribution</div>
              <div className="w-20 text-right text-xs font-semibold uppercase tracking-wider" style={{ color: TEXT_MUTED }}>Count</div>
              <div className="w-14 text-right text-xs font-semibold uppercase tracking-wider" style={{ color: TEXT_MUTED }}>Share</div>
            </div>

            {events.length > 0 ? (
              events.map((ev) => (
                <EventBar key={ev.name} name={ev.name} count={ev.count} max={maxCount} />
              ))
            ) : (
              <p className="py-8 text-center text-sm" style={{ color: TEXT_MUTED }}>No event data available</p>
            )}
          </div>

          {/* Event legend */}
          <div className="mt-6 rounded-xl p-6" style={{ background: CARD_BG, border: `1px solid ${BORDER}` }}>
            <h2 className="text-base font-semibold text-white mb-4">Event Legend</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {Object.entries(EVENT_COLORS).map(([name, color]) => (
                <div key={name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full shrink-0" style={{ background: color }} />
                  <span className="text-xs truncate" style={{ color: TEXT_DIM }}>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
