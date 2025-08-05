import "./About.css";
import { useTranslation } from "react-i18next";

function About() {

    const { t } = useTranslation();

    return (
        <div>
            <div className="title">{t("titleMotivation")}</div>
                <div className="text">{t("motivation")}</div>            
            <div className="title">{t("titleVision")}</div>
                <div className="text">{t("vision")}</div>                
            <div className="title">{t("titlePhilosphy")}</div>
                <div className="text">{t("philosophy")}</div>    
            <div className="title">{t("point")}</div>
                <ul>
                    <li>
                    <div className="liTitle">{t("titlePointOne")}</div>
                    <div className="text">{t("pointOne")}</div>
                    </li>

                    <li>
                    <div className="liTitle">{t("titlePointTwo")}</div>
                    <div className="text">{t("pointTwo")}</div>
                    </li>

                    <li>
                    <div className="liTitle">{t("titlePointThree")}</div>
                    <div className="text">{t("pointThree")}</div>
                    </li>

                    <li>
                    <div className="liTitle">{t("titlePointFour")}</div>
                    <div className="text">{t("pointFour")}</div>
                    </li>

                    <li>
                    <div className="liTitle">{t("titlePointFive")}</div>
                    <div className="text">{t("pointFive")}</div>
                    </li>

                    <li>
                    <div className="liTitle">{t("titlePointSix")}</div>
                    <div className="text">{t("pointSix")}</div>
                    </li>

                </ul>    
        </div>
    );
}

export default About;