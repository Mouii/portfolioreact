import "./Contact.css";
import {useState} from "react";
import emailjs from "@emailjs/browser";
import RightContact from "./images/right_contact.webp";
import LeftContact from "./images/left_contact.webp";
import { useTranslation } from "react-i18next";

const Contact = () => {

  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [charCount, setCharCount] = useState(0);
  const maxChars = 500;
  const maxField = 50;

  const handleChange = (e) => {
    const { name, value, maxLength } = e.target;

    if (name === "message") {
      setCharCount(value.length > maxChars ? maxChars : value.length);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value.slice(0, maxLength),
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = t("contactErrorName");
    if (!formData.email.trim()) newErrors.email = t("contactErrorMail");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = t("contactErrorMailFormat");
    if (!formData.subject.trim()) newErrors.subject = t("contactErrorSubject");
    if (!formData.message.trim()) newErrors.message = t("contactErrorMessage");
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      try {
        await emailjs.send(
          "service_o1cb2s5",
          "template_7brp3im",
          formData,
          "CIzpQuBEFa5A8SMi0"
        );
        alert(t("contactSubmitSent"));
        setFormData({ name: "", email: "", subject: "", message: "" });
        setCharCount(0);
      } catch (error) {
        console.error(error);
        alert(t("contactSubmitError"));
      }
    }

  
  };


  return (
  <div>
    <h1>{t("contactQuestion")}</h1>
    <div className="tip">{t("contactTips")}</div>

    <div class="contact-flex-wrapper">

      <div className="side-image primo">
        <img src={LeftContact} alt="left pointing" />
      </div>

      <div class="form-center">
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <label htmlFor="name">{t("contactName")}</label>
          <input
            type="text"
            id="name"
            name="name"
            maxLength={maxField}
            placeholder={t("contactPlaceholderName")}
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <small className="error">{errors.name}</small>}

          <label htmlFor="email">{t("contactEmail")}</label>
          <input
            type="email"
            id="email"
            name="email"
            maxLength={maxField}
            placeholder={t("contactPlaceholderMail")}
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <small className="error">{errors.email}</small>}

          <label htmlFor="subject">{t("contactSubject")}</label>
          <input
            type="text"
            id="subject"
            name="subject"
            maxLength={maxField}
            placeholder={t("contactPlaceholderSubject")}
            value={formData.subject}
            onChange={handleChange}
            required
          />
          {errors.subject && <small className="error">{errors.subject}</small>}

          <label htmlFor="message">{t("contactMessage")}</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            maxLength={maxChars}
            placeholder={t("contactPlaceholderMessage")}
            value={formData.message}
            onChange={handleChange}
            required
          />
          <div className="char-count">
            {charCount} / {maxChars} {t("contactCharacters")}
          </div>
          {errors.message && <small className="error">{errors.message}</small>}

          <button type="submit">{t("contactSending")}</button>
        </form>
      </div>

      <div className="side-image secondo">
        <img src={RightContact} alt="right pointing" />
      </div>

    </div>
  </div>
  );
}

export default Contact;