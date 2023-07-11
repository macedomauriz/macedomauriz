import { styled } from "@nextui-org/react"
import { CurrentHeadingContext } from "contexts/CurrentHeading"
import { useContext } from "react"
import Balancer from "react-wrap-balancer"
import { Typography } from "./Typography"

export function Quote() {
  const { currentHeading } = useContext(CurrentHeadingContext)

  const QuoteWrapper = styled("div", {
    textAlign: "center",
    "> h2:first-child": {
      fontStyle: "italic",
    },
  })

  return (
    <QuoteWrapper>
      {currentHeading}
      <Typography h2 paragraph color="$gray800">
        <Balancer>
          "When things are simple, fewer mistakes are made. The most expensive
          part of a building is the mistakes."
        </Balancer>
      </Typography>
      <Typography color="$gray700">
        Ken Follett - The Pillars of the Earth
      </Typography>
    </QuoteWrapper>
  )
}
