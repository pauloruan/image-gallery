import { BlurImage } from "@components/BlurImage"
import { createClient } from "@supabase/supabase-js"
import type { HomeGetStaticProps, ImageProps, ImagesProps } from "@types"
import { DefaultSeo } from "next-seo"

export async function getStaticProps(): Promise<HomeGetStaticProps> {
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY as string
  )
  const { data: images, error } = await supabaseAdmin.from("images").select("*").order("id", { ascending: true })

  if (error) {
    console.log(error)
  }

  return {
    props: {
      images: images as ImageProps[]
    }
  }
}

export default function Home(props: ImagesProps): JSX.Element {
  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <DefaultSeo
        openGraph={{
          type: "website",
          locale: "pt_BR",
          url: "",
          site_name: "Image Gallery",
          images: [
            {
              url: "/og-image.png",
              width: 1280,
              height: 800,
              alt: "Image Gallery with Next.js and Tailwind CSS",
              type: "image/png"
            }
          ]
        }}
      />
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg-grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {props.images.map((image) => (
          <BlurImage key={image.id} image={image} />
        ))}
      </div>
    </div>
  )
}
