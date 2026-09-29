import { PrivacyPage } from "@/components/pages/PrivacyPage"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: "Privacy & Cookie Policy | Readyio",
  description: "Learn how Readyio collects, uses, and safeguards your personal data and cookie preferences.",
  path: "/privacy",
})

export default function Page() {
  return <PrivacyPage />
}
