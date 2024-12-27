"use client";
import React, { useState } from "react";
import styles from "./popoverButtonSet.module.css";

const PopoverButtonSet = ({ articleId }: { articleId: string }) => {
  const [isPopoverState, setPopoverState] = useState<boolean>(false);

  const popover = () => {
    if (isPopoverState) {
      return (
        <div>
          <div className={`${styles.popoverMenue} ${styles.fadeInUp}`}>
            <a rel="noopener noreferrer" target="_blank">
              {/* 画面をクリックしたらボタンを閉じるようにする */}
              <button className={styles.deleteBtn}>
                <span>削除する</span>
              </button>
            </a>
          </div>
        </div>
      );
    }
    return null;
  };
  return (
    <div id={articleId} className={styles.menuButtonContainer}>
      <button
        className={styles.menuButton}
        onClick={() => {
          setPopoverState(!isPopoverState);
        }}
      >
        ・・・
      </button>
      {popover()}
    </div>
  );
};

export default PopoverButtonSet;
