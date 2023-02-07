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
    title="Your Journey Your Story"
    text="Choose Your Favourite Dest"
    buttonText="Travel Plan"
    url="/"
    btnClass="show"/>
    </> 
  )
 
}

export default Home;
