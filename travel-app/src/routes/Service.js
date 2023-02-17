import React from "react";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import mountain from "../assets/05.jpg"
import Trip from "../components/Trip/Trip";
import Footer from "../components/Footer/Footer";

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