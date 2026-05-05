import { NextRequest, NextResponse } from "next/server";
import { fetchAllGA4Data } from "@/lib/ga4Utils";
import { FilterParams } from "@/types/analytics";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const filters: FilterParams = {
      start_date: searchParams.get("start_date") || undefined,
      end_date: searchParams.get("end_date") || undefined,
      device_type: (searchParams.get("device_type") as FilterParams["device_type"]) || "all",
      traffic_source: (searchParams.get("traffic_source") as FilterParams["traffic_source"]) || "all",
      campaign_name: searchParams.get("campaign_name") || "all",
      country: (searchParams.get("country") as FilterParams["country"]) || "all",
    };

    const ga4Data = await fetchAllGA4Data(filters);

    return NextResponse.json({ source: "ga4", ...ga4Data });
  } catch (error) {
    console.error("Analytics API Error:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch analytics data",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
