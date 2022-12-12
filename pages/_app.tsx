import "../styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { Space_Mono } from "@next/font/google";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <main className={spaceMono.className}>
        <Component {...pageProps} />
      </main>
    </NextUIProvider>
  );
}
