import { Typography } from "./Typography"
import { styled } from "@nextui-org/react"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import copy from "copy-to-clipboard"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { createToast } from "react-simple-toasts"
import { useTheme } from "@nextui-org/react"

interface PostH2Props {
  children: React.ReactNode
  id: string
}

export default function PostH2({ children, id }: PostH2Props) {
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
    setAnchor(window.location.host + router.asPath + "#" + id)
  }, [id, router.asPath])

  return (
    <>
      <Typography h2 id={id} noGutter>
        {children}{" "}
        <span onClick={() => copyToClipboard()} style={{ cursor: "pointer" }}>
          <FontAwesomeIcon icon={faLink} size="xs" color="gray" />
        </span>
      </Typography>
    </>
  )
}
