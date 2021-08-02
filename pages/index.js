import Head from "next/head";
import Body from "../components/body";
import Footer from "../components/footer";
import Header from "../components/header";
import Welcome from "../components/welcome";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="../public/fonts/Adobe\ -\ UtopiaStd-Regular.otf"
          as="font"
          crossOrigin=""
        />
      </Head>

      <Header />
      <Welcome />
      <Body />
      <Footer />
    </div>
  );
}
