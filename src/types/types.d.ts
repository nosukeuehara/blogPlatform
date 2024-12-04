import { UUID } from "crypto"

export interface ButtonProps {
  btnText: string
  link: string
}

export interface ArticleData {
  articleId: UUID
}

export type SaveStatus = "saved" | "unsaved"