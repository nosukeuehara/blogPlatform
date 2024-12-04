import { keymap, placeholder, ViewUpdate, EditorView } from "@codemirror/view";
import { EditorState, StateEffect } from "@codemirror/state";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { useMemo, useRef, useState, useEffect } from "react";
import { defaultKeymap } from "@codemirror/commands";
import { useUpdateContext } from "@/provider/provider";

interface UseMarkDownEditorProps {
  doc: null | string;
  setDoc: (doc: string) => void;
  save: () => void;
}

export const useMarkdownEditor = ({
  doc,
  setDoc,
  save,
}: UseMarkDownEditorProps) => {
  const editor = useRef<HTMLDivElement | null>(null);
  const [container, setContainer] = useState<HTMLDivElement>();
  const [view, setView] = useState<EditorView>();
  const setIsUpdated = useUpdateContext()[1];

  const customKeymap = useMemo(() => {
    return keymap.of([
      {
        key: "Mod-s",
        run() {
          save();
          setIsUpdated("saved");
          return true;
        },
      },
    ]);
  }, [save, setIsUpdated]);

  const updateListener = useMemo(() => {
    return EditorView.updateListener.of((update: ViewUpdate) => {
      if (update.docChanged) {
        setDoc(update.state.doc.toString());
      }
    });
  }, [setDoc]);

  const updateListener2 = useMemo(() => {
    return EditorView.updateListener.of((update: ViewUpdate) => {
      if (update.docChanged) {
        setIsUpdated("unsaved");
      }
    });
  }, [setIsUpdated]);

  useEffect(() => {
    if (editor.current) {
      setContainer(editor.current);
    }
  }, [setContainer]);

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
    if (!view && container && doc !== null) {
      const state = EditorState.create({
        doc,
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
