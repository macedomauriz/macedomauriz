import { styled, useTheme } from "@nextui-org/react"
import { CurrentHeadingContext } from "contexts/CurrentHeading"
import { useContext } from "react"
import { PostProps } from "utils/mdx"
import { Typography } from "./Typography"
import jump from "jump.js"

interface TableOfContentsProps {
  headings: PostProps["headings"]
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const { theme } = useTheme()
  const { currentHeading } = useContext(CurrentHeadingContext)

  const TableOfContentsWrapper = styled("aside", {
    flex: "0 0 340px",
    position: "sticky",
    display: "flex",
    flexDirection: "column",
    gap: 24,
    top: 120,
    height: 400,
  })

  const Heading = styled(Typography, {
    listStyleType: "upper-roman",
    cursor: "pointer",
    "&:hover": {
      color: "$white",
    },
  })

  const jumpToHeading = (id: string) => {
    jump(`#${id}`, {
      duration: 1000,
      offset: -90,
    })
  }

  return (
    <TableOfContentsWrapper>
      <Typography h3>Table of contents</Typography>
      <Heading
        color={
          currentHeading === "Introduction"
            ? theme?.colors.white.value
            : theme?.colors.gray800.value
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
              currentHeading === (heading.h2 || heading.h3)
                ? theme?.colors.white.value
                : theme?.colors.gray800.value
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
