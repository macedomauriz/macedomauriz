import useScrollDirection from "hooks/useScrollDirection"
import { createContext, useState } from "react"
// import { PostProps } from "utils/mdx"

export const CurrentHeadingContext = createContext({
  currentHeading: "",
  updateHeading: (h: string[]) => undefined,
})

interface CurrentHeadingProps {
  children: React.ReactNode
}

export function CurrentHeadingProvider({ children }: CurrentHeadingProps) {
  const [currentHeading, setCurrentHeading] = useState("Introduction")
  const scrollDir = useScrollDirection()

  const updateHeading = (h: string[]): any => {
    const index = scrollDir === "up" ? 0 : 1
    setCurrentHeading(h[index])
  }

  const contextValue = {
    currentHeading,
    updateHeading,
  }

  return (
    <CurrentHeadingContext.Provider value={contextValue}>
      {children}
    </CurrentHeadingContext.Provider>
  )
}
