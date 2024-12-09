"use client";
import useMarkdownEditor from "@/hooks/useMarkdownEditor";
import { useDocContext } from "@/provider/provider";

const MarkdownEditor = ({ postId }: { postId: string }) => {
  console.log("記事のID", postId);
  const [doc, setDoc] = useDocContext();
  const { editor } = useMarkdownEditor({
    articleId: postId,
    doc,
    setDoc,
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div>
        <input
          type="text"
          onChange={(e) =>
            setDoc({
              ...doc,
              title: e.target.value,
            })
          }
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
