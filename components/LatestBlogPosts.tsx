import { Spacer, styled } from "@nextui-org/react"
import { Typography } from "./Typography"

export function LatestBlogPosts(): JSX.Element {
  // const { isDark } = useTheme()
  // const [visible, setVisible] = useState(false)

  const CustomersWrapper = styled("div", {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  })

  return (
    <CustomersWrapper>
      <Typography h6 overline color="$gray800">
        Latest Blog Posts
      </Typography>
      <Spacer y={2} />
      <div>hola</div>
    </CustomersWrapper>
  )
}
