"use client";
import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import styles from "./Milestone.module.css";

export const Milestone = () => {
  return (
    <div className={styles.container}>
      {/* Animated Heading */}
      <motion.h1
        className={styles.heading}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our Milestones Meter
      </motion.h1>

      <div className={styles.milestones}>
        <div className={styles.milestoneItem}>
          <CountUp start={0} end={200} duration={3} delay={0.5} />+
          <p>Projects</p>
        </div>
        <div className={styles.milestoneItem}>
          <CountUp start={0} end={100} duration={3} delay={0.5} />+
          <p>Expert Engineers</p>
        </div>
        <div className={styles.milestoneItem}>
          <CountUp start={0} end={600} duration={3} delay={0.5} />+
          <p>Happy Clients</p>
        </div>
      </div>
    </div>
  );
};
