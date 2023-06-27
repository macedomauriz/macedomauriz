import { getMDXComponent } from "mdx-bundler/client"
import { GetStaticProps } from "next"
import React from "react"
import Example from "components/Example"
import { getAllPosts, getSinglePost, PostProps } from "utils/mdx"
import Head from "next/head"

const Post = ({ code, frontmatter }: PostProps) => {
  const Component = React.useMemo(() => getMDXComponent(code), [code])
  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
        <meta name="description" content={frontmatter.description} />
      </Head>
      <Component
        components={{
          Example,
        }}
      />
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
