import { styled, useTheme } from "@nextui-org/react"
import { useTheme as useNextTheme } from "next-themes"
import { CurrentHeadingContext } from "contexts/CurrentHeading"
import { useContext } from "react"
import { PostProps } from "utils/mdx"
import { Typography } from "./Typography"
import jump from "jump.js"
import {
  LinkedinShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share"
import {
  faLinkedin,
  faRedditAlien,
  faTelegram,
  faWhatsapp,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface TableOfContentsProps {
  headings: PostProps["headings"]
  slug: string
}

export default function TableOfContents({
  headings,
  slug,
}: TableOfContentsProps) {
  const { theme } = useTheme()
  const { resolvedTheme } = useNextTheme()
  const { currentHeading, updateHeading } = useContext(CurrentHeadingContext)
  const shareUrl = `https://macedomauriz.com/blog/${slug}`

  let selectedHeading: string | undefined

  switch (resolvedTheme) {
    case "light":
      selectedHeading = theme?.colors.black.value
      break
    case "dark":
      selectedHeading = theme?.colors.white.value
      break
  }

  const TableOfContentsWrapper = styled("aside", {
    position: "sticky",
    display: "flex",
    flexDirection: "column",
    top: 120,
    gap: 20,
    maxHeight: "calc(100vh - 60px)",
  })

  const Headings = styled("div", {
    display: "grid",
    gap: 22,
    gridTemplateColumns: "max-content",
  })

  const Heading = styled(Typography, {
    listStyleType: "upper-roman",
    cursor: "pointer",
    "&:hover": {
      color: selectedHeading,
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

  const Share = styled("div", {
    display: "grid",
    gap: 14,
    gridTemplateColumns: "max-content",
    padding: "20px 0 0 0",
    borderTop: `1px solid ${theme?.colors.gray500.value}`,
    "> div": {
      display: "flex",
      gap: "24px",
    },
  })

  return (
    <TableOfContentsWrapper>
      <Typography h3>Table of contents</Typography>
      <Headings>
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
      </Headings>
      <Share>
        <Typography h3>Share</Typography>
        <div>
          <TwitterShareButton url={shareUrl}>
            <FontAwesomeIcon icon={faXTwitter} size="lg" />
          </TwitterShareButton>
          <LinkedinShareButton url={shareUrl}>
            <FontAwesomeIcon icon={faLinkedin} size="xl" />
          </LinkedinShareButton>
          <RedditShareButton url={shareUrl}>
            <FontAwesomeIcon icon={faRedditAlien} size="xl" />
          </RedditShareButton>
          <WhatsappShareButton url={shareUrl}>
            <FontAwesomeIcon icon={faWhatsapp} size="xl" />
          </WhatsappShareButton>
          <TelegramShareButton url={shareUrl}>
            <FontAwesomeIcon icon={faTelegram} size="xl" />
          </TelegramShareButton>
        </div>
      </Share>
    </TableOfContentsWrapper>
  )
}
