import "./Footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {

    const { t } = useTranslation();

    return (
        <div className="foot">
            &copy; {new Date().getFullYear()} Kévin PRUD'HOMME. {t("copyright")}
        </div>
    );
}

export default Footer;