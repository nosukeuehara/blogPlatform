"use client";
import styles from "./toggleSwitch.module.css";

const ToggleSwitch = ({
  state,
  handleClick,
}: {
  state: boolean;
  handleClick: () => void;
}) => {
  const btnStyle = state ? styles["--bg_active"] : null;
  return (
    <button
      className={`${styles["bl_toggleSwitch"]} ${btnStyle}`}
      onClick={() => handleClick()}
    ></button>
  );
};

export default ToggleSwitch;
