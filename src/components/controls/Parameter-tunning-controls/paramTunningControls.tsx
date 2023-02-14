import React, { MouseEvent } from "react";
import style from "../../../styles/controls.module.css";
import SingleSelectGrid, { singleSelectOptions } from "../../custom-input-fields/singleSelectGrid";
import FreeTextWithCheckBox from "../../custom-input-fields/FreeTextWithCheckBox";
import SliderControl from "./sliderControl";

const defaultTemp = 0.7; // TODO: use a reducer
const defaultMaxLength = 256;
const defaultTopP = 1;
const defaultFreqPenalty = 0;
const defaultPresPenalty = 0;
const defaultBestOfCount = 1;

// this helps me toggle the border around each control value independently of the others
enum controlInputNames {
  temp = "temp",
  maxLength = "maxLength",
  freqPenalty = "freqPenalty",
  presPenalty = "presPenalty",
  topP = "topP",
  bestOfCount = "bestOfCount",
}

export default function ParamTunningControls() {
  // right panel controls
  const [temp, setTemp] = React.useState(defaultTemp);
  const [maxLength, setMaxLength] = React.useState(defaultMaxLength);
  const [topP, setTopP] = React.useState(defaultTopP);
  const [freqPenalty, setFreqPenalty] = React.useState(defaultFreqPenalty);
  const [presPenalty, setPresPenalty] = React.useState(defaultPresPenalty);
  const [bestOfCount, setBestOfCount] = React.useState(defaultBestOfCount);

  // to support dynamically adding and removing classes for toggling border around parameter value inputs
  const [showInputBorder, setShowInputBorder] = React.useState<controlInputNames | undefined>(undefined);

  // insert mode selection
  const [selectedOption, setSelectedOption] = React.useState<singleSelectOptions>(singleSelectOptions.free_from);

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
            <div>{/* <SelectContainer></SelectContainer> */}</div>
          </div>
          <div className="temperature-control">
            <div
              className={`${style.controlLabel} ${showInputBorder === controlInputNames.temp ? "showInputBorder" : undefined}`}
              onMouseEnter={(e: MouseEvent<HTMLDivElement>) => setShowInputBorder(controlInputNames.temp)}
              onMouseLeave={(e: MouseEvent<HTMLDivElement>) => setShowInputBorder(undefined)}
            >
              <span className="labelInner">Temperature</span>
              <input type="text" value={temp} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTemp(+e.target.value)} />
            </div>
            <SliderControl val={temp} setVal={setTemp} defaultVal={defaultTemp} min={0} max={1} step={0.01} />
          </div>
          <div>
            <div
              className={`${style.controlLabel} ${showInputBorder === controlInputNames.maxLength ? "showInputBorder" : undefined}`}
              onMouseEnter={(e: MouseEvent<HTMLDivElement>) => setShowInputBorder(controlInputNames.maxLength)}
              onMouseLeave={(e: MouseEvent<HTMLDivElement>) => setShowInputBorder(undefined)}
            >
              <span className="labelInner">Maximum Length</span>
              <input type="text" value={maxLength} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMaxLength(+e.target.value)} />
            </div>
            <SliderControl val={maxLength} setVal={setMaxLength} defaultVal={defaultMaxLength} min={1} max={4000} />
          </div>
          <div>
            <div className={style.controlLabel}>Stop Sequences</div>
            <div>
              <FreeTextWithCheckBox />
            </div>
          </div>
          <div>
            <div
              className={`${style.controlLabel} ${showInputBorder === controlInputNames.topP ? "showInputBorder" : undefined}`}
              onMouseEnter={(e: MouseEvent<HTMLDivElement>) => setShowInputBorder(controlInputNames.topP)}
              onMouseLeave={(e: MouseEvent<HTMLDivElement>) => setShowInputBorder(undefined)}
            >
              <span className="labelInner">Top P</span>
              <input type="text" value={topP} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTopP(+e.target.value)} />
            </div>
            <SliderControl val={topP} setVal={setTopP} defaultVal={defaultTopP} min={0} max={1} step={0.01} />
          </div>
          <div>
            <div
              className={`${style.controlLabel} ${showInputBorder === controlInputNames.freqPenalty ? "showInputBorder" : undefined}`}
              onMouseEnter={(e: MouseEvent<HTMLDivElement>) => setShowInputBorder(controlInputNames.freqPenalty)}
              onMouseLeave={(e: MouseEvent<HTMLDivElement>) => setShowInputBorder(undefined)}
            >
              <span className="labelInner">Frequency Penalty</span>
              <input
                type="text"
                value={freqPenalty}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFreqPenalty(+e.target.value)}
              />
            </div>
            <SliderControl val={freqPenalty} setVal={setFreqPenalty} defaultVal={defaultFreqPenalty} min={0} max={2} step={0.01} />
          </div>
          <div>
            <div
              className={`${style.controlLabel} ${showInputBorder === controlInputNames.presPenalty ? "showInputBorder" : undefined}`}
              onMouseEnter={(e: MouseEvent<HTMLDivElement>) => setShowInputBorder(controlInputNames.presPenalty)}
              onMouseLeave={(e: MouseEvent<HTMLDivElement>) => setShowInputBorder(undefined)}
            >
              <span className="labelInner">Presence Penalty</span>
              <input
                type="text"
                value={presPenalty}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPresPenalty(+e.target.value)}
              />
            </div>
            <SliderControl val={presPenalty} setVal={setPresPenalty} defaultVal={defaultPresPenalty} min={0} max={2} step={0.01} />
          </div>
          <div>
            <div
              className={`${style.controlLabel} ${showInputBorder === controlInputNames.bestOfCount ? "showInputBorder" : undefined}`}
              onMouseEnter={(e: MouseEvent<HTMLDivElement>) => setShowInputBorder(controlInputNames.bestOfCount)}
              onMouseLeave={(e: MouseEvent<HTMLDivElement>) => setShowInputBorder(undefined)}
            >
              <span className="labelInner">Best of</span>
              <input
                type="text"
                value={bestOfCount}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBestOfCount(+e.target.value)}
              />
            </div>
            <SliderControl val={bestOfCount} setVal={setBestOfCount} defaultVal={defaultBestOfCount} min={1} max={20} />
          </div>
          <div>
            <div className={style.controlLabel}>Inject Start Text</div>
            <div>
              <FreeTextWithCheckBox />
            </div>
          </div>
          <div>
            <div className={style.controlLabel}>Inject Restart Text</div>
            <div>
              <FreeTextWithCheckBox />
            </div>
          </div>
          <div>
            <div className={style.controlLabel}>Show Probabilities</div>
            <div>{/* <SelectContainer></SelectContainer> */}</div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .labelInner {
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
            flex: 1 0 auto;
          }

          .labelInner + input {
            flex: 0 1 auto;
            width: 46px;
            padding: 4px 5px 3px;
            text-align: right;
            line-height: 15px;
            font-variant: tabular-nums;
            font-size: 14px;
            background-clip: padding-box;
            background-color: #fff;
            border: 1px solid transparent;
            border-radius: 3px;
            box-sizing: border-box;
            color: var(--gray-800);
            display: inline-block;
            font-family: var(--sans-serif);
            font-weight: 400;
            margin: 0;
            transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
            vertical-align: top;
          }

          .showInputBorder > input {
            border-color: var(--gray-300);
          }
        `}
      </style>
    </div>
  );
}
