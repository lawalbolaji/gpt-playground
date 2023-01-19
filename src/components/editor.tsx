import style from "../styles/editor.module.css";
import TextCompletions from "./textcompletions";

export default function Editor() {
  return (
    <>
      <div className={style.editorBody}>
        <TextCompletions />
      </div>
      <div className={style.editorFooter}>Command and Control</div>
    </>
  );
}
