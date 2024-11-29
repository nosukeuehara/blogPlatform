import EditorHeder from "@/components/layouts/EditorHeder";
import React from "react";

// 記事編集ページ
const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <EditorHeder /> {children}
    </div>
  );
};

export default layout;
