import { Text, TextProps } from "@nextui-org/react"
import { useTheme } from "@nextui-org/react"

// TODO: exclude headings when paragraph prop is present
interface TypographyProps
  extends Pick<
    TextProps,
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "blockquote"
    | "color"
    | "as"
    | "css"
    | "small"
  > {
  paragraph?: boolean
  overline?: boolean
  children: React.ReactNode
  noGutter?: boolean
  id?: string
}

export function Typography({
  children,
  paragraph,
  overline,
  noGutter,
  ...props
}: TypographyProps) {
  const { isDark } = useTheme()
  const isHeading =
    props.h1 || props.h2 || props.h3 || props.h4 || props.h5 || props.h6
  const overlineCSS = overline && {
    textTransform: "uppercase",
  }
  const paragraphCSS = paragraph && { margin: "0 0 0.8em 0" }

  const noGutterCSS = noGutter && { lineHeight: 1 }
  return (
    <Text
      {...props}
      size={
        !isHeading && !props.small ? "$lg" : props.small ? "$xs" : undefined
      }
      weight={isDark && !isHeading ? "light" : undefined}
      css={{ ...paragraphCSS, ...overlineCSS, ...noGutterCSS, ...props.css }}
    >
      {children}
    </Text>
  )
}
