import { NextRequest, NextResponse } from "next/server";
import { fetchScrollDepthDetail } from "@/lib/ga4Utils";
import { FilterParams } from "@/types/analytics";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const filters: FilterParams = {
    start_date: searchParams.get("start_date") || undefined,
    end_date:   searchParams.get("end_date")   || undefined,
  };

  try {
    const data = await fetchScrollDepthDetail(filters);
    return NextResponse.json({ source: "ga4", ...data });
  } catch (error) {
    console.error("Scroll depth analytics API error:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch scroll depth analytics",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
