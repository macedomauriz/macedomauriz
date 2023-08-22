import { ArticleJsonLd, NextSeo } from "next-seo"
import { PostProps } from "utils/mdx"

interface seoProps {
  frontmatter: PostProps["frontmatter"]
}

const seo = ({ frontmatter }: seoProps) => {
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
                url: "/open-graph.jpg",
                width: 1200,
                height: 630,
                alt: frontmatter.title,
              },
              {
                url: "/twitter-card.jpg",
                width: 800,
                height: 418,
                alt: frontmatter.title,
              },
            ],
            site_name: "macedomauriz.com",
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
              name: "Rodrigo Macedo",
              url: "https://macedomauriz.com",
            },
          ]}
          publisherName="Rodrigo Macedo"
          publisherLogo="/logo.svg"
          description={frontmatter.description}
          isAccessibleForFree={true}
        />
      </>
    )
  )
}

export default seo
