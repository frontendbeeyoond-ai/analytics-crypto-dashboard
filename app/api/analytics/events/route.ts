import { NextRequest, NextResponse } from "next/server";
import { fetchEventCounts } from "@/lib/ga4Utils";
import { FilterParams } from "@/types/analytics";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const filters: FilterParams = {
    start_date: searchParams.get("start_date") || undefined,
    end_date:   searchParams.get("end_date")   || undefined,
  };

  try {
    const data = await fetchEventCounts(filters);

    const eventNames = [
      "page_view",
      "presale_click_cta",
      "online_shop_click",
      "documents_click",
      "newsletter_signup",
      "social_click",
      "trustpilot_click",
      "scroll_depth",
      "session_end",
    ];

    const events = eventNames.map((name) => ({
      eventName: name,
      count: data.eventCounts[name] || 0,
      percentage:
        data.totalEvents > 0
          ? Math.round(((data.eventCounts[name] || 0) / data.totalEvents) * 1000) / 10
          : 0,
      conversionRate:
        data.pageViews > 0
          ? Math.round(((data.eventCounts[name] || 0) / data.pageViews) * 1000) / 10
          : 0,
    }));

    // Also include any event names from GA4 not in the predefined list
    for (const [name, count] of Object.entries(data.eventCounts)) {
      if (!eventNames.includes(name)) {
        events.push({
          eventName: name,
          count,
          percentage:
            data.totalEvents > 0
              ? Math.round((count / data.totalEvents) * 1000) / 10
              : 0,
          conversionRate: 0,
        });
      }
    }

    // Sort by count descending, filter out zeros
    events.sort((a, b) => b.count - a.count);
    const filtered = events.filter((e) => e.count > 0);

    return NextResponse.json({
      events: filtered,
      _meta: { totalEvents: data.totalEvents },
    });
  } catch (error) {
    console.error("Events analytics API error:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch event analytics",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
