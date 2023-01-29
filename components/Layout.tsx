import { Container, Spacer } from "@nextui-org/react"
import { AppBar } from "./layout/AppBar"
import { Footer } from "./layout/Footer"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ maxWidth: 1200 }}>
        <AppBar />
        <Spacer y={3} />
        <Container as="main" fluid>
          {children}
        </Container>
        <Spacer y={2} />
        <Footer />
      </div>
    </div>
  )
}
