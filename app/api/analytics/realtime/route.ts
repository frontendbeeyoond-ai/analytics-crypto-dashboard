import { NextRequest, NextResponse } from "next/server";
import { fetchRealtimeData } from "@/lib/ga4Utils";

export async function GET(req: NextRequest) {
  try {
    const event = req.nextUrl.searchParams.get("event") || "page_view";
    const data = await fetchRealtimeData(event);
    return NextResponse.json(data);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json(
      { error: "Failed to fetch realtime data", details: message },
      { status: 500 }
    );
  }
}
