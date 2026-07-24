import {
  citySubStaticParams,
  makeCitySubMetadata,
  makeCitySubPage,
} from "@/app/_shared/city-sub";

export const revalidate = 86400;
export const dynamicParams = true;
export const generateStaticParams = citySubStaticParams;
export const generateMetadata = makeCitySubMetadata("it");
export default makeCitySubPage("it");
