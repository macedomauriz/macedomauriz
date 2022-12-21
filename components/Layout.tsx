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

const AppBar = () => {
  const { setTheme } = useNextTheme()
  const { isDark, type } = useTheme()
  return (
    <Navbar isBordered variant="sticky">
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
      <Button
        light
        auto
        ripple={false}
        onClick={() => setTheme(isDark ? "light" : "dark")}
      >
        {isDark ? (
          <FontAwesomeIcon icon={faMoon} size="xl" />
        ) : (
          <FontAwesomeIcon icon={faSun} size="xl" />
        )}
      </Button>
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
    <Container className={className}>
      <AppBar />
      <main>{children}</main>
      <Footer />
    </Container>
  )
}
