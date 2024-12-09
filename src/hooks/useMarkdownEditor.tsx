import { keymap, placeholder, ViewUpdate, EditorView } from "@codemirror/view";
import { EditorState, StateEffect } from "@codemirror/state";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { useMemo, useRef, useState, useEffect, useCallback } from "react";
import { defaultKeymap } from "@codemirror/commands";
import { useUpdatedMdContext } from "@/provider/provider";
import { saveArticle } from "@/feature/action";
import { ArticleDoc } from "@/types/types";

interface UseMarkDownEditorProps {
  articleId: string;
  doc: ArticleDoc;
  setDoc: (doc: ArticleDoc) => void;
}

export const useMarkdownEditor = ({
  articleId,
  doc,
  setDoc,
}: UseMarkDownEditorProps) => {
  const editor = useRef<HTMLDivElement | null>(null);
  const [container, setContainer] = useState<HTMLDivElement>();
  const [view, setView] = useState<EditorView>();
  const setSaveStatus = useUpdatedMdContext()[1];

  const save = useCallback(async () => {
    if (doc === null) return;
    await saveArticle({
      id: articleId,
      ...doc,
    });
  }, [articleId, doc]);

  const customKeymap = useMemo(() => {
    return keymap.of([
      {
        key: "Mod-s",
        run() {
          save();
          setSaveStatus("saved");
          return true;
        },
      },
    ]);
  }, [save, setSaveStatus]);

  const updateListener = useMemo(() => {
    return EditorView.updateListener.of((update: ViewUpdate) => {
      if (update.docChanged) {
        setDoc({
          title: doc.title,
          content: update.state.doc.toString(),
          published: false,
        });
      }
    });
  }, [doc.title, setDoc]);

  const updateListener2 = useMemo(() => {
    return EditorView.updateListener.of((update: ViewUpdate) => {
      if (update.docChanged) {
        setSaveStatus("unsaved");
      }
    });
  }, [setSaveStatus]);

  useEffect(() => {
    if (editor.current) {
      setContainer(editor.current);
    }
  }, []);

  // エディタ拡張機能を設定
  const extensions = useMemo(() => {
    return [
      updateListener,
      updateListener2,
      keymap.of(defaultKeymap),
      customKeymap,
      markdown({
        base: markdownLanguage,
        completeHTMLTags: true,
      }),
      EditorView.theme({
        "&": {
          height: "300px",
          backgroundColor: "white",
          whiteSpace: "pre-wrap",
        },
        ".cm-scroller": { overflow: "auto" },
      }),
      placeholder("Write in markdown"),
      EditorView.lineWrapping,
      EditorState.tabSize.of(2),
    ];
  }, [customKeymap, updateListener, updateListener2]);

  useEffect(() => {
    if (!view && container && doc.content !== null) {
      const state = EditorState.create({
        doc: doc.content,
        extensions,
      });
      const viewCurrent = new EditorView({
        state,
        parent: container,
      });
      setView(viewCurrent);
    }
  }, [view, container, doc, extensions]);

  useEffect(() => {
    if (view) {
      view.dispatch({ effects: StateEffect.reconfigure.of(extensions) });
    }
  }, [view, extensions]);

  return {
    editor,
  };
};

export default useMarkdownEditor;
