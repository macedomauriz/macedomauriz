import { Spacer, styled } from "@nextui-org/react"
import { getMDXComponent } from "mdx-bundler/client"
import { GetStaticProps } from "next"
import { useMemo } from "react"
import { getAllPosts, getSinglePost, PostProps } from "utils/mdx"
import Head from "next/head"
import { Typography } from "components/Typography"
import PostHeading from "components/PostHeading"
import TableOfContents from "components/TableOfContents"

type CustomLayoutProps = {
  frontmatter: PostProps["frontmatter"]
  time: PostProps["time"]
  headings: PostProps["headings"]
  children: React.ReactNode
}

const PostLayout: React.FC<CustomLayoutProps> = ({
  frontmatter,
  time,
  children,
  headings,
}) => {
  const PostLayoutWrapper = styled("div", {
    position: "relative",
  })

  const Content = styled("div", {
    display: "flex",
    gap: 34,
    div: {
      flex: 1,
    },
  })

  return (
    <PostLayoutWrapper>
      <Content>
        <div>
          <Typography h1 noGutter>
            {frontmatter.title}
          </Typography>
          <span>Created: {frontmatter.date}</span>
          <span>Last updated: {frontmatter.updated}</span>
          <span>{time}</span>
          <Spacer y={2} />
          <main>{children}</main>
        </div>
        <TableOfContents headings={headings} />
      </Content>
    </PostLayoutWrapper>
  )
}

const Post = ({ code, frontmatter, time, headings }: PostProps) => {
  const Component = useMemo(() => getMDXComponent(code), [code])

  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
        <meta name="description" content={frontmatter.description} />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css"
          integrity="sha384-Xi8rHCmBmhbuyyhbI88391ZKP2dmfnOl4rT9ZfRI7mLTdk1wblIUnrIq35nqwEvC"
          crossOrigin="anonymous"
        />
      </Head>
      <PostLayout frontmatter={frontmatter} time={time} headings={headings}>
        <Component
          components={{
            p: props => <Typography paragraph>{props.children}</Typography>,
            h2: props => (
              <PostHeading
                h2
                id={props.id as string}
                headings={headings.map(i => i.h2 ?? i.h3)}
              >
                {props.children}
              </PostHeading>
            ),
            h3: props => (
              <PostHeading
                h3
                id={props.id as string}
                headings={headings.map(i => i.h2 ?? i.h3)}
              >
                {props.children}
              </PostHeading>
            ),
          }}
        />
      </PostLayout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const post = await getSinglePost(params.slug)
  return {
    props: { ...post },
  }
}

export const getStaticPaths = async () => {
  const paths = getAllPosts().map(({ slug }) => ({ params: { slug } }))
  return {
    paths,
    fallback: false,
  }
}

export default Post
