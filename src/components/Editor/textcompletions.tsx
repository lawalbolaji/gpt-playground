import style from "../../styles/editor.module.css";

export default function TextCompletions() {
  return (
    <div className={style.completionsContainer}>
      <div className={style.completions}>
        <div className={style.editorContainer}>

          {/* will hold placeholder text when no preset mode selection has been made */}
          <div className={style.draftEditorRoot}></div>
          <div className={style.draftEditorContainer}>
            <div
              className={style.editorContent}
              contentEditable={true}
              role="textbox"
              spellCheck={false}
              suppressContentEditableWarning={true}
            >
              <div data-contents={true}>
                <div
                  data-block={true}
                  data-editor="random_id"
                  data-offset-key="random_id"
                >
                  <div data-offset-key="random_id">
                    <span data-offset-key="random_id">
                      <span data-text={true}>
                        Hello, welcome to the playground
                      </span>
                    </span>
                  </div>
                </div>
                <div
                  data-block={true}
                  data-editor="random_id"
                  data-offset-key="random_id"
                >
                  <div data-offset-key="random_id">
                    <span data-offset-key="random_id">
                      <span data-text={true}>
                        <br />
                      </span>
                    </span>
                  </div>
                </div>
                <div
                  data-block={true}
                  data-editor="random_id"
                  data-offset-key="random_id"
                >
                  <div data-offset-key="random_id">
                    <span data-offset-key="random_id">
                      <span data-text={true}>Another Block</span>
                    </span>
                  </div>
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
        `}
      </style>
    </div>
  );
}
