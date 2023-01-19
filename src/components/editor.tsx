import style from "../styles/editor.module.css";
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
            className={`${style.btnNormal} ${style.btnSmall} ${style.btnPrimary} ${style.btnPrimary} ${style.btnFilled} ${style.submitBtn}`}
            tabIndex={0}
            type="button"
          >
            <span className={style.labelWrap}>
              <span className={style.labelInner}>Submit</span>
            </span>
          </button>
          <button
            className={`${style.btnNormal} ${style.btnSmall} ${style.btnDisabled}`}
            tabIndex={0}
            type="button"
          >
            <span className={style.labelWrap}>
              <span className={style.labelInner}>
                <span className={`material-symbols-outlined ${style.extIcon}`}>
                  rotate_left
                </span>
              </span>
            </span>
          </button>
          <button className={`${style.btnNormal} ${style.btnSmall} ${style.btnDisabled}`} tabIndex={0} type="button">
            <span className={style.labelWrap}>
              <span className={style.labelInner}>
                <span className={`material-symbols-outlined ${style.extIcon}`}>
                  rotate_right
                </span>
              </span>
            </span>
          </button>
          <button
            className={`${style.btnNormal} ${style.btnSmall} ${style.btnMinimal}`}
            tabIndex={0}
            type="button"
          >
            <span className={style.labelWrap}>
              <span className={style.labelInner}>
                <span className={`material-symbols-outlined ${style.extIcon}`}>
                  history
                </span>
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
