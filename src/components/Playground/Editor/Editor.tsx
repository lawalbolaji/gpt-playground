import React from "react";
import style from "@/styles/editor.module.css";
import { InitialEditorStateType } from "@lexical/react/LexicalComposer";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { VoiceCommandComponent } from "./VoiceCommand";

type EditorProps = {
  error: string | null;
};

export const Editor = (props: EditorProps) => {
  return (
    <div className={style.completionsContainer}>
      <div className={style.completions}>
        <PlainTextPlugin
          contentEditable={<ContentEditable className={style.contentEditableContainer} />}
          placeholder={
            <div className={style.editorPlaceholderRoot}>
              <div>Write a tag line for an ice cream shop</div>
            </div>
          }
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
      </div>
      <VoiceCommandComponent />
    </div>
  );
};