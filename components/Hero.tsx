import { Grid, Spacer } from "@nextui-org/react"
import Link from "next/link"
import { AnimationHero } from "../components/AnimationHero"
import { Typography } from "../components/Typography"

export function Hero(): JSX.Element {
  return (
    <Grid.Container justify="center" direction="row">
      <Grid xs={12} md={6} direction="column">
        <Spacer y={1} />
        <Typography h1>Rodrigo Macedo</Typography>
        <Typography h3 color="$gray800">
          Freelance developer at{" "}
          <Link href="https://tryolabs.com/">Tryolabs</Link>
        </Typography>
        <Spacer y={1} />
        <Typography paragraph>
          I am a <b>full-stack developer</b> with over 6 years of professional
          experience.
        </Typography>
        <Typography paragraph>
          I specialize in creating responsive and user-friendly applications
          using <b>React</b> with <b>Next JS</b>, <b>Typescript</b> and modern{" "}
          <b>CSS</b> among other technologies.
        </Typography>
        <Typography paragraph>
          I have worked closely with designers and marketers in{" "}
          <b>product redesign</b>, technical <b>SEO</b>, and the construction of{" "}
          <b>UI/UX systems</b>.
        </Typography>
        <Typography paragraph>
          I have experience in backend development with <b>Python</b> and{" "}
          <b>Node</b> in frameworks such as <b>Django</b>, <b>Flask</b>,{" "}
          <b>Strapi</b>, <b>Express</b>, and faced <b>CD/CI</b> challenges with{" "}
          <b>AWS</b> services, <b>Docker</b> and <b>Github Actions</b>.
        </Typography>
        <Typography>
          I am engaged in writing <b>clean</b> and{" "}
          <b>documented high-quality code</b>, while having the flexibility for
          fast paced progress when agility is key.
        </Typography>
      </Grid>
      <Grid
        xs={12}
        md={6}
        justify="center"
        alignItems="center"
        css={{
          margin: "40px 0",
          background:
            "linear-gradient(to bottom, transparent 66%, $background 66%), radial-gradient($heroShadow1 18%, $heroShadow2 45%, transparent 70%), transparent",
        }}
      >
        <AnimationHero />
      </Grid>
    </Grid.Container>
  )
}
