import { useTheme } from "@nextui-org/react"
import { Typography } from "./Typography"
import { Card, styled } from "@nextui-org/react"
import CustomLink from "./CustomLink"
import Chip, { ChipProps } from "./Chip"

interface PostCardProps {
  title: string
  date: string
  image: string
  href: string
  chip: ChipProps["text"]
}

export function PostCard({ title, date, image, href, chip }: PostCardProps) {
  const { theme } = useTheme()

  const Header = styled(Card.Header, {
    position: "absolute",
    flexDirection: "column",
    alignItems: "flex-start",
    zIndex: 1,
    bottom: 0,
    background: `${theme?.colors.background.value}80`,
    padding: "6%",
    backdropFilter: "blur(5px)",
    h4: {
      textAlign: "left",
    },
    "> div:nth-of-type(1)": {
      margin: "0 0 10px 0",
    },
  })

  return (
    <CustomLink href={href}>
      <Card css={{ height: 340 }} isPressable>
        <Header>
          <Chip text={chip} />
          <Typography h4 noGutter>
            {title}
          </Typography>
          <Typography small noGutter>
            {date}
          </Typography>
        </Header>
        <Card.Image
          src={image}
          objectFit="cover"
          width="100%"
          alt="Card image background"
        />
      </Card>
    </CustomLink>
  )
}
