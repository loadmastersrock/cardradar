import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const authHeader = req.headers.authorization;
  const expected = `Bearer ${process.env.CRON_SECRET}`;

  if (!process.env.CRON_SECRET) {
    return res.status(500).json({ error: "Missing CRON_SECRET" });
  }

  if (authHeader !== expected) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const host = req.headers.host;
  const protocol = host?.includes("localhost") ? "http" : "https";
  const snapshotUrl = `${protocol}://${host}/api/market/live`;

  const response = await fetch(snapshotUrl, {
    method: "GET",
    cache: "no-store",
  });

  const text = await response.text();

  if (!response.ok) {
    return res.status(500).json({
      error: "Market snapshot fetch failed",
      status: response.status,
      details: text,
    });
  }

  let data: unknown;

  try {
    data = JSON.parse(text);
  } catch {
    return res.status(500).json({
      error: "Market snapshot returned non-JSON response",
      details: text,
    });
  }

  return res.status(200).json({
    ok: true,
    ranAt: new Date().toISOString(),
    resultCount: Array.isArray(data) ? data.length : 0,
    data,
  });
}