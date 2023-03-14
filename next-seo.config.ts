import { DefaultSeoProps } from 'next-seo';
import { type } from "os";

export const SEO: DefaultSeoProps = {
  title: "Image Gallery",
  description: "Image Gallery with Next.js and Tailwind CSS",
  canonical: "https://image-gallery-pr.vercel.app",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://image-gallery-pr.vercel.app",
    site_name: "Image Gallery",
    title: "Image Gallery",
    description: "Image Gallery with Next.js and Tailwind CSS",
    images: [
      {
        url: "https://image-gallery-pr.vercel.app/og-image.png",
        width: 1280,
        height: 800,
        alt: "Image Gallery with Next.js and Tailwind CSS",
        type: "image/png"
      }
    ]
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "https://image-gallery-pr.vercel.app/favicon.ico"
    }
  ]
};
