import { styled } from "@nextui-org/react"
import { getMDXComponent } from "mdx-bundler/client"
import { GetStaticProps } from "next"
import { useMemo } from "react"
import { getAllPosts, getSinglePost, PostProps } from "utils/mdx"
import Head from "next/head"
import { Typography } from "components/Typography"
import PostHeading from "components/PostHeading"
import TableOfContents from "components/TableOfContents"
import { CurrentHeadingProvider } from "contexts/CurrentHeading"
import { PostImage } from "components/PostImage"

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
    display: "grid",
    gridRowGap: "40px",
    gridTemplateColumns: "100%",
    "@media (min-width: 1000px)": {
      gridTemplateColumns: "70% 30%",
      gridTemplateRows: "auto auto",
      gridColumnGap: "34px",
      ".post-heading": {
        gridColumn: 1,
        gridRow: "1 / span 2",
      },
      ".table-of-contents": {
        gridColumn: 2,
        gridRow: "1 / span 3",
      },
      ".post-body": {
        gridColumn: 1,
        gridRow: 3,
      },
    },
  })

  return (
    <CurrentHeadingProvider>
      <PostLayoutWrapper>
        <Content id="top">
          <div className="post-heading">
            <Typography h1 noGutter>
              {frontmatter.title}
            </Typography>
            <span>Created: {frontmatter.date}</span>
            <span>Last updated: {frontmatter.updated}</span>
            <span>{time}</span>
          </div>
          <div className="table-of-contents">
            <TableOfContents headings={headings} />
          </div>
          <main className="post-body">{children}</main>
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
      </Head>
      <PostLayout frontmatter={frontmatter} time={time} headings={headings}>
        <Component
          components={{
            img: props => (
              <PostImage src={props.src as string} alt={props.alt as string} />
            ),
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
            // map headings
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
