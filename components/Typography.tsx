import { Text, TextProps } from "@nextui-org/react"
import { useTheme } from "@nextui-org/react"

// TODO: exclude headings when paragraph prop is present
interface TypographyProps
  extends Pick<
    TextProps,
    "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote" | "color" | "as"
  > {
  paragraph?: boolean
  children: React.ReactNode
}

export function Typography({
  children,
  paragraph,
  ...props
}: TypographyProps): JSX.Element {
  const { isDark } = useTheme()
  const isHeading =
    props.h1 || props.h2 || props.h3 || props.h4 || props.h5 || props.h6
  return (
    <Text
      {...props}
      size={!isHeading ? "$lg" : undefined}
      weight={isDark && !isHeading ? "light" : undefined}
      css={paragraph ? { margin: "0 0 0.8em 0" } : undefined}
    >
      {children}
    </Text>
  )
}
