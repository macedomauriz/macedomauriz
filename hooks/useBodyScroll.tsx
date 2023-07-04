import { useEffect, useState } from "react"

export default function useBodyScroll() {
  const [scrollPercentage, setScrollPercentage] = useState(0)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)
  const [fullHeight, setFullHeight] = useState(
    document.documentElement.scrollHeight
  )

  useEffect(() => {
    let timer: number // Variable to hold the timer reference

    const calculateScrollValues = () => {
      setWindowHeight(window.innerHeight)
      setFullHeight(document.documentElement.scrollHeight)
    }

    const handleScroll = () => {
      cancelAnimationFrame(timer) // Cancel any previously scheduled execution
      timer = requestAnimationFrame(() => {
        const maxScroll = fullHeight - windowHeight
        const scrollY = window.pageYOffset
        const percentage = (scrollY / maxScroll) * 100

        setScrollPercentage(percentage)
      })
    }

    const handleResize = () => {
      cancelAnimationFrame(timer) // Cancel any previously scheduled execution
      timer = requestAnimationFrame(() => {
        calculateScrollValues()
      })
    }

    // Initial call to calculate scroll values after a delay of 500ms
    timer = window.setTimeout(calculateScrollValues, 500)

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
      window.clearTimeout(timer) // Cancel the timer on unmount
    }
  }, [fullHeight, windowHeight])

  return scrollPercentage
}
