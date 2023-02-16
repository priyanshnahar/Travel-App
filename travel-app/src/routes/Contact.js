import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import image from "../assets/04.jpg";
import Footer from "../components/Footer";

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
      <Footer />
    </>
  );
}

export default Contact;
