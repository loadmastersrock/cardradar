import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization");
  const expected = `Bearer ${process.env.CRON_SECRET}`;

  if (!process.env.CRON_SECRET) {
    return NextResponse.json(
      { error: "Missing CRON_SECRET" },
      { status: 500 }
    );
  }

  if (authHeader !== expected) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const snapshotUrl = new URL("/api/market/live", request.url);

  const response = await fetch(snapshotUrl.toString(), {
    method: "GET",
    cache: "no-store",
  });

  const text = await response.text();

  if (!response.ok) {
    return NextResponse.json(
      {
        error: "Market snapshot fetch failed",
        status: response.status,
        details: text,
      },
      { status: 500 }
    );
  }

  let data: unknown;

  try {
    data = JSON.parse(text);
  } catch {
    return NextResponse.json(
      {
        error: "Market snapshot returned non-JSON response",
        details: text,
      },
      { status: 500 }
    );
  }

  return NextResponse.json({
    ok: true,
    ranAt: new Date().toISOString(),
    resultCount: Array.isArray(data) ? data.length : 0,
    data,
  });
}