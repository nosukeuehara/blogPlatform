import { ArticleData } from "@/types/types";

export interface ButtonProps {
  btnText: string;
  link: string;
}

export interface ArticleData {
  id: string;
  title: string;
  content: string;
  published: boolean;
}

export type SaveStatus = "saved" | "unsaved";
