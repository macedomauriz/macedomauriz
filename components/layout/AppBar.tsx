import { useTheme, Navbar } from "@nextui-org/react"
import { useMediaQuery } from "@react-hook/media-query"

import { styled } from "@nextui-org/react"
import { DesktopContent, MobileContent } from "./appbar/Content"

export const AppBar = () => {
  const { isDark } = useTheme()
  const isMobile = useMediaQuery("only screen and (max-width: 650px)")

  const BrandImage = styled("img", {
    filter: `invert(${isDark ? 0 : 1})`,
  })
  return (
    <Navbar variant="sticky" disableShadow isBordered>
      <Navbar.Brand>
        <BrandImage src="/logo.svg" alt="logo" width={40} height={40} />
      </Navbar.Brand>
      <Navbar.Toggle showIn="xs" />
      {!isMobile && <DesktopContent />}
      {isMobile && <MobileContent />}
    </Navbar>
  )
}
