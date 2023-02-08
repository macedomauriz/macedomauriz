import { Spacer, styled } from "@nextui-org/react"
import { useTheme } from "@nextui-org/react"
import Link from "next/link"
import Image from "next/image"
import { Typography } from "./Typography"

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
    src: "/logos/ubersuggest.svg",
    alt: "Ubersuggest",
    href: "https://neilpatel.com/ubersuggest/",
    width: 190,
    height: 50,
  },
]

export function Customers(): JSX.Element {
  const { isDark } = useTheme()
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
    columnGap: 80,
    rowGap: 30,
    img: {
      filter: `invert(${isDark ? "0.45" : "0.6"})`,
      cursor: "pointer",
    },
  })
  return (
    <CustomersWrapper>
      <Typography h5 color="$gray800">
        Worked with amazing companies
      </Typography>
      <Spacer y={2} />
      <Logos>
        {customers.map(item => (
          <div
            key={item.alt}
            style={{
              transform: item.translateY && `translateY(${item.translateY})`,
            }}
          >
            <Link href={item.href} target="_blank">
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
              />
            </Link>
          </div>
        ))}
      </Logos>
    </CustomersWrapper>
  )
}
