import { DefaultSeoProps } from 'next-seo';
import { type } from "os";

export const SEO: DefaultSeoProps = {
  title: "Image Gallery",
  description: "Image Gallery with Next.js and Tailwind CSS",
  canonical: "",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "",
    site_name: "Image Gallery",
    title: "Image Gallery",
    description: "Image Gallery with Next.js and Tailwind CSS",
    images: [
      {
        url: "/og-image.png",
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
      href: "/favicon.ico"
    }
  ]
};
