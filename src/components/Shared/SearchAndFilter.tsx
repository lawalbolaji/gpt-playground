import styled from "@emotion/styled";
import { Autocomplete, autocompleteClasses, TextField, inputLabelClasses, TextFieldProps, AutocompleteProps } from "@mui/material";
import React from "react";

type PopperComponentProps = {
  anchorEl?: any;
  disablePortal?: boolean;
  open: boolean;
};

// TODO: add a label to the dropdowns e.g Examples
const PopperComponent = ({ disablePortal, anchorEl, open, ...other }: PopperComponentProps) => {
  return open ? <StyledAutocompletePopper {...other} /> : null;
};

type SearchAndFilterPropsType = {
  presets: PresetType[];
};

type PresetType = {
  id: number;
  label: string;
};

export const SearchAndFilter = ({ presets }: SearchAndFilterPropsType) => {
  const [filled, setFilled] = React.useState(false);

  return (
    <StyledAutoComplete
      size="small"
      disablePortal
      openOnFocus
      options={presets}
      noOptionsText="No presets"
      renderInput={(params) => <StyledInput {...params} InputLabelProps={{ filled }} label="Load a preset..." />}
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

export const StyledInput = styled(TextField)<TextFieldProps>(({ theme }) => ({
  [`.${autocompleteClasses.input}`]: {
    height: "16px",
    fontSize: 13,
  },
}));

export const StyledAutoComplete = styled(Autocomplete)<AutocompleteProps<any, false, false, false>>(({ theme }) => ({
  width: "100%",
  [`.${inputLabelClasses.root}`]: {
    fontSize: 13,
  },
  [`.${inputLabelClasses.root}:not(.${inputLabelClasses.focused})`]: {
    transform: "translate(10px, 8px) scale(1)",
  },
  [`.${inputLabelClasses.root}.MuiFormLabel-filled`]: {
    transform: "translate(14px, -9px) scale(0.9)",
  },
  [`.${inputLabelClasses.root}.${inputLabelClasses.focused}`]: {
    transform: "translate(14px, -9px) scale(0.9)",
  },
}));
