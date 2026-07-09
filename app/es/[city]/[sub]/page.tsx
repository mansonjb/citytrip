import {
  citySubStaticParams,
  makeCitySubMetadata,
  makeCitySubPage,
} from "@/app/_shared/city-sub";

export const revalidate = 86400;
export const dynamicParams = false;
export const generateStaticParams = citySubStaticParams;
export const generateMetadata = makeCitySubMetadata("es");
export default makeCitySubPage("es");
