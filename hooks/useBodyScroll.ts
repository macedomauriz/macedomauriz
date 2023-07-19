import { useEffect, useState } from "react"
import { throttle } from "lodash"
import { useMediaQuery } from "react-responsive"

export default function useBodyScroll() {
  const [scrollY, setScrollPercentage] = useState(0)
  const [isBottom, setIsBottom] = useState(false)
  const [isTop, setIsTop] = useState(false)
  const [windowHeight, setWindowHeight] = useState(0)
  const [fullHeight, setFullHeight] = useState(0)
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  })

  useEffect(() => {
    const calculateScrollValues = () => {
      setWindowHeight(window.innerHeight)
      setFullHeight(document.documentElement.scrollHeight)
    }

    const valuesHandler = () => {
      const maxScroll = fullHeight - windowHeight
      const scrollY = window.pageYOffset
      const percentage = (scrollY / maxScroll) * 100

      setScrollPercentage(percentage)
      setIsBottom(percentage >= 99)
      setIsTop(percentage <= 1)
    }

    const handleScroll = isDesktopOrLaptop
      ? valuesHandler
      : throttle(valuesHandler, 10)

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
