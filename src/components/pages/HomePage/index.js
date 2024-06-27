import React from "react";
import Header from "../../partial/Header";
import Hero from "../../partial/Hero";
import Client from "../../partial/Clients";
import Features from "../../partial/Features";
import Pricing from "../../partial/Pricing";
import Footer from "../../partial/Footer";

const HomePage = () => {
  return (
    <div className="body-wrap">
      <Header />
      <main className="site-content">
        <Hero />
        <Client />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
