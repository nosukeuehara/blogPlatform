import MarkdownEditor from "@/components/markdownEditor/MarkdownEditor";
import MdConverter from "@/components/mdConverter/MdConverter";

type Param = {
  postid: string;
};

const Page = async ({ params }: { params: Promise<Param> }) => {
  const postId = (await params).postid;
  return (
    <div>
      <MarkdownEditor postId={postId} />
      <MdConverter />
    </div>
  );
};

export default Page;
