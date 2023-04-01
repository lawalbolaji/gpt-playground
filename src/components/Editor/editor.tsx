import React from "react";
import style from "../../styles/editor.module.css";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { LexicalEditor } from "lexical";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import VoiceInputComponent from "./voice-input";

const theme = {
  // Theme styling goes here
};

function onError(error: Error, editor: LexicalEditor) {
  console.error({ error, editor });
}

export default function Editor(props: {}) {
  const initialConfig = {
    namespace: "MyEditor",
    theme,
    onError,
  };

  return (
    <div className={style.completionsContainer}>
      <div className={style.completions}>
        <LexicalComposer initialConfig={initialConfig}>
          <PlainTextPlugin
            contentEditable={<ContentEditable className={style.contentEditableContainer} />}
            placeholder={
              <div className={style.editorPlaceholderRoot}>
                <div>Write a tag line for an ice cream shop</div>
              </div>
            }
            ErrorBoundary={LexicalErrorBoundary}
          />
        </LexicalComposer>
      </div>
      <VoiceInputComponent />
    </div>
  );
}
