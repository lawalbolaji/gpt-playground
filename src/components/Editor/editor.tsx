import style from "../../styles/editor.module.css";
import buttonStyle from "../../styles/buttons.module.css";
import TextCompletions from "./textcompletions";

const tokenCount = 100; // will be computed somehow later on

export default function Editor() {
  return (
    <>
      <div className={style.editorBody}>
        <TextCompletions />
      </div>
      <div className={style.editorFooter}>
        <div className={style.footerLeft}>
          <button
            className={`${buttonStyle.btn} ${buttonStyle.btnSmall} ${buttonStyle.bgPrimary} ${style.submitBtn}`}
            tabIndex={0}
            type="button"
          >
            <span className={style.labelWrap}>
              <span className={style.labelInner}>Submit</span>
            </span>
          </button>
          <button className={`${buttonStyle.btn} ${buttonStyle.btnSmall} ${buttonStyle.btnDisabled}`} tabIndex={0} type="button">
            <span className={style.labelWrap}>
              <span className={style.labelInner}>
                <span className={`material-symbols-outlined ${style.extIcon}`}>rotate_left</span>
              </span>
            </span>
          </button>
          <button className={`${buttonStyle.btn} ${buttonStyle.btnSmall} ${buttonStyle.btnDisabled}`} tabIndex={0} type="button">
            <span className={style.labelWrap}>
              <span className={style.labelInner}>
                <span className={`material-symbols-outlined ${style.extIcon}`}>rotate_right</span>
              </span>
            </span>
          </button>
          <button className={`${buttonStyle.btn} ${buttonStyle.btnSmall} ${buttonStyle.btnMinimal}`} tabIndex={0} type="button">
            <span className={style.labelWrap}>
              <span className={style.labelInner}>
                <span className={`material-symbols-outlined ${style.extIcon}`}>history</span>
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
