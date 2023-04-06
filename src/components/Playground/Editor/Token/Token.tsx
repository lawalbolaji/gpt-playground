import style from "@/styles/editor.module.css";
import { tokenCount } from "../../../../constants/constants";

export const Token = () => {
  return (
    <div className={style.footerRight}>
      <div className={style.tokenCounter}>
        <div>{tokenCount}</div>
      </div>
    </div>
  );
};
