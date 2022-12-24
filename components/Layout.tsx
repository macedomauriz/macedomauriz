import { Container } from "@nextui-org/react"
import { AppBar } from "./layout/AppBar"
import { Footer } from "./layout/Footer"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <AppBar />
      <Container as="main">{children}</Container>
      <Footer />
    </Container>
  )
}
