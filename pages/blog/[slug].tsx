import { getMDXComponent } from "mdx-bundler/client"
import { GetStaticProps } from "next"
import React from "react"
import { Hello } from "../../components/Hello"
import { getAllPosts, getSinglePost } from "../../utils/mdx"
import Head from "next/head"

interface PostProps {
  code: string
  frontmatter: {
    title: string
    description: string
  }
}

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
          Hello,
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
