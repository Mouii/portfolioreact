import "./Header.css";
import { useTranslation } from "react-i18next";
import LangSwitch from "./langSwitch";

const Header = () => {

    const { t } = useTranslation();

    return (
        <div>
            <div className="welcome-banner">
                {t("welcome")}
            </div>
            <LangSwitch />
        </div>
    );
}

export default Header;