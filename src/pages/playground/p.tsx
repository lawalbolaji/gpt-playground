import Editor from "../../components/editor";
import NavigationMenu from "../../components/navigation";
import PlgControlButtons from "../../components/plgControlButtons";
import RightControls from "../../components/rightControls";
import SelectContainer from "../../components/selectContainer";
import style from "../../styles/playground.module.css";

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
              <SelectContainer placeholderText="Select Mode" />
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
