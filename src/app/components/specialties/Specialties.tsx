"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Specialties.module.css";
import { div } from "framer-motion/client";

// Images and text data
const slides = [
  {
    image: "https://picsum.photos/1200/800?random=1",
    title: "Modern Luxury",
    text: "Experience elegance with contemporary designs that blend style and functionality.",
  },
  {
    image: "https://picsum.photos/1200/800?random=2",
    title: "Classic Interiors",
    text: "Timeless aesthetics with a touch of sophistication and comfort.",
  },
  {
    image: "https://picsum.photos/1200/800?random=3",
    title: "Minimalist Design",
    text: "Simplicity at its finest, creating serene and clutter-free living spaces.",
  },
  {
    image: "https://picsum.photos/1200/800?random=4",
    title: "Industrial Chic",
    text: "Raw textures and bold contrasts for a modern industrial appeal.",
  },
];

export const Specialties = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <h2 className={styles.headingLarge}>Our Specialties</h2>
    <div className={styles.container}>
      {/* Heading & Text */}
      <motion.div
        key={activeIndex}
        className={styles.textSection}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3>{slides[activeIndex].title}</h3>
        <p>{slides[activeIndex].text}</p>
      </motion.div>

      {/* Image Slider */}
      <div className={styles.slider}>
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".next",
            prevEl: ".prev",
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          slidesPerView={1}
          loop
          className={styles.swiper}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <motion.img
                src={slide.image}
                alt={slide.title}
                className={styles.image}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <button className={`prev ${styles.button}`}>&larr;</button>
        <button className={`next ${styles.button}`}>&rarr;</button>
      </div>
    </div>
    </div>
  );
};
