import { CookiePolicyPage } from "@/components/pages/CookiePolicyPage"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: "Cookie Policy | Zuvigo",
  description: "Understand how Zuvigo uses cookies and other technologies to enhance your experience.",
  path: "/cookies",
})

export default function Page() {
  return <CookiePolicyPage />
}
