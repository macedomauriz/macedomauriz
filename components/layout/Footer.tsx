import { Container } from "@nextui-org/react"
import { styled } from "@nextui-org/react"
import { Typography } from "../Typography"
import Image from "next/image"

export const Footer = () => {
  const FooterWrapper = styled(Container, {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "50px 10px",
    borderTop: "1px solid $gray400",
    background: "none",
  })
  const currentYear = new Date().getFullYear()

  return (
    <FooterWrapper as="footer">
      <Image
        src="/macedomauriz.svg"
        alt="macedomauriz"
        width={240}
        height={40}
      />
      <br />
      <Typography small>
        Copywright © {currentYear} Rodrigo Macedo Mauriz. All rights reserved.
      </Typography>
    </FooterWrapper>
  )
}
