import { Spacer } from "@nextui-org/react"
import Head from "next/head"
import { Customers } from "../components/Customers"
import { Hero } from "../components/Hero"

export default function Home(): JSX.Element {
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
      <Hero />
      <Spacer y={3} />
      <Customers />
      <Spacer y={3} />
    </>
  )
}
