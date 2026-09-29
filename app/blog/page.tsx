import { BlogListing } from "@/components/blog/BlogListing"
import { JsonLd } from "@/components/site/JsonLd"
import { SectionHeading } from "@/components/site/SectionHeading"
import { AuroraCTA } from "@/components/site/AuroraCTA"
import { getAllPublishedPosts, getBlogCategories } from "@/lib/blog"
import { pageMetadata } from "@/lib/metadata"
import { SITE, SITE_URL, blogPostUrl } from "@/lib/site"

export const revalidate = 300

export const metadata = pageMetadata({
  title: "Blog — insights on product, AI, CRM & shipping | Readyio",
  description:
    "Practical writing from the Readyio team on product, AI, CRM/ERP, and the craft of shipping systems that last.",
  path: "/blog",
  ogTitle: "Readyio Blog — Product, AI, CRM & Engineering Insights",
})

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([getAllPublishedPosts(), getBlogCategories()])

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${SITE.name} Blog`,
    url: `${SITE_URL}/blog`,
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      datePublished: p.published_at ?? undefined,
      dateModified: p.updated_at ?? undefined,
      author: { "@type": "Person", name: p.author_name },
      url: blogPostUrl(p.slug),
    })),
  }

  return (
    <>
      <JsonLd data={blogJsonLd} />
      <section className="relative overflow-hidden pt-36 pb-12 md:pt-44">
        <div aria-hidden className="absolute inset-0 -z-10 mesh-bg opacity-50" />
        <div className="mx-auto max-w-4xl container-p text-center">
          <SectionHeading
            eyebrow="Readyio Journal"
            as="h1"
            title={
              <>
                Ideas on <span className="text-gradient">shipping systems</span> that last.
              </>
            }
            subtitle="Field notes from building websites, apps, CRM/ERP and AI systems for founders and operators."
          />
        </div>
      </section>
      <BlogListing posts={posts} categories={categories} />
      <AuroraCTA
        id="blog-cta"
        eyebrow="READYIO LABS"
        heading={
          <>
            Ready to Turn Ideas <br className="hidden sm:inline" />
            Into Production?
          </>
        }
        subtitle="Turn engineering insights into real products. Partner with Readyio to build high-converting websites, bespoke web applications, and automated workflows."
        buttonText="Start a Conversation"
        buttonHref="/contact"
      />
    </>
  )
}
