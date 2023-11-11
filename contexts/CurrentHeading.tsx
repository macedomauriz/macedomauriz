import { createContext, useState } from "react"

export const CurrentHeadingContext = createContext<{
  currentHeading: string
  addHeading: (h: string) => void
  removeHeading: (h: string) => void
  resetHeadings: () => void
}>({
  currentHeading: "",
  addHeading: () => {},
  removeHeading: () => {},
  resetHeadings: () => {},
})

interface CurrentHeadingProps {
  children: React.ReactNode
}

export function CurrentHeadingProvider({ children }: CurrentHeadingProps) {
  const [headingsArray, setHeadingsArray] = useState<string[]>(["introduction"])

  const addHeading = (h: string) => {
    const ar = [...headingsArray, h]
    setHeadingsArray(ar)
  }

  const removeHeading = (h: string) => {
    const ar = headingsArray.filter(item => item !== h)
    setHeadingsArray(ar)
  }

  const resetHeadings = () => {
    setHeadingsArray(["introduction"])
  }

  const contextValue = {
    currentHeading: headingsArray[headingsArray.length - 1],
    addHeading,
    removeHeading,
    resetHeadings,
  }

  return (
    <CurrentHeadingContext.Provider value={contextValue}>
      {children}
    </CurrentHeadingContext.Provider>
  )
}
