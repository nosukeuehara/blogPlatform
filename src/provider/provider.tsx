"use client";
import { ArticleDoc, SaveStatus } from "@/types/types";
import React, { createContext, useState, useContext } from "react";

const UpdateContext = createContext<{
  isUpdated: SaveStatus;
  setIsUpdated: (value: SaveStatus) => void;
} | null>(null);

export const UpdateProvider = ({ children }: { children: React.ReactNode }) => {
  const [saveStatus, setSaveStatus] = useState<SaveStatus>("saved");
  return (
    <UpdateContext.Provider
      value={{ isUpdated: saveStatus, setIsUpdated: setSaveStatus }}
    >
      {children}
    </UpdateContext.Provider>
  );
};

export const useUpdatedMdContext = () => {
  const context = useContext(UpdateContext);
  if (!context) {
    throw new Error("useUpdateContext must be used within an UpdateProvider");
  }
  return [context.isUpdated, context.setIsUpdated] as const; // 'as const' を追加
};

const DocContext = createContext<{
  doc: ArticleDoc;
  setDoc: (value: ArticleDoc) => void;
} | null>(null);

// TODO: 新規で記事作成時にかなり時間がかかるので原因の調査
export const DocProvider = ({
  defaulteArticle,
  children,
}: {
  defaulteArticle: ArticleDoc;
  children: React.ReactNode;
}) => {
  const DefDoc = (): ArticleDoc => {
    if (defaulteArticle.content) {
      return defaulteArticle;
    } else {
      return {
        title: "",
        content: "",
        published: false,
      };
    }
  };
  const [doc, setDoc] = useState<ArticleDoc>({
    ...DefDoc(),
  });

  return (
    <DocContext.Provider value={{ doc, setDoc }}>
      {children}
    </DocContext.Provider>
  );
};

export const useDocContext = () => {
  const context = useContext(DocContext);
  if (!context) {
    throw new Error("useUpdateContext must be used within an UpdateProvider");
  }
  return [context.doc, context.setDoc] as const;
};
