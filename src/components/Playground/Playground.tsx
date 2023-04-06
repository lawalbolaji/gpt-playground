import PlgControlButtons from "../controls/plgControlButtons";
import EditorBox from "../Editor/editorbox";
import style from "../../styles/playground.module.css";
import { SearchAndFilter } from "../customComponents/SearchAndFilter";
import ModelTunningControls from "../controls/ParameterTunningControls";
import React from "react";
import MobileParamControls from "../customComponents/MobileParamControls";
import { modelConfigReducer, getInitConfigState } from "../../reducers/modelConfigReducer";

type PlaygroundProp = {
  isOnMobileScreen: boolean;
};

export default function Playground({ isOnMobileScreen }: PlaygroundProp) {
  const [open, setOpen] = React.useState(false);
  const [state, dispatch] = React.useReducer(modelConfigReducer, getInitConfigState());

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
            <PlgControlButtons isOnMobileScreen={isOnMobileScreen} setOpen={setOpen} />
          </div>
        </div>
        <div className={style.body}>
          <div className={style.editor}>
            <EditorBox isOnMobileScreen={isOnMobileScreen} state={state} />
          </div>
          {isOnMobileScreen ? (
            <MobileParamControls open={open} setOpen={setOpen} state={state} dispatch={dispatch} />
          ) : (
            <div className={style.rightControls}>
              <ModelTunningControls state={state} dispatch={dispatch} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
