import PlgControlButtons from "./controls/plgControlButtons";
import EditorBox from "./Editor/editorbox";
import style from "../styles/playground.module.css";
import { SearchAndFilter } from "./customComponents/SearchAndFilter";
import ParamTunningControls from "./controls/ParameterTunningControls";

type PlaygroundProp = {};

export default function Playground(props: PlaygroundProp) {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.header}>
          <div className={style.plgHeaderTitle}>
            <h4 className={style.pageTitle}>Playground</h4>
          </div>
          <div className={style.plgPresetSelectContainer}>
            <SearchAndFilter
              presets={[
                { id: 1, label: "Grammatical Standard English" },
                { id: 2, label: "Summarize for a Second Grader" },
              ]}
            />
          </div>
          <div className={style.plgHeaderActions}>
            <PlgControlButtons />
          </div>
        </div>
        <div className={style.body}>
          <div className={style.editor}>
            <EditorBox />
          </div>
          <div className={style.rightControls}>
            <ParamTunningControls />
          </div>
        </div>
      </div>
    </div>
  );
}
