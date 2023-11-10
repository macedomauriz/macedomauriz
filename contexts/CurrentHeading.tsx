import { createContext, useState } from "react"

export const CurrentHeadingContext = createContext({
  currentHeading: "",
  updateHeading: (h?: string) => undefined,
})

interface CurrentHeadingProps {
  children: React.ReactNode
}

export function CurrentHeadingProvider({ children }: CurrentHeadingProps) {
  const [currentHeading, setCurrentHeading] = useState("puto")

  const updateHeading = (h: string): any => {
    setCurrentHeading(h)
    console.log("CONTEXT: ", currentHeading)
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
