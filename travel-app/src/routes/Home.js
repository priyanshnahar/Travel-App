import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import image from "../assets/mountain.jpg"
import Destination from "../components/Destination";

function Home() {
  return (
    <>
    <Navbar/>
    <Hero 
    cName=".hero-mid"
    heroImg={image}
    title="Your Journey Your Story"
    text="Choose Your Favourite Dest"
    buttonText="Travel Plan"
    url="/"
    btnClass="show"/>
    <Destination/>
    </> 
  )
 
}

export default Home;
