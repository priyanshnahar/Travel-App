import React from "react";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import image from "../assets/mountain.jpg"
import Destination from "../components/Destination/Destination";
import Trip from "../components/Trip/Trip";
import Footer from "../components/Footer/Footer";

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
    <Trip/>
    <Footer/>
    </> 
  )
 
}

export default Home;
