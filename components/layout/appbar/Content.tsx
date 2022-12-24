import { useState } from "react"
import { Navbar, Link, styled } from "@nextui-org/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { ThemeSwitch } from "./content/ThemeSwitch"
import { GetInTouch } from "./content/GetInTouch"

// check if a media-query hook is worth it for duplication of content
const socialMedia = [
  {
    icon: faGithubAlt,
    href: "https://github.com/rodrigo1987macedo",
  },
  {
    icon: faLinkedinIn,
    href: "https://www.linkedin.com/in/rodrigo-macedo-28944091/",
  },
]

const navigation = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Blog",
    href: "/blog",
  },
]

export const DesktopContent = () => {
  return (
    <>
      <Navbar.Content hideIn="xs">
        {navigation.map(i => {
          return (
            <Navbar.Link key={i.text} isActive>
              {i.text}
            </Navbar.Link>
          )
        })}
      </Navbar.Content>
      <Navbar.Content hideIn="xs">
        {socialMedia.map(i => {
          return (
            <Navbar.Link key={i.href} href={i.href} target="_blank">
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
  const CollapseItem = styled(Navbar.CollapseItem, {
    justifyContent: "center",
    height: 50,
  })
  return (
    <Navbar.Collapse disableAnimation>
      {navigation.map(i => {
        return (
          <CollapseItem key={i.text} isActive>
            {i.text}
          </CollapseItem>
        )
      })}
      {socialMedia.map(i => {
        return (
          <CollapseItem key={i.icon.toString()}>
            <Link href={i.href} target="_blank" css={{ color: "$white" }}>
              <FontAwesomeIcon icon={i.icon as IconProp} size="xl" />
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
