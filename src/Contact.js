import "./Contact.css";
import {useState} from "react";
import emailjs from "@emailjs/browser";

function Contact() {

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
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email format.";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      try {
        const result = await emailjs.send(
          "service_o1cb2s5",
          "template_7brp3im",
          formData,
          "CIzpQuBEFa5A8SMi0"
        );
        console.log("Email sent:", result.text);
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setCharCount(0);
      } catch (error) {
        console.error("Email send error:", error);
        alert("Something went wrong. Please try again.");
      }
    }

  
  };


  return (
  <div>
    <h1>Wanna contact me?</h1>
    <p>Leave me a message here and I will answer you when I can! :)</p>

    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <label htmlFor="name">Your Name</label>
      <input
        type="text"
        id="name"
        name="name"
        maxLength={maxField}
        placeholder="Jane Doe"
        value={formData.name}
        onChange={handleChange}
        required
      />
      {errors.name && <small className="error">{errors.name}</small>}

      <label htmlFor="email">Email Address</label>
      <input
        type="email"
        id="email"
        name="email"
        maxLength={maxField}
        placeholder="you@example.com"
        value={formData.email}
        onChange={handleChange}
        required
      />
      {errors.email && <small className="error">{errors.email}</small>}

      <label htmlFor="subject">Subject</label>
      <input
        type="text"
        id="subject"
        name="subject"
        maxLength={maxField}
        placeholder="Let's work together!"
        value={formData.subject}
        onChange={handleChange}
        required
      />
      {errors.subject && <small className="error">{errors.subject}</small>}

      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        rows="5"
        maxLength={maxChars}
        placeholder="Write your message here..."
        value={formData.message}
        onChange={handleChange}
        required
      />
      <div className="char-count">
        {charCount} / {maxChars} characters
      </div>
      {errors.message && <small className="error">{errors.message}</small>}

      <button type="submit">Send Message</button>
    </form>
  </div>
  );
}

export default Contact;