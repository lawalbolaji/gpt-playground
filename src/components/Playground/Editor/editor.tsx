import React from "react";
import style from "@/styles/editor.module.css";
import { InitialEditorStateType, LexicalComposer } from "@lexical/react/LexicalComposer";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { EditorState, LexicalEditor } from "lexical";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { VoiceCommandComponent } from "./VoiceCommand";

const theme = {
  //add themes here
};

type EditorProps = {
  editorRef: React.MutableRefObject<LexicalEditor | undefined>;
  editorStateRef: React.MutableRefObject<EditorState | undefined>;
  loadInitEditorState: () => InitialEditorStateType | undefined;
};

export const Editor = (props: EditorProps) => {
  const { editorStateRef, loadInitEditorState, editorRef } = props;

  const handleEditorError = React.useCallback((error: Error, editor: LexicalEditor) => {
    console.error({ error, editor });
  }, []);

  const loadInitConfig = React.useCallback(
    () => ({
      namespace: "Gpt-plg-editor",
      theme,
      onError: handleEditorError,
      editorState: loadInitEditorState(),
    }),
    [handleEditorError, loadInitEditorState]
  );

  const handleEditorChange = React.useCallback(
    (editorState: EditorState, editor: LexicalEditor, tags: Set<string>) => {
      editorStateRef.current = editorState;
      editorRef.current = editor;
    },
    [editorStateRef, editorRef]
  );

  return (
    <div className={style.completionsContainer}>
      <div className={style.completions}>
        <LexicalComposer initialConfig={loadInitConfig()}>
          <PlainTextPlugin
            contentEditable={<ContentEditable className={style.contentEditableContainer} />}
            placeholder={
              <div className={style.editorPlaceholderRoot}>
                <div>Write a tag line for an ice cream shop</div>
              </div>
            }
            ErrorBoundary={LexicalErrorBoundary}
          />
          <OnChangePlugin onChange={handleEditorChange} />
          <HistoryPlugin />
        </LexicalComposer>
      </div>
      <VoiceCommandComponent />
    </div>
  );
}
