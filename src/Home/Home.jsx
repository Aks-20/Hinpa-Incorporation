// src/App.jsx

import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import CaseStudies from "../components/CaseStudies";
import Career from "../components/Career"; // 
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Homepage() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <CaseStudies />
      <Career /> 
      <Contact />
      <Footer />
    </>
  );
}
