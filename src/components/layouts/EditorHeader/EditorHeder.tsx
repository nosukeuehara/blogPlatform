"use client";
import React, { useState } from "react";
import ToggleSwitch from "../../elements/toggleSwitch/TogglePublishSwitch";
import ReactedTextBtn from "../../elements/reactedTextBtn/ReactedTextBtn";
import ToggleText from "../../elements/toggleText/ToggleText";
import styles from "./editorHeader.module.css";

const EditorHeder = () => {
  const [state, setStatus] = useState<boolean>(false);
  function handleClick() {
    setStatus(!state);
  }
  return (
    <div className={styles.btnSet}>
      <ToggleSwitch state={state} handleClick={handleClick} />
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

export default EditorHeder;
