import { Spacer, styled, Grid } from "@nextui-org/react"
import { PostCard } from "./PostCard"
import { Typography } from "./Typography"

export function LatestBlogPosts() {
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
      <div>
        <Grid.Container gap={2} justify="center">
          <Grid xs={12} sm={4} md={3}>
            <PostCard
              title="Steam the active event"
              date="24 may 2023"
              image="https://nextui.org/images/card-example-3.jpeg"
              href="/"
              chip="use case"
            />
          </Grid>
          <Grid xs={12} sm={4} md={3}>
            <PostCard
              title="Steam the active event"
              date="24 may 2023"
              image="https://nextui.org/images/card-example-6.jpeg"
              href="/"
              chip="development"
            />
          </Grid>
        </Grid.Container>
      </div>
    </CustomersWrapper>
  )
}
