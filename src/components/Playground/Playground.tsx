import React from "react";
import style from "@/styles/playground.module.css";
import ActionBtnGroup from "./Controls/ActionBtnGroup";
import { SearchAndFilter } from "../Shared/SearchAndFilter";
import { modelConfigReducer, getInitConfigState } from "../../reducers/modelconfigs/modelConfigReducer";
import { MobileControlsDrawer, ModelTunningControls } from "./Controls/ModelTunningControls";
import { EditorContainer } from "./Editor";

type PlaygroundProp = {
  isOnMobileScreen: boolean;
};

export const Playground = ({ isOnMobileScreen }: PlaygroundProp) => {
  const [openMobileControls, setOpenMobileControls] = React.useState(false);
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
            <ActionBtnGroup isOnMobileScreen={isOnMobileScreen} setOpenMobileControls={setOpenMobileControls} />
          </div>
        </div>
        <div className={style.body}>
          <div className={style.editor}>
            <EditorContainer isOnMobileScreen={isOnMobileScreen} state={state} />
          </div>
          {isOnMobileScreen ? (
            <MobileControlsDrawer open={openMobileControls} setOpen={setOpenMobileControls} state={state} dispatch={dispatch} />
          ) : (
            <div className={style.rightControls}>
              <ModelTunningControls state={state} dispatch={dispatch} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
