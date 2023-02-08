import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import image from "../assets/03.jpg"

function About() {
  return (
    <>
    <Navbar/>
    <Hero 
    cName=".hero-mid"
    heroImg={image}
    title="About"
    btnClass="hide"/>
    </> 
  );
}

export default About;