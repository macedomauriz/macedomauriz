// import { useRouter } from "next/router"
import { Navbar, Link, styled } from "@nextui-org/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { ThemeSwitch } from "./content/ThemeSwitch"
import { GetInTouch } from "./content/GetInTouch"

// check if a media-query hook is worth it for duplication of content
const socialMedia = [
  {
    icon: faGithub,
    href: "https://github.com/macedomauriz",
  },
  {
    icon: faLinkedinIn,
    href: "https://www.linkedin.com/in/macedomauriz/",
  },
]

// const navigation = [
//   {
//     text: "Home",
//     href: "/",
//   },
//   {
//     text: "Blog",
//     href: "/blog",
//   },
// ]

// function matchURL(r: any, text: string) {
//   const url = r.replace(/\//g, "")
//   return (url === "" && text === "Home") ?? url === text.toLowerCase()
// }

export const DesktopContent = () => {
  return (
    <>
      <Navbar.Content hideIn="xs"></Navbar.Content>
      <Navbar.Content hideIn="xs">
        {socialMedia.map(i => {
          return (
            <Navbar.Link
              key={i.href}
              href={i.href}
              target="_blank"
              style={{ color: "white" }}
            >
              <FontAwesomeIcon icon={i.icon as IconProp} size="xl" />
            </Navbar.Link>
          )
        })}
        <GetInTouch />
        <ThemeSwitch />
      </Navbar.Content>
    </>
  )
}

export const MobileContent = () => {
  // const router = useRouter()
  const CollapseItem = styled(Navbar.CollapseItem, {
    justifyContent: "center",
    height: 50,
    span: {
      color: "white",
    },
  })
  return (
    <Navbar.Collapse
      disableAnimation
      css={{
        "@xs": {
          display: "none",
        },
      }}
    >
      {
        //   navigation.map(i => {
        //   return (
        //     <CollapseItem key={i.text} isActive={matchURL(router.asPath, i.text)}>
        //       {i.text}
        //     </CollapseItem>
        //   )
        // })
      }
      {socialMedia.map(i => {
        return (
          <CollapseItem key={i.href}>
            <Link href={i.href} target="_blank">
              <span>
                <FontAwesomeIcon icon={i.icon as IconProp} size="xl" />
              </span>
            </Link>
          </CollapseItem>
        )
      })}
      <CollapseItem>
        <ThemeSwitch />
      </CollapseItem>
      <CollapseItem>
        <GetInTouch />
      </CollapseItem>
    </Navbar.Collapse>
  )
}
