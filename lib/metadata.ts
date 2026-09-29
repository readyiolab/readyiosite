import type { Metadata } from "next";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  ogDescription?: string;
  imageAlt?: string;
};

export function pageMetadata({
  title,
  description,
  path,
  ogTitle = title,
  ogDescription = description,
  imageAlt,
}: PageMetadataInput): Metadata {
  const image = { url: "/og-image.jpg", width: 1200, height: 630, alt: imageAlt ?? ogTitle };
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: "Readyio",
      title: ogTitle,
      description: ogDescription,
      url: path,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: [{ url: image.url, alt: image.alt }],
    },
  };
}
