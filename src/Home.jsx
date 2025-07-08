import {React, useState, useEffect} from "react";
import ImageBackground from "./images/background.webp";
import ImageSeal from "./images/seal.webp";
import "./Home.css";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";

const Home = () => {

    const [openScroll, setOpenScroll] = useState(null);
    const [isClosing, setIsClosing] = useState(false);
    const [showSeal, setShowSeal] = useState(false);
    const [scrollReady, setScrollReady] = useState(false);
      
    const handleClose = () => {
        setIsClosing(true);
        setScrollReady(false);
        setTimeout(() => {
            setOpenScroll(null);
            setIsClosing(false);
        }, 1); // Match CSS animation duration
    };

    useEffect(() => {
        if (openScroll) {
            document.body.classList.add("modal-open");
            setShowSeal(true); // start with seal on
            setScrollReady(false); // scroll hidden initially

            // Delay scroll opening until seal animation lifts
            setTimeout(() => {
                setScrollReady(true);
            }, 50); // seal lift duration
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

                    {showSeal && (
                        <img src={ImageSeal} alt="Seal" className="seal" />
                    )}

                    {scrollReady && (
                        <div className={`scroll-box ${isClosing ? "roll-out" : "roll-in"}`}>
                            <button className="close-btn" onClick={handleClose}>✕</button>
                            <div className="scroll-content">
                                {openScroll === "contact" && <Contact/> }
                                {openScroll === "projects" && <Projects/> }
                                {openScroll === "about" && <About/>}
                            </div>
                        </div>
                    )}
                </div>
            )}

        </div>
    );
}

export default Home;