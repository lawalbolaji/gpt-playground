import style from "../../styles/editor.module.css";
import buttonStyle from "../../styles/buttons.module.css";
import TextCompletions from "./textcompletions";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import RestoreIcon from "@mui/icons-material/Restore";

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
