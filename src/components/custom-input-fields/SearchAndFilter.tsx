import styled from "@emotion/styled";
import {
  Autocomplete,
  autocompleteClasses,
  AutocompleteProps,
  TextField,
  inputLabelClasses,
  TextFieldProps,
  Popper,
  Box,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import React from "react";

type SearchAndFilterPropsType = {
  presets: PresetType[];
};

type PresetType = {
  id: number;
  label: string;
};

type PopperComponentProps = {
  anchorEl?: any;
  disablePortal?: boolean;
  open: boolean;
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

export const StyledAutoComplete = styled(Autocomplete)<AutocompleteProps<PresetType, true, false, false>>(({ theme }) => ({
  width: 300,
  [`.${inputLabelClasses.root}`]: {
    fontSize: 13,
    transform: "translate(14px, 7px) scale(1)",
  },
  [`.${inputLabelClasses.root}.${inputLabelClasses.focused}`]: {
    color: "#556cd6",
    transform: "translate(14px, -9px) scale(0.75)",
  },
}));

const StyledInput = styled(TextField)<TextFieldProps>(({ theme }) => ({
  [`.${autocompleteClasses.input}`]: {
    height: "16px",
    fontSize: 13,
  },
}));

// TODO: add a label to the dropdowns e.g Examples
const PopperComponent = ({ disablePortal, anchorEl, open, ...other }: PopperComponentProps) => {
  return open ? <StyledAutocompletePopper {...other} /> : null;
};

export const SearchAndFilter = ({ presets }: SearchAndFilterPropsType) => {
  return (
    <StyledAutoComplete
      size="small"
      disablePortal
      openOnFocus
      options={presets}
      noOptionsText="No presets"
      renderInput={(params) => <StyledInput {...params} label="Load a preset..." />}
      PopperComponent={PopperComponent}
    />
  );
};
