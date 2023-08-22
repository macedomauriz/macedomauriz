import { ChipProps } from "components/Chip"
import fs from "fs"
import matter from "gray-matter"
import { bundleMDX } from "mdx-bundler"
import path from "path"
import remarkMdxImages from "remark-mdx-images"
import { unified } from "unified"
import remarkParse from "remark-parse"
import rehypePrism from "rehype-prism-plus"
import rehypeCodeTitles from "rehype-code-titles"
import rehypeSlug from "rehype-slug"
import remarkExternalLinks from "remark-external-links"
import remarkUnwrapImages from "remark-unwrap-images"
import remarkHtml from "remark-html"
import remarkGfm from "remark-gfm"
import striptags from "striptags"
import readingTime from "reading-time"
import { parse } from "parse5"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"

export interface PostProps {
  code: string
  slug: string
  time: string
  headings: { [key: string]: string }[]
  frontmatter: {
    title: string
    description: string
    date: string
    image: string
    category: ChipProps["text"]
    slug: string
    updated?: string
  }
}

export const ROOT = process.cwd()

const getCompiledMDX = async (source: string) => {
  if (process.platform === "win32") {
    process.env.ESBUILD_BINARY_PATH = path.join(
      ROOT,
      "node_modules",
      "esbuild",
      "esbuild.exe"
    )
  } else {
    process.env.ESBUILD_BINARY_PATH = path.join(
      ROOT,
      "node_modules",
      "esbuild",
      "bin",
      "esbuild"
    )
  }

  // Add your remark and rehype plugins here
  const remarkPlugins: any[] = [
    remarkUnwrapImages,
    remarkMath,
    remarkMdxImages,
    remarkGfm,
    remarkExternalLinks,
  ]
  const rehypePlugins: any[] = [
    rehypeKatex,
    rehypeSlug,
    rehypeCodeTitles,
    rehypePrism,
  ]

  try {
    return await bundleMDX({
      source,
      cwd: path.join(
        process.cwd(),
        "content",
        "posts",
        matter(source).data.slug
      ),
      mdxOptions(options) {
        options.remarkPlugins = [
          ...(options.remarkPlugins ?? []),
          ...remarkPlugins,
        ]
        options.rehypePlugins = [
          ...(options.rehypePlugins ?? []),
          ...rehypePlugins,
        ]

        return options
      },

      esbuildOptions: options => {
        // Set the `outdir` to a public location for this bundle.
        options.outdir = path.join(process.cwd(), "public", "posts-images")
        options.loader = {
          ...options.loader,
          // Tell esbuild to use the `file` loader for pngs
          ".png": "file",
        }
        // Set the public path to /img/about
        options.publicPath = "/posts-images/"

        // Set write to true so that esbuild will output the files.
        options.write = true

        return options
      },
    })
  } catch (error: any) {
    throw new Error(error)
  }
}

const getAllPostsFolders = () => {
  const folders = fs
    .readdirSync(POSTS_PATH, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)
  return folders
}

export const POSTS_PATH = path.join(process.cwd(), "content/posts")

export const getFileContent = (filename: string) => {
  return fs.readFileSync(path.join(POSTS_PATH, filename, "index.mdx"), "utf8")
}

const getHeadings = (htmlContent: string) => {
  const document = parse(htmlContent)
  type HeadingType = {
    [key: string]: string
  }
  const headings: HeadingType[] = []

  const traverseNodes = (node: any) => {
    if (node.nodeName === "h2") {
      const headingValue = node.childNodes[0]?.value
      if (headingValue) {
        headings.push({ h2: headingValue })
      }
    }

    if (node.nodeName === "h3") {
      const headingValue = node.childNodes[0]?.value
      if (headingValue) {
        headings.push({ h3: headingValue })
      }
    }

    if ("childNodes" in node) {
      node.childNodes.forEach(traverseNodes)
    }
  }

  traverseNodes(document)

  return headings
}

function getHTMLContent(content: string) {
  const processor = unified().use(remarkParse).use(remarkHtml)

  const cleanedContent = processor
    .processSync(matter(content).content)
    .toString()

  return cleanedContent
}

export const getSinglePost = async (slug: string) => {
  const fileContent = getFileContent(slug)

  const htmlContent = getHTMLContent(fileContent)
  const time = readingTime(striptags(htmlContent)).text
  const headings = getHeadings(htmlContent)

  if (fileContent) {
    const { code, frontmatter } = await getCompiledMDX(fileContent)

    return {
      frontmatter,
      code,
      time,
      headings,
      slug,
    }
  }
}

export const getAllPosts = () => {
  return getAllPostsFolders().map(folder => {
    const source = getFileContent(folder)
    const slug = folder
    const frontmatter = matter(source).data

    return {
      frontmatter,
      slug,
    }
  })
}
