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
      width: "100%",
      background: `linear-gradient(to right, ${theme?.colors.primary.value} ${scrollY}%, transparent 0%)`,
      height: 1,
    },
  })

  return (
    <ProgressionBarWrapper>
      <div />
    </ProgressionBarWrapper>
  )
}
