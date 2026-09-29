import Image from "next/image";
import { Clock } from "lucide-react";
import { blogPostUrl } from "@/lib/site";
import type { BlogPostSummary } from "@/lib/blog";
import { isOptimizable } from "@/lib/images";

export const FALLBACK_COVER = "/og-image.jpg";

export function PostCard({ post }: { post: BlogPostSummary }) {
  return (
    <a
      href={blogPostUrl(post.slug)}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={post.featured_image || FALLBACK_COVER}
          unoptimized={!isOptimizable(post.featured_image || FALLBACK_COVER)}
          alt={post.featured_image_alt || post.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
          {post.category_name}
          {post.reading_time ? (
            <>
              <span className="text-muted-foreground">·</span>
              <span className="flex items-center gap-1 text-muted-foreground">
                <Clock className="h-3 w-3" /> {post.reading_time} min
              </span>
            </>
          ) : null}
        </div>
        <h3 className="mt-3 flex-1 font-heading text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
          {post.title}
        </h3>
        {post.excerpt && (
          <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
        )}
      </div>
    </a>
  );
}
