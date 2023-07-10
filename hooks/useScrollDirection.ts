import { useEffect, useState } from "react"

export default function useScrollDirection() {
  const [scrollDir, setScrollDir] = useState<string | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const currentScrollPos = window.pageYOffset

        if (currentScrollPos > 0) {
          setScrollDir(
            currentScrollPos > (window as any).prevScrollPos ? "down" : "up"
          )
        }

        ;(window as any).prevScrollPos = currentScrollPos
      }

      window.addEventListener("scroll", handleScroll)
      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  return scrollDir
}
