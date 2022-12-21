import { createTheme, NextUIProvider } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { Layout } from "../components/Layout"
import { Nunito } from "@next/font/google"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false

const themeOverrides = {
  colors: {
    // brand colors
    primaryLight: "$pink200",
    primaryLightHover: "$pink300", // commonly used on hover state
    primaryLightActive: "$pink400", // commonly used on pressed state
    primaryLightContrast: "$pink600", // commonly used for text inside the component
    primary: "$pink600",
    primaryBorder: "$pink500",
    primaryBorderHover: "$pink600",
    primarySolidHover: "$pink700",
    primarySolidContrast: "$white", // commonly used for text inside the component
    link: "$pink600",
  },
  fonts: {
    sans: `'Nunito', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue'`,
    mono: `Menlo, Monaco, 'Lucida Console', 'Liberation Mono',
    'DejaVu Sans Mono', 'Bitstream Vera Sans Mono'`,
  },
}

const lightTheme = createTheme({
  type: "light",
  theme: themeOverrides,
})

const darkTheme = createTheme({
  type: "dark",
  theme: themeOverrides,
})

const nunito = Nunito({
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
        <Layout className={nunito.className}>
          <Component {...pageProps} />
        </Layout>
      </NextUIProvider>
    </NextThemesProvider>
  )
}
