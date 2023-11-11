import { useInView } from "react-intersection-observer"
import { CurrentHeadingContext } from "contexts/CurrentHeading"
import { useContext, useEffect, useRef, useState } from "react"

interface PostSectionProps {
  children: React.ReactNode
  isIntroduction?: boolean
}

export function PostSection({ children }: PostSectionProps) {
  const { addHeading, removeHeading, resetHeadings } = useContext(
    CurrentHeadingContext
  )
  const [elementRefId, setElementRefId] = useState<string>()
  const { ref, inView } = useInView({
    rootMargin: "-100px 0px -100px 0px",
    threshold: 0,
  })
  const elementRef: React.LegacyRef<HTMLDivElement> | undefined =
    useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!elementRefId) {
      const id = elementRef?.current?.previousElementSibling?.id
      id && setElementRefId(id)
    }
    inView && elementRefId && addHeading(elementRefId)
    !inView && elementRefId && removeHeading(elementRefId)
    // eslint-disable-next-line
  }, [inView])

  useEffect(() => {
    // Check scroll position and call resetHeadings when scroll is at 200px from the top
    const handleScroll = () => {
      if (window.scrollY < 200) {
        resetHeadings()
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
    // eslint-disable-next-line
  }, [])

  return (
    <div ref={elementRef}>
      <section ref={ref}>{children}</section>
    </div>
  )
}
