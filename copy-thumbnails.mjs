import fs from "fs"
import path from "path"

const getAllPostsFolders = () => {
  const folders = fs
    .readdirSync(path.join(process.cwd(), "content", "posts"), {
      withFileTypes: true,
    })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)
  return folders
}

const getThumbnailExpectedPath = () => {
  const thumbnailExpectedPath = getAllPostsFolders().map(folder => {
    return folder
  })
  return thumbnailExpectedPath
}

const thumbnailExists = folder => {
  try {
    const expectedFile = fs.statSync(
      path.join(process.cwd(), "content", "posts", folder, "thumbnail.jpg")
    )
    return expectedFile.isFile()
  } catch {
    console.error(`WARNING: No thumbnail in "${folder}"`)
  }
}

const copyThumbnails = () => {
  getThumbnailExpectedPath().map(folder => {
    fs.mkdirSync(
      path.join(process.cwd(), "public", "posts-thumbnails", folder),
      {
        recursive: true,
      }
    )
    if (thumbnailExists(folder)) {
      fs.copyFileSync(
        path.join(
          path.join(process.cwd(), "content", "posts", folder, "thumbnail.jpg")
        ),
        path.join(
          process.cwd(),
          "public",
          "posts-thumbnails",
          folder,
          "thumbnail.jpg"
        )
      )
      console.log(`"${folder}" posts thumbnail >>> "./${path.join(
        "public",
        "posts-thumbnails",
        folder
      )}" folder
        `)
    }
  })
}

console.log("Copying posts thumbnails:")
copyThumbnails()
