import { Container } from "@nextui-org/react"
import { styled } from "@nextui-org/react"
import { Typography } from "../Typography"

export const Footer = () => {
  const FooterWrapper = styled(Container, {
    display: "flex",
    justifyContent: "center",
    padding: 20,
    borderTop: "1px solid $gray400",
  })
  const currentYear = new Date().getFullYear()

  return (
    <FooterWrapper as="footer">
      <Typography small>
        Copywright © {currentYear} Rodrigo Macedo. All rights reserved.
      </Typography>
    </FooterWrapper>
  )
}
