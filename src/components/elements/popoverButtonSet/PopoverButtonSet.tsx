"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./popoverButtonSet.module.css";

const PopoverButtonSet = ({ articleId }: { articleId: string }) => {
  const [isPopoverState, setPopoverState] = useState<boolean>(false);
  const popoverRef = useRef<HTMLDivElement | null>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      popoverRef.current &&
      !popoverRef.current.contains(event.target as Node)
    ) {
      setPopoverState(false);
    }
  };

  useEffect(() => {
    if (isPopoverState) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isPopoverState]);

  return (
    <div id={articleId} className={styles.menuButtonContainer} ref={popoverRef}>
      <button
        className={styles.menuButton}
        onClick={() => {
          setPopoverState(!isPopoverState);
        }}
      >
        ・・・
      </button>
      {isPopoverState && (
        <div className={`${styles.popoverMenue} ${styles.fadeInUp}`}>
          <a rel="noopener noreferrer" target="_blank">
            <button className={styles.deleteBtn}>
              <span>削除する</span>
            </button>
          </a>
        </div>
      )}
    </div>
  );
};

export default PopoverButtonSet;
