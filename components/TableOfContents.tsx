import { styled, useTheme } from "@nextui-org/react"
import { CurrentHeadingContext } from "contexts/CurrentHeading"
import { useContext, useState } from "react"
import { PostProps } from "utils/mdx"
import { Typography } from "./Typography"
import jump from "jump.js"

interface TableOfContentsProps {
  headings: PostProps["headings"]
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const { theme, isDark } = useTheme()
  const { currentHeading, updateHeading } = useContext(CurrentHeadingContext)

  const TableOfContentsWrapper = styled("aside", {
    position: "sticky",
    display: "flex",
    flexDirection: "column",
    gap: 24,
    top: 120,
    maxHeight: "calc(100vh - 60px)",
  })

  const Heading = styled(Typography, {
    listStyleType: "upper-roman",
    cursor: "pointer",
    "&:hover": {
      color: "$white",
    },
  })

  const jumpToHeading = (id: string) => {
    const headingTitle = id.replace(/-/g, " ")
    jump(`#${id}`, {
      duration: 1000,
      offset: -90,
      callback: () =>
        id !== "top" && updateHeading([headingTitle, headingTitle]),
    })
  }

  const selectedHeading = isDark
    ? theme?.colors.white.value
    : theme?.colors.black.value

  return (
    <TableOfContentsWrapper>
      <Typography h3>Table of contents</Typography>
      <Heading
        color={
          currentHeading === "introduction"
            ? selectedHeading
            : theme?.colors.gray700.value
        }
        noGutter
        onClick={() => jumpToHeading("top")}
      >
        Introduction
      </Heading>
      {headings.map(heading => {
        return (
          <Heading
            small={heading.h3 ? true : false}
            css={{ margin: `0 0 0 ${heading.h3 && "14px"}` }}
            key={heading.h2 || heading.h3}
            color={
              currentHeading ===
              (heading.h2?.toLowerCase() || heading.h3?.toLowerCase())
                ? selectedHeading
                : theme?.colors.gray700.value
            }
            noGutter
            onClick={() =>
              jumpToHeading(
                (heading.h2 || heading.h3).toLowerCase().replace(/\s/g, "-")
              )
            }
          >
            {heading.h2 || heading.h3}
          </Heading>
        )
      })}
    </TableOfContentsWrapper>
  )
}
