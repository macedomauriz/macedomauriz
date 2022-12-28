import { useTheme, Navbar } from "@nextui-org/react"

import { styled } from "@nextui-org/react"
import { DesktopContent, MobileContent } from "./appbar/Content"

export const AppBar = () => {
  const { isDark } = useTheme()

  const BrandImage = styled("img", {
    filter: `invert(${isDark ? 0 : 1})`,
  })
  return (
    <Navbar variant="sticky" disableShadow isBordered>
      <Navbar.Brand>
        <BrandImage src="/logo.svg" alt="logo" width={40} height={40} />
      </Navbar.Brand>
      <Navbar.Toggle showIn="xs" />
      <DesktopContent />
      <MobileContent />
    </Navbar>
  )
}
