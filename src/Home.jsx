import {useState, useRef, useEffect} from "react";
import ImageBackground from "./images/background.webp";
import ImageSeal from "./images/seal.webp";
import "./Home.css";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import Footer from "./Footer";
import { Tooltip } from 'react-tooltip';
import { useTranslation } from "react-i18next";
import bgSound from "./sounds/nature.mp3";
import clickSound from "./sounds/parchment.mp3";

const Home = () => {

    const { t } = useTranslation();

    const [openScroll, setOpenScroll] = useState(null);
    const [isClosing, setIsClosing] = useState(false);
    const [showSeal, setShowSeal] = useState(false);
    const [scrollReady, setScrollReady] = useState(false);

    const bgRef = useRef(null);
    const clickRef = useRef(null);
    const [muted, setMuted] = useState(true);
      
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
            handleClickSound();
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


    const handleMute = () => {
        setMuted(!muted);
    }

    useEffect(() => {
        if(bgRef.current) {
            if(!muted) {
                bgRef.current.loop = true;
                bgRef.current.volume = 0.1;
                bgRef.current.play();
            } else {
                bgRef.current.volume = 0;
                bgRef.current.pause();
            }
        }
    }, [muted]);

    // Play click sound on navigation or action
    const handleClickSound = () => {
        if (!muted && clickRef.current) {
            clickRef.current.currentTime = 0;
            clickRef.current.volume = 0.2;
            clickRef.current.play();
        }
    };

    return (
        <div className="wrapper">
            
            <Header />
            
            <img src={ImageBackground} alt="background" className="background" /> 

            <div className="sound-control">
                <audio ref={bgRef} src={bgSound} />
                <audio ref={clickRef} src={clickSound} />
                <button onClick={() => handleMute()}>
                    {!muted ? "🔊 Sound On" : "🔇 Sound Off"}
                </button>
            </div>

            <div className="highlight firecamp" onClick={() => setOpenScroll("about")} data-tooltip-id="my-tooltip" data-tooltip-content={t("about")}/>
            <div className="highlight table" onClick={() => setOpenScroll("projects")} data-tooltip-id="my-tooltip" data-tooltip-content={t("projects")}/>
            <div className="highlight beds" onClick={() => setOpenScroll("contact")} data-tooltip-id="my-tooltip" data-tooltip-content={t("contact")}/>
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

            <Footer />

        </div>
    );
}

export default Home;