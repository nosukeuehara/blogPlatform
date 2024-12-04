"use client";
import { SaveStatus } from "@/types/types";
import React, { createContext, useState, useContext } from "react";

const UpdateContext = createContext<{
  isUpdated: SaveStatus;
  setIsUpdated: (value: SaveStatus) => void;
} | null>(null);

export const UpdateProvider = ({ children }: { children: React.ReactNode }) => {
  const [isUpdated, setIsUpdated] = useState<SaveStatus>("saved");
  return (
    <UpdateContext.Provider value={{ isUpdated, setIsUpdated }}>
      {children}
    </UpdateContext.Provider>
  );
};

// Context を使って isUpdated の状態を取得するカスタムフック
export const useUpdateContext = () => {
  const context = useContext(UpdateContext);
  if (!context) {
    throw new Error("useUpdateContext must be used within an UpdateProvider");
  }
  return [context.isUpdated, context.setIsUpdated] as const; // 'as const' を追加
};

const DocContext = createContext<{
  doc: null | string;
  setDoc: (value: string) => void;
} | null>(null);

export const DocProvider = ({ children }: { children: React.ReactNode }) => {
  const [doc, setDoc] = useState<null | string>("");

  return (
    <DocContext.Provider value={{ doc, setDoc }}>
      {children}
    </DocContext.Provider>
  );
};

// Context を使って isUpdated の状態を取得するカスタムフック
export const useDocContext = () => {
  const context = useContext(DocContext);
  if (!context) {
    throw new Error("useUpdateContext must be used within an UpdateProvider");
  }
  return [context.doc, context.setDoc] as const; // 'as const' を追加
};
