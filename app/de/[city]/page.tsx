import {
  cityStaticParams,
  makeCityHubMetadata,
  makeCityHubPage,
} from "@/app/_shared/city-hub";

export const revalidate = 86400;
export const dynamicParams = false;
export const generateStaticParams = cityStaticParams;
export const generateMetadata = makeCityHubMetadata("de");
export default makeCityHubPage("de");
