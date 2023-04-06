import React from "react";
import style from "../../../styles/controls.module.css";
import FreeTextWithCheckBox from "../../customComponents/FreeTextWithCheckBox";
import { ModelSelect, model } from "../../customComponents/ModelSelect";
import StopSequenceTags from "../../customComponents/MultiSelect";
import { SelectProbabilityOption } from "../../customComponents/RegularSelect";
import SingleSelectGrid from "../../customComponents/SingleSelectGrid";
import ControlWithSlider from "./ControlWithSlider";
import { supportedModes, completionModels, gptConfig } from "../../constants";
import { TEMPERATURE, MAX_TOKENS, TOP_P, FREQUENCY_PENALTY, PRESENCE_PENALTY, BEST_OF } from "../../constants";
import { modelConfigActions } from "../../../reducers/modelConfigReducer";

type ModelTunningControlProps = {
  state: gptConfig;
  dispatch: React.Dispatch<modelConfigActions>;
};

export default function ModelTunningControls({ state, dispatch }: ModelTunningControlProps) {
  // TODO: lift editor mode selection out of this component
  const [selectedOption, setSelectedOption] = React.useState<supportedModes>("edit");

  const handleSelecetedTags = React.useCallback(
    (items: string[]) => {
      dispatch({ type: "stop", data: items });
    },
    [dispatch]
  );

  return (
    <div className={style.rightControlsContainer}>
      <div className={style.parameterPanel}>
        <div className={style.controlGrid}>
          <div>
            <div className={style.controlLabel}>Mode</div>
            <SingleSelectGrid selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
          </div>
          <div>
            <div className={style.controlLabel}>Model</div>
            <div>
              <ModelSelect
                selectedModel={state.model}
                handleModelUpdate={(val: model) => {
                  dispatch({ type: "model", data: val });
                }}
                supprotedModelOptions={completionModels}
              />
            </div>
          </div>
          <ControlWithSlider
            {...{
              controlValue: state.temperature,
              dispatch,
              dispatchType: "temperature",
              label: "Temperature",
              defaultValue: TEMPERATURE,
              min: 0,
              max: 1,
              step: 0.01,
            }}
          />
          <ControlWithSlider
            {...{
              controlValue: state.max_tokens,
              dispatch,
              dispatchType: "max_tokens",
              label: "Maximum length",
              defaultValue: MAX_TOKENS,
              min: 1,
              max: 4000,
            }}
          />
          <div>
            <div className={style.controlLabel}>Stop sequences</div>
            <div>
              <StopSequenceTags handleSelecetedTags={handleSelecetedTags} tags={state.stop} />
            </div>
          </div>

          <ControlWithSlider
            {...{
              controlValue: state.top_p,
              dispatch,
              dispatchType: "top_p",
              label: "Top P",
              defaultValue: TOP_P,
              min: 0,
              max: 1,
              step: 0.01,
            }}
          />

          <ControlWithSlider
            {...{
              controlValue: state.frequency_penalty,
              dispatch,
              dispatchType: "frequency_penalty",
              label: "Frequency penalty",
              defaultValue: FREQUENCY_PENALTY,
              min: 0,
              max: 2,
              step: 0.01,
            }}
          />

          <ControlWithSlider
            {...{
              controlValue: state.presence_penalty,
              dispatch,
              dispatchType: "presence_penalty",
              label: "Presence penalty",
              defaultValue: PRESENCE_PENALTY,
              min: 0,
              max: 2,
              step: 0.01,
            }}
          />

          <ControlWithSlider
            {...{
              controlValue: state.best_of,
              dispatch,
              dispatchType: "best_of",
              label: "Best of",
              defaultValue: BEST_OF,
              min: 1,
              max: 20,
            }}
          />

          <div>
            <div className={style.controlLabel}>Inject start text</div>
            <div>
              <FreeTextWithCheckBox />
            </div>
          </div>
          <div>
            <div className={style.controlLabel}>Inject restart text</div>
            <div>
              <FreeTextWithCheckBox />
            </div>
          </div>
          {/* TODO: verify and then scrap this control, doesn't seem to affect the model behavior */}
          <div>
            <div className={style.controlLabel}>Show probabilities</div>
            <div>
              {" "}
              <SelectProbabilityOption
                options={[
                  { id: 1, label: "Off" },
                  { id: 2, label: "Most likely" },
                  { id: 3, label: "Least likely" },
                  { id: 4, label: "Full spectrum" },
                ]}
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
