"use client";
import useMarkdownEditor from "@/hooks/useMarkdownEditor";

const MarkdownEditor = ({
  doc,
  setDoc,
}: {
  doc: string | null;
  setDoc: (v: string) => void;
}) => {
  const { editor } = useMarkdownEditor({
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
