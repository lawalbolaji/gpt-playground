import React from "react";
import styled from "@emotion/styled";
import { Autocomplete, autocompleteClasses, TextField, inputLabelClasses, TextFieldProps, AutocompleteProps, Box } from "@mui/material";
import { PresetMeta, PresetPayload } from "../../hooks/usePresetPrompts";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $createParagraphNode, $createTextNode, $getRoot, $setSelection, CLEAR_HISTORY_COMMAND } from "lexical";

type PopperComponentProps = {
  anchorEl?: any;
  disablePortal?: boolean;
  open: boolean;
};

const PopperComponent = ({ disablePortal, anchorEl, open, ...other }: PopperComponentProps) => {
  return open ? <StyledAutocompletePopper {...other} /> : null;
};

type SearchAndFilterPropsType = {
  presetsMeta: Array<PresetMeta>;
  currentPreset: "" | PresetMeta;
  setCurrentPreset: React.Dispatch<React.SetStateAction<"" | PresetMeta>>;
  getPresetById: (presetId: string) => PresetPayload | undefined;
};

export const SearchAndFilter = ({ presetsMeta, currentPreset, setCurrentPreset, getPresetById }: SearchAndFilterPropsType) => {
  const [editor] = useLexicalComposerContext();
  const loadPresetOnScreen = (presetId: string) => {
    const preset = getPresetById(presetId);
    if (preset !== undefined) {
      editor.update(() => {
        const root = $getRoot();
        root.clear();

        const paragraphNode = $createParagraphNode();
        const textNode = $createTextNode(preset.text);

        paragraphNode.append(textNode);
        root.append(paragraphNode);

        editor.dispatchCommand(CLEAR_HISTORY_COMMAND, undefined);
        $setSelection(null);
      });

      editor.focus();
    }
  };
  return (
    <StyledAutoComplete
      size="small"
      disablePortal
      openOnFocus
      options={presetsMeta}
      isOptionEqualToValue={(option, val) => !!val && option.id === val.id}
      noOptionsText="No presets"
      renderInput={(params) => <StyledInput {...params} InputLabelProps={{ filled: !!currentPreset }} label="Load a preset..." />}
      PopperComponent={PopperComponent}
      popupIcon={<KeyboardArrowDownIcon />}
      onChange={(_: React.SyntheticEvent, val: unknown) => {
        setCurrentPreset(val as PresetMeta);
        if (!!val) loadPresetOnScreen((val as PresetMeta).id);
      }}
      value={currentPreset}
      groupBy={(option) => (option as PresetMeta).group}
      renderGroup={(params) => (
        <Box key={params.key}>
          <Box
            sx={{
              fontSize: ".8em",
              padding: "1em .7em .5em",
              color: "var(--gray-600)",
              borderBottom: "1px solid #ececf1",
              textTransform: "uppercase",
              cursor: "default",
            }}
          >
            {params.group}
          </Box>
          <Box sx={{ textTransform: "capitalize" }}>{params.children}</Box>
        </Box>
      )}
    />
  );
};

const StyledAutocompletePopper = styled("div")(({ theme }) => ({
  [`& .${autocompleteClasses.paper}`]: {
    boxShadow: "20px 20px 40px rgba(0, 0, 0, 0.1)",
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
