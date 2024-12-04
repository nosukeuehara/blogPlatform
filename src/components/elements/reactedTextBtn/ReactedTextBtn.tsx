import React, { useEffect } from "react";
import styles from "./reactedTextBtn.module.css";
import { useDocContext, useUpdateContext } from "@/provider/provider";
import { saveArticle } from "@/feature/action";

const ReactedTextBtn = ({
  state,
  children,
}: {
  state: boolean;
  children: React.ReactNode;
}) => {
  const [isUpdated, setIsUpdated] = useUpdateContext();
  const [doc] = useDocContext();

  useEffect(() => {}, [isUpdated]);

  switch (isUpdated) {
    case "saved":
  }
  return (
    <button
      onClick={async () => {
        await saveArticle(doc);
        setIsUpdated("saved");
      }}
      className={
        state || isUpdated === "unsaved"
          ? `${styles.button_active}`
          : `${styles.button_default}`
      }
    >
      {children}
    </button>
  );
};

export default ReactedTextBtn;
