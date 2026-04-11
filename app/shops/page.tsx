import ShopsClient from "./ShopsClient";

export default async function ShopsPage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string }>;
}) {
  const params = await searchParams;
  const initialSearch = params.search ? decodeURIComponent(params.search) : "";

  return <ShopsClient initialSearch={initialSearch} />;
}