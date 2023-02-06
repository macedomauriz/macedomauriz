import { useTheme, Navbar } from "@nextui-org/react"
import { styled } from "@nextui-org/react"
import { DesktopContent, MobileContent } from "./appbar/Content"

export const AppBar = () => {
  const { isDark } = useTheme()

  const BrandImage = styled("img", {
    filter: `invert(${isDark ? 0.08 : 0.97})`,
  })
  return (
    <Navbar variant="sticky" disableShadow isBordered>
      <Navbar.Brand>
        <BrandImage src="/logo.svg" alt="logo" width={45} height={45} />
      </Navbar.Brand>
      <Navbar.Toggle showIn="xs" />
      <DesktopContent />
      <MobileContent />
    </Navbar>
  )
}
