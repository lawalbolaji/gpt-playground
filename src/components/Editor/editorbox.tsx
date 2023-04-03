import style from "../../styles/editor.module.css";
import buttonStyle from "../../styles/buttons.module.css";
import Editor from "./editor";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import RestoreIcon from "@mui/icons-material/Restore";
import React, { SyntheticEvent, useRef } from "react";
import { $createLineBreakNode, $createParagraphNode, $createTextNode, $getRoot, EditorState, LexicalEditor } from "lexical";

const tokenCount = 100; // will be computed somehow later on

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

export default function EditorBox() {
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
            body: JSON.stringify({}),
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
            });
        }
      }
    },
    [updateEditorState]
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
          <button className={`${buttonStyle.btn} ${buttonStyle.btnSmall} ${buttonStyle.btnMinimal}`} tabIndex={0} type="button">
            <span className={style.labelWrap}>
              <span className={style.labelInner}>
                <RestoreIcon sx={{ fontSize: "1.3rem", display: "inline-flex", alignItems: "center" }} />
              </span>
            </span>
          </button>
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
