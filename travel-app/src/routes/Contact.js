import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import image from "../assets/04.jpg";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName=".hero-mid"
        heroImg={image}
        title="Contact"
        btnClass="hide"
      />
    </>
  );
}

export default Contact;
