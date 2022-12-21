import { useTheme, Text, Container, Navbar, Switch } from "@nextui-org/react"
import {
  useTheme as useNextTheme,
  ThemeProvider as NextThemesProvider,
} from "next-themes"

const AppBar = () => {
  const { setTheme } = useNextTheme()
  const { isDark, type } = useTheme()
  return (
    <Navbar
      isBordered
      variant="sticky"
      css={{
        display: "flex",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Navbar.Brand>
        <img src="/logo.svg" alt="logo" width={40} height={40} />
      </Navbar.Brand>
      <Navbar.Content hideIn="xs">
        <Navbar.Link href="#">Features</Navbar.Link>
        <Navbar.Link isActive href="#">
          Customers
        </Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Company</Navbar.Link>
      </Navbar.Content>
      <Switch
        checked={isDark}
        onChange={e => setTheme(e.target.checked ? "dark" : "light")}
      />
      <Text style={{ display: "inline", fontSize: 30, color: "white" }}>
        macedo<span style={{ fontWeight: 400, fontSize: 30 }}>mauriz</span>
      </Text>
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
