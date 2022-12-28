import { Link } from "@nextui-org/react"
import Head from "next/head"

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 | Rodrigo Macedo</title>
        <link rel="canonical" />
        <meta name="description" content="Page not found" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <h1>404 - Not found</h1>
        <h4>
          <Link href="/">Home</Link>
        </h4>
      </div>
    </>
  )
}
