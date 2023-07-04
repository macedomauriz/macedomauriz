import { useState, useEffect } from "react"

export const useIsSsr = () => {
  const [isSsr, setIsSsr] = useState(false)

  useEffect(() => {
    setIsSsr(true)
  }, [])

  return isSsr
}
