import { Spacer } from "@nextui-org/react"
import { AppBar } from "./layout/AppBar"
import { Footer } from "./layout/Footer"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "100%", maxWidth: 1200 }}>
        <AppBar />
        <Spacer y={2} />
        <div style={{ padding: "0 20px" }}>{children}</div>
        <Spacer y={5} />
        <Footer />
      </div>
    </div>
  )
}
