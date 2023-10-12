import { ArticleJsonLd, NextSeo } from "next-seo"
import { PostProps } from "utils/mdx"

interface seoProps {
  frontmatter: PostProps["frontmatter"]
}

const Metadata = ({ frontmatter }: seoProps) => {
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
          }}
        />
        <ArticleJsonLd
          useAppDir={false}
          url={`https://macedomauriz.com/blog/${frontmatter.slug}`}
          title={frontmatter.title}
          images={["/open-graph.jpg"]}
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
