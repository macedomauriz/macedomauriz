import { Spacer, styled } from "@nextui-org/react"
import { getMDXComponent } from "mdx-bundler/client"
import { GetStaticProps } from "next"
import { useMemo } from "react"
import { getAllPosts, getSinglePost, PostProps } from "utils/mdx"
import Head from "next/head"
import { Typography } from "components/Typography"
import PostHeading from "components/PostHeading"
import TableOfContents from "components/TableOfContents"
import { CurrentHeadingProvider } from "contexts/CurrentHeading"

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
    h2: {
      scrollMarginTop: 90,
    },
    h3: {
      scrollMarginTop: 90,
    },
  })

  const Content = styled("div", {
    display: "flex",
    flexDirection: "column",
    gap: 34,
    "@media (min-width: 1000px)": {
      flexDirection: "row-reverse",
      "> div:nth-of-type(2)": {
        width: "70%",
      },
      "> div:nth-of-type(1)": {
        width: "30%",
      },
    },
  })

  return (
    <CurrentHeadingProvider>
      <PostLayoutWrapper>
        <Content>
          <div>
            <TableOfContents headings={headings} />
          </div>
          <div id="top">
            <Typography h1 noGutter>
              {frontmatter.title}
            </Typography>
            <span>Created: {frontmatter.date}</span>
            <span>Last updated: {frontmatter.updated}</span>
            <span>{time}</span>
            <Spacer y={2} />
            <main>{children}</main>
          </div>
        </Content>
      </PostLayoutWrapper>
    </CurrentHeadingProvider>
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
