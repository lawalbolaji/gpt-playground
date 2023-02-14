import React from "react";
import style from "../../styles/editor.module.css";

// const dataFeed = ["Hello, welcome to the playground", "", "Another block"];
const dataFeed: string[] = [""];

export default function TextCompletions() {
  // const [editorContent, setEditorContent] = React.useState<string>("");

  // const createEditorInjectorNode = () => {
  //   return { __html: editorContent };
  // };

  return (
    <div className={style.completionsContainer}>
      <div className={style.completions}>
        <div className={style.editorContainer}>
          <div className="editorWrapper">
            <div className="editorRoot">
              {dataFeed.length === 0 ? (
                <div className={style.editorPlaceholderRoot}>
                  <div className="editorPlaceholderInner">
                    <p>Write a tag line for an ice cream shop</p>
                  </div>
                </div>
              ) : (
                <></>
              )}
              <div className={style.draftEditorContainer}>
                <div
                  className={style.editorContent}
                  contentEditable={true}
                  role="textbox"
                  spellCheck={false}
                  suppressContentEditableWarning={true}
                  // dangerouslySetInnerHTML={editorContent.length > 0 ? createEditorInjectorNode() : undefined}
                  // onBlur={(e) => {
                  //   console.log(e.currentTarget.innerHTML);
                  //   setEditorContent(e.currentTarget.innerHTML);
                  // }}
                >
                  {/* <div data-contents="true">
                    <div data-block={true} data-editor="{random_id}" data-offset-key="{data_block_id}">
                      <div data-offset-key="{text_block_id}">
                        <span data-offset-key="{subtext_id}">
                          <br data-text="true" />
                        </span>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="voiceInput">
        <span className="labelWrap">
          <span className="labelInner">
            <span className="material-symbols-outlined">mic</span>
          </span>
        </span>
      </button>
      <style jsx>
        {`
          .voiceInput {
            position: absolute;
            right: 11px;
            top: 11px;
            z-index: 1;
            color: #10a37f;
            background-color: transparent;
            text-decoration: none;
            border: none;
            border-radius: 3px;
            box-sizing: border-box;
            cursor: pointer;
            display: inline-flex;
            font-weight: 400;
            justify-content: center;
            transition: box-shadow 0.3s, background-color 0.3s, color 0.3s;
            user-select: none;
          }

          .labelWrap {
            align-items: center;
            justify-content: center;
            opacity: 1;
            display: flex;
            width: 100%;
          }

          .labelInner {
            display: flex;
            line-height: 1;
          }

          .editorWrapper {
            box-sizing: border-box;
            height: 100%;
          }

          .editorRoot {
            position: relative;
            height: inherit;
          }
        `}
      </style>
    </div>
  );
}
