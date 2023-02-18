import { Modal, Spacer, styled } from "@nextui-org/react"
import { useTheme } from "@nextui-org/react"
import CustomLink from "./CustomLink"
import Image from "next/image"
import { Typography } from "./Typography"
import { useState } from "react"

interface CustomersProps {
  src: string
  alt: string
  href: string
  width: number
  height: number
  translateY?: string
}

const customers: CustomersProps[] = [
  {
    src: "/logos/tata.svg",
    alt: "Tata",
    href: "https://www.tcs.com/",
    width: 110,
    height: 30,
  },
  {
    src: "/logos/tryolabs.svg",
    alt: "Tryolabs",
    href: "https://tryolabs.com/",
    width: 170,
    height: 55,
  },
  {
    src: "/logos/mucam.svg",
    alt: "Médica Uruguaya",
    href: "https://www.medicauruguaya.com.uy/ahome.aspx",
    width: 140,
    height: 40,
  },
  {
    src: "/logos/ey.svg",
    alt: "EY",
    href: "https://www.ey.com/",
    width: 50,
    height: 50,
    translateY: "-8px",
  },
  {
    src: "/logos/dragoons.svg",
    alt: "Dragoons",
    href: "https://www.ey.com/",
    width: 190,
    height: 60,
  },
  {
    src: "/logos/ubersuggest.svg",
    alt: "Ubersuggest",
    href: "https://neilpatel.com/ubersuggest/",
    width: 190,
    height: 50,
  },
]

export function Customers(): JSX.Element {
  const { isDark } = useTheme()
  const [visible, setVisible] = useState(false)
  const [customerId, setCustomerId] = useState(0)

  const handler = (id: number) => {
    setCustomerId(id)
    setVisible(true)
  }

  const closeHandler = () => {
    setVisible(false)
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
    alignItems: "center",
    flexWrap: "wrap",
    columnGap: 40,
    rowGap: 30,
    "@media (max-width: 600px)": {
      flexDirection: "column",
    },
    button: {
      cursor: "pointer",
      backgroundColor: "transparent",
      border: "none",
      padding: 0,
    },
  })
  const LogoImage = styled(Image, {
    filter: `invert(${isDark ? "0.45" : "0.6"})`,
  })
  return (
    <CustomersWrapper>
      <Typography h6 overline color="$gray800">
        Worked with amazing companies
      </Typography>
      <Spacer y={2} />
      <Logos>
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
      </Logos>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <LogoImage
            src={customers[customerId].src}
            alt={customers[customerId].alt}
            width={customers[customerId].width}
            height={customers[customerId].height}
          />
        </Modal.Header>
        <Modal.Body>
          <div>
            <CustomLink href={customers[customerId].href}>
              Visit site
            </CustomLink>
          </div>
        </Modal.Body>
      </Modal>
    </CustomersWrapper>
  )
}
