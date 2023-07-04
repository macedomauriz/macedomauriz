import { useTheme } from "@nextui-org/react"
import useBodyScroll from "hooks/useBodyScroll"
import { styled } from "@nextui-org/react"

export default function ProgressionBar() {
  const { theme } = useTheme()
  const scrollY = useBodyScroll()

  const ProgressionBarWrapper = styled("div", {
    position: "absolute",
    display: "flex",
    width: "100%",
    left: 0,
    bottom: "-1px",
    div: {
      width: `${scrollY}%`,
      height: 1,
      background: theme?.colors.primary.value,
    },
  })

  return (
    <ProgressionBarWrapper>
      <div />
    </ProgressionBarWrapper>
  )
}
