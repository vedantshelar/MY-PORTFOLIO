import "./Wrapper.module.css";
import About from "./About";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Project from "./Project";
import TechStack from "./TechStack";
import Education from "./Education";
import { AnimatedTestimonialsDemo } from "./AnimatedTestimonialsDemo";
import College from "./College";
import Stats from "./Stats";
import Achievement from "./Achievement";
import Contact from "./Contact";
import Footer from "./Footer";
import Chatbot from "./Chatbot";

function Wrapper() {
  return ( 
    <div style={{display:"flex",flexDirection:"column",width:"100vw" }}>
    <Navbar />
    <Hero />
    <About />
    <Project />
    <TechStack />
    <College />
    <Achievement />
    <Contact />
    <Footer />
    <Chatbot />
    </div>
   );
}

export default Wrapper;