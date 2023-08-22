export const seo = og => {
  return {
    defaultTitle: "Rodrigo Macedo | Software developer | macedomauriz.com",
    titleTemplate: "%s | macedomauriz.com",
    description:
      "Hi, I'm Rodrigo, I work in frontend, design, and backend development. Interested in Python, Typescript, Node, Go, DevOps culture, SEO, Linux and NeoVim.",
    openGraph: {
      type: "website",
      url: "https://macedomauriz.com/",
      siteName: "macedomauriz.com",
      title: "Rodrigo Macedo | Software developer | macedomauriz.com",
      description:
        "Hi, I'm Rodrigo, I work in frontend, design, and backend development. Interested in Python, Typescript, Node, Go, DevOps culture, SEO, Linux and NeoVim.",
      images: [
        {
          url: og,
          width: 1200,
          height: 630,
          alt: "macedomauriz.com",
        },
      ],
    },
    twitter: {
      handle: "@macedomauriz",
      site: "@macedomauriz",
      cardType: "summary_large_image",
    },
  }
}
