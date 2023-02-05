import { Text, TextProps } from "@nextui-org/react"

interface TypographyProps
  extends Pick<
    TextProps,
    "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote" | "color" | "as"
  > {
  paragraph?: boolean
  code?: boolean
  button?: boolean
  children: React.ReactNode
}

export function Typography({
  children,
  paragraph,
  code,
  button,
  ...props
}: TypographyProps): JSX.Element {
  return (
    <Text
      {...props}
      transform={button ? "uppercase" : "none"}
      css={{ mb: paragraph ? "0.05em" : "inherit" }}
    >
      {children}
    </Text>
  )
}
