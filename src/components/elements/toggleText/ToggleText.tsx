import React from "react";
import styles from "./toggletext.module.css";

const ToggleText = ({
  state,
  trueState,
  falseState,
}: {
  state: boolean;
  trueState: string;
  falseState: string;
}) => {
  if (state) {
    return <span className={styles.toggleText}>{trueState}</span>;
  } else {
    return <span className={styles.toggleText}>{falseState}</span>;
  }
};

export default ToggleText;
