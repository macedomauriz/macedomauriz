import Head from "next/head"
import { Text, Spacer } from "@nextui-org/react"
import Link from "next/link"
// import Image from "next/image";
// import dynamic from "next/dynamic"

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
      <Spacer y={1} />
      <Text as="p" weight="extrabold" size="$2xl">
        Rodrigo Macedo
      </Text>
      <Text weight="light" as="span" color="$gray800">
        Web developer at <Link href="https://tryolabs.com/">Tryolabs</Link>
      </Text>
      <Spacer y={1} />
      <Text size="$lg" weight="light">
        Hello, my name is Rodrigo and I am a{" "}
        <Text weight="bold" as="span">
          full-stack web developer
        </Text>{" "}
        with over 5 years of experience in creating and maintaining websites and
        web applications. I specialize in creating responsive and user-friendly
        designs using React and Next.js, with experience in Server Side
        Rendering (SSR) and Static Site Generation (SSG). I also have experience
        in using TypeScript and CSS. I have been working closely with designers
        and have experience in using tools like Figma, Photoshop, and
        Illustrator. Additionally, I have been fully engaged in brand redesign
        and design system making and implementation. I am also interested in
        DevOps culture, Linux and currently getting into AWS. Furthermore, I
        have relevant experience in tackling SEO challenges. I also have
        experience in backend development with Python and Node in frameworks
        such as Django, Flask and Express, and interested in diving into
        languages like Go and Rust.
      </Text>
    </>
  )
}
