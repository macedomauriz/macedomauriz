import { useTheme } from "@nextui-org/react"
import { Typography } from "./Typography"
import { Card, styled } from "@nextui-org/react"
import CustomLink from "./CustomLink"
import Chip, { ChipProps } from "./Chip"

interface PostCardProps {
  title: string
  date: string
  href: string
  chip: ChipProps["text"]
}

export function PostCard({ title, date, href, chip }: PostCardProps) {
  const { theme } = useTheme()

  const Header = styled(Card.Header, {
    position: "absolute",
    flexDirection: "column",
    alignItems: "flex-start",
    zIndex: 1,
    bottom: 0,
    background: `${theme?.colors.black.value}80`,
    color: `${theme?.colors.white.value}`,
    padding: "6%",
    backdropFilter: "blur(5px)",
    h4: {
      textAlign: "left",
      color: `${theme?.colors.white.value}`,
    },
    small: {
      color: `${theme?.colors.white.value}`,
    },
    "> div:nth-of-type(1)": {
      margin: "0 0 10px 0",
    },
  })

  const formattedDate = new Date(date)

  return (
    <CustomLink href={href}>
      <Card css={{ height: 160 }} variant="bordered">
        <Header>
          <Chip text={chip} />
          <Typography h4 noGutter>
            {title}
          </Typography>
          <Typography small noGutter>
            {formattedDate.toDateString()}
          </Typography>
        </Header>
      </Card>
    </CustomLink>
  )
}
