import { styled } from "@nextui-org/react"
import Balancer from "react-wrap-balancer"
import { Typography } from "./Typography"

interface SectionTitleProps {
  children: React.ReactNode
}

export function SectionTitle({ children }: SectionTitleProps) {
  const SectionTitleWrapper = styled("div", {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  })

  const Underline = styled("div", {
    width: 40,
    height: 4,
    margin: "8px 0 10px 0",
    background: "$primary",
  })

  return (
    <SectionTitleWrapper>
      <Balancer>
        <Typography h4 overline color="$gray800">
          {children}
        </Typography>
      </Balancer>
      <Underline />
    </SectionTitleWrapper>
  )
}
