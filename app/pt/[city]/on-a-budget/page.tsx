import { cityStaticParams } from "@/app/_shared/city-hub";
import { makeBudgetMetadata, makeBudgetPage } from "@/app/_shared/on-a-budget";

export const revalidate = 86400;
export const dynamicParams = false;
export const generateStaticParams = cityStaticParams;
export const generateMetadata = makeBudgetMetadata("pt");
export default makeBudgetPage("pt");
