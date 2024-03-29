import { styled } from "@nextui-org/react"
// import { useTheme as useNextTheme } from "next-themes"
import { getMDXComponent } from "mdx-bundler/client"
import { GetStaticProps } from "next"
import { CurrentHeadingProvider } from "contexts/CurrentHeading"
import { useMemo } from "react"
import { getAllPosts, getSinglePost, PostProps } from "utils/mdx"
import { Typography } from "components/Typography"
import TableOfContents from "components/TableOfContents"
import { PostImage } from "components/PostImage"
import { PostSection } from "components/PostSection"
import { PostCallOut } from "components/PostCallOut"
import { PostHeading } from "components/PostHeading"
import Metadata from "components/layout/Metadata"

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

  const created = new Date(frontmatter.date)
  const updated = frontmatter.updated && new Date(frontmatter.updated)

  return (
    <PostLayoutWrapper>
      <Content id="top">
        <div className="post-heading">
          <Typography h1 noGutter>
            {frontmatter.title}
          </Typography>
          <Typography>Created: {created.toDateString()}</Typography>
          {updated && (
            <Typography>Last updated: {updated.toDateString()}</Typography>
          )}
          <Typography>{time}</Typography>
        </div>
        <div className="table-of-contents">
          <TableOfContents headings={headings} slug={frontmatter.slug} />
        </div>
        <main className="post-body">{children}</main>
      </Content>
    </PostLayoutWrapper>
  )
}

const Post = ({ code, frontmatter, time, headings }: PostProps) => {
  const Component = useMemo(() => getMDXComponent(code), [code])
  // const { resolvedTheme } = useNextTheme()

  return (
    <CurrentHeadingProvider>
      <Metadata frontmatter={frontmatter} />
      <PostLayout frontmatter={frontmatter} time={time} headings={headings}>
        <Component
          components={{
            PostSection(props) {
              return <PostSection {...props} />
            },
            PostCallOut(props) {
              return <PostCallOut {...props} />
            },
            img: props => (
              <PostImage src={props.src as string} alt={props.alt as string} />
            ),
            p: props => <Typography paragraph>{props.children}</Typography>,
            h2: props => (
              <PostHeading h2 id={props.id as string}>
                {props.children}
              </PostHeading>
            ),
            h3: props => (
              <PostHeading h3 id={props.id as string}>
                {props.children}
              </PostHeading>
            ),
          }}
        />
      </PostLayout>
    </CurrentHeadingProvider>
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
