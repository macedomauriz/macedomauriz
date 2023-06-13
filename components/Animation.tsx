import { useState, useEffect } from "react"
import { styled, keyframes } from "@nextui-org/react"
import { useTheme } from "@nextui-org/react"

export function Animation() {
  const [isRendered, setIsRendered] = useState(false)
  const { isDark } = useTheme()

  useEffect(() => {
    setIsRendered(true)
  }, [])

  const sprite = (px: number) =>
    keyframes({
      "0%": { backgroundPosition: "0px" },
      "100%": { backgroundPosition: `-${px}px` }, // 7*200
    })
  const AnimationHeroWrapper = styled("div", {
    position: "relative",
  })
  const Rodrigo = styled("div", {
    width: 200,
    height: 300,
    background: "url('/sprites/rodrigo.png')",
    filter: `brightness(${isDark ? "1" : "1.3"})`,
    animationName: `${sprite(1400)}`,
    animationDuration: "0.4s",
    animationTimingFunction: "steps(7)",
    animationIterationCount: "infinite",
    animationDirection: "alternate",
    transform: "scaleX(-1)",
  })
  const RodrigoFloor = styled("div", {
    position: "absolute",
    bottom: "-4px",
    left: 0,
    width: 200,
    height: 10,
    background: "url('/sprites/rodrigo-floor.png')",
    filter: `brightness(${isDark ? "1.3" : "9"})`,
    animationName: `${sprite(1400)}`,
    animationDuration: "0.4s",
    animationTimingFunction: "steps(7)",
    animationIterationCount: "infinite",
    animationDirection: "alternate",
  })
  const Glasses = styled("div", {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: 200,
    height: 300,
    background: "url('/sprites/glasses.png')",
    animationName: `${sprite(1400)}`,
    animationDuration: "0.4s",
    animationTimingFunction: "steps(7)",
    animationIterationCount: "infinite",
    animationDirection: "alternate",
    transform: "scaleX(-1)",
  })
  const Wilson = styled("div", {
    position: "absolute",
    bottom: "20px",
    left: "-60px",
    width: 110,
    height: 110,
    background: "url('/sprites/wilson.png')",
    animationName: `${sprite(440)}`,
    animationDuration: "0.25s",
    animationTimingFunction: "steps(4)",
    animationIterationCount: "infinite",
    animationDirection: "alternate",
    transform: "scaleX(-1)",
  })
  const WilsonFloor = styled("div", {
    position: "absolute",
    bottom: "16px",
    left: "-60px",
    width: 110,
    height: 6,
    background: "url('/sprites/wilson-floor.png')",
    filter: `brightness(${isDark ? "1.3" : "8"})`,
    animationName: `${sprite(440)}`,
    animationDuration: "0.25s",
    animationTimingFunction: "steps(4)",
    animationIterationCount: "infinite",
    animationDirection: "alternate",
    transform: "scaleX(-1)",
  })
  return (
    <AnimationHeroWrapper>
      {isRendered && isDark && (
        <>
          <WilsonFloor />
          <Wilson />
        </>
      )}
      {isRendered && !isDark && <Glasses />}
      {isRendered && (
        <>
          <RodrigoFloor />
          <Rodrigo />
        </>
      )}
    </AnimationHeroWrapper>
  )
}
