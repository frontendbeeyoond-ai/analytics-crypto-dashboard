"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

// ── Types ─────────────────────────────────────────────────────────────────────
type PresetKey =
  | "custom" | "today" | "yesterday"
  | "thisWeek" | "7days" | "lastWeek"
  | "28days" | "30days" | "thisMonth" | "lastMonth" | "90days";

const PRESETS: { key: PresetKey; label: string; arrow?: boolean }[] = [
  { key: "custom",    label: "Custom" },
  { key: "today",     label: "Today" },
  { key: "yesterday", label: "Yesterday" },
  { key: "thisWeek",  label: "This week (Sun – Today)", arrow: true },
  { key: "7days",     label: "Last 7 days" },
  { key: "lastWeek",  label: "Last week (Sun – Sat)", arrow: true },
  { key: "28days",    label: "Last 28 days" },
  { key: "30days",    label: "Last 30 days" },
  { key: "thisMonth", label: "This month" },
  { key: "lastMonth", label: "Last month" },
  { key: "90days",    label: "Last 90 days" },
];

const MONTHS_SHORT = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const MONTHS_LONG  = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const WEEK_DAYS    = ["S","M","T","W","T","F","S"];

// ── Date helpers ──────────────────────────────────────────────────────────────
function fmt(d: Date): string { return d.toISOString().slice(0, 10); }

function today0(): Date { const t = new Date(); t.setHours(0,0,0,0); return t; }

function addDays(d: Date, n: number): Date { const r = new Date(d); r.setDate(r.getDate() + n); return r; }

function presetDates(key: PresetKey): { start: string; end: string } {
  const t = today0();
  switch (key) {
    case "today":     return { start: fmt(t), end: fmt(t) };
    case "yesterday": { const y = addDays(t,-1); return { start: fmt(y), end: fmt(y) }; }
    case "thisWeek":  { const s = addDays(t,-t.getDay()); return { start: fmt(s), end: fmt(t) }; }
    case "7days":     return { start: fmt(addDays(t,-6)), end: fmt(t) };
    case "lastWeek":  { const s = addDays(t,-t.getDay()-7); return { start: fmt(s), end: fmt(addDays(s,6)) }; }
    case "28days":    return { start: fmt(addDays(t,-27)), end: fmt(t) };
    case "30days":    return { start: fmt(addDays(t,-29)), end: fmt(t) };
    case "thisMonth": { const s = new Date(t.getFullYear(),t.getMonth(),1); return { start: fmt(s), end: fmt(t) }; }
    case "lastMonth": {
      const s = new Date(t.getFullYear(),t.getMonth()-1,1);
      const e = new Date(t.getFullYear(),t.getMonth(),0);
      return { start: fmt(s), end: fmt(e) };
    }
    case "90days":    return { start: fmt(addDays(t,-89)), end: fmt(t) };
    default:          return { start: fmt(addDays(t,-27)), end: fmt(t) };
  }
}

function detectPreset(start: string, end: string): PresetKey {
  for (const { key } of PRESETS) {
    if (key === "custom") continue;
    const d = presetDates(key);
    if (d.start === start && d.end === end) return key;
  }
  return "custom";
}

function fmtDisplay(ds: string): string {
  if (!ds) return "";
  const [y, m, d] = ds.split("-").map(Number);
  return `${d} ${MONTHS_SHORT[m-1]} ${y}`;
}

function buttonLabel(start: string, end: string): string {
  const key = detectPreset(start, end);
  if (key !== "custom") return PRESETS.find(p => p.key === key)!.label;
  if (!start) return "Last 28 days";
  if (start === end) return fmtDisplay(start);
  return `${fmtDisplay(start)} – ${fmtDisplay(end)}`;
}

// ── Calendar ──────────────────────────────────────────────────────────────────
function calDays(year: number, month: number): (number | null)[] {
  const firstDay    = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month+1, 0).getDate();
  const arr: (number | null)[] = Array(firstDay).fill(null);
  for (let d = 1; d <= daysInMonth; d++) arr.push(d);
  return arr;
}

interface MonthCalProps {
  year: number; month: number;
  start: string; end: string; hover: string; picking: boolean;
  onDay: (ds: string) => void; onHover: (ds: string) => void;
}

