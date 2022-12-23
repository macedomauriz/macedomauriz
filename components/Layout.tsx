import { Container } from "@nextui-org/react"
import { AppBar } from "./layout/AppBar"
import { Footer } from "./layout/Footer"

interface LayoutProps {
  children: React.ReactNode
  className: string
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
