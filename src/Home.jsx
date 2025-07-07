import {React, useState, useEffect} from "react";
import ImageBackground from "./images/background.webp";
import "./Home.css";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";

const Home = () => {

    const [openScroll, setOpenScroll] = useState(null);
    const [isClosing, setIsClosing] = useState(false);
      
    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setOpenScroll(null);
            setIsClosing(false);
        }, 500); // Match CSS animation duration
    };

    useEffect(() => {
        if (openScroll) {
          document.body.classList.add("modal-open");
        } else {
          document.body.classList.remove("modal-open");
        }
      }, [openScroll]);

    return (
        <div className="wrapper">
            <img src={ImageBackground} alt="background" className="background" />
            <div className="highlight firecamp" title="Fire Camp" onClick={() => setOpenScroll("about")}/>
            <div className="highlight table" title="Projects" onClick={() => setOpenScroll("projects")}/>
            <div className="highlight beds" title="Beds" onClick={() => setOpenScroll("contact")}/>
            
            {openScroll && (
                <div className="scroll-overlay">
                    <div className={`scroll-box ${isClosing ? "roll-out" : "roll-in"}`}>
                        <button className="close-btn" onClick={handleClose}>✕</button>
                        <div className="scroll-content">
                            {openScroll === "contact" && <Contact/> }
                            {openScroll === "projects" && <Projects/> }
                            {openScroll === "about" && <About/>}
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

export default Home;