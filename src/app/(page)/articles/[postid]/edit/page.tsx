"use client";
import MarkdownEditor from "@/components/markdownEditor/MarkdownEditor";
import MdConverter from "@/components/mdConverter/MdConverter";
import { useDocContext } from "@/provider/provider";

const Page = () => {
  const [doc, setDoc] = useDocContext();
  return (
    <div>
      <MarkdownEditor doc={doc} setDoc={setDoc} />
      <MdConverter doc={doc} />
    </div>
  );
};

export default Page;
