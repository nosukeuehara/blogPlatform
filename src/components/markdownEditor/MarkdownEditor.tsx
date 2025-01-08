"use client";
import useMarkdownEditor from "@/hooks/useMarkdownEditor";
import { useDocContext, useUpdatedMdContext } from "@/provider/provider";
import styles from "./markdownEditor.module.css";
import { useCallback, useEffect } from "react";
import { saveArticle } from "@/feature/action";

const MarkdownEditor = ({ postId }: { postId: string }) => {
  const [doc, setDoc] = useDocContext();
  const [saveState, setSaveStatus] = useUpdatedMdContext();

  const { editor } = useMarkdownEditor({
    articleId: postId,
    doc,
    setDoc,
  });

  const save = useCallback(async () => {
    if (doc === null) return;
    if (saveState === "saved") return;
    await saveArticle({
      id: postId,
      ...doc,
    });
  }, [doc, saveState, postId]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "s") {
        e.preventDefault();
        setSaveStatus("saved");
        save();
        console.log("Document marked as unsaved");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [save, setSaveStatus]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div>
        <input
          autoFocus
          className={styles.titleInput}
          placeholder="Title"
          type="text"
          value={doc.title}
          onChange={(e) => {
            setDoc({
              ...doc,
              title: e.target.value,
            });
            setSaveStatus("unsaved");
          }}
        />
        <h3>Markdown Editor</h3>
        <div>
          <div ref={editor} />
        </div>
      </div>
    </div>
  );
};

export default MarkdownEditor;
