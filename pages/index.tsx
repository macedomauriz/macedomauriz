import { Spacer } from "@nextui-org/react"
import Head from "next/head"
import { Customers } from "../components/Customers"
import { Hero } from "../components/Hero"
import { LatestBlogPosts } from "../components/LatestBlogPosts"
import { Quote } from "../components/Quote"

export default function Home() {
  return (
    <>
      <Head>
        <title>Web developer | Rodrigo Macedo</title>
        <link rel="canonical" href="https://macedomauriz.com" />
        <meta
          name="description"
          content="
Hi, I'm Rodrigo, I work in frontend, design, and backend development. Interested in Python, Typescript, Node, Go, DevOps culture, SEO, Linux and NeoVim."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Spacer y={2} />
      <Hero />
      <Spacer y={5} />
      <Quote />
      <Spacer y={5} />
      <LatestBlogPosts />
      <Spacer y={5} />
      <Customers />
      <Spacer y={5} />
    </>
  )
}
