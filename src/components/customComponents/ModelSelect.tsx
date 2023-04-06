import styled from "@emotion/styled";
import { autocompleteClasses } from "@mui/material";
import React from "react";
import { StyledAutoComplete, StyledInput } from "./SearchAndFilter";
import { validModelOptions } from "../controls/ParameterTunningControls";

type modelOptions = {
  title: "string";
  models: model[];
};

export type model = validModelOptions<"complete"> | validModelOptions<"chat">;

type PopperComponentProps = {
  anchorEl?: any;
  disablePortal?: boolean;
  open: boolean;
};

// TODO: add a label to the dropdowns e.g Examples
const PopperComponent = ({ disablePortal, anchorEl, open, ...other }: PopperComponentProps) => {
  return open ? <StyledAutocompletePopper {...other} /> : null;
};

type ModelSelectProp = {
  selectedModel: model | null;
  handleModelUpdate: (model: model) => void;
  supprotedModelOptions: readonly validModelOptions<"complete">[] | readonly validModelOptions<"chat">[];
};

export const ModelSelect = ({ selectedModel, handleModelUpdate, supprotedModelOptions }: ModelSelectProp) => {
  return (
    <StyledAutoComplete
      size="small"
      disablePortal
      openOnFocus
      options={supprotedModelOptions}
      noOptionsText="No presets"
      renderInput={(params) => <StyledInput {...params} InputLabelProps={{ filled: selectedModel !== null }} label="Choose model..." />}
      PopperComponent={PopperComponent}
      value={selectedModel}
      onChange={(_: React.SyntheticEvent, val: unknown) => {
        handleModelUpdate(val as model);
      }}
    />
  );
};

const StyledAutocompletePopper = styled("div")(({ theme }) => ({
  [`& .${autocompleteClasses.paper}`]: {
    boxShadow: "none",
    margin: "10px 0 0",
    color: "inherit",
    fontSize: 13,
  },
  [`& .${autocompleteClasses.listbox}`]: {
    padding: 0,
    border: "1px solid #ececf1",
    borderRadius: "5px",
    [`& .${autocompleteClasses.option}`]: {
      minHeight: "auto",
      alignItems: "flex-start",
      padding: 8,
    },
    [`& .${autocompleteClasses.option}:not(:last-child)`]: {
      borderBottom: "1px solid #ececf1",
    },
  },
}));
