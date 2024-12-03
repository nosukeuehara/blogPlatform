"use client";
import { saveArticle } from "@/feature/action";
import useMarkdownEditor from "@/hooks/useMarkdownEditor";
import { useCallback, useState } from "react";

const MarkdownEditor = () => {
  const [doc, setDoc] = useState<string>("OKOK");
  const save = useCallback(async () => {
    setDoc(doc);
    console.log(doc);
    await saveArticle(doc!);
  }, [doc]);
  const { editor } = useMarkdownEditor({ doc, setDoc, save });

  return (
    <div>
      <div ref={editor} />
    </div>
  );
};

export default MarkdownEditor;
