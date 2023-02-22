import { Spacer, styled } from "@nextui-org/react"
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

export function UseCases(): JSX.Element {
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
      <Typography h6 overline color="$gray800">
        My interests
      </Typography>
      <Spacer y={2} />
      <div>hola</div>
    </CustomersWrapper>
  )
}
