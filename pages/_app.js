import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import "../styles/globals.css";
import Script from 'next/script'

function MyApp({ Component, pageProps }) {

  const [isSubmit, setIsSubmit] = useState(false);

  const site = "https://sandrohuber.website";
  const canonicalURL1 = site + useRouter().pathname;
  const canonicalURL = canonicalURL1 === '' ? ' ' : canonicalURL1
  
  return (
    <Fragment>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="img/favicon.ico" />
        <meta name="description" content="personal portfolio react template" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
        <link rel="canonical" href={canonicalURL} />

        <meta name="robots" content="noindex" />
            

  
      </Head>
      <Component {...pageProps} setIsSubmit={setIsSubmit} isSubmit={isSubmit} />
    </Fragment>
  );
}

export default MyApp;
