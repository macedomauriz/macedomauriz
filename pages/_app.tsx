import { createTheme, NextUIProvider } from "@nextui-org/react"
import { Ubuntu_Mono, Inter, Roboto_Slab } from "next/font/google"
import React from "react"
import { fontReset } from "../styles/reset"
import { useRouter } from "next/router"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { Layout } from "../components/Layout"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import type { AppProps } from "next/app"
config.autoAddCss = false

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})

const ubuntuMono = Ubuntu_Mono({
  subsets: ["latin"],
  weight: "400",
})

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
})

const lightTheme = createTheme({
  type: "light",
  theme: {
    colors: {
      background: "#FFFAFA",
      backgroundAlpha: "rgb(255, 250, 250, 0.8)",
      heroShadow1: "rgba(141, 168, 211, 0.5)",
      heroShadow2: "rgba(141, 168, 211, 0.15)",
    },
  },
})

const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      background: "#25282a",
      backgroundAlpha: "rgba(37, 40, 42, 0.8)",
      heroShadow1: "rgba(141, 168, 211, 0.2)",
      heroShadow2: "rgba(141, 168, 211, 0.05)",
    },
  },
})

type ThemeProviderProps = {
  children: React.ReactNode
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const globalFontReset = fontReset(robotoSlab, inter, ubuntuMono)
  return (
    <>
      <style jsx global>
        {globalFontReset}
      </style>
      <NextThemesProvider
        defaultTheme="dark"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className,
        }}
      >
        <NextUIProvider>{children}</NextUIProvider>
      </NextThemesProvider>
    </>
  )
}

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  if (router.pathname === "/404")
    return (
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    )

  return (
    <>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}
