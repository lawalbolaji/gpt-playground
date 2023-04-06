import React from "react";
import style from "../../../styles/controls.module.css";
import CustomSlider from "./CustomSlider";
import { gptConfig, modelConfigActions } from ".";

type ControlWithSliderProps = {
  controlValue: number;
  dispatch: React.Dispatch<modelConfigActions>;
  dispatchType: keyof gptConfig;
  label: string;
  defaultValue: number;
  min: number;
  max: number;
  step?: number;
};

export default function ControlWithSlider({
  controlValue,
  dispatch,
  label,
  defaultValue,
  step,
  dispatchType,
  max,
  min,
}: ControlWithSliderProps) {
  const [showInputBorder, setShowInputBorder] = React.useState(false);

  return (
    <div>
      <div
        className={`${style.controlLabel} ${showInputBorder ? "showInputBorder" : undefined} ${style.forSlider}`}
        onMouseEnter={() => setShowInputBorder(true)}
        onMouseLeave={() => setShowInputBorder(false)}
      >
        <span className="labelInner">{label}</span>
        <input
          type="text"
          value={controlValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch({ type: dispatchType, data: +e.target.value })}
        />
      </div>
      <CustomSlider
        val={controlValue}
        setVal={(val: unknown) => {
          dispatch({ type: dispatchType, data: val as number });
        }}
        defaultVal={defaultValue}
        min={min}
        max={max}
        step={step}
      />
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
