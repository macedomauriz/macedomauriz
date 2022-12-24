import { useState } from "react"
import {
  useTheme,
  Navbar,
  Modal,
  Text,
  Input,
  Button,
  Textarea,
  styled,
} from "@nextui-org/react"
import { useTheme as useNextTheme } from "next-themes"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faSun,
  faMoon,
  faEnvelope,
  faUser,
} from "@fortawesome/free-solid-svg-icons"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

// check if a media-query hook is worth it for duplication of content
const socialMedia = [
  {
    icon: faGithubAlt,
    href: "https://github.com/rodrigo1987macedo",
  },
  {
    icon: faLinkedinIn,
    href: "https://www.linkedin.com/in/rodrigo-macedo-28944091/",
  },
]

const navigation = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Blog",
    href: "/blog",
  },
]

const ThemeSwitch = () => {
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

const GetInTouch = () => {
  const [visible, setVisible] = useState(false)
  const handler = () => setVisible(true)

  const closeHandler = () => {
    setVisible(false)
  }

  return (
    <>
      <Button auto size="xs" onClick={handler}>
        Get in touch
      </Button>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Get in touch
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            size="lg"
            placeholder="Name"
            contentLeft={<FontAwesomeIcon icon={faUser} />}
          />
          <Input
            clearable
            bordered
            fullWidth
            size="lg"
            placeholder="Email"
            contentLeft={<FontAwesomeIcon icon={faEnvelope} />}
          />
          <Textarea
            bordered
            placeholder="Enter your amazing ideas..."
            size="lg"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto onClick={closeHandler}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export const MobileContent = () => {
  const CollapseItem = styled(Navbar.CollapseItem, {
    justifyContent: "center",
    height: 50,
  })
  return (
    <Navbar.Collapse disableAnimation>
      {navigation.map(i => {
        return (
          <CollapseItem key={i.text} isActive>
            {i.text}
          </CollapseItem>
        )
      })}
      {socialMedia.map(i => {
        return (
          <CollapseItem key={i.icon.toString()}>
            <FontAwesomeIcon icon={i.icon as IconProp} size="xl" />
          </CollapseItem>
        )
      })}
      <CollapseItem>
        <ThemeSwitch />
      </CollapseItem>
      <CollapseItem>
        <GetInTouch />
      </CollapseItem>
    </Navbar.Collapse>
  )
}
