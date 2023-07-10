// import useScrollDirection from "hooks/useScrollDirection"
import { createContext, useState } from "react"
// import { PostProps } from "utils/mdx"

export const CurrentHeadingContext = createContext({
  currentHeading: "",
  updateHeading: (h: string) => {},
})

interface CurrentHeadingProps {
  children: React.ReactNode
}

export function CurrentHeadingProvider({ children }: CurrentHeadingProps) {
  const [currentHeading, setCurrentHeading] = useState("Hola")
  // const scrollDir = useScrollDirection()

  const updateHeading = (h: string) => {
    setCurrentHeading(h)
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
