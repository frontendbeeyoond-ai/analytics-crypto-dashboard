import { NextRequest, NextResponse } from "next/server";
import { fetchGlobalParamsData } from "@/lib/ga4Utils";
import { FilterParams } from "@/types/analytics";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const filters: FilterParams = {
    start_date: searchParams.get("start_date") || undefined,
    end_date: searchParams.get("end_date") || undefined,
  };

  try {
    const data = await fetchGlobalParamsData(filters);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Global params analytics API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch global parameters", details: String(error) },
      { status: 500 }
    );
  }
}
