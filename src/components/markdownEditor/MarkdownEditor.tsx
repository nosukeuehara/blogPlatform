"use client";
import { saveArticle } from "@/feature/action";
import useMarkdownEditor from "@/hooks/useMarkdownEditor";
import MarkdownIt from "markdown-it";
import { useCallback, useState, useMemo } from "react";

const MarkdownEditor = () => {
  const [doc, setDoc] = useState<string>("OKOK");

  const md = useMemo(() => new MarkdownIt(), []);

  const save = useCallback(async () => {
    console.log(doc);
    await saveArticle(doc);
  }, [doc]);

  const { editor } = useMarkdownEditor({ doc, setDoc, save });

  const htmlContent = md.render(doc);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div>
        <h3>Markdown Editor</h3>
        <div ref={editor} />
      </div>

      <div>
        <h3>Preview</h3>
        <div
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "5px",
            minHeight: "200px",
            backgroundColor: "#f9f9f9",
            whiteSpace: "pre-wrap",
          }}
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    </div>
  );
};

export default MarkdownEditor;
