"use client";
import React from "react";
import Image from "next/image";
import { useUpdatedMdContext } from "@/provider/provider";
import { useRouter } from "next/navigation";
import styles from "./saveReturnBtn.module.css";

const SaveReturnBtn = () => {
  const [isUpdated] = useUpdatedMdContext();
  const router = useRouter();

  // ページ遷移前に警告を表示
  const handleNavigation = (event: React.MouseEvent) => {
    if (isUpdated === "unsaved") {
      const confirmLeave = window.confirm(
        "変更が保存されていません。ページを移動しますか？"
      );
      if (!confirmLeave) {
        return event.preventDefault(); // ユーザーが遷移をキャンセルした場合
      }
    }
    router.push("/dashboard");
  };

  return (
    <div>
      <button className={styles.button} onClick={handleNavigation}>
        <Image
          src="/leftArrow.svg"
          alt="保存して戻るボタン"
          width={10}
          height={10}
        />
      </button>
    </div>
  );
};

export default SaveReturnBtn;
