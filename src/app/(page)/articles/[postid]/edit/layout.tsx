import EditorHeader from "@/components/layouts/EditorHeader/EditorHeader";
import { DocProvider, UpdateProvider } from "@/provider/provider";
import React from "react";

// 記事編集ページ
const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <UpdateProvider>
        <DocProvider>
          <EditorHeader />
          {children}
        </DocProvider>
      </UpdateProvider>
    </div>
  );
};

export default Layout;
