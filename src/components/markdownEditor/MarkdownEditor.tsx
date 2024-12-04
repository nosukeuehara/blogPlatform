"use client";
import { saveArticle } from "@/feature/action";
import useMarkdownEditor from "@/hooks/useMarkdownEditor";
import { useCallback } from "react";

const MarkdownEditor = ({
  doc,
  setDoc,
}: {
  doc: string | null;
  setDoc: (v: string) => void;
}) => {
  const save = useCallback(async () => {
    if (doc === null) return;
    await saveArticle(doc);
  }, [doc]);

  const { editor } = useMarkdownEditor({
    doc,
    setDoc,
    save,
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div>
        <h3>Markdown Editor</h3>
        <div>
          <div ref={editor} />
        </div>
      </div>
    </div>
  );
};

export default MarkdownEditor;
