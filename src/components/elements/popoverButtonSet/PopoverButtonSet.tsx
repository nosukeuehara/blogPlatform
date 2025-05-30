"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./popoverButtonSet.module.css";
import { deleteArticle } from "@/feature/action";
import { useRouter } from "next/navigation";

const PopoverButtonSet = ({ articleId }: { articleId: string }) => {
  const [isPopoverState, setPopoverState] = useState<boolean>(false);
  const popoverRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

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
    <div id={articleId} className={styles["bl-menue"]} ref={popoverRef}>
      <button
        className={styles["bl-menue__btn"]}
        onClick={() => {
          setPopoverState(!isPopoverState);
        }}
      >
        ・・・
      </button>
      {isPopoverState && (
        <div
          className={`${styles["bl-menue__popover"]} ${styles["--fadeInUp"]}`}
        >
          <a rel="noopener noreferrer" target="_blank">
            <button
              className={styles["bl-menue__deleteBtn"]}
              onClick={() => {
                deleteArticle({ id: articleId });
                router.refresh(); // 記事削除に最新のページを取得する
              }}
            >
              <span className={styles["bl-menue__deleteBtnText"]}>
                削除する
              </span>
            </button>
          </a>
        </div>
      )}
    </div>
  );
};

export default PopoverButtonSet;
