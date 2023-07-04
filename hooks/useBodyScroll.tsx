import { useEffect, useState } from "react"

export default function useBodyScroll() {
  const [scrollPercentage, setScrollPercentage] = useState(0)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)
  const [fullHeight, setFullHeight] = useState(
    document.documentElement.scrollHeight
  )

  useEffect(() => {
    const calculateScrollValues = () => {
      setWindowHeight(window.innerHeight)
      setFullHeight(document.documentElement.scrollHeight)
    }

    calculateScrollValues() // Initial call to calculate scroll values

    const handleScroll = () => {
      requestAnimationFrame(() => {
        const maxScroll = fullHeight - windowHeight
        const scrollY = window.pageYOffset
        const percentage = (scrollY / maxScroll) * 100

        setScrollPercentage(percentage)
      })
    }

    const handleResize = () => {
      requestAnimationFrame(() => {
        calculateScrollValues()
      })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [fullHeight, windowHeight])

  return scrollPercentage
}
