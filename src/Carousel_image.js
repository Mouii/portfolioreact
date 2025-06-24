import { useState } from "react";
import { motion } from "framer-motion";
import "./Carousel_image.css";

function Carousel_image({images, onImageClick}) {
    const [active, setActive] = useState(0);

    const prevIndex = (active + images.length - 1) % images.length;
    const nextIndex = (active + 1) % images.length;

    const handleNext = () => {
        setActive((prev) => (prev + 1) % images.length);
    };

    const handlePrev = () => {
        setActive((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="carousel">
            <button className="carousel-btn left" onClick={handlePrev}>◀</button>
            <div className="carousel-track">
                {images.map((src, i) => {
                if (![active, prevIndex, nextIndex].includes(i)) return null;

                const position =
                    i === active ? "center" : i === prevIndex ? "left" : "right";

                return (
                    <motion.img
                    key={i}
                    src={src}
                    alt={`carousel-${i}`}
                    className={`carousel-img ${position}`}
                    onClick={() => position === "center" && onImageClick(src, images)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: position === "center" ? 1 : 0.6 }}
                    transition={{ duration: 0.6 }}
                    />
                );
                })}
            </div>
            <button className="carousel-btn right" onClick={handleNext}>▶</button>
        </div>
    );
}

export default Carousel_image;