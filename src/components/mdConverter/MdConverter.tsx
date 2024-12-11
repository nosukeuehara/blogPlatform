"use client";
import React from "react";
import MarkdownIt from "markdown-it";
import styles from "./mdConverter.module.css";
import { useDocContext } from "@/provider/provider";

const MdConverter = () => {
  const md = new MarkdownIt({
    html: true,
    breaks: true,
    linkify: true,
  });

  const [doc] = useDocContext();
  if (doc.content === null) return;
  const htmlContent = md.render(doc.content);
  return (
    <div>
      <h3>Preview</h3>
      <div
        className={styles.ol}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
};

export default MdConverter;