function MonthCal({ year, month, start, end, hover, picking, onDay, onHover }: MonthCalProps) {
  const days   = calDays(year, month);
  const today  = fmt(today0());
  const effEnd = (picking && hover) ? hover : end;
  const [lo, hi] = (!start || !effEnd)
    ? [null, null]
    : start <= effEnd ? [start, effEnd] : [effEnd, start];

  function ds(d: number) {
    return `${year}-${String(month+1).padStart(2,"0")}-${String(d).padStart(2,"0")}`;
  }

  return (
    <div className="w-48" onMouseLeave={() => onHover("")}>
      <div className="grid grid-cols-7">
        {WEEK_DAYS.map((w, i) => (
          <div key={i} className="h-7 flex items-center justify-center text-xs font-medium" style={{ color: "#4b5563" }}>{w}</div>
        ))}
        {days.map((d, i) => {
          if (d === null) return <div key={`p${i}`} />;
          const cell   = ds(d);
          const isLo   = cell === lo;
          const isHi   = cell === hi;
          const sel    = isLo || isHi;
          const inR    = !!lo && !!hi && cell > lo && cell < hi;
          const notSame = lo !== hi;
          const isToday = cell === today;

          return (
            <div
              key={cell}
              className="relative flex items-center justify-center cursor-pointer select-none"
              style={{ height: "32px" }}
              onClick={() => onDay(cell)}
              onMouseEnter={() => onHover(cell)}
            >
              {inR     && <div className="absolute inset-y-1 inset-x-0" style={{ background: "rgba(59,130,246,0.14)" }} />}
              {isLo && notSame && <div className="absolute top-1 bottom-1 right-0 left-1/2" style={{ background: "rgba(59,130,246,0.14)" }} />}
              {isHi && notSame && <div className="absolute top-1 bottom-1 left-0 right-1/2" style={{ background: "rgba(59,130,246,0.14)" }} />}
              <div
                className="relative z-10 w-7 h-7 flex items-center justify-center rounded-full text-xs transition-colors"
                style={{
                  background: sel ? "#3b82f6" : "transparent",
                  color:      sel ? "#fff" : isToday ? "#3b82f6" : "#d1d5db",
                  fontWeight: sel ? 700 : isToday ? 600 : 400,
                  border:     isToday && !sel ? "1px solid #3b82f6" : "none",
                }}
              >
                {d}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── GlobalDatePicker ──────────────────────────────────────────────────────────
export default function GlobalDatePicker() {
  const router       = useRouter();
  const pathname     = usePathname();
  const searchParams = useSearchParams();

  const def = useMemo(() => presetDates("28days"), []);

  const urlStart = searchParams.get("start_date") || def.start;
  const urlEnd   = searchParams.get("end_date")   || def.end;

  const [open,    setOpen]    = useState(false);
  const [pStart,  setPStart]  = useState(urlStart);
  const [pEnd,    setPEnd]    = useState(urlEnd);
  const [pPreset, setPPreset] = useState<PresetKey>(() => detectPreset(urlStart, urlEnd));
  const [picking, setPicking] = useState(false);
  const [hover,   setHover]   = useState("");

  // Left calendar month (right is always +1)
  const [viewY, setViewY] = useState(() => {
    const t = new Date(); return t.getMonth() === 0 ? t.getFullYear()-1 : t.getFullYear();
  });
  const [viewM, setViewM] = useState(() => {
    const t = new Date(); return t.getMonth() === 0 ? 11 : t.getMonth()-1;
  });
  const rightM = viewM === 11 ? 0  : viewM+1;
  const rightY = viewM === 11 ? viewY+1 : viewY;

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function h(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, [open]);

  function openPicker() {
    const s = searchParams.get("start_date") || def.start;
    const e = searchParams.get("end_date")   || def.end;
    setPStart(s); setPEnd(e);
    setPPreset(detectPreset(s, e));
    setPicking(false); setHover("");
    // Set left calendar one month before start date
    const [sy, sm] = s.split("-").map(Number);
    const leftM = sm - 2; // 0-based, one before start
    if (leftM < 0) { setViewM(11); setViewY(sy-1); }
    else            { setViewM(leftM); setViewY(sy); }
    setOpen(true);
  }

  function selectPreset(key: PresetKey) {
    if (key === "custom") { setPPreset("custom"); return; }
    const { start, end } = presetDates(key);
    setPStart(start); setPEnd(end); setPPreset(key);
    setPicking(false); setHover("");
  }

  function handleDay(ds: string) {
    if (!picking) {
      setPStart(ds); setPEnd(""); setPicking(true); setPPreset("custom");
    } else {
      if (ds < pStart) { setPEnd(pStart); setPStart(ds); }
      else              { setPEnd(ds); }
      setPicking(false); setPPreset("custom");
    }
  }

  function apply() {
    const params = new URLSearchParams(searchParams.toString());
    params.set("start_date", pStart);
    params.set("end_date",   pEnd || pStart);
    router.replace(`${pathname}?${params.toString()}`);
    setOpen(false);
  }

  function prevM() { if (viewM===0){setViewY(y=>y-1);setViewM(11);}else setViewM(m=>m-1); }
  function nextM() { if (viewM===11){setViewY(y=>y+1);setViewM(0);}else setViewM(m=>m+1); }

  const label = buttonLabel(urlStart, urlEnd);

  return (
    <div className="relative" ref={ref}>
      {/* Trigger button */}
      <button
        onClick={openPicker}
        className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-white/5"
        style={{ background: "#0d1117", border: "1px solid #1f2937" }}
      >
        <svg className="h-4 w-4 shrink-0" style={{ color: "#3b82f6" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8"  y1="2" x2="8"  y2="6" />
          <line x1="3"  y1="10" x2="21" y2="10" />
        </svg>
        <span className="max-w-[200px] truncate">{label}</span>
        <svg className={`h-3 w-3 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} style={{ color: "#6b7280" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* Panel */}
      {open && (
        <div
          className="absolute right-0 top-full mt-2 z-50 flex rounded-xl shadow-2xl overflow-hidden"
          style={{ background: "#0d1117", border: "1px solid #1f2937" }}
        >
          {/* Preset list */}
          <div className="w-44 shrink-0 py-2" style={{ borderRight: "1px solid #1f2937" }}>
            {PRESETS.map(({ key, label: lbl, arrow }) => (
              <button
                key={key}
                onClick={() => selectPreset(key)}
                className="flex items-center justify-between w-full px-4 py-2 text-sm text-left transition-colors hover:bg-white/5"
                style={{
                  color:      pPreset === key ? "#3b82f6" : "#9ca3af",
                  background: pPreset === key ? "rgba(59,130,246,0.08)" : "transparent",
                  fontWeight: pPreset === key ? 500 : 400,
                }}
              >
                <span>{lbl}</span>
                {arrow && (
                  <svg className="h-3 w-3 shrink-0 ml-1 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <polyline points="9 6 15 12 9 18" />
                  </svg>
                )}
              </button>
            ))}
          </div>

          {/* Calendar area */}
          <div className="p-5 flex flex-col gap-4">
            {/* Date inputs */}
            <div className="flex items-end gap-3">
              <div>
                <p className="text-xs font-medium mb-1.5" style={{ color: "#6b7280" }}>Start date</p>
                <div
                  className="px-3 py-1.5 rounded-lg text-sm font-medium"
                  style={{
                    border: `2px solid ${!picking ? "#3b82f6" : "#374151"}`,
                    background: "#111827", color: "#f9fafb", minWidth: "120px",
                  }}
                >
                  {pStart ? fmtDisplay(pStart) : "—"}
                </div>
              </div>
              <span className="pb-2 text-lg" style={{ color: "#374151" }}>–</span>
              <div>
                <p className="text-xs font-medium mb-1.5" style={{ color: "#6b7280" }}>End date</p>
                <div
                  className="px-3 py-1.5 rounded-lg text-sm"
                  style={{
                    border: `2px solid ${picking ? "#3b82f6" : "#374151"}`,
                    background: "#111827", color: "#f9fafb", minWidth: "120px",
                  }}
                >
                  {pEnd ? fmtDisplay(pEnd) : (picking && hover ? fmtDisplay(hover) : "—")}
                </div>
              </div>
            </div>

            {/* Two-month calendar */}
            <div className="flex gap-5">
              {/* Left month */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <button onClick={prevM} className="p-1 rounded-lg hover:bg-white/5 transition-colors" style={{ color: "#6b7280" }}>
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><polyline points="15 18 9 12 15 6" /></svg>
                  </button>
                  <span className="text-xs font-bold text-white tracking-widest">
                    {MONTHS_LONG[viewM].toUpperCase()} {viewY}
                  </span>
                  <div className="w-6" />
                </div>
                <MonthCal
                  year={viewY} month={viewM}
                  start={pStart} end={pEnd} hover={hover} picking={picking}
                  onDay={handleDay} onHover={setHover}
                />
              </div>

              <div className="self-stretch w-px" style={{ background: "#1f2937" }} />

              {/* Right month */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-6" />
                  <span className="text-xs font-bold text-white tracking-widest">
                    {MONTHS_LONG[rightM].toUpperCase()} {rightY}
                  </span>
                  <button onClick={nextM} className="p-1 rounded-lg hover:bg-white/5 transition-colors" style={{ color: "#6b7280" }}>
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><polyline points="9 18 15 12 9 6" /></svg>
                  </button>
                </div>
                <MonthCal
                  year={rightY} month={rightM}
                  start={pStart} end={pEnd} hover={hover} picking={picking}
                  onDay={handleDay} onHover={setHover}
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-2 pt-3" style={{ borderTop: "1px solid #1f2937" }}>
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-1.5 rounded-lg text-sm font-medium transition-colors hover:bg-white/5"
                style={{ color: "#9ca3af" }}
              >
                Cancel
              </button>
              <button
                onClick={apply}
                disabled={!pStart}
                className="px-5 py-1.5 rounded-lg text-sm font-semibold text-white transition-colors disabled:opacity-50"
                style={{ background: "#3b82f6" }}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
