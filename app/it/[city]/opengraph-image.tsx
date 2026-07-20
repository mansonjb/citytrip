import {
  OG_SIZE,
  OG_CONTENT_TYPE,
  ogStaticParams,
  renderCityOg,
} from "@/app/_shared/city-og";

export const runtime = "nodejs";
export const alt = "Guida city break";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const generateStaticParams = ogStaticParams;

export default async function OgImage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  return renderCityOg(city, "it");
}
