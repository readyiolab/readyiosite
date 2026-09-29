import { TermsPage } from "@/components/pages/TermsPage"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: "Terms of Service | Readyio",
  description: "Terms and conditions governing the use of the Readyio Technologies website and services.",
  path: "/terms",
})

export default function Page() {
  return <TermsPage />
}
