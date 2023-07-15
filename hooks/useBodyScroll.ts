import { useEffect, useState } from "react"
import { throttle } from "lodash"

export default function useBodyScroll() {
  const [scrollY, setScrollPercentage] = useState(0)
  const [isBottom, setIsBottom] = useState(false)
  const [isTop, setIsTop] = useState(false)
  const [windowHeight, setWindowHeight] = useState(0)
  const [fullHeight, setFullHeight] = useState(0)

  useEffect(() => {
    const calculateScrollValues = () => {
      setWindowHeight(window.innerHeight)
      setFullHeight(document.documentElement.scrollHeight)
    }

    const handleScroll = throttle(() => {
      const maxScroll = fullHeight - windowHeight
      const scrollY = window.pageYOffset
      const percentage = (scrollY / maxScroll) * 100

      setScrollPercentage(percentage)
      setIsBottom(percentage === 100)
      setIsTop(percentage === 0)
    }, 200) // Throttle the scroll event to execute at most every 200 milliseconds

    const handleResize = throttle(() => {
      calculateScrollValues()
    }, 1) // Throttle the resize event to execute at most every 1 millisecond

    if (typeof window !== "undefined") {
      calculateScrollValues()
      window.addEventListener("scroll", handleScroll)
      window.addEventListener("resize", handleResize)
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll)
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [fullHeight, windowHeight])

  return { scrollY, isBottom, isTop }
}
