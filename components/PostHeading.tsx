import { Typography } from "./Typography"
import { styled } from "@nextui-org/react"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import { CurrentHeadingProvider } from "contexts/CurrentHeading"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import copy from "copy-to-clipboard"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { createToast } from "react-simple-toasts"
import { useTheme } from "@nextui-org/react"

type PostHeadingProps = {
  children: React.ReactNode
  id: string
} & ({ h2: boolean } | { h3: boolean })

export function PostHeading({ children, id, ...props }: PostHeadingProps) {
  const router = useRouter()
  const { theme } = useTheme()
  const [anchor, setAnchor] = useState("")

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
    setAnchor(window.location.host + router.asPath.split("#")[0] + "#" + id)
  }, [id, router.asPath])

  const tag = "h2" in props ? "h2" : "h3"

  return (
    <CurrentHeadingProvider>
      <Typography
        h2={tag === "h2" && true}
        h3={tag === "h3" && true}
        id={id}
        paragraph
      >
        {children}{" "}
        <span onClick={() => copyToClipboard()} style={{ cursor: "pointer" }}>
          <FontAwesomeIcon icon={faLink} size="xs" color="gray" />
        </span>
      </Typography>
    </CurrentHeadingProvider>
  )
}
