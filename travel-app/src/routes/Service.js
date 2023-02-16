import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import mountain from "../assets/05.jpg"
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Service() {
  return (
    <>
    <Navbar/>
    <Hero 
    cName=".hero-mid"
    heroImg={mountain}
    title="Service"
    btnClass="hide"/>
    <Trip/>
    <Footer/>
    </> 
  );
}

export default Service;