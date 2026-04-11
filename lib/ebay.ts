let accessToken: string | null = null;
let tokenExpiry = 0;

function getRequiredEnv(name: string): string {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

type EbayTokenResponse = {
  access_token: string;
  expires_in: number;
};

export async function getEbayToken(): Promise<string> {
  const now = Date.now();

  if (accessToken && now < tokenExpiry) {
    return accessToken;
  }

  const clientId = getRequiredEnv("EBAY_CLIENT_ID");
  const clientSecret = getRequiredEnv("EBAY_CLIENT_SECRET");

  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  const response = await fetch("https://api.ebay.com/identity/v1/oauth2/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${auth}`,
    },
    body: "grant_type=client_credentials&scope=https://api.ebay.com/oauth/api_scope",
    cache: "no-store",
  });

  const text = await response.text();

  if (!response.ok) {
    throw new Error(`Failed to get eBay token: ${response.status} ${text}`);
  }

  const data = JSON.parse(text) as EbayTokenResponse;

  if (!data.access_token || !data.expires_in) {
    throw new Error("eBay token response did not include access_token/expires_in");
  }

  accessToken = data.access_token;
  tokenExpiry = now + data.expires_in * 1000 - 60_000;

  return data.access_token;
}

export async function searchEbay(query: string) {
  const token = await getEbayToken();

  const url =
    `https://api.ebay.com/buy/browse/v1/item_summary/search` +
    `?q=${encodeURIComponent(query)}` +
    `&limit=20`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      "X-EBAY-C-MARKETPLACE-ID": "EBAY_GB",
    },
    cache: "no-store",
  });

  const text = await response.text();

  if (!response.ok) {
    throw new Error(`Failed to search eBay: ${response.status} ${text}`);
  }

  const data = JSON.parse(text) as { itemSummaries?: unknown[] };

  return data.itemSummaries || [];
}