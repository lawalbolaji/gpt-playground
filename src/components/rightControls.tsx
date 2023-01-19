import style from "../styles/controls.module.css";
import SelectContainer from "./selectContainer";
import SingleSelectGrid from "./singleSelectGrid";
import Slider from "./Slider";
import TextInput from "./TextInput";

export default function RightControls() {
  return (
    <div className={style.rightControlsContainer}>
      <div className={style.parameterPanel}>
        <div className={style.controlGrid}>
          <div>
            <div className={style.controlLabel}>Mode</div>
            <SingleSelectGrid />
          </div>
          <div>
            <div className={style.controlLabel}>Model</div>
            <div>
              <SelectContainer />
            </div>
          </div>
          <div>
            <div className={style.controlLabel}>Temperature</div>
            <div>
              <Slider />
            </div>
          </div>
          <div>
            <div className={style.controlLabel}>Maximum Length</div>
            <div>
              <TextInput />
            </div>
          </div>
          <div>
            <div className={style.controlLabel}>Stop Sequences</div>
            <div>
              <Slider />
            </div>
          </div>
          <div>
            <div className={style.controlLabel}>Top P</div>
            <div>
              <Slider />
            </div>
          </div>
          <div>
            <div className={style.controlLabel}>Frequency Penalty</div>
            <div>
              <Slider />
            </div>
          </div>
          <div>
            <div className={style.controlLabel}>Presence Penalty</div>
            <div>
              <Slider />
            </div>
          </div>
          <div>
            <div className={style.controlLabel}>Best of</div>
            <div>
              <Slider />
            </div>
          </div>
          <div>
            <div className={style.controlLabel}>Inject Start Text</div>
            <div>
              <TextInput />
            </div>
          </div>
          <div>
            <div className={style.controlLabel}>Inject Restart Text</div>
            <div>
              <TextInput />
            </div>
          </div>
          <div>
            <div className={style.controlLabel}>Show Probabilities</div>
            <div>
              <SelectContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
