import { useTranslation } from "react-i18next";
import franceFlag from "./images/french.webp";
import ukFlag from "./images/english.webp";
import "./langSwitch.css";

const LangSwitch = () => {
  const { i18n } = useTranslation();

  const setLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flag-switcher">
      <img
        src={ukFlag}
        alt="English"
        className="flag"
        onClick={() => setLanguage("en")}
      />
      <img
        src={franceFlag}
        alt="Français"
        className="flag"
        onClick={() => setLanguage("fr")}
      />
    </div>
  );
};

export default LangSwitch;