import { styled } from "@nextui-org/react"
import { Typography } from "./Typography"
import { useTheme } from "@nextui-org/react"

export interface ChipProps {
  text: "use case" | "development"
}

export default function Chip({ text }: ChipProps) {
  const { theme } = useTheme()

  function getColor(text: ChipProps["text"]): {
    color: string
    background: string
  } {
    const color =
      text === "use case" ? "pink50" : text === "development" && "green50"

    const background =
      text === "use case" ? "pink800" : text === "development" && "green800"

    return { color: color as string, background: background as string }
  }

  const ChipWrapper = styled("div", {
    display: "flex",
    background:
      // @ts-ignore
      theme?.colors[getColor(text).background].value,
    borderRadius: 16,
    padding: "5px 8px 4px 8px",
  })

  return (
    <ChipWrapper>
      <Typography
        as="time"
        css={{ fontSize: 8 }}
        small
        overline
        color={`$${getColor(text).color}`}
      >
        {text}
      </Typography>
    </ChipWrapper>
  )
}
