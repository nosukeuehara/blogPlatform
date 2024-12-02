import React from "react";
import styles from "./reactedTextBtn.module.css";

const ReactedTextBtn = ({
  state,
  children,
}: {
  state: boolean;
  children: React.ReactNode;
}) => {
  return (
    <button
      className={state ? `${styles.button_active}` : `${styles.button_default}`}
    >
      {children}
    </button>
  );
};

export default ReactedTextBtn;
