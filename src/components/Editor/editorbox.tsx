import style from "../../styles/editor.module.css";
import buttonStyle from "../../styles/buttons.module.css";
import Editor from "./editor";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import RestoreIcon from "@mui/icons-material/Restore";
import React, { SyntheticEvent, useRef } from "react";
import { $createLineBreakNode, $createParagraphNode, $createTextNode, $getRoot, EditorState, LexicalEditor } from "lexical";
import { gptConfig, gptPayload, tokenCount } from "../constants";

function getPlainTextFromLexicalNodes(editorState: any) {
  /*
      assumption here is that editor only supports plain text 
      ...and as a result will have only text nodes with optional line breaks
  */

  let plainTextPrompt = "";
  const containsOnlyLineBreaks = new RegExp(/^(\\n)+/);

  const { children } = editorState.root.children[0];
  children.forEach((data: { text?: string }) => {
    if (data.text !== undefined) {
      plainTextPrompt += data.text;
    } else plainTextPrompt += "\n";
  });

  if (containsOnlyLineBreaks.test(plainTextPrompt) || !plainTextPrompt) return undefined;

  return plainTextPrompt;
}

type EditorBoxProp = {
  isOnMobileScreen: boolean;
  state: gptConfig;
};

export default function EditorBox({ isOnMobileScreen, state: configState }: EditorBoxProp) {
  const editorStateRef = useRef<EditorState>();
  const editorRef = useRef<LexicalEditor>();

  const [loadingGptResponse, setLoadingGptReponse] = React.useState(false);

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

          fetch("/api/completions", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              prompt: plainTextPrompt,
              config: {
                // defaults for now
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
              } catch (error: any) {
                console.error(error);
              }
            })
            .then(({ success: { message: gptResponse } }) => {
              setLoadingGptReponse(false);
              updateEditorState(gptResponse);

              console.log(
                "Thank you for using this service, unfortunately, we are unable to forward your request to openai due to token cost limitations"
              );
              console.log(
                "However, we are working on a service that generates the code you can use to get the exact completion from gpt with your personal access token "
              );
              console.log("In the meantime, here is a copy of your model configuration");
              console.log({ configState });
            });
        }
      }
    },
    [updateEditorState, configState]
  );

  return (
    <>
      <div className={style.editorBody}>
        <Editor editorStateRef={editorStateRef} loadInitEditorState={loadInitEditorState} editorRef={editorRef} />
      </div>
      <div className={style.editorFooter}>
        <div className={style.footerLeft}>
          <DynamicSubmitButton loadingState={loadingGptResponse} handleClickSubmit={handleClickSubmit} />
          <button className={`${buttonStyle.btn} ${buttonStyle.btnSmall} ${buttonStyle.btnDisabled}`} tabIndex={0} type="button">
            <span className={style.labelWrap}>
              <span className={style.labelInner}>
                <RotateLeftIcon sx={{ fontSize: "1.3rem", display: "inline-flex", alignItems: "center" }} />
              </span>
            </span>
          </button>
          <button className={`${buttonStyle.btn} ${buttonStyle.btnSmall} ${buttonStyle.btnDisabled}`} tabIndex={0} type="button">
            <span className={style.labelWrap}>
              <span className={style.labelInner}>
                <RotateRightIcon sx={{ fontSize: "1.3rem", display: "inline-flex", alignItems: "center" }} />
              </span>
            </span>
          </button>
          {isOnMobileScreen ? (
            <></>
          ) : (
            <button className={`${buttonStyle.btn} ${buttonStyle.btnSmall} ${buttonStyle.btnMinimal}`} tabIndex={0} type="button">
              <span className={style.labelWrap}>
                <span className={style.labelInner}>
                  <RestoreIcon sx={{ fontSize: "1.3rem", display: "inline-flex", alignItems: "center" }} />
                </span>
              </span>
            </button>
          )}
        </div>
        <div className={style.footerRight}>
          <div className={style.tokenCounter}>
            <div>{tokenCount}</div>
          </div>
        </div>
      </div>
    </>
  );
}

function DynamicSubmitButton({
  loadingState,
  handleClickSubmit,
}: {
  loadingState: boolean;
  handleClickSubmit: (e: SyntheticEvent) => void;
}) {
  return (
    <button
      className={`${buttonStyle.btn} ${buttonStyle.btnSmall} ${loadingState ? undefined : buttonStyle.bgPrimary} ${style.submitBtn} ${
        loadingState ? buttonStyle.btnDisabled : undefined
      }`}
      tabIndex={0}
      type="button"
      onClick={handleClickSubmit}
    >
      <span className={style.labelWrap}>
        {loadingState ? <span className={style.labelInner}>Cancel</span> : <span className={style.labelInner}>Submit</span>}
      </span>
    </button>
  );
}
