"use client";
import React from "react";
import Image from "next/image";
import { useUpdatedMdContext } from "@/provider/provider";
import { useRouter } from "next/navigation";
import styles from "./exitEditorBtn.module.css";

const ExitEditorBtn = () => {
  const [isUpdated] = useUpdatedMdContext();
  const router = useRouter();

  const handleNavigation = (event: React.MouseEvent) => {
    if (isUpdated === "unsaved") {
      const confirmLeave = window.confirm(
        "変更が保存されていません。ページを移動しますか？"
      );
      if (!confirmLeave) {
        return event.preventDefault();
      }
    }
    router.push("/dashboard");
    // /dashboard のルートキャシュを更新
    router.refresh();
  };

  return (
    <button className={styles.bl_exitEditorBtn} onClick={handleNavigation}>
      <Image
        src="/leftArrow.svg"
        alt="保存して戻るボタン"
        width={10}
        height={10}
      />
    </button>
  );
};

export default ExitEditorBtn;
