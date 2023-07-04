import { useEffect, useState } from "react"

export default function useBodyScroll() {
  const [scrollPercentage, setScrollPercentage] = useState(0)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)
  const [fullHeight, setFullHeight] = useState(
    document.documentElement.scrollHeight
  )

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = fullHeight - windowHeight
      const scrollY = window.pageYOffset
      const percentage = (scrollY / maxScroll) * 100

      setScrollPercentage(percentage)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [windowHeight, fullHeight])

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight)
      setFullHeight(document.documentElement.scrollHeight)

      console.log("Window resized")
    }

    handleResize() // Initial call to handle resize

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return scrollPercentage
}
