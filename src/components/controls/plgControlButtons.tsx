import style from "../../styles/buttons.module.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export default function PlgControlButtons(props: {}) {
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
