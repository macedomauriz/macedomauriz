import { styled, keyframes } from "@nextui-org/react"

export function AnimationHero() {
  const sprite = keyframes({
    "0%": { backgroundPosition: "0px" },
    "100%": { backgroundPosition: "-1400px" },
  })
  const AnimationHeroWrapper = styled("div", {
    width: 200,
    height: 300,
    background: "url('/standard.png')",
    filter: "drop-shadow(0 0 0.15rem skyblue)",
    animationName: `${sprite}`,
    animationDuration: "0.4s",
    animationTimingFunction: "steps(7)",
    animationIterationCount: "infinite",
    animationDirection: "alternate",
    transform: "scaleX(-1)",
  })
  return <AnimationHeroWrapper />
}
