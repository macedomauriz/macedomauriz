import { styled, keyframes } from "@nextui-org/react"
import { useTheme } from "@nextui-org/react"

export function AnimationHero() {
  const { isDark } = useTheme()
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
    filter: `drop-shadow(0 0 ${isDark ? "0.15rem" : "0.25rem"} ${
      isDark ? "skyblue" : "darkblue"
    })`,
    animationName: `${sprite(1400)}`,
    animationDuration: "0.4s",
    animationTimingFunction: "steps(7)",
    animationIterationCount: "infinite",
    animationDirection: "alternate",
    transform: "scaleX(-1)",
  })
  const RodrigoFloor = styled("div", {
    position: "absolute",
    bottom: "-8px",
    left: 0,
    width: 200,
    height: 10,
    background: "url('/sprites/rodrigo-floor.png')",
    filter: `brightness(${isDark ? "1" : "8"})`,
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
    filter: "drop-shadow(0 0 0.15rem skyblue)",
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
    filter: "drop-shadow(0 0 0.15rem skyblue)",
    animationName: `${sprite(440)}`,
    animationDuration: "0.25s",
    animationTimingFunction: "steps(4)",
    animationIterationCount: "infinite",
    animationDirection: "alternate",
    transform: "scaleX(-1)",
  })
  const WilsonFloor = styled("div", {
    position: "absolute",
    bottom: "13px",
    left: "-60px",
    width: 110,
    height: 6,
    background: "url('/sprites/wilson-floor.png')",
    animationName: `${sprite(440)}`,
    animationDuration: "0.25s",
    animationTimingFunction: "steps(4)",
    animationIterationCount: "infinite",
    animationDirection: "alternate",
    transform: "scaleX(-1)",
  })
  return (
    <AnimationHeroWrapper>
      {isDark && (
        <>
          <WilsonFloor />
          <Wilson />
        </>
      )}
      <RodrigoFloor />
      <Rodrigo />
      {!isDark && <Glasses />}
    </AnimationHeroWrapper>
  )
}
