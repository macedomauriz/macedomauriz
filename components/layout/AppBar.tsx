import { useTheme, Navbar } from "@nextui-org/react"
import { styled } from "@nextui-org/react"
import CustomLink from "../CustomLink"
import { DesktopContent, MobileContent } from "./appbar/Content"
import { useIsSsr } from "hooks/isSsr"
import { useRouter } from "next/router"
import ProgressionBar from "./appbar/ProgressionBar"

export const AppBar = () => {
  const { isDark } = useTheme()
  const router = useRouter()
  const isSsr = useIsSsr()

  const AppBarWrapper = styled(Navbar, {
    position: "relative",
    "> div": {
      padding: "0 20px",
    },
  })

  const BrandImage = styled("img", {
    filter: `invert(${isDark ? 0.08 : 0.97})`,
  })

  return (
    <AppBarWrapper variant="sticky" disableShadow isBordered>
      <Navbar.Brand>
        <CustomLink href="/">
          <BrandImage src="/logo.svg" alt="logo" width={45} height={45} />
        </CustomLink>
      </Navbar.Brand>
      <Navbar.Toggle showIn="xs" />
      <DesktopContent />
      <MobileContent />
      {isSsr && router.pathname === "/blog/[slug]" && <ProgressionBar />}
    </AppBarWrapper>
  )
}
