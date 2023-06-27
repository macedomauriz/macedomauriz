import { Spacer, styled } from "@nextui-org/react"
import { PostProps } from "utils/mdx"
import { PostCard } from "./PostCard"
import { SectionTitle } from "./SectionTitle"

interface LatestBlogPostsProps {
  posts: PostProps[]
}

export function LatestBlogPosts({ posts }: LatestBlogPostsProps) {
  console.log("LatestBlogPosts: ", posts)
  const CustomersWrapper = styled("div", {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  })

  const Grid = styled("div", {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 20,
    "> div": {
      flex: "0.05 1 240px",
    },
  })

  return (
    <CustomersWrapper>
      <SectionTitle>Latest Blog Posts</SectionTitle>
      <Spacer y={2} />
      <Grid>
        <div>
          <PostCard
            title="Steam the active event"
            date="24 may 2023"
            image="https://nextui.org/images/card-example-3.jpeg"
            href="/"
            chip="use case"
          />
        </div>
        <div>
          <PostCard
            title="Steam the active event"
            date="24 may 2023"
            image="https://nextui.org/images/card-example-6.jpeg"
            href="/"
            chip="development"
          />
        </div>
      </Grid>
    </CustomersWrapper>
  )
}
