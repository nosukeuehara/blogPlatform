import MarkdownEditor from "@/components/markdownEditor/MarkdownEditor";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense>
      <MarkdownEditor />
    </Suspense>
  );
};

export default page;
