import React from "react";
import style from "@/styles/editor.module.css";
import { Editor } from "./Editor";
import { Token } from "./Token";
import { ActionBtnGroup } from "./ActionBtnGroup";
import { LexicalEditor } from "lexical";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

type EditorContainerProps = {
  isOnMobileScreen: boolean;
  handleClickSubmit: (editor: LexicalEditor) => (e: React.SyntheticEvent<Element, Event>) => void;
  loadingGptResponse: boolean;
  gptCompletionError: string | null;
};

export const EditorContainer = ({ isOnMobileScreen, handleClickSubmit, loadingGptResponse, gptCompletionError }: EditorContainerProps) => {
  const [editor] = useLexicalComposerContext();
  return (
    <>
      <div className={style.editorBody}>
        <Editor error={gptCompletionError} />
      </div>

      {gptCompletionError ? (
        <div className={style.editorContainerErrors}>
          <p>{gptCompletionError}</p>
        </div>
      ) : (
        <></>
      )}

      <div className={style.editorFooter}>
        <ActionBtnGroup
          isOnMobileScreen={isOnMobileScreen}
          handleClickSubmit={handleClickSubmit(editor)}
          loadingGptResponse={loadingGptResponse}
        />
        <Token />
      </div>
    </>
  );
};
