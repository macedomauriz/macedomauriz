import { styled } from "@nextui-org/react"
import { getMDXComponent } from "mdx-bundler/client"
import { GetStaticProps } from "next"
import { useMemo } from "react"
import Example from "components/Example"
import { getAllPosts, getSinglePost, PostProps } from "utils/mdx"
import Head from "next/head"
import { Typography } from "components/Typography"
import jump from "jump.js"
import PostH2 from "components/PostH2"

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
      scrollMarginTop: 100,
    },
  })

  const jumpToH2 = (id: string) => {
    jump(`#${id}`, {
      duration: 1000,
      offset: -90,
      a11y: false,
    })
  }

  return (
    <PostLayoutWrapper>
      <Typography h1 noGutter>
        {frontmatter.title}
      </Typography>
      <div>Created: {frontmatter.date}</div>
      <div>Last updated: {frontmatter.updated}</div>
      <div>{time}</div>
      <div>
        {headings.map(h => {
          return (
            <div key={h}>
              <div
                onClick={() => jumpToH2(h.toLowerCase().replace(/\s/g, "-"))}
              >
                {h}
              </div>
            </div>
          )
        })}
      </div>
      <main>{children}</main>
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
            Example,
            h2: props => <PostH2 id={props.id}>{props.children}</PostH2>,
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
