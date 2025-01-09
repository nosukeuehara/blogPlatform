"use client";
import React from "react";
import ToggleSwitch from "../../elements/toggleSwitch/TogglePublishSwitch";
import ReactedTextBtn from "../../elements/reactedTextBtn/ReactedTextBtn";
import ToggleText from "../../elements/toggleText/ToggleText";
import styles from "./editorHeader.module.css";
import ExitEditorBtn from "@/components/elements/exitEditorBtn/ExitEditorBtn";
import { useDocContext } from "@/provider/provider";

const EditorHeader = ({ postid }: { postid: string }) => {
  const [doc, setDoc] = useDocContext();
  function handleClick() {
    setDoc({
      ...doc,
      published: !doc.published,
    });
  }

  return (
    <div className={styles.bl_editorTopBtns}>
      <ExitEditorBtn />
      <ToggleSwitch state={doc.published} handleClick={handleClick} />
      <ToggleText
        state={doc.published}
        trueState={"公開する"}
        falseState={"下書き保存"}
      />
      <ReactedTextBtn state={doc.published} postid={postid}>
        <ToggleText
          state={doc.published}
          trueState={"公開する"}
          falseState={"下書き保存"}
        />
      </ReactedTextBtn>
    </div>
  );
};

export default EditorHeader;
