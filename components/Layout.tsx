import {
  useTheme,
  // Text,
  Container,
  Navbar,
  Button,
  Link,
} from "@nextui-org/react"
import { useTheme as useNextTheme } from "next-themes"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

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

const ThemeSwitch = () => {
  const { setTheme } = useNextTheme()
  const { isDark } = useTheme()
  return (
    <Button
      light
      auto
      ripple={false}
      size="sm"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? (
        <FontAwesomeIcon icon={faMoon} size="xl" />
      ) : (
        <FontAwesomeIcon icon={faSun} size="xl" />
      )}
    </Button>
  )
}

const AppBar = () => {
  const { isDark } = useTheme()
  return (
    <Navbar variant="floating">
      <Navbar.Collapse disableAnimation>
        {navigation.map(i => {
          return <Navbar.CollapseItem isActive>{i.text}</Navbar.CollapseItem>
        })}
        {socialMedia.map(i => {
          return (
            <Navbar.CollapseItem>
              <FontAwesomeIcon icon={i.icon as IconProp} size="xl" />
            </Navbar.CollapseItem>
          )
        })}
        <ThemeSwitch />
      </Navbar.Collapse>
      <Navbar.Brand css={{ filter: `invert(${!isDark ? 1 : 0})` }}>
        <img src="/logo.svg" alt="logo" width={40} height={40} />
      </Navbar.Brand>
      <Navbar.Toggle showIn="xs" />
      <Navbar.Content hideIn="xs">
        <Navbar.Link isActive href="#">
          Home
        </Navbar.Link>
        <Navbar.Link href="#">Blog</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content hideIn="sm">
        <ThemeSwitch />
        {socialMedia.map(i => {
          return (
            <Navbar.Link href={i.href}>
              <FontAwesomeIcon icon={i.icon as IconProp} size="xl" />
            </Navbar.Link>
          )
        })}
      </Navbar.Content>
    </Navbar>
  )
}

const Footer = () => {
  return (
    <Container as="footer">
      <div>footer</div>
    </Container>
  )
}

interface LayoutProps {
  children: React.ReactNode
  className: any
}

export function Layout({ children, className }: LayoutProps) {
  return (
    <Container className={className} gap={0}>
      <AppBar />
      <Container as="main">{children}</Container>
      <Footer />
    </Container>
  )
}
