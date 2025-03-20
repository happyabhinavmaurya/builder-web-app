'use client'

import React, { useState, useEffect } from "react";
import "./Hero.css"; // Import the external CSS

const images = [
  { src: "https://picsum.photos/1200/800?random=1", text: "Welcome to Our Site" },
  { src: "https://picsum.photos/1200/800?random=2", text: "Discover Amazing Places" },
  { src: "https://picsum.photos/1200/800?random=3", text: "Start Your Journey Today!" },
];

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="hero">
      <div
        className="hero-bg fade"
        style={{ backgroundImage: `url(${images[currentIndex].src})` }}
      >
        <h2 className="hero-text slide-up">{images[currentIndex].text}</h2>
        <button className="prev" onClick={prevSlide}>
          ❮
        </button>
        <button className="next" onClick={nextSlide}>
          ❯
        </button>
        <div className="dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

