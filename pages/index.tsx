import Head from "next/head"
import { Text, Spacer, Grid } from "@nextui-org/react"
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
      <Spacer y={2} />
      <Text size="$3xl" weight="extrabold">
        Rodrigo Macedo
      </Text>
      <Text size="$lg" weight="light" as="span" color="$gray800">
        Web developer at <Link href="https://tryolabs.com/">Tryolabs</Link>
      </Text>
      <Spacer y={1} />
      <Grid.Container gap={2}>
        <Grid xs={12} md={6} direction="column" css={{ padding: 0 }}>
          <Text size="$lg" weight="light" css={{ margin: "0 0 0.5em 0" }}>
            Hello! My name is Rodrigo. I am a <b>full-stack developer</b> with
            over 5 years of experience.
          </Text>
          <Text size="$lg" weight="light" css={{ margin: "0 0 0.5em 0" }}>
            I specialize in creating responsive and user-friendly applications
            using <b>React</b> with <b>Next JS</b>, <b>Typescript</b> and modern{" "}
            <b>CSS</b>.
          </Text>
          <Text size="$lg" weight="light" css={{ margin: "0 0 0.5em 0" }}>
            I have worked closely with designers and marketers in{" "}
            <b>product redesign</b>, technical <b>SEO</b>, and the construction
            of <b>UI/UX systems</b>.
          </Text>
          <Text size="$lg" weight="light" css={{ margin: "0 0 0.5em 0" }}>
            I have experience in backend development with <b>Python</b> and{" "}
            <b>Node</b> in frameworks such as <b>Django</b>, <b>Flask</b>,{" "}
            <b>Strapi</b>, <b>Express</b>, and faced <b>CD/CI</b> challenges
            with <b>AWS</b> services, <b>Docker</b> and <b>Github Actions</b>.
          </Text>
          <Text size="$lg" weight="light">
            I am engaged in writing <b>clean</b> and{" "}
            <b>documented high-quality code</b>, while having the flexibility
            for fast paced progress when agility is key.
          </Text>
        </Grid>
      </Grid.Container>
    </>
  )
}
