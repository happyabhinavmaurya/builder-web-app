"use client";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./About.module.css";

const images = [
  "https://picsum.photos/400/500?random=1",
  "https://picsum.photos/400/500?random=2",
  "https://picsum.photos/400/500?random=3",
  "https://picsum.photos/400/500?random=4",
];

export const About = () => {
  return (
    <div className={styles.container}>
      {/* Heading with Animation */}
      <motion.h2
        className={styles.headingLarge}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Our Company
      </motion.h2>

      <motion.h3
        className={styles.heading}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Your Vision, Our Design Expertise
      </motion.h3>

      <div className={styles.content}>
        {/* Image Slider */}
        <div className={styles.imageSlider}>
          <Swiper
            modules={[Navigation]}
            navigation
            slidesPerView={1}
            spaceBetween={0}
            loop
            className={styles.swiper}
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <motion.img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className={styles.image}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Animated Text Section */}
        <motion.div
          className={styles.text}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p>
            <span className={styles.highlight}>Welcome</span> to Vikas Builders,
            where craftsmanship meets innovation in construction.
          </p>
          <p>
            At Vikas Builders, we’re more than just builders; we’re creators of
            lasting legacies. With a passion for excellence and a commitment to
            quality, we bring dreams to life, one project at a time.
          </p>
          <p>
            Founded on the principles of integrity, reliability, and
            unparalleled service, we’ve been serving communities since 1986. Our
            journey began with a vision to redefine construction by blending
            traditional expertise with modern techniques, and today, we stand
            as a beacon of trust in the industry.
          </p>
          <p>
            What sets us apart is our unwavering dedication to customer
            satisfaction. From concept to completion, we collaborate closely
            with our clients, understanding their vision and exceeding their
            expectations. Our skilled team of professionals combines years of
            experience with innovative solutions, ensuring every project is
            delivered with precision and perfection.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
