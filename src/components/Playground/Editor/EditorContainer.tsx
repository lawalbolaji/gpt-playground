import React from "react";
import style from "@/styles/editor.module.css";
import { gptConfig } from "../../../constants/constants";
import { useEditorState } from "../../../hooks/useEditorState";
import { Editor } from "./Editor";
import { Token } from "./Token";
import { ActionBtnGroup } from "./ActionBtnGroup";

type EditorContainerProps = {
  isOnMobileScreen: boolean;
  state: gptConfig;
};

export const EditorContainer = ({ isOnMobileScreen, state: configState }: EditorContainerProps) => {
  const { editorRef, editorStateRef, handleClickSubmit, loadingGptResponse, loadInitEditorState, gptCompletionError } = useEditorState({
    configState,
  });

  return (
    <>
      <div className={style.editorBody}>
        <Editor
          editorStateRef={editorStateRef}
          loadInitEditorState={loadInitEditorState}
          editorRef={editorRef}
          error={gptCompletionError}
        />
      </div>

      {gptCompletionError ? (
        <div className={style.editorContainerErrors}>
          <p>{gptCompletionError}</p>
        </div>
      ) : (
        <></>
      )}

      <div className={style.editorFooter}>
        <ActionBtnGroup isOnMobileScreen={isOnMobileScreen} handleClickSubmit={handleClickSubmit} loadingGptResponse={loadingGptResponse} />
        <Token />
      </div>
    </>
  );
};
