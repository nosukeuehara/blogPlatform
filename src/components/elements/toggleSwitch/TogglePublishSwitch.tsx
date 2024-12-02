"use client";
import styles from "./toggleSwitch.module.css";

const ToggleSwitch = ({
  state,
  handleClick,
}: {
  state: boolean;
  handleClick: () => void;
}) => {
  return (
    <div>
      <button
        className={
          state
            ? `${styles.ToggleSwitch} ${styles.ToggleSwitchBg_active}`
            : `${styles.ToggleSwitch}`
        }
        onClick={() => handleClick()}
      ></button>
    </div>
  );
};

export default ToggleSwitch;
