import { useEffect, useState } from "react";
import hero_1 from "../assets/hero_1.jpg";
import hero_2 from "../assets/hero_2.jpg";
import hero_3 from "../assets/hero_3.jpg";
import './components.css'; // Import the CSS file

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [hero_1, hero_2, hero_3];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="hero-carousel">
      {/* Carousel Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-slide ${currentSlide === index ? "active" : ""}`}
        >
          <img
            src={image}
            alt={`Children at orphanage ${index + 1}`}
            className="carousel-image"
          />
          <div className="overlay" />
        </div>
      ))}

      {/* Overlay Text */}
      <div className="overlay-text">
        <h1 className="title">Help a child in South Sudan reach for a better future.</h1>
        <p className="description">
          Be a Good Shepherd.
        </p>
      </div>

      {/* Carousel Indicators */}
      <div className="indicators">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`indicator ${currentSlide === index ? "active" : ""}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;