"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { ArrowRight, Clock, Search, Tag } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/Reveal";
import { blogPostUrl } from "@/lib/site";
import type { BlogCategory, BlogPostSummary } from "@/lib/blog";
import { isOptimizable } from "@/lib/images";
import { FALLBACK_COVER, PostCard } from "./PostCard";

const PAGE_SIZE = 6;
const ALL = "all";

export function BlogListing({
  posts,
  categories,
}: {
  posts: BlogPostSummary[];
  categories: BlogCategory[];
}) {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState(ALL);
  const [page, setPage] = useState(1);

  // ?q= is read after hydration so the listing can stay statically rendered.
  useEffect(() => {
    const initial = new URLSearchParams(window.location.search).get("q");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (initial) setQ(initial);
  }, []);

  const featured = posts.find((p) => p.is_featured) ?? posts[0];

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return posts
      .filter((p) => cat === ALL || p.category_slug === cat)
      .filter(
        (p) =>
          !term ||
          p.title.toLowerCase().includes(term) ||
          (p.excerpt ?? "").toLowerCase().includes(term) ||
          p.tags.some((t) => t.name.toLowerCase().includes(term)),
      );
  }, [posts, q, cat]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const chips = [{ slug: ALL, label: "All" }, ...categories.map((c) => ({ slug: c.slug, label: c.category_name }))];

  if (posts.length === 0) {
    return (
      <section className="pb-28 md:pb-36">
        <div className="mx-auto max-w-7xl container-p">
          <div className="rounded-3xl border border-border bg-card p-12 text-center text-muted-foreground">
            New articles are on the way. Check back soon.
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Featured */}
      {featured && (
        <section className="pb-16">
          <div className="mx-auto max-w-7xl container-p">
            <Reveal>
              <a
                href={blogPostUrl(featured.slug)}
                className="group relative grid overflow-hidden rounded-3xl border border-border bg-card md:grid-cols-2"
              >
                <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto md:min-h-[360px]">
                  <Image
                    src={featured.featured_image || FALLBACK_COVER}
                    unoptimized={!isOptimizable(featured.featured_image || FALLBACK_COVER)}
                    alt={featured.featured_image_alt || featured.title}
                    fill
                    preload
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary-foreground">
                    Featured
                  </div>
                </div>
                <div className="flex flex-col justify-center p-8 md:p-12">
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    <Tag className="h-3.5 w-3.5" /> {featured.category_name}
                    {featured.reading_time ? (
                      <>
                        <span className="text-muted-foreground">·</span>
                        <Clock className="h-3.5 w-3.5" /> {featured.reading_time} min
                      </>
                    ) : null}
                  </div>
                  <h2 className="mt-4 font-heading text-2xl font-bold leading-tight tracking-tight md:text-4xl">
                    {featured.title}
                  </h2>
                  {featured.excerpt && (
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {featured.excerpt}
                    </p>
                  )}
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
                    Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </a>
            </Reveal>
          </div>
        </section>
      )}

      {/* Filters */}
      <section className="pb-8">
        <div className="mx-auto max-w-7xl container-p">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              {chips.map((c) => (
                <button
                  key={c.slug}
                  type="button"
                  onClick={() => {
                    setCat(c.slug);
                    setPage(1);
                  }}
                  aria-pressed={cat === c.slug}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${cat === c.slug
                      ? "bg-foreground text-background"
                      : "border border-border bg-card text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
            <label className="relative flex w-full items-center md:w-auto">
              <Search className="pointer-events-none absolute left-3 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                value={q}
                onChange={(e) => {
                  setQ(e.target.value);
                  setPage(1);
                }}
                placeholder="Search articles…"
                aria-label="Search articles"
                className="w-full rounded-full border border-border bg-card py-2 pl-9 pr-4 text-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/15 md:w-72"
              />
            </label>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-28 md:pb-36">
        <div className="mx-auto max-w-7xl container-p">
          {visible.length === 0 ? (
            <div className="rounded-3xl border border-border bg-card p-12 text-center text-muted-foreground">
              No articles match your search.
            </div>
          ) : (
            <StaggerGroup key={`${cat}-${q}-${page}`} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((p) => (
                <StaggerItem key={p.slug} as="article">
                  <PostCard post={p} />
                </StaggerItem>
              ))}
            </StaggerGroup>
          )}

          {pageCount > 1 && (
            <nav className="mt-12 flex flex-wrap items-center justify-center gap-2" aria-label="Blog pagination">
              {Array.from({ length: pageCount }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setPage(i + 1)}
                  aria-current={page === i + 1 ? "page" : undefined}
                  className={`h-10 w-10 rounded-full text-sm font-semibold transition-colors ${page === i + 1
                      ? "bg-foreground text-background"
                      : "border border-border bg-card text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {i + 1}
                </button>
              ))}
            </nav>
          )}
        </div>
      </section>
    </>
  );
}
