import { ForFoundersPage } from "@/components/pages/ForFoundersPage"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: "Tech Partner for Founders & Startups | Readyio",
  description:
    "Turn your idea into a working product. Readyio helps founders build, test, and launch their first version without technical complexity.",
  path: "/for-founders",
  imageAlt: "Readyio — Tech Partner for Founders & Startups",
})

export default function Page() {
  return <ForFoundersPage />
}
