import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import mountain from "../assets/05.jpg"

function Service() {
  return (
    <>
    <Navbar/>
    <Hero 
    cName=".hero-mid"
    heroImg={mountain}
    title="Service"
    btnClass="hide"/>
    </> 
  );
}

export default Service;