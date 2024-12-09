import EditorHeader from "@/components/layouts/EditorHeader/EditorHeader";
import { DocProvider, UpdateProvider } from "@/provider/provider";
import React, { Suspense } from "react";

// 記事編集ページ
const Layout = ({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { postid: string };
}>) => {
  console.log(params.postid);
  return (
    <div>
      <UpdateProvider>
        <DocProvider>
          <EditorHeader postid={params.postid} />
          <Suspense>{children}</Suspense>
        </DocProvider>
      </UpdateProvider>
    </div>
  );
};

export default Layout;
