"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import DataTable from "@/components/DataTable";
import { EventCountData } from "@/types/analytics";

const BG_DEEP   = "#030712";
const CARD_BG   = "#0d1117";
const BORDER    = "#1f2937";
const TEXT_MUTED = "#6b7280";
const TEXT_DIM   = "#9ca3af";

const EVENT_COLORS: Record<string, string> = {
  page_view:         "#3b82f6",
  presale_click_cta: "#8b5cf6",
  newsletter_signup: "#10b981",
  online_shop_click: "#f59e0b",
  documents_click:   "#06b6d4",
  trustpilot_click:  "#22c55e",
  social_click:      "#f97316",
  scroll_depth:      "#ec4899",
  session_end:       "#6b7280",
};

const EVENT_DETAIL_LINKS: Record<string, string> = {
  page_view:   "/dashboard/events/page_view",
  scroll_depth: "/dashboard/events/scroll_depth",
};

function getEventColor(name: string) {
  return EVENT_COLORS[name] ?? "#60a5fa";
}

function EventBar({ name, count, max }: { name: string; count: number; max: number }) {
  const pct    = max > 0 ? (count / max) * 100 : 0;
  const color  = getEventColor(name);
  const href   = EVENT_DETAIL_LINKS[name];

  const nameCell =  <div className="w-44 shrink-0 text-sm font-medium text-white truncate" title={name}>{name}</div>


  return (
    <div className="flex items-center gap-3 py-3" style={{ borderBottom: `1px solid ${BORDER}` }}>
      {nameCell}
      <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: "#1f2937" }}>
        <div className="h-full rounded-full transition-all duration-500" style={{ width: `${pct}%`, background: color }} />
      </div>
      <div className="w-20 text-right text-sm font-semibold text-white shrink-0">{count.toLocaleString()}</div>
      <div className="w-14 text-right text-xs shrink-0" style={{ color: TEXT_MUTED }}>{pct.toFixed(1)}%</div>
    </div>
  );
}

export default function GTMEventsPage() {
  const [events,    setEvents]    = useState<EventCountData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error,     setError]     = useState<string | null>(null);

  async function load() {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/analytics");
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.details || body.error || `Server error ${res.status}`);
      }
      const json = await res.json();
      setEvents(json.events ?? []);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unknown error");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => { load(); }, []);

  const totalFired   = events.reduce((s, e) => s + e.count, 0);
  const maxCount     = events.length > 0 ? Math.max(...events.map((e) => e.count)) : 1;
  const uniqueEvents = events.length;

  return (
    <div className="min-h-screen p-6" style={{ background: BG_DEEP }}>

      {/* Page header */}
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
          <span className="ml-4 text-sm" style={{ color: TEXT_MUTED }}>Loading events…</span>
        </div>
      )}

      {/* Error */}
      {error && !isLoading && (
        <div className="flex flex-col items-center justify-center py-24 gap-4">
          <div className="rounded-full p-4" style={{ background: "#1c0a0a", border: "1px solid #7f1d1d" }}>
            <svg className="h-8 w-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="text-center max-w-md">
            <p className="text-base font-semibold text-red-400">Failed to load event data</p>
            <p className="mt-1 text-sm" style={{ color: TEXT_MUTED }}>{error}</p>
          </div>
          <button
            onClick={load}
            className="mt-2 rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
            style={{ background: CARD_BG, border: `1px solid ${BORDER}` }}
          >
            Retry
          </button>
        </div>
      )}

      {!isLoading && !error && (
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
              <p className="mt-2 text-xl font-bold text-white truncate">{events[0]?.eventName ?? "—"}</p>
              <p className="text-sm mt-0.5" style={{ color: TEXT_DIM }}>{(events[0]?.count ?? 0).toLocaleString()} triggers</p>
            </div>
          </div>

          {/* Events Overview Table */}
          <section className="mb-8">
            <DataTable data={events} />
          </section>

          {/* Event Breakdown bars */}
          {events.length > 0 && (
            <div className="rounded-xl p-6" style={{ background: CARD_BG, border: `1px solid ${BORDER}` }}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-base font-semibold text-white">Event Breakdown</h2>
                <span className="text-xs px-2 py-1 rounded-full font-medium" style={{ background: "#1e3a5f", color: "#93c5fd" }}>
                  {uniqueEvents} events
                </span>
              </div>
              <div className="flex items-center gap-3 pb-2 mb-1" style={{ borderBottom: `1px solid ${BORDER}` }}>
                <div className="w-44 text-xs font-semibold uppercase tracking-wider" style={{ color: TEXT_MUTED }}>Event Name</div>
                <div className="flex-1 text-xs font-semibold uppercase tracking-wider" style={{ color: TEXT_MUTED }}>Distribution</div>
                <div className="w-20 text-right text-xs font-semibold uppercase tracking-wider" style={{ color: TEXT_MUTED }}>Count</div>
                <div className="w-14 text-right text-xs font-semibold uppercase tracking-wider" style={{ color: TEXT_MUTED }}>Share</div>
              </div>
              {events.map((ev, i) => (
                <EventBar key={ev.eventName ?? String(i)} name={ev.eventName} count={ev.count} max={maxCount} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
