import Head from "next/head";
// import Image from "next/image";
import dynamic from "next/dynamic";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Web developer | Rodrigo Macedo</title>
        <link rel="canonical" href="https://macedomauriz.com" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          background: "#1E1E1E",
          padding: "0 10px",
        }}
      >
        <Image src="/logo.svg" alt="logo" width={40} height={40} />
        <h1 style={{ display: "inline", fontSize: 30, color: "white" }}>
          macedo<span style={{ fontWeight: 400, fontSize: 30 }}>mauriz</span>
        </h1>
      </div>
    </>
  );
}
