"use client";
import useMarkdownEditor from "@/hooks/useMarkdownEditor";
import { useDocContext } from "@/provider/provider";
import { usePathname } from "next/navigation";

const MarkdownEditor = () => {
  const [doc, setDoc] = useDocContext();
  const pathname = usePathname();
  const slug = pathname.split("/")[2];
  console.log(slug);
  const { editor } = useMarkdownEditor({
    articleId: slug,
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
