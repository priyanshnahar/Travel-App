import React from "react";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import image from "../assets/04.jpg";
import Footer from "../components/Footer/Footer";
// import ContactForm from "../components/ContactForm";

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
      {/* <ContactForm /> */}
      <Footer />
    </>
  );
}

export default Contact;
