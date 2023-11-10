import { InView } from "react-intersection-observer"
import { CurrentHeadingContext } from "contexts/CurrentHeading"
import { useContext, useRef } from "react"
import { CurrentHeadingProvider } from "contexts/CurrentHeading"

interface PostSectionProps {
  children: any
}

export function PostSection({ children }: PostSectionProps) {
  const elementRef: React.LegacyRef<HTMLDivElement> | undefined =
    useRef<HTMLDivElement>(null)

  const { currentHeading, updateHeading } = useContext(CurrentHeadingContext)

  console.log("currentHeading: ", currentHeading)

  const updateHeadingHelper = (id?: string) => {
    console.log("id: ", id)
    updateHeading(id)
  }

  return (
    <CurrentHeadingProvider>
      <div ref={elementRef}>
        noooo
        <InView
          as="section"
          onChange={inView =>
            inView &&
            updateHeadingHelper(elementRef?.current?.previousElementSibling?.id)
          }
        >
          {children}
        </InView>
      </div>
    </CurrentHeadingProvider>
  )
}
