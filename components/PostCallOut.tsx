import { styled, useTheme } from "@nextui-org/react"
// import { useTheme as useNextTheme } from "next-themes"

interface PostCallOutProps {
  children: React.ReactNode
  type: "warning" | "note"
}

export function PostCallOut({ children, type }: PostCallOutProps) {
  const { theme } = useTheme()
  // const { resolvedTheme } = useNextTheme()

  const PostCallOutWrapper = styled("div", {
    background:
      type === "warning"
        ? theme?.colors.yellow200.value
        : theme?.colors.blue200.value,
    borderRadius: "0 12px 12px 0",
    padding: "2% 4%",
    margin: "24px 0",
    borderLeft:
      type === "warning"
        ? `4px solid ${theme?.colors.yellow800.value}`
        : `4px solid ${theme?.colors.blue800.value}`,
  })

  return <PostCallOutWrapper>{children}</PostCallOutWrapper>
}
