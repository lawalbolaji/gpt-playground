import style from "@/styles/editor.module.css";
import { DynamicSubmitButton } from "../../Shared/DynamicSubmitBtn";
import buttonStyle from "@/styles/shared/buttons.module.css";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import RestoreIcon from "@mui/icons-material/Restore";

type ActionBtnGroupProp = {
  loadingGptResponse: boolean;
  handleClickSubmit: (e: React.SyntheticEvent<Element, Event>) => void;
  isOnMobileScreen: boolean;
};

export const ActionBtnGroup = ({ loadingGptResponse, handleClickSubmit, isOnMobileScreen }: ActionBtnGroupProp) => {
  return (
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
  );
};
