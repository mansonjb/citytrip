import { cityStaticParams } from "@/app/_shared/city-hub";
import { makeWtsMetadata, makeWtsPage } from "@/app/_shared/where-to-stay";

export const revalidate = 86400;
export const dynamicParams = false;
export const generateStaticParams = cityStaticParams;
export const generateMetadata = makeWtsMetadata("fr");
export default makeWtsPage("fr");
