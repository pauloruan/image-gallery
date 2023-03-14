export type ImageProps = {
  id: number
  href: string
  imageSrc: string
  name: string
  username: string
}

export type ImagesProps = {
  images: ImageProps[]
}

export type HomeGetStaticProps = {
  props: ImagesProps
}

export type BlurImageProps = {
  image: ImageProps
}
