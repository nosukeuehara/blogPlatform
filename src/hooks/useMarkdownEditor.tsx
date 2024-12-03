import { EditorView } from "@codemirror/view";
import { keymap, placeholder, ViewUpdate } from "@codemirror/view";
import { EditorState, StateEffect } from "@codemirror/state";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { useMemo, useRef, useState, useEffect } from "react";

interface UseMarkDownEditorProps {
  doc: string;
  setDoc: (doc: string) => void;
  save: () => void;
}

export const useMarkdownEditor = ({
  doc,
  setDoc,
  save,
}: UseMarkDownEditorProps) => {
  const editor = useRef(null);
  const [container, setContainer] = useState<HTMLDivElement>();
  const [view, setView] = useState<EditorView>();

  const enter = (view: EditorView) => {
    const { state, dispatch } = view;
    const { from, to } = state.selection.main;

    const transaction = state.update({
      changes: { from, to, insert: "\n" },
      selection: { anchor: from + 1, head: from + 1 },
      scrollIntoView: true,
    });

    dispatch(transaction);
    return true;
  };

  const customKeymap = useMemo(() => {
    return keymap.of([
      {
        key: "Mod-s",
        run() {
          save();
          return true;
        },
      },
      {
        key: "Enter",
        run(view) {
          return enter(view);
        },
      },
    ]);
  }, [save]);

  const updateListener = useMemo(() => {
    return EditorView.updateListener.of((update: ViewUpdate) => {
      if (update.docChanged) {
        setDoc(update.state.doc.toString());
      }
    });
  }, [setDoc]);

  useEffect(() => {
    if (editor.current) {
      setContainer(editor.current);
    }
  }, [setContainer]);

  // エディタ拡張機能を設定
  const extensions = useMemo(() => {
    return [
      updateListener,
      customKeymap,
      markdown({
        base: markdownLanguage,
        completeHTMLTags: false,
      }),
      EditorView.theme({
        "&": { height: "300px", backgroundColor: "white" },
        ".cm-scroller": { overflow: "auto" },
      }),
      placeholder("Write in markdown"),
      EditorView.lineWrapping,
      EditorState.tabSize.of(4),
    ];
  }, [customKeymap, updateListener]);

  useEffect(() => {
    if (!view && container && doc) {
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
