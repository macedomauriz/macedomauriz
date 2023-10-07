import { Spacer } from "@nextui-org/react"
import { GetStaticProps } from "next"
import { getAllPosts, PostProps } from "utils/mdx"
import { Customers } from "../components/Customers"
import { Hero } from "../components/Hero"
import { LatestBlogPosts } from "../components/LatestBlogPosts"
import { Quote } from "../components/Quote"

interface HomeProps {
  posts: PostProps[]
}

export default function Home({ posts }: HomeProps) {
  return (
    <>
      <Hero />
      <Spacer y={5} />
      <Quote />
      <Spacer y={5} />
      <LatestBlogPosts posts={posts} />
      <Spacer y={5} />
      <Customers />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: { posts: getAllPosts() } }
}
