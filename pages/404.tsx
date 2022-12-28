import { Link } from "@nextui-org/react"

export default function Custom404() {
  return (
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
        <Link href="/" css={{ color: "$white" }}>
          Home
        </Link>
      </h4>
    </div>
  )
}
