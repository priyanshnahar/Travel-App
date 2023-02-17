import React from "react";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import image from "../assets/03.jpg"
import Footer from "../components/Footer/Footer";
import AboutUs from "../components/About/AboutUs";

function About() {
  return (
    <>
    <Navbar/>
    <Hero 
    cName=".hero-mid"
    heroImg={image}
    title="About"
    btnClass="hide"/>
    <AboutUs />
    <Footer/>

    </> 
  );
}

export default About;