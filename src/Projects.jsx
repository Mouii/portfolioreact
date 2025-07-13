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

import PortFolioMain from "./images/portfolio.webp";
import PortFolioAbout from "./images/portfolio_about.webp";
import PortFolioContact from "./images/portfolio_contact.webp";

import { motion, AnimatePresence } from "framer-motion";

import Carousel_image from "./Carousel_image";

import { useTranslation } from "react-i18next";

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

  const PortfolioImages = [
    PortFolioMain,
    PortFolioAbout,
    PortFolioContact
  ];

  const { t } = useTranslation();

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
        <div className="title">{t("projectIntro")}</div>
        <p>{t("projectTips")}</p>
      </div>
      <div>
        <div className="title">{t("sopraTitle")}</div>
        <div className="type">{t("projectTypePro")}</div>
        <Carousel_image images={AcaciaGaminImages} onImageClick={openZoom}/>
        <p>{t("sopraDescription")}</p>
        <h3>{t("projectStatement")} {t("projectStatementOngoing")}</h3>
      </div>
      <div>
        <div className="title">{t("hanoiTitle")}</div>
        <div className="type">{t("projectTypeInterview")}</div>
        <Carousel_image images={HanoiImages} onImageClick={openZoom}/>
        <p>{t("hanoiDescription")}</p>
        <h3>{t("projectStatement")} {t("projectStatementCompleted")}</h3>
      </div>
      <div>
        <div className="title">{t("werewolfAngularTitle")}</div>
        <div className="type">{t("projectTypePersonal")}</div>
        <Carousel_image images={WereWolveAngularImages} onImageClick={openZoom}/>
        <p>{t("werewolfAngularDescription")}</p>
        <h3>{t("projectStatement")} {t("projectStatementCompleted")}</h3>
      </div>
      <div>
        <div className="title">{t("werewolfKotlinTitle")}</div>
        <div className="type">{t("projectTypePersonal")}</div>
        <Carousel_image images={WerewolveKotlinImages} onImageClick={openZoom}/>
        <p>{t("werewolfKotlinDescription")}</p>
        <h3>{t("projectStatement")} {t("projectStatementCompleted")}</h3>
      </div>
      <div>
        <div className="title">{t("portfolioTitle")}</div>
        <div className="type">{t("projectTypePersonal")}</div>
        <Carousel_image images={PortfolioImages} onImageClick={openZoom}/>
        <p>{t("portfolioDescription")}</p>
        <h3>{t("projectStatement")} {t("projectStatementOngoing")}</h3>
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