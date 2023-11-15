import { styled, useTheme } from "@nextui-org/react"
import { useTheme as useNextTheme } from "next-themes"

interface PostCallOutProps {
  children: React.ReactNode
  type: "warning" | "note"
}

const getBackgroundColor = (type: PostCallOutProps["type"], theme: any) => {
  if (type == "warning") {
    return theme.colors.yellow200.value
  }
  return theme.colors.blue200.value
}

const getBorderLeftColor = (type: PostCallOutProps["type"], theme: any) => {
  if (type == "warning") {
    return theme.colors.yellow800.value
  }
  return theme.colors.blue800.value
}

export function PostCallOut({ children, type }: PostCallOutProps) {
  const { theme } = useTheme()
  const { resolvedTheme } = useNextTheme()

  const PostCallOutWrapper = styled("div", {
    background: resolvedTheme && getBackgroundColor(type, theme),
    borderRadius: "0 12px 12px 0",
    padding: "2% 4%",
    margin: "24px 0",
    borderLeft: resolvedTheme && `4px solid ${getBorderLeftColor(type, theme)}`,
  })

  return <PostCallOutWrapper>{children}</PostCallOutWrapper>
}
