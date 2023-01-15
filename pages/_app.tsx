import { createTheme, NextUIProvider } from "@nextui-org/react"
import React from "react"
import { useRouter } from "next/router"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { Layout } from "../components/Layout"
import { Nunito, Ubuntu_Mono } from "@next/font/google"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import type { AppProps } from "next/app"
config.autoAddCss = false

const lightTheme = createTheme({
  type: "light",
})

const darkTheme = createTheme({
  type: "dark",
})

const ubuntuMono = Ubuntu_Mono({
  subsets: ["latin"],
  weight: "400",
})

const nunito = Nunito({
  subsets: ["latin"],
})

type ThemeProviderProps = {
  children: React.ReactNode
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <>
      <style jsx global>{`
        * {
          font-family: ${nunito.style.fontFamily} !important;
        }
        code {
          font-family: ${ubuntuMono.style.fontFamily} !important;
        }
      `}</style>
      <NextThemesProvider
        defaultTheme="system"
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
