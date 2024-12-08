"use client";
import useMarkdownEditor from "@/hooks/useMarkdownEditor";
import { ArticleData } from "@/types/types";

const MarkdownEditor = ({
  articleId,
  doc,
  setDoc,
}: {
  articleId: string
  doc: ArticleData;
  setDoc: (v: ArticleData) => void;
}) => {
  const { editor } = useMarkdownEditor({
    articleId,
    doc,
    setDoc,
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
