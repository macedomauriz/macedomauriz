import { Typography } from "./Typography"
import { styled } from "@nextui-org/react"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import copy from "copy-to-clipboard"
import { useContext, useEffect, useState } from "react"
import { useRouter } from "next/router"
import { createToast } from "react-simple-toasts"
import { useTheme } from "@nextui-org/react"
import { useInView } from "react-intersection-observer"
import { CurrentHeadingContext } from "contexts/CurrentHeading"

type PostHeadingProps = {
  children: React.ReactNode
  id: string
  headings: string[]
} & ({ h2: boolean } | { h3: boolean })

export default function PostHeading({
  children,
  id,
  headings,
  ...props
}: PostHeadingProps) {
  const router = useRouter()
  const { theme } = useTheme()
  const [anchor, setAnchor] = useState("")
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "-40% 0% -60% 0%",
  })
  const { updateHeading } = useContext(CurrentHeadingContext)
  const [headingArray, setHeadingArray] = useState<any[]>([])

  const ToastWrapper = styled("div", {
    display: "flex",
    alignItems: "center",
    justifyItems: "center",
    gap: 5,
    background: theme?.colors.green800.value,
    padding: "6px 24px",
    color: "$gray200",
    width: 220,
  })

  const toast = createToast({
    duration: 2000,
    position: "bottom-center",
    maxVisibleToasts: 3,
    render: message => (
      <ToastWrapper>
        <FontAwesomeIcon icon={faLink} size="sm" />
        <span>{message}</span>
      </ToastWrapper>
    ),
  })

  const copyToClipboard = () => {
    copy(anchor)
    toast("Copied to clipboard!")
  }

  useEffect(() => {
    let headingArray = []
    let indexOfHeading = children && headings.indexOf(children?.toString())
    let previousHeading =
      indexOfHeading === 0
        ? "introduction"
        : headings[(indexOfHeading as number) - 1]
    headingArray.push(previousHeading)
    headingArray.push(children?.toString())
    setHeadingArray(headingArray)

    const hashtag = router.asPath.split("#")[1]
    hashtag === children?.toString().toLowerCase().replace(/ /g, "-") &&
      updateHeading(headingArray as string[])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setAnchor(window.location.host + router.asPath.split("#")[0] + "#" + id)
  }, [id, router.asPath])

  useEffect(() => {
    children && inView && headingArray && updateHeading(headingArray)
  }, [children, inView, updateHeading, headingArray])

  const tag = "h2" in props ? "h2" : "h3"

  return (
    <Typography
      h2={tag === "h2" && true}
      h3={tag === "h3" && true}
      id={id}
      noGutter
      paragraph
      ref={ref}
    >
      {children}{" "}
      <span onClick={() => copyToClipboard()} style={{ cursor: "pointer" }}>
        <FontAwesomeIcon icon={faLink} size="xs" color="gray" />
      </span>
    </Typography>
  )
}
