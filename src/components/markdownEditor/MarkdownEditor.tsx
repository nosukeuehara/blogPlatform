"use client";
import useMarkdownEditor from "@/hooks/useMarkdownEditor";
import { useDocContext, useUpdatedMdContext } from "@/provider/provider";
import styles from "./markdownEditor.module.css";

const MarkdownEditor = ({ postId }: { postId: string }) => {
  const [doc, setDoc] = useDocContext();
  const [saveState, setSaveStatus] = useUpdatedMdContext();

  const { editor } = useMarkdownEditor({
    articleId: postId,
    doc,
    setDoc,
  });

  return (
    <div className={styles["bl_mdArea"]}>
      <input
        autoFocus
        className={styles.bl_bdArea__titleInput}
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
  );
};

export default MarkdownEditor;
