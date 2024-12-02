"use client";
import React, { useState } from "react";
import styles from "./toggleSwitch.module.css";

const ToggleSwitch = () => {
  const [state, setStatus] = useState<boolean>(false);
  function handleClick() {
    setStatus(!state);
  }

  return (
    <button
      className={
        state
          ? `${styles.ToggleSwitch} ${styles.ToggleSwitchBg_active}`
          : `${styles.ToggleSwitch}`
      }
      onClick={() => handleClick()}
    ></button>
  );
};

export default ToggleSwitch;
