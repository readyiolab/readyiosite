import { SolutionsPage } from "@/components/pages/SolutionsPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Custom Digital Solutions for Real Business Needs | zuvigo",
  description:
    "Zuvigo builds websites, web applications, cloud and desktop software, and business & AI automation — helping businesses work smarter, move faster, and achieve more.",
  path: "/solutions",
});

export default function Page() {
  return <SolutionsPage />;
}
