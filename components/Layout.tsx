import {
  useTheme,
  // Text,
  Container,
  Navbar,
  Button,
} from "@nextui-org/react"
import { useTheme as useNextTheme } from "next-themes"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"
import { faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

const AppBar = () => {
  const { setTheme } = useNextTheme()
  const { isDark, type } = useTheme()
  return (
    <Navbar variant="floating">
      <Navbar.Brand css={{ filter: `invert(${!isDark ? 1 : 0})` }}>
        <img src="/logo.svg" alt="logo" width={40} height={40} />
      </Navbar.Brand>
      <Navbar.Content hideIn="xs">
        <Navbar.Link isActive href="#">
          Home
        </Navbar.Link>
        <Navbar.Link href="#">Projects</Navbar.Link>
        <Navbar.Link href="#">Blog</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
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
        <FontAwesomeIcon icon={faGithubAlt} size="xl" />
        <FontAwesomeIcon icon={faLinkedinIn} size="xl" />
      </Navbar.Content>
    </Navbar>
  )
}

const Footer = () => {
  return (
    <footer>
      <div>footer</div>
    </footer>
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
      <main>{children}</main>
      <Footer />
    </Container>
  )
}
