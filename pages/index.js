import Head from 'next/head'
import { useEffect, useState } from "react";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import CustomerLight from "../src/components/CustomerLight";
import Home from "../src/components/Home";
import News from "../src/components/News";
import Portfolio from "../src/components/Portfolio";
import Services from "../src/components/Services";
import Layout from "../src/layouts/Layout";


const Index = ({ isSubmit, setIsSubmit }) => {
  useEffect(() => {
    document.querySelector("body").classList.add("light");
  }, []);


  console.log('successful', isSubmit)

  return (
    <Layout>
    <Head>
        <title>SEO Freelancer: Für Texte, E-Commerce, usw.</title>
         <meta name="description" content="Sandro Huber ist ein SEO Freelancer in der Schweiz oder in Deutschland. Ab CHF 99.-- pro Stunde oder 0.50 CHF pro Wort." />
        </Head>
      <Home isSubmit={isSubmit} />
      {/* /Home Section */}
      {/* About Section */}
      <About />
      {/* /About Section */}
      {/* Portfolio Section */}

      <Services />
      {/* /Services Section */}
      {/* Customers Section */}
      <CustomerLight />
      {/* /Customers Section */}
      {/* News Section */}
      <News />
      {/* /News Section */}
      {/* Contact Section */}
      <Contact setIsSubmit={setIsSubmit} />
      {/* /Contact Section */}
    </Layout>
  );
};

export default Index;