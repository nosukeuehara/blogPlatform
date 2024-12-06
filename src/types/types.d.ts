import { ArticleData } from '@/types/types';

export interface ButtonProps {
  btnText: string
  link: string
}

export interface ArticleData {
  title: string,
  content: string,
  published: boolean
}

export type SaveStatus = "saved" | "unsaved"