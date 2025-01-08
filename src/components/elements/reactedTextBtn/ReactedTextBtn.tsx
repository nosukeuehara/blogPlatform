import React from "react";
import styles from "./reactedTextBtn.module.css";
import { useDocContext, useUpdatedMdContext } from "@/provider/provider";
import { saveArticle } from "@/feature/action";

const ReactedTextBtn = ({
  state: publishState,
  postid,
  children,
}: {
  state: boolean;
  postid: string;
  children: React.ReactNode;
}) => {
  const [saveStatus, setSaveStatus] = useUpdatedMdContext();
  const [doc] = useDocContext();

  return (
    <button
      onClick={async () => {
        if (!doc.title) {
          alert("記事の保存にはtitleが必要です");
          return;
        }

        if (saveStatus === "saved") return;
        await saveArticle({
          id: postid,
          ...doc,
        });
        setSaveStatus("saved");
      }}
      className={`${styles["bl-saveBtn"]} 
      ${publishState || saveStatus === "unsaved" ? styles["--unSaved"] : null}`}
    >
      {children}
    </button>
  );
};

export default ReactedTextBtn;
