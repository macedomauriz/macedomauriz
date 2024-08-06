import { Modal, Spacer, styled } from "@nextui-org/react"
import { useTheme } from "@nextui-org/react"
import { useTheme as useNextTheme } from "next-themes"
import CustomLink from "./CustomLink"
import Image from "next/image"
import { Typography } from "./Typography"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCircleArrowRight,
  faCircleArrowLeft,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons"
import { SectionTitle } from "./SectionTitle"

interface CustomersProps {
  src: string
  alt: string
  href: string
  width: number
  height: number
  description: string
  translateY?: string
}

const customers: CustomersProps[] = [
  {
    src: "/logos/tata.svg",
    alt: "Tata",
    href: "https://www.tcs.com/",
    width: 110,
    height: 30,
    description:
      "Tata Consultancy Services (TCS) is a multinational information technology (IT) services, consulting, and business solutions company headquartered in Mumbai, India. TCS offers a wide range of services to clients in various industries, including banking and financial services, healthcare, retail, energy, and IT.",
  },
  {
    src: "/logos/globallogic.svg",
    alt: "GlobalLogic",
    href: "https://www.globallogic.com/",
    width: 170,
    height: 55,
    description:
      "GlobalLogic is listed on top in digital product engineering companies that offers product consulting and software engineering partner services.",
  },
  {
    src: "/logos/tryolabs.svg",
    alt: "Tryolabs",
    href: "https://tryolabs.com/",
    width: 170,
    height: 55,
    description:
      "Tryolabs is a software development and consulting company that specializes in artificial intelligence, machine learning, and data science. They offer a range of services, including custom software development, data analysis and modeling, natural language processing, computer vision, and more.",
  },
  {
    src: "/logos/ey.svg",
    alt: "EY",
    href: "https://www.ey.com/",
    width: 50,
    height: 50,
    description:
      'Ernst & Young (EY) is one of the largest multinational professional services firms in the world, providing a range of services in audit, tax, transaction advisory, and consulting. The company was founded in the United Kingdom in 1849 and has grown to become a global organization with operations in over 150 countries. EY is one of the "Big Four" professional accounting services firms.',
    translateY: "-8px",
  },
  {
    src: "/logos/mucam.svg",
    alt: "Médica Uruguaya",
    href: "https://www.medicauruguaya.com.uy/ahome.aspx",
    width: 140,
    height: 40,
    description:
      "Medica Uruguaya is a private healthcare organization based in Uruguay. It provides a range of medical services to patients, including consultations with general practitioners and specialists, diagnostic tests, laboratory services, hospitalization, and emergency care. Medica Uruguaya has grown to become one of the largest private healthcare providers in Uruguay.",
  },
  {
    src: "/logos/dragoons.svg",
    alt: "Dragoons",
    href: "https://www.ey.com/",
    width: 190,
    height: 60,
    description:
      "Dragoons was a betting platform start up project for electronic sports betting using cryptocurrencies. It arised from the absence of a platform to bet on esports in a decentralized environment instead of operating in the classic format, in transparent and reliable way, incorporating blockchain technology.",
  },
  {
    src: "/logos/ubersuggest.svg",
    alt: "Ubersuggest",
    href: "https://neilpatel.com/ubersuggest/",
    width: 190,
    height: 50,
    description:
      "Ubersuggest is a web-based search engine optimization (SEO) tool that helps website owners and digital marketers improve their search engine rankings and drive more traffic to their websites. Ubersuggest provides a range of features to help users optimize their websites for search engines.",
  },
  {
    src: "/logos/brainlogic.svg",
    alt: "BrainLogic",
    href: "https://brainlogic.ai",
    width: 190,
    height: 60,
    description:
      "High-tech Startup created between Silicon Valley and Uruguay with the mission of building cutting-edge Artificial Intelligence products designed to create positive impact in people's lives",
  },
]

export function Customers() {
  const { theme } = useTheme()
  const { resolvedTheme } = useNextTheme()
  const [visible, setVisible] = useState(false)
  const [customerId, setCustomerId] = useState(0)

  const handler = (id: number) => {
    setCustomerId(id)
    setVisible(true)
  }

  const closeHandler = () => {
    setVisible(false)
  }
  const prevNextHandler = () => {
    const newCustomerId = customerId + 1
    if (newCustomerId === customers.length) {
      setCustomerId(0)
    } else {
      setCustomerId(newCustomerId)
    }
  }

  const CustomersWrapper = styled("div", {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  })
  const Logos = styled("div", {
    display: "flex",
    justifyContent: "center",
    "> div": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      rowGap: 60,
      maxWidth: 800,
      ":hover": {
        transform: "scale(1.01)",
      },
      "@media (min-width: 600px)": {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
        columnGap: 80,
        rowGap: 60,
      },
      button: {
        display: "flex",
        alignItems: "center",
        maxWidth: 160,
        maxHeight: 14,
        backgroundColor: "transparent",
        border: "none",
        padding: 0,
        cursor: "pointer",
      },
    },
  })
  const Header = styled(Modal.Header, {
    height: 70,
  })
  const Body = styled(Modal.Body, {
    position: "relative",
    height: "200px",
  })
  const Action = styled("div", {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    gap: 8,
    "&::before": {
      content: "",
      position: "absolute",
      top: "-18px",
      left: 0,
      width: "100%",
      height: 18,
      background: `linear-gradient(transparent, ${theme?.colors.backgroundContrast.value} 50%)`,
    },
  })
  const LogoImage = styled(Image, {
    filter: `invert(${resolvedTheme === "dark" ? "0.45" : "0.6"})`,
  })
  const PrevNextButton = styled("button", {
    display: "flex",
    alignItems: "center",
    gap: 10,
    backgroundColor: "transparent",
    border: "none",
    padding: 0,
    cursor: "pointer",
  })
  return (
    <CustomersWrapper>
      <SectionTitle>Who I've helped</SectionTitle>
      <div />
      <Spacer y={2} />
      <Logos>
        <div>
          {customers.map((item, index) => (
            <button
              key={item.alt}
              onClick={() => handler(index)}
              style={{
                transform: item.translateY && `translateY(${item.translateY})`,
              }}
            >
              <LogoImage
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
              />
            </button>
          ))}
        </div>
      </Logos>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
        css={{ padding: 0 }}
      >
        <Header>
          <LogoImage
            src={customers[customerId].src}
            alt={customers[customerId].alt}
            width={customers[customerId].width}
            height={customers[customerId].height}
          />
        </Header>
        <Body>
          <div>
            <Typography>{customers[customerId].description}</Typography>
          </div>
        </Body>
        <Action>
          <CustomLink href={customers[customerId].href}>
            Visit site{" "}
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" />
          </CustomLink>
        </Action>
        <Modal.Footer css={{ justifyContent: "space-around" }}>
          <PrevNextButton onClick={() => prevNextHandler()}>
            <FontAwesomeIcon icon={faCircleArrowLeft} size="xl" />
            <span>Prev</span>
          </PrevNextButton>
          <PrevNextButton onClick={() => prevNextHandler()}>
            <span>Next</span>
            <FontAwesomeIcon icon={faCircleArrowRight} size="xl" />
          </PrevNextButton>
        </Modal.Footer>
      </Modal>
    </CustomersWrapper>
  )
}
