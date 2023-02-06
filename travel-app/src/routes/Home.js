import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import mountain from "../assets/mountain.jpg"

function Home() {
  return (
    <>
    <Navbar/>
    <Hero 
    cName="hero"
    heroImg={mountain}
    text="Your Journey Your Story"/>
    </> 
  )
 
}

export default Home;
