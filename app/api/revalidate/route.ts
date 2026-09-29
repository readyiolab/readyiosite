import { revalidatePath, revalidateTag } from "next/cache"
import type { NextRequest } from "next/server"

import { ARTICLES_TAG } from "@/lib/blog"

export async function POST(request: NextRequest) {
  const secret = process.env.REVALIDATE_SECRET
  if (!secret || request.headers.get("x-revalidate-secret") !== secret) {
    return Response.json({ revalidated: false, message: "Invalid secret" }, { status: 401 })
  }

  revalidateTag(ARTICLES_TAG, { expire: 0 })
  revalidatePath("/blog")
  revalidatePath("/sitemap")

  return Response.json({ revalidated: true, now: Date.now() })
}
