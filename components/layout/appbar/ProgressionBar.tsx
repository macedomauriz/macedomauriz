import { useTheme } from "@nextui-org/react"
import useBodyScroll from "hooks/useBodyScroll"
import { styled } from "@nextui-org/react"

export default function ProgressionBar() {
  const { theme } = useTheme()
  const scrollY = useBodyScroll()

  const ProgressionBarWrapper = styled("div", {
    position: "fixed",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    left: 0,
    top: 76,
    div: {
      maxWidth: 1200,
      width: "100%",
      div: {
        width: `${scrollY}%`,
        transition: "width 1s",
        height: 1,
        background: theme?.colors.primary.value,
      },
    },
  })

  return (
    <ProgressionBarWrapper>
      <div>
        <div />
      </div>
    </ProgressionBarWrapper>
  )
}
