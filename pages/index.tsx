import { Spacer } from "@nextui-org/react"
// import { GetStaticProps } from "next"
// import { getAllPosts, PostProps } from "utils/mdx"
// import { Customers } from "../components/Customers"
import { Hero } from "../components/Hero"
// import { LatestBlogPosts } from "../components/LatestBlogPosts"
import { Quote } from "../components/Quote"
// import Image from "next/image"

// interface HomeProps {
// posts: PostProps[]
// }

export default function Home() {
  return (
    <>
      <Hero />
      <Spacer y={5} />
      <Quote />
      <Spacer y={5} />
      <div style={{ textAlign: "center" }}>IN CONSTRUCTION...</div>
    </>
  )
}

// const getStaticProps: GetStaticProps = async () => {
//   return { props: { posts: getAllPosts() } }
// }
