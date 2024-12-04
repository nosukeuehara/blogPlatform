"use client";
import React, { useState } from "react";
import ToggleSwitch from "../../elements/toggleSwitch/TogglePublishSwitch";
import ReactedTextBtn from "../../elements/reactedTextBtn/ReactedTextBtn";
import ToggleText from "../../elements/toggleText/ToggleText";
import styles from "./editorHeader.module.css";
import SaveReturnBtn from "@/components/elements/saveReturnBtn/SaveReturnBtn";

const EditorHeader = () => {
  const [state, setStatus] = useState<boolean>(false);
  function handleClick() {
    setStatus(!state);
  }

  return (
    <div className={styles.btnSet}>
      <SaveReturnBtn />
      <ToggleSwitch state={state} handleClick={handleClick} />
      <ToggleText
        state={state}
        trueState={"公開する"}
        falseState={"下書き保存"}
      />
      <ReactedTextBtn state={state}>
        <ToggleText
          state={state}
          trueState={"公開する"}
          falseState={"下書き保存"}
        />
      </ReactedTextBtn>
    </div>
  );
};

export default EditorHeader;
