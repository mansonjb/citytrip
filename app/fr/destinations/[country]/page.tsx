import {
  countryStaticParams,
  makeCountryMetadata,
  makeCountryPage,
} from "@/app/_shared/destinations";

export const revalidate = 86400;
export const dynamicParams = false;
export const generateStaticParams = countryStaticParams;
export const generateMetadata = makeCountryMetadata("fr");
export default makeCountryPage("fr");
