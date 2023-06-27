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
        {posts.map(p => {
          return (
            <div key={p.slug}>
              <PostCard
                title={p.frontmatter.title}
                date={p.frontmatter.date}
                image={p.frontmatter.image}
                href={`/blog/${p.slug}`}
                chip={p.frontmatter.category}
              />
            </div>
          )
        })}
      </Grid>
    </CustomersWrapper>
  )
}
