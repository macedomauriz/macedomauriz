import { useTheme, Text, Container, Navbar } from "@nextui-org/react"

const AppBar = () => {
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
    <Container
      className={className}
      css={{ background: "$gray900", padding: 0 }}
    >
      <AppBar />
      <main>{children}</main>
      <Footer />
    </Container>
  )
}
