import { styled } from "@nextui-org/react"
import { useTheme } from "@nextui-org/react"
import { getMDXComponent } from "mdx-bundler/client"
import { GetStaticProps } from "next"
import { useMemo } from "react"
import Example from "components/Example"
import { getAllPosts, getSinglePost, PostProps } from "utils/mdx"
import Head from "next/head"
import { Typography } from "components/Typography"
import CustomLink from "components/CustomLink"
import useBodyScroll from "hooks/useBodyScroll"
import { useIsSsr } from "hooks/isSSR"

type CustomLayoutProps = {
  frontmatter: PostProps["frontmatter"]
  time: PostProps["time"]
  headings: PostProps["headings"]
  children: React.ReactNode
}

export function ProgressionBar() {
  const { theme } = useTheme()
  const scrollY = useBodyScroll()

  const ProgressionBarWrapper = styled("div", {
    position: "fixed",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    left: 0,
    top: 76,
    div: {
      maxWidth: 1200,
      width: "100%",
      div: {
        width: `${scrollY}%`,
        transition: "width 1s",
        height: 1,
        background: theme?.colors.primary.value,
      },
    },
  })

  return (
    <ProgressionBarWrapper>
      <div>
        <div />
      </div>
    </ProgressionBarWrapper>
  )
}

const PostLayout: React.FC<CustomLayoutProps> = ({
  frontmatter,
  time,
  children,
  headings,
}) => {
  const isSsr = useIsSsr()
  const PostLayoutWrapper = styled("div", {
    position: "relative",
    h2: {
      scrollMarginTop: 100,
    },
  })

  return (
    <PostLayoutWrapper>
      {isSsr && <ProgressionBar />}
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
              <CustomLink href={`#${h.toLowerCase().replace(/\s/g, "-")}`}>
                {h}
              </CustomLink>
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
