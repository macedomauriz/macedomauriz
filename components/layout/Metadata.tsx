import { ArticleJsonLd, NextSeo } from "next-seo"
import { PostProps } from "utils/mdx"

interface seoProps {
  frontmatter: PostProps["frontmatter"]
}

const Metadata = ({ frontmatter }: seoProps) => {
  let thumbnail
  try {
    thumbnail = require(
      `../../public/posts-thumbnails/${frontmatter.slug}/thumbnail.jpg`
    )
  } catch {
    thumbnail = require(`../../public/thumbnail.jpg`)
  }

  return (
    frontmatter && (
      <>
        <NextSeo
          title={frontmatter.title}
          description={frontmatter.description}
          canonical={`https://macedomauriz.com/blog/${frontmatter.slug}`}
          openGraph={{
            url: `https://macedomauriz.com/blog/${frontmatter.slug}`,
            title: frontmatter.title,
            description: frontmatter.description,
            images: [
              {
                url: `https://macedomauriz.com${thumbnail}`,
              },
            ],
          }}
        />
        <ArticleJsonLd
          useAppDir={false}
          url={`https://macedomauriz.com/blog/${frontmatter.slug}`}
          title={frontmatter.title}
          images={["/thumbnail.jpg"]}
          datePublished={frontmatter.date}
          dateModified={frontmatter.updated ?? frontmatter.date}
          authorName={[
            {
              name: "Rodrigo Macedo Mauriz",
              url: "https://macedomauriz.com",
            },
          ]}
          publisherName="Rodrigo Macedo Mauriz"
          publisherLogo="/logo.svg"
          description={frontmatter.description}
          isAccessibleForFree={true}
        />
      </>
    )
  )
}

export default Metadata
