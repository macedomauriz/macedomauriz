import "../styles/globals.css"
import { createTheme, NextUIProvider } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { Layout } from "../components/Layout"
import { Space_Mono } from "@next/font/google"

const lightTheme = createTheme({
  type: "light",
  // theme: {
  //   colors: {...}, // optional
  // }
})

const darkTheme = createTheme({
  type: "dark",
})

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
})

import type { AppProps } from "next/app"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <Layout className={spaceMono.className}>
          <Component {...pageProps} />
        </Layout>
      </NextUIProvider>
    </NextThemesProvider>
  )
}
