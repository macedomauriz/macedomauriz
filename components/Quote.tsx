import { styled } from "@nextui-org/react"
import Balancer from "react-wrap-balancer"
// import { useTheme } from "@nextui-org/react"
// import CustomLink from "./CustomLink"
// import Image from "next/image"
import { Typography } from "./Typography"
// import { useState } from "react"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import {
//   faCircleArrowRight,
//   faCircleArrowLeft,
// } from "@fortawesome/free-solid-svg-icons"

// interface CustomersProps {
//   src: string
//   alt: string
//   href: string
//   width: number
//   height: number
//   description: string
//   translateY?: string
// }

// const customers: CustomersProps[] = []

export function Quote(): JSX.Element {
  // const { isDark } = useTheme()
  // const [visible, setVisible] = useState(false)

  const CustomersWrapper = styled("div", {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  })

  return (
    <CustomersWrapper>
      <Typography h2 paragraph color="$gray800" css={{ fontStyle: "italic" }}>
        <Balancer>
          "When things are simple, fewer mistakes are made. The most expensive
          part of a building is the mistakes."
        </Balancer>
      </Typography>
      <Typography color="$gray800">
        Ken Follett - The Pillars of the Earth
      </Typography>
    </CustomersWrapper>
  )
}
