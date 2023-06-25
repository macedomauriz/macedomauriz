import fs from "fs"
import matter from "gray-matter"
import { bundleMDX } from "mdx-bundler"
import path from "path"

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
  const remarkPlugins: any[] = []
  const rehypePlugins: any[] = []

  try {
    return await bundleMDX({
      source,
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

export const getSinglePost = async (slug: string) => {
  let source = ""
  const fileContent = getFileContent(slug)
  if (fileContent) {
    source = fileContent
    const { code, frontmatter } = await getCompiledMDX(source)

    return {
      frontmatter,
      code,
    }
  }
}

export const getAllPosts = () => {
  return getAllPostsFolders().map(folder => {
    const source = getFileContent(folder)
    const slug = folder
    const { data } = matter(source)

    return {
      frontmatter: data,
      slug: slug,
    }
  })
}
