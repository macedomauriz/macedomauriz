import { useTheme as useNextTheme } from "next-themes"
import { useTheme, Button } from "@nextui-org/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"

export const ThemeSwitch = () => {
  const { setTheme } = useNextTheme()
  const { isDark } = useTheme()
  return (
    <Button
      light
      auto
      ripple={false}
      size="sm"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? (
        <FontAwesomeIcon icon={faMoon} size="xl" />
      ) : (
        <FontAwesomeIcon icon={faSun} size="xl" />
      )}
    </Button>
  )
}
