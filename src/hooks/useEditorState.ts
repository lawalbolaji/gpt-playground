import { EditorState, LexicalEditor, $getRoot, $createParagraphNode, $createLineBreakNode, $createTextNode } from "lexical";
import React, { useRef, SyntheticEvent } from "react";
import { gptConfig, gptPayload } from "../constants/constants";
import { getPlainTextFromLexicalNodes } from "../utils/getPlainTextFromLexicalNodes";

type hookprop = {
  configState: gptConfig;
};

export const useEditorState = ({ configState }: hookprop) => {
  const editorStateRef = useRef<EditorState>();
  const editorRef = useRef<LexicalEditor>();

  const [loadingGptResponse, setLoadingGptReponse] = React.useState(false);
  const [gptCompletionError, setGptCompletionError] = React.useState<string | null>(null);

  // TODO: Add support for saving user sessions and loading state from server
  const loadInitEditorState = React.useCallback(() => undefined, []);

  const updateEditorState = React.useCallback((gptResponse: unknown) => {
    editorRef.current?.update(() => {
      const rootNode = $getRoot();
      const paragraphNode = $createParagraphNode();
      const lineBreakNode = $createLineBreakNode();
      const textNode = $createTextNode(gptResponse as string);

      paragraphNode.append(lineBreakNode);
      paragraphNode.append(textNode);
      rootNode.append(paragraphNode);
    });
  }, []);

  const handleClickSubmit = React.useCallback(
    (e: SyntheticEvent) => {
      if (editorStateRef.current !== undefined) {
        const plainTextPrompt = getPlainTextFromLexicalNodes(JSON.parse(JSON.stringify(editorStateRef.current)));
        if (plainTextPrompt !== undefined) {
          setLoadingGptReponse(true);
          setGptCompletionError(null);

          fetch("/api/completions", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              prompt: plainTextPrompt,
              config: {
                ...configState,
              },
            } satisfies gptPayload),
          })
            .then((res) => {
              try {
                if (!res.ok) {
                  throw new Error(`HTTP error! status: ${res.status}`);
                }

                return res.json();
              } catch (error) {
                res.json().then(({ error: { message } }) => {
                  setGptCompletionError(message);
                });
              }
            })
            .then((response: { data: { completion: string } }) => {
              setLoadingGptReponse(false);

              if (!!response) {
                updateEditorState(response.data.completion);
              }
            });
        }
      }
    },
    [updateEditorState, configState]
  );

  return { handleClickSubmit, updateEditorState, editorRef, editorStateRef, loadInitEditorState, loadingGptResponse, gptCompletionError };
};
