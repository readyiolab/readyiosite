import { PrivacyPage } from "@/components/pages/PrivacyPage"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: "Privacy & Cookie Policy | Zuvigo",
  description: "Learn how Zuvigo collects, uses, and safeguards your personal data and cookie preferences.",
  path: "/privacy",
})

export default function Page() {
  return <PrivacyPage />
}
