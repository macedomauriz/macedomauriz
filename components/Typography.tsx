import React, { forwardRef } from "react"
import { styled } from "@nextui-org/react"
import { Text, TextProps } from "@nextui-org/react"

const TextWrapper = styled(Text, {
  [`.dark-theme &`]: {
    fontWeight: 300,
  },
})

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
  onClick?: () => void
}

export const Typography = forwardRef<HTMLDivElement, TypographyProps>(
  function Typography(
    { children, paragraph, overline, noGutter, ...props }: TypographyProps,
    ref
  ) {
    const isHeading =
      props.h1 || props.h2 || props.h3 || props.h4 || props.h5 || props.h6
    const overlineCSS = overline && {
      textTransform: "uppercase",
    }
    const paragraphCSS = paragraph && { margin: "0.6em 0 0.4em 0" }

    const noGutterCSS = noGutter && { lineHeight: 1.2 }

    const fontWeightCSS = isHeading && { fontWeight: "600 !important" }

    return (
      <TextWrapper
        {...props}
        ref={ref}
        size={!isHeading && !props.small ? "$lg" : props.small && "$sm"}
        css={{
          ...paragraphCSS,
          ...overlineCSS,
          ...fontWeightCSS,
          ...noGutterCSS,
          ...props.css,
        }}
      >
        {children}
      </TextWrapper>
    )
  }
)
