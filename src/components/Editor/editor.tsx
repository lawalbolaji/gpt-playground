import React, { useRef } from "react";
import style from "../../styles/editor.module.css";
import { InitialEditorStateType, LexicalComposer } from "@lexical/react/LexicalComposer";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { EditorState, LexicalEditor } from "lexical";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import VoiceInputComponent from "./voice-input";

const theme = {
  //add themes here
};

/* 
  Editor State JSON example:
  {
  "root": {
    "children": [
      {
        "children": [],
        "direction": null,
        "format": "",
        "indent": 0,
        "type": "paragraph",
        "version": 1
      }
    ],
    "direction": null,
    "format": "",
    "indent": 0,
    "type": "root",
    "version": 1
  }
}
*/

function GPTResponsePlugin(props: {}) {
  const [editor] = useLexicalComposerContext();

  // update editor state here:

  /*
      with jsonstring representing editor state
        const editorState = editor.parseEditorState(editorStateJSONString);
        editor.setEditorState(editorState);
   */

  return null;
}

type EditorProps = {
  editorRef: React.MutableRefObject<LexicalEditor | undefined>;
  editorStateRef: React.MutableRefObject<EditorState | undefined>;
  loadInitEditorState: () => InitialEditorStateType | undefined;
};

export default function Editor(props: EditorProps) {
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
          <GPTResponsePlugin />
        </LexicalComposer>
      </div>
      <VoiceInputComponent />
    </div>
  );
}
