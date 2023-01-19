import NavigationMenu from "../../components/navigation";
import PlgControlButtons from "../../components/plgControlButtons";
import SelectContainer from "../../components/selectContainer";
import playgroundStyle from "../../styles/playground.module.css";

type PlaygroundProp = {};

export default function Playground(props: PlaygroundProp) {
  return (
    <div className={playgroundStyle.appWrapper}>
      <NavigationMenu />
      <div className={playgroundStyle.wrapper}>
        <div className={playgroundStyle.container}>
          <div className={playgroundStyle.header}>
            <div className={playgroundStyle.plgHeaderTitle}>
              <h4 className={playgroundStyle.pageTitle}>Playground</h4>
            </div>
            <div className={playgroundStyle.plgPresetSelectContainer}>
              <SelectContainer />
            </div>
            <div className={playgroundStyle.plgHeaderActions}>
              <PlgControlButtons />
            </div>
          </div>
          <div className={playgroundStyle.body}>
            Hello, welcome to the playground
          </div>
        </div>
      </div>
    </div>
  );
}
