import { ArticleDoc } from "@/types/types";

export interface ButtonProps {
  btnText: string;
  link: string;
}

export interface ArticleDoc {
  title: string;
  content: string;
  published: boolean;
}

export interface ArticleData extends ArticleDoc {
  id: string
}

export interface TargetData {
  id: string,
}

export type SaveStatus = "saved" | "unsaved";
