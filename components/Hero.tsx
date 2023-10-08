import { Grid, Spacer } from "@nextui-org/react"
import { Animation } from "../components/Animation"
import { Typography } from "../components/Typography"

export function Hero() {
  return (
    <Grid.Container justify="center" direction="row">
      <Grid xs={12} md={6} direction="column">
        <Spacer y={1} />
        <Typography h1 noGutter>
          Rodrigo Macedo
        </Typography>
        <Spacer y={1} />
        <Typography paragraph>
          I am a full-stack developer with over 6 years of professional
          experience, specializing in building and leading web projects.
        </Typography>
        <Typography paragraph>
          Throughout my career, I have collaborated closely with designers and
          marketers in <b>product design</b> and the creation of{" "}
          <b>UX/UI systems</b>, as well as handling <b>technical SEO</b>.
          Alongside many other talented colleagues, I've developed system
          applications spanning from the <b>backend</b> and{" "}
          <b>infrastructure</b> to the <b>frontend</b>.
        </Typography>
        <Typography paragraph>
          I've been involved in dynamic projects, leveraging my expertise in
          technologies like <b>React</b> with <b>Next.js</b>, <b>Typescript</b>,
          and <b>modern CSS</b>, among others. I also have substantial
          experience in backend development with <b>Python</b> and{" "}
          <b>Node.js</b>, having worked with frameworks such as <b>Django</b>,{" "}
          <b>Flask</b>, <b>Strapi</b>, and <b>Express</b>.
        </Typography>
        <Typography paragraph>
          My journey has led me to overcome <b>CI/CD</b> challenges using a
          suite of <b>AWS services</b>, orchestrating containerization with{" "}
          <b>Docker</b>, and streamlining workflows with <b>Github Actions</b>.
        </Typography>
        <Typography>
          I take pride in writing <b>clean</b> and{" "}
          <b>well-documented high-quality code</b>.{" "}
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
        <Animation />
      </Grid>
    </Grid.Container>
  )
}
