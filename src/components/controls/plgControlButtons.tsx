import style from "../../styles/buttons.module.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SettingsIcon from "@mui/icons-material/Settings";

type plgControlButtonProps = {
  isOnMobileScreen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function PlgControlButtons({ isOnMobileScreen, setOpen }: plgControlButtonProps) {
  return (
    <>
      <button tabIndex={0} className={`${style.btn} ${style.btnSmall} plgControlBtn`}>
        <span className={style.labelWrapper}>
          <span className={style.labelInner}>Save</span>
        </span>
      </button>
      <button tabIndex={0} className={`${style.btn} ${style.btnSmall} plgControlBtn`}>
        <span className={style.labelWrapper}>
          <span className={style.labelInner}>View Code</span>
        </span>
      </button>
      <button tabIndex={0} className={`${style.btn} ${style.btnSmall} plgControlBtn`}>
        <span className={style.labelWrapper}>
          <span className={style.labelInner}>Share</span>
        </span>
      </button>
      <button tabIndex={0} className={`${style.btn} ${style.btnSmall} plgControlBtn`}>
        <span className={`${style.labelWrapper} horz-btn`}>
          <MoreHorizIcon sx={{ display: "inline-flex", alignSelf: "center", fontSize: "1rem" }} />
        </span>
      </button>
      {isOnMobileScreen ? (
        <button tabIndex={0} className={`${style.btn} ${style.btnSmall} plgControlBtn`} onClick={() => setOpen(true)}>
          <span className={`${style.labelWrapper} horz-btn`}>
            <SettingsIcon sx={{ fontSize: "1rem" }} />
          </span>
        </button>
      ) : (
        <></>
      )}

      <style jsx>
        {`
          .plgControlBtn {
            background-color: #ececf1;
            color: #353740;
          }

          .horz-btn {
            display: flex;
            align-self: center;
          }
        `}
      </style>
    </>
  );
}
