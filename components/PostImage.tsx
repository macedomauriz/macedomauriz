import { styled } from "@nextui-org/react"

interface PostImageProps {
  src: string
  alt: string
}

export function PostImage({ src, alt }: PostImageProps) {
  const PostImageWrapper = styled("div", {
    display: "flex",
    justifyContent: "center",
    maxHeight: 500,
    minWidth: 100,
    margin: "2rem auto",
    img: {
      objectFit: "contain",
      borderRadius: 8,
    },
  })

  return (
    <PostImageWrapper>
      {
        // eslint-disable-next-line
        <img src={src} alt={alt} loading="lazy" />
      }
    </PostImageWrapper>
  )
}
