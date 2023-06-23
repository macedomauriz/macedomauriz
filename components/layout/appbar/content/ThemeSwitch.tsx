import { useSound } from "use-sound"
import { useTheme as useNextTheme } from "next-themes"
import { useTheme, Button } from "@nextui-org/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"

export const ThemeSwitch = () => {
  const [play] = useSound("/click.mp3", { volume: 0.2 })
  const { setTheme } = useNextTheme()
  const { isDark } = useTheme()

  const handleClick = () => {
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <>
      <Button
        light
        auto
        ripple={false}
        size="sm"
        onPress={() => handleClick()}
        onClick={e => play()}
      >
        {isDark ? (
          <FontAwesomeIcon icon={faMoon} size="xl" />
        ) : (
          <FontAwesomeIcon icon={faSun} size="xl" />
        )}
      </Button>
    </>
  )
}
