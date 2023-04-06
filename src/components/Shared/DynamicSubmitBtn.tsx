import { SyntheticEvent } from "react";
import style from "@/styles/editor.module.css";
import buttonStyle from "@/styles/shared/buttons.module.css";

type DynamicBtnProps = {
  loadingState: boolean;
  handleClickSubmit: (e: SyntheticEvent) => void;
};

export const DynamicSubmitButton = ({ loadingState, handleClickSubmit }: DynamicBtnProps) => {
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
};
