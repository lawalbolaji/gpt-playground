import PlgControlButtons from "./controls/plgControlButtons";
import EditorBox from "./Editor/editorbox";
import style from "../styles/playground.module.css";
import { SearchAndFilter } from "./customComponents/SearchAndFilter";
import ParamTunningControls from "./controls/ParameterTunningControls";
import React from "react";
import MobileParamControls from "./customComponents/MobileParamControls";

type PlaygroundProp = {
  isOnMobileScreen: boolean;
};

export default function Playground({ isOnMobileScreen }: PlaygroundProp) {
  const [open, setOpen] = React.useState(false);

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
            <EditorBox isOnMobileScreen={isOnMobileScreen} />
          </div>
          {isOnMobileScreen ? (
            <MobileParamControls open={open} setOpen={setOpen} />
          ) : (
            <div className={style.rightControls}>
              <ParamTunningControls />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
