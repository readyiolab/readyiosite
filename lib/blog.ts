// Server-side reads from the Readyio CMS API. Full articles live on the blog
// subdomain; readyio.com only renders the listing.

const CMS_API_URL = (process.env.CMS_API_URL || "http://127.0.0.1:4000/api").replace(/\/$/, "");

export const ARTICLES_TAG = "articles";
const REVALIDATE_SECONDS = 300;
const PAGE_LIMIT = 50;
const MAX_PAGES = 20;

export type BlogTag = { name: string; slug: string };

export type BlogPostSummary = {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  featured_image: string | null;
  featured_image_alt: string | null;
  reading_time: number | null;
  is_featured: boolean;
  published_at: string | null;
  updated_at: string | null;
  category_name: string;
  category_slug: string;
  author_name: string;
  author_image: string | null;
  author_title: string | null;
  tags: BlogTag[];
};

export type BlogCategory = {
  id: number;
  category_name: string;
  slug: string;
  article_count: number;
};

type ListResponse<T> = {
  success: boolean;
  data: T;
  pagination?: { currentPage: number; totalPages: number; totalRecords: number };
};

async function cmsGet<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${CMS_API_URL}${path}`, {
      next: { revalidate: REVALIDATE_SECONDS, tags: [ARTICLES_TAG] },
    });
    if (!res.ok) {
      console.error(`[blog] CMS request ${path} failed with ${res.status}`);
      return null;
    }
    return (await res.json()) as T;
  } catch (error) {
    console.error(`[blog] CMS request ${path} failed:`, error instanceof Error ? error.message : error);
    return null;
  }
}

export async function getAllPublishedPosts(): Promise<BlogPostSummary[]> {
  const posts: BlogPostSummary[] = [];
  for (let page = 1; page <= MAX_PAGES; page += 1) {
    const json = await cmsGet<ListResponse<BlogPostSummary[]>>(`/articles?limit=${PAGE_LIMIT}&page=${page}`);
    if (!json?.success) break;
    posts.push(...json.data);
    if (!json.pagination || page >= json.pagination.totalPages) break;
  }
  return posts;
}

export async function getBlogCategories(): Promise<BlogCategory[]> {
  const json = await cmsGet<ListResponse<BlogCategory[]>>("/categories");
  return json?.success ? json.data.filter((category) => Number(category.article_count) > 0) : [];
}
