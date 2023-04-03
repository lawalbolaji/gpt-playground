import React from "react";
import CompleteModeIcon from "@mui/icons-material/TextSnippetOutlined";
import InsertModeIcon from "@mui/icons-material/FileDownloadOutlined";
import EditModeIcon from "@mui/icons-material/AutoFixHighOutlined";

export enum singleSelectOptions {
  free_from = "free_from",
  insert = "insert",
  edit = "edit",
}

type SingleSelectGridProp = {
  selectedOption: singleSelectOptions;
  setSelectedOption: React.Dispatch<React.SetStateAction<singleSelectOptions>>;
};

export default function SingleSelectGrid({ selectedOption, setSelectedOption }: SingleSelectGridProp) {
  return (
    <div className="singleSelectContainer">
      <input
        type="radio"
        id="-radio-freeform"
        checked={selectedOption === singleSelectOptions.free_from}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          e.target.checked && setSelectedOption(singleSelectOptions.free_from);
        }}
      />
      <label htmlFor="-radio-freeform">
        <div className="google-icon-wrap">
          <CompleteModeIcon />
        </div>
      </label>

      <input
        type="radio"
        id="-radio-insert"
        checked={selectedOption === singleSelectOptions.insert}
        onChange={(e: any) => {
          e.target.checked && setSelectedOption(singleSelectOptions.insert);
        }}
      />
      <label htmlFor="-radio-insert">
        <div className="google-icon-wrap">
          <InsertModeIcon />
        </div>
      </label>

      <input
        type="radio"
        id="-radio-edit"
        checked={selectedOption === singleSelectOptions.edit}
        onChange={(e: any) => {
          e.target.checked && setSelectedOption(singleSelectOptions.edit);
        }}
      />
      <label htmlFor="-radio-edit">
        <div className="google-icon-wrap">
          <EditModeIcon />
        </div>
      </label>

      <style jsx>{`
        .singleSelectContainer {
          background-color: var(--gray-50);
          border-radius: 3px;
          display: flex;
          position: relative;
        }

        .singleSelectContainer input {
          clip: rect(0, 0, 0, 0);
          border: 0;
          height: 1px;
          left: 0;
          overflow: hidden;
          position: absolute !important;
          top: 0;
          width: 1px;
        }

        .singleSelectContainer input:checked + label {
          background-color: var(--gray-100);
          border-radius: 3px;
          color: var(--gray-800);
        }

        .singleSelectContainer label {
          flex: 1 1;
          line-height: 0;
          padding: 6px 0;
          cursor: pointer;
          font-size: 12px;
          font-weight: 700;
          text-align: center;
          text-transform: uppercase;
          transition: all 0.1s ease-in-out;
        }
      `}</style>
    </div>
  );
}
