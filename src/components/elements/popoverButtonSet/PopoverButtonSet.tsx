"use client";
import React from "react";
import styles from "./popoverButtonSet.module.css";

const PopoverButtonSet = () => {
  return (
    <div className={styles.menuButtonContainer}>
      <button className={styles.menuButton} onClick={() => {}}>
        ・・・
      </button>
    </div>
  );
};

export default PopoverButtonSet;
