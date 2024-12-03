"use client";
import React, { useState } from "react";
import MarkdownIt from "markdown-it";
import styles from "./markdownEditor.module.css";

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("");
  const md = new MarkdownIt();

  const handleInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setMarkdown(event.target.value);
  };

  const renderMarkdown = () => {
    return { __html: md.render(markdown) };
  };

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {/* Markdown入力欄 */}
      <textarea
        className={styles.textarea}
        style={{ width: "50%", height: "300px" }}
        onChange={handleInputChange}
      ></textarea>

      {/* HTML表示 */}
      <div
        style={{
          width: "50%",
          height: "300px",
          border: "1px solid #ccc",
          padding: "10px",
          overflowY: "auto",
        }}
        dangerouslySetInnerHTML={renderMarkdown()}
      ></div>
    </div>
  );
};

export default MarkdownEditor;
