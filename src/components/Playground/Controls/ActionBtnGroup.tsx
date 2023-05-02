import style from "@/styles/shared/buttons.module.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SettingsIcon from "@mui/icons-material/Settings";
import { useState } from "react";

type plgControlButtonProps = {
  isOnMobileScreen: boolean;
  setOpenMobileControls: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenCodeModal: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenSavePresetModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ActionBtnGroup({
  isOnMobileScreen,
  setOpenMobileControls,
  setOpenCodeModal,
  setOpenSavePresetModal,
}: plgControlButtonProps) {
  return (
    <>
      <button
        tabIndex={0}
        className={`${style.btn} ${style.btnSmall} ${style.btnShrink} ${style.plgActionBtn}`}
        onClick={() => setOpenSavePresetModal(true)}
      >
        <span className={style.labelWrapper}>
          <span className={style.labelInner}>Save</span>
        </span>
      </button>
      <button
        tabIndex={0}
        className={`${style.btn} ${style.btnSmall} ${style.btnShrink} ${style.plgActionBtn}`}
        onClick={() => setOpenCodeModal(true)}
      >
        <span className={style.labelWrapper}>
          <span className={style.labelInner}>View Code</span>
        </span>
      </button>
      <button tabIndex={0} className={`${style.btn} ${style.btnSmall} ${style.btnShrink} ${style.plgActionBtn}`}>
        <span className={style.labelWrapper}>
          <span className={style.labelInner}>Share</span>
        </span>
      </button>
      {/* <button tabIndex={0} className={`${style.btn} ${style.btnSmall} ${style.plgActionBtn}`}>
        <span className={`${style.labelWrapper} ${style.horzBtn}`}>
          <MoreHorizIcon sx={{ display: "inline-flex", alignSelf: "center", fontSize: "1rem" }} />
        </span>
      </button> */}

      {isOnMobileScreen ? (
        <button tabIndex={0} className={`${style.btn} ${style.btnSmall} ${style.plgActionBtn}`} onClick={() => setOpenMobileControls(true)}>
          <span className={`${style.labelWrapper} ${style.horzBtn}`}>
            <SettingsIcon sx={{ fontSize: "1rem" }} />
          </span>
        </button>
      ) : (
        <></>
      )}
    </>
  );
}
