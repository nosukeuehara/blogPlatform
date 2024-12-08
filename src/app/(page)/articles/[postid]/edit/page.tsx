"use client";
import MarkdownEditor from "@/components/markdownEditor/MarkdownEditor";
import MdConverter from "@/components/mdConverter/MdConverter";
import { useDocContext } from "@/provider/provider";
import { useParams } from "next/navigation";

const Page = () => {
  const { slug } = useParams();
  const [doc, setDoc] = useDocContext();
  return (
    <div>
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
      </div>
      <MarkdownEditor articleId={slug} doc={doc} setDoc={setDoc} />
      <MdConverter doc={doc} />
    </div>
  );
};

export default Page;
