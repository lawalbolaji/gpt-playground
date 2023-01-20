import Editor from "../../components/Editor/editor";
import NavigationMenu from "../../components/navigation";
import PlgControlButtons from "../../components/controls/plgControlButtons";
import RightControls from "../../components/controls/Parameter-tunning-controls/paramTunningControls";
import style from "../../styles/playground.module.css";
import { MenuItem } from "@mui/material";
import ModeSelectContainer from "../../components/controls/modeSelectContainer";

type PlaygroundProp = {};

export default function Playground(props: PlaygroundProp) {
  return (
    <div className={style.appWrapper}>
      <div className={style.navMenu}>
        <NavigationMenu />
      </div>
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.header}>
            <div className={style.plgHeaderTitle}>
              <h4 className={style.pageTitle}>Playground</h4>
            </div>
            <div className={style.plgPresetSelectContainer}>
              <ModeSelectContainer
                modes={[
                  { id: 1, val: "Grammatical Standard English" },
                  { id: 2, val: "Text to command" },
                ]}
              />
            </div>
            <div className={style.plgHeaderActions}>
              <PlgControlButtons />
            </div>
          </div>
          <div className={style.body}>
            <div className={style.editor}>
              <Editor />
            </div>
            <div className={style.rightControls}>
              <RightControls />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
