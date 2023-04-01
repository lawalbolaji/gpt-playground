import style from "../../styles/editor.module.css";
import buttonStyle from "../../styles/buttons.module.css";
import Editor from "./editor";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import RestoreIcon from "@mui/icons-material/Restore";
import React, { SyntheticEvent } from "react";

const tokenCount = 100; // will be computed somehow later on

function simulateGPTResponse(prompt: string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${prompt}\n\nYour request \n\nhas been processed`);
    }, 2_000);
  });
}

export default function EditorBox() {
  const handleClickSubmit = (e: SyntheticEvent) => {};

  return (
    <>
      <div className={style.editorBody}>
        <Editor />
      </div>
      <div className={style.editorFooter}>
        <div className={style.footerLeft}>
          <button
            className={`${buttonStyle.btn} ${buttonStyle.btnSmall} ${buttonStyle.bgPrimary} ${style.submitBtn}`}
            tabIndex={0}
            type="button"
            onClick={handleClickSubmit}
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
