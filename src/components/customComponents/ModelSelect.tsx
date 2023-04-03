import styled from "@emotion/styled";
import { autocompleteClasses } from "@mui/material";
import React from "react";
import { StyledAutoComplete, StyledInput } from "./SearchAndFilter";

type modelOptions = {
  title: "string";
  models: model[];
};

type model = {
  id: number;
  label: string;
};

const supprotedModelOptions = [
  {
    title: "GPT-3",
    models: [
      { id: 1, label: "text-davinci-003" },
      { id: 2, label: "text-curie-001" },
    ],
  },
  {
    title: "Codex",
    models: [
      { id: 3, label: "code-davinci-002" },
      { id: 4, label: "code-cushman-001" },
    ],
  },
];

type PopperComponentProps = {
  anchorEl?: any;
  disablePortal?: boolean;
  open: boolean;
};

// TODO: add a label to the dropdowns e.g Examples
const PopperComponent = ({ disablePortal, anchorEl, open, ...other }: PopperComponentProps) => {
  return open ? <StyledAutocompletePopper {...other} /> : null;
};

export const ModelSelect = () => {
  const [filled, setFilled] = React.useState(false);

  return (
    <StyledAutoComplete
      size="small"
      disablePortal
      openOnFocus
      options={[...supprotedModelOptions[0].models, ...supprotedModelOptions[1].models]}
      noOptionsText="No presets"
      renderInput={(params) => <StyledInput {...params} InputLabelProps={{ filled }} label="Choose model..." />}
      PopperComponent={PopperComponent}
      onChange={(event: React.SyntheticEvent, val: unknown) => {
        setFilled(!!val);
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
