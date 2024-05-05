import React from "react";
import Head from "next/head";
import { Fragment } from "react";
import Header from "@/components/header";
import Banner from "@/components/banner";
import Footer from "@/components/footer";
import { useTheme } from "../themeContext";

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Fragment>
      <Head>
        <title>
          Neurocraft: Curated Unique AI Art Pieces - Buy Print & Get NFTs
        </title>
        <meta
          name="description"
          content="Neurocraft brings highly curated, AI generated, one-of-a-kind art pieces printed in museum quality paper along with a minted NFT. Explore now!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-PP252CRX');
      `,
          }}
        />
      </Head>
      <main className={`main app-${theme}`}>
        <Header theme={theme} toggleTheme={toggleTheme} isMobile={isMobile} />
        <Banner theme={theme} isMobile={isMobile} />
        <Footer theme={theme} />
      </main>
    </Fragment>
  );
}
