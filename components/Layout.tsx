import { useState } from "react"
import {
  useTheme,
  // Text,
  Container,
  Navbar,
  Link,
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

const GetInTouchButton = () => {
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

const AppBar = () => {
  const { isDark } = useTheme()
  const CollapseItem = styled(Navbar.CollapseItem, {
    justifyContent: "center",
    height: 50,
  })
  const BrandImage = styled("img", {
    filter: `invert(${isDark ? 0 : 1})`,
  })
  return (
    <Navbar variant="sticky" disableShadow isBordered>
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
          <GetInTouchButton />
        </CollapseItem>
      </Navbar.Collapse>
      <Navbar.Brand>
        <BrandImage src="/logo.svg" alt="logo" width={40} height={40} />
      </Navbar.Brand>
      <Navbar.Toggle showIn="xs" />
      <Navbar.Content hideIn="xs">
        <Navbar.Link isActive href="#">
          Home
        </Navbar.Link>
        <Navbar.Link href="#">Blog</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content hideIn="xs">
        {socialMedia.map(i => {
          return (
            <Navbar.Link key={i.href} href={i.href}>
              <FontAwesomeIcon icon={i.icon as IconProp} size="xl" />
            </Navbar.Link>
          )
        })}
        <GetInTouchButton />
        <ThemeSwitch />
      </Navbar.Content>
    </Navbar>
  )
}

const Footer = () => {
  return (
    <Container as="footer">
      <div>footer</div>
    </Container>
  )
}

interface LayoutProps {
  children: React.ReactNode
  className: any
}

export function Layout({ children, className }: LayoutProps) {
  return (
    <Container className={className} gap={0}>
      <AppBar />
      <Container as="main">{children}</Container>
      <Footer />
    </Container>
  )
}
