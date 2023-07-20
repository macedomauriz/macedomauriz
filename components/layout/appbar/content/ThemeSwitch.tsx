import { useSound } from "use-sound"
import { useTheme as useNextTheme } from "next-themes"
import { Button } from "@nextui-org/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"

export const ThemeSwitch = () => {
  const [play] = useSound("/click.mp3", { volume: 0.2 })
  const { resolvedTheme, setTheme } = useNextTheme()

  let isDark: boolean = true

  switch (resolvedTheme) {
    case "light":
      isDark = false
      break
    case "dark":
      isDark = true
      break
  }

  const handleClick = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
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
