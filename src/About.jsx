import "./About.css";
import { useTranslation } from "react-i18next";

function About() {

    const { t } = useTranslation();

    return (
        <div>
            <div className="title">{t("titleMotivation")}</div>
                <div className="text">{t("motivation")}</div>                        
            <div className="title">{t("titlePhilosphy")}</div>
                <div className="text">{t("philosophy")}</div>    
            <div className="title">{t("point")}</div>
                <ul>
                    <li>
                    <h3>{t("titlePointOne")}</h3>
                    <div className="text">{t("pointOne")}</div>
                    </li>

                    <li>
                    <h3>{t("titlePointTwo")}</h3>
                    <div className="text">{t("pointTwo")}</div>
                    </li>

                    <li>
                    <h3>{t("titlePointThree")}</h3>
                    <div className="text">{t("pointThree")}</div>
                    </li>

                    <li>
                    <h3>{t("titlePointFour")}</h3>
                    <div className="text">{t("pointFour")}</div>
                    </li>

                    <li>
                    <h3>{t("titlePointFive")}</h3>
                    <div className="text">{t("pointFive")}</div>
                    </li>

                    <li>
                    <h3>{t("titlePointSix")}</h3>
                    <div className="text">{t("pointSix")}</div>
                    </li>

                </ul>    
        </div>
    );
}

export default About;