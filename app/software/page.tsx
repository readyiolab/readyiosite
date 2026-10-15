import { SoftwarePage } from "@/components/pages/SoftwarePage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Practical Software for Documents & Workflows | zuvigo",
  description:
    "Zuvigo builds powerful software for modern teams. Products include VigoPDF, eSign, VigoFlow, VigoLetters, Productivity Suite and Desktop Software.",
  path: "/software",
});

export default function Page() {
  return <SoftwarePage />;
}
