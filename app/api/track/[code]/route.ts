import { NextRequest, NextResponse } from "next/server";

interface TrackingStep {
  status: "completed" | "current" | "pending";
  label: string;
  location: string;
  date: string;
  icon: "package" | "ship" | "plane" | "customs" | "truck" | "check";
}

// Mock tracking data - replace with real API integration
const mockTrackingData: Record<string, { timeline: TrackingStep[] }> = {
  "CC-2026-04827": {
    timeline: [
      { status: "completed", label: "Received at China warehouse", location: "Shenzhen", date: "Apr 12", icon: "package" },
      { status: "completed", label: "Consolidated & exported", location: "Yantian Port", date: "Apr 14", icon: "package" },
      { status: "current", label: "In transit (Sea)", location: "Pacific Ocean", date: "Apr 14 - Apr 28", icon: "ship" },
      { status: "pending", label: "Customs clearance", location: "Panama City", date: "Est. Apr 29", icon: "customs" },
      { status: "pending", label: "Out for delivery", location: "Panama", date: "Est. Apr 30", icon: "truck" },
      { status: "pending", label: "Delivered", location: "Your door", date: "Est. May 1", icon: "check" },
    ],
  },
  "CC-2026-04828": {
    timeline: [
      { status: "completed", label: "Received at China warehouse", location: "Guangzhou", date: "Apr 10", icon: "package" },
      { status: "completed", label: "Exported via air", location: "CAN Airport", date: "Apr 11", icon: "plane" },
      { status: "completed", label: "In transit (Air)", location: "In flight", date: "Apr 11 - Apr 12", icon: "plane" },
      { status: "completed", label: "Customs clearance", location: "Panama City", date: "Apr 13", icon: "customs" },
      { status: "current", label: "Out for delivery", location: "Panama City", date: "Apr 14", icon: "truck" },
      { status: "pending", label: "Delivered", location: "Your door", date: "Est. Apr 14", icon: "check" },
    ],
  },
};

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ code: string }> }
) {
  const { code } = await params;

  // Normalize the tracking code
  const normalizedCode = code.toUpperCase().trim();

  // ============================================================
  // REAL API INTEGRATION - Replace mock data with actual tracking API
  // ============================================================
  /*
  // Example: Call your tracking provider's API
  const response = await fetch(`https://api.trackingprovider.com/track/${normalizedCode}`, {
    headers: {
      "Authorization": `Bearer ${process.env.TRACKING_API_KEY}`,
    },
  });

  if (!response.ok) {
    return NextResponse.json({ error: "Tracking not found" }, { status: 404 });
  }

  const data = await response.json();
  // Transform the response to match our timeline format
  const timeline = transformToTimeline(data);
  return NextResponse.json({ code: normalizedCode, timeline });
  */

  // Mock implementation - check if we have data for this code
  const trackingData = mockTrackingData[normalizedCode];

  if (trackingData) {
    return NextResponse.json({
      code: normalizedCode,
      ...trackingData,
    });
  }

  // Generate generic timeline for unknown codes
  const genericTimeline: TrackingStep[] = [
    { status: "completed", label: "Order received", location: "China", date: "Processing", icon: "package" },
    { status: "current", label: "Awaiting pickup", location: "Shenzhen", date: "In progress", icon: "package" },
    { status: "pending", label: "International freight", location: "TBD", date: "Pending", icon: "ship" },
    { status: "pending", label: "Customs clearance", location: "Panama", date: "Pending", icon: "customs" },
    { status: "pending", label: "Out for delivery", location: "Panama", date: "Pending", icon: "truck" },
    { status: "pending", label: "Delivered", location: "Your door", date: "Pending", icon: "check" },
  ];

  return NextResponse.json({
    code: normalizedCode,
    timeline: genericTimeline,
    note: "This is estimated tracking. Contact us for detailed status.",
  });
}
