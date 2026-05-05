import { NextRequest, NextResponse } from "next/server";
import { fetchOnlineShopDetail } from "@/lib/ga4Utils";
import { FilterParams } from "@/types/analytics";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const filters: FilterParams = {
    start_date: searchParams.get("start_date") || undefined,
    end_date: searchParams.get("end_date") || undefined,
    device_type: (searchParams.get("device_type") as FilterParams["device_type"]) || undefined,
    traffic_source: (searchParams.get("traffic_source") as FilterParams["traffic_source"]) || undefined,
    campaign_name: searchParams.get("campaign_name") || undefined,
    country: (searchParams.get("country") as FilterParams["country"]) || undefined,
  };

  try {
    const data = await fetchOnlineShopDetail(filters);
    return NextResponse.json({ source: "ga4", ...data });
  } catch (error) {
    console.error("Online shop analytics API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch online shop analytics", details: String(error) },
      { status: 500 }
    );
  }
}
