import "./Projects.css";

import {useState} from "react";

import HanoiMenu from "./images/hanoi_menu.webp";
import HanoiBasic from "./images/hanoi_basic.webp";
import HanoiSurvival from "./images/hanoi_survival.webp";

import AcaciaBefore from "./images/acacia_original.webp";
import AcaciaAfter from "./images/acacia_new.webp";
import GaminBefore from "./images/gamin_original.webp";
import GaminAfter from "./images/gamin_new.webp";

import WereAngMenu from "./images/lg_angular_menu.webp";
import WereAngAbout from "./images/lg_angular_about.webp";
import WereAngFAQ from "./images/lg_angular_faq.webp";
import WereAngRole from "./images/lg_angular_role.webp";
import WereAngSelect from "./images/lg_angular_select.webp";
import WereAngSelected from "./images/lg_angular_selected.webp";
import WereAngActif from "./images/lg_angular_actif.webp";
import WereAngInfo from "./images/lg_angular_info.webp";
import WereAngKill from "./images/lg_angular_dead.webp";

import WereKotlinMenu from "./images/lg_kotlin_menu.webp";
import WereKotlinFAQ from "./images/lg_kotlin_faq.webp";
import WereKotlinRole from "./images/lg_kotlin_role.webp";
import WereKotlinCreate from "./images/lg_kotlin_create.webp";
import WereKotlinSelect from "./images/lg_kotlin_select.webp";
import WereKotlinActif from "./images/lg_kotlin_actif.webp";
import WereKotlinKill from "./images/lg_kotlin_dead.webp";

import { motion, AnimatePresence } from "framer-motion";

import Carousel_image from "./Carousel_image";

function Projects() {

  const AcaciaGaminImages = [
    AcaciaBefore,
    AcaciaAfter,
    GaminBefore,
    GaminAfter
  ];

  const HanoiImages = [
    HanoiMenu,
    HanoiBasic,
    HanoiSurvival
  ];

  const WereWolveAngularImages = [
    WereAngMenu,
    WereAngAbout,
    WereAngFAQ,
    WereAngRole,
    WereAngSelect,
    WereAngSelected,
    WereAngActif,
    WereAngInfo,
    WereAngKill
  ];

  const WerewolveKotlinImages = [
    WereKotlinMenu,
    WereKotlinFAQ,
    WereKotlinRole,
    WereKotlinCreate,
    WereKotlinSelect,
    WereKotlinActif,
    WereKotlinKill
  ];


  const [zoomImage, setZoomImage] = useState(null);
  const [zoomList, setZoomList] = useState([]);
  const [zoomIndex, setZoomIndex] = useState(null);

  const openZoom = (src, list) => {
    setZoomList(list);
    setZoomIndex(list.indexOf(src));
    setZoomImage(src);
  };

  const closeZoom = () => {
    setZoomImage(null);
    setZoomIndex(null);
  };

  const next = () => {
    const nextIdx = (zoomIndex + 1) % zoomList.length;
    setZoomIndex(nextIdx);
    setZoomImage(zoomList[nextIdx]);
  };

  const prev = () => {
    const prevIdx = (zoomIndex - 1 + zoomList.length) % zoomList.length;
    setZoomIndex(prevIdx);
    setZoomImage(zoomList[prevIdx]);
  };



  return (
    <div>
      <div>
        <h1>Introduction</h1>
        <p>Here are some project example I did, professionnal, education, or personnal. You can click on the image in the center to zoom in and still circulate through the list.</p>
      </div>
      <div>
        <h1>Acacia & Gamin</h1>
        <h2>Professionnal</h2>
        <Carousel_image images={AcaciaGaminImages} onImageClick={openZoom}/>
        <p>These applications have been evolved during my professionnalisation contract for my last year of studies.<br/>
        The objective was they pass from VB.Net to C#.Net, with a better design, intuitive use.</p>
        <h3>Statement : Still ongoing when I finished my mission.</h3>
      </div>
      <div>
        <h1>Hanoï Tower Game</h1>
        <h2>For Interview</h2>
        <Carousel_image images={HanoiImages} onImageClick={openZoom}/>
        <p>When I wanted to gain a mission as a QML developer (C++ in back, javascript in front), I got challenged on my skills in face of a situation where I don't know the technology at all. The developer put some challenges and conditions to build this Hanoï Tower Game. <br/>
        Main challenge was a game working, with a timer, counting the time with 4 disks. There were other optionals steps. Without help except myself, looking on internet, the result was the game was completed, up to 8 disks, drag'n'drop working, challenge mode, a menu, animations when winning. <br/>
        One of my projects I'm proud and is a proof I can learn and realize good things when I don't know anything.</p>
        <h3>Statement : Completed.</h3>
      </div>
      <div>
        <h1>Werewolves of Miller's Hollow utilities application from One Night/One Crepuscule</h1>
        <h2>Personnal</h2>
        <Carousel_image images={WereWolveAngularImages} onImageClick={openZoom}/>
        <p>Back in France, I was going to a board game bar where I played a lot the game of werewolves of Miller's Hollow. Since we were creating a lot of roles to match the game of Miller's Hollow (basic game), we had some hard time to remember. <br/>
        In order to improve my skills and learn a new technology, I created the application on Angular that allow to track the calls, roles alive, register informations like the lovers. Then, from a web application, this was deported to a mobile one through the 'capacitor' module that transforms angular application into mobile application.</p>
        <h3>Statement : Completed.</h3>
      </div>
      <div>
        <h1>Werewolves of Miller's Hollow utilities application</h1>
        <h2>Personnal</h2>
        <Carousel_image images={WerewolveKotlinImages} onImageClick={openZoom}/>
        <p>I did it again but from scratch in Kotlin this time, to learn new things and do better. This one was needed for my work as a free animator in a board game association I was going a lot and where I bring the culture of roleplaying. Since the host were giving me their full trust, and we were, with friends, handling with paper before a lot of informations, <br/>
        I decided to create again this application, but with the the cards of the original game, changing his aspect, handling better and logical turn and calls, informations, adding a creation role part in it. This application is another one I'm proud of. It is light in memory, fast, intuitive.</p>
        <h3>Statement : Completed.</h3>
      </div>
      <div>
        <h1>This portfolio</h1>
        <h2>Personnal</h2>
        <img src="images/acacia.png" alt="a slot"/>
        <p>He he... who said you can't put your own portfolio that display this into your personal projects? Isn't it true? This portfolio is realized in React, again another pretext to learn new technologies! This portfolio will always be under evolution, maybe it will have a final state one day!</p>
        <h3>Statement : Ongoing.</h3>
      </div>
      
      <AnimatePresence>
        {zoomImage && (
          <motion.div
            className="lightbox-overlay"
            onClick={closeZoom}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={zoomImage}
              alt="Zoomed"
              className="lightbox-img"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button className="lightbox-btn left" onClick={(e) => { e.stopPropagation(); prev(); }}>◀</button>
            <button className="lightbox-btn right" onClick={(e) => { e.stopPropagation(); next(); }}>▶</button>
          </motion.div>
        )}
      </AnimatePresence>


    </div>
  );
}

export default Projects;