import NavigationMenu from "../../components/navigation";
import playgroundStyle from "../../styles/playground.module.css";

type PlaygroundProp = {};

export default function Playground(props: PlaygroundProp) {
  return (
    <div className={playgroundStyle.appWrapper}>
      <NavigationMenu />
      <div className={playgroundStyle.centerText}>
        <div>Hello, welcome to the playground</div>
      </div>
    </div>
  );
}
