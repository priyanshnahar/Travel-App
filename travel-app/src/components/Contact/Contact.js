import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";
import AboutImg from "../../assets/15.jpg"
import ContactForm from "./ContactForm";


function Contact(){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Contact"
        btnClass="hide"
         />
         <ContactForm/>
         <Footer/>
        </>
    )
}


export default Contact;