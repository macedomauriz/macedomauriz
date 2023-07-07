import { Spacer, styled, useTheme } from "@nextui-org/react"
import { getMDXComponent } from "mdx-bundler/client"
import { GetStaticProps } from "next"
import { useMemo } from "react"
import { getAllPosts, getSinglePost, PostProps } from "utils/mdx"
import Head from "next/head"
import { Typography } from "components/Typography"
import jump from "jump.js"
import PostHeading from "components/PostHeading"

// // Step 1: Create a context
// const MyContext = createContext({ currentHeading: "" })
//
// interface CurrentHeadingProps {
//   children: React.ReactNode
// }
//
// // Step 2: Create a provider component
// const CurrentHeading = ({ children }: CurrentHeadingProps) => {
//   const [currentHeading, setHeading] = useState("")
//
//   const updateHeading = () => {
//     setHeading("")
//   }
//
//   return (
//     <MyContext.Provider value={{ currentHeading }}>
//       {children}
//     </MyContext.Provider>
//   )
// }

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
  const { theme } = useTheme()
  // const { count } = useContext(MyContext)

  const PostLayoutWrapper = styled("div", {
    position: "relative",
  })

  const Content = styled("div", {
    display: "flex",
    gap: 34,
  })

  const TableOfContents = styled("aside", {
    flex: "0 0 340px",
    position: "sticky",
    display: "flex",
    flexDirection: "column",
    gap: 24,
    top: 120,
    height: 400,
  })

  const Heading = styled(Typography, {
    listStyleType: "upper-roman",
    cursor: "pointer",
    "&:hover": {
      color: "$white",
    },
  })

  const jumpToHeading = (id: string) => {
    jump(`#${id}`, {
      duration: 1000,
      offset: -90,
    })
  }

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
        <TableOfContents>
          <Typography h3>Table of contents</Typography>
          {headings.map(heading => {
            return (
              <Heading
                small={heading.h3 ? true : false}
                css={{ margin: `0 0 0 ${heading.h3 && "14px"}` }}
                key={heading.h2 || heading.h3}
                color={theme?.colors.gray800.value}
                noGutter
                onClick={() =>
                  jumpToHeading(
                    (heading.h2 || heading.h3).toLowerCase().replace(/\s/g, "-")
                  )
                }
              >
                {heading.h2 || heading.h3}
              </Heading>
            )
          })}
        </TableOfContents>
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
