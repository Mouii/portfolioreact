import {React, useState, useEffect} from "react";
import ImageBackground from "./images/background.webp";
import ImageSeal from "./images/seal.webp";
import "./Home.css";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import { Tooltip } from 'react-tooltip'

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
            <div className="welcome-banner">
                👋 Welcome to my website, visitor. Check the campfire, the table, or the beds to make an action...
            </div>
            <img src={ImageBackground} alt="background" className="background" />   
            <div className="highlight firecamp" onClick={() => setOpenScroll("about")} data-tooltip-id="my-tooltip" data-tooltip-content="Who am I?"/>
            <div className="highlight table" title="Projects" onClick={() => setOpenScroll("projects")} data-tooltip-id="my-tooltip" data-tooltip-content="Projects"/>
            <div className="highlight beds" title="Beds" onClick={() => setOpenScroll("contact")} data-tooltip-id="my-tooltip" data-tooltip-content="Wanna contact me?"/>
            <Tooltip id="my-tooltip" />
            
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