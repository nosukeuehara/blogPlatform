import MarkdownEditor from "@/components/markdownEditor/MarkdownEditor";
import MdConverter from "@/components/mdConverter/MdConverter";

type Param = {
  postid: string;
};

const Page = async ({ params }: { params: Promise<Param> }) => {
  const postId = (await params).postid;

  // TODO : クライアントサイドで入力されたテキストはPOSTでバックエンドに返しHTMLに変換してもらう
  // TODO : 画像は挿入されるたびにアップロード
  // TODO : 画像の挿入についてもエディタに書く
  return (
    <div>
      <MarkdownEditor postId={postId} />
      <MdConverter />
    </div>
  );
};

export default Page;
