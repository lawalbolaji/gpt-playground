import React from "react";
import style from "@/styles/shared/misc.module.css";
import { Checkbox, CheckboxProps, TextField, TextFieldProps, styled } from "@mui/material";

const StyledCheckBox = styled(Checkbox)<CheckboxProps>(({ theme }) => ({
  padding: 0,
  borderWidth: "1px",
  "&.Mui-checked": {
    color: "#10a37f",
  },
}));

const StyledTextField = styled(TextField)<TextFieldProps>(({ theme }) => ({
  height: "32px",
  marginLeft: "32px",
  ".MuiInputBase-root": { height: "100%" },
  ".MuiInputBase-input": { boxSizing: "border-box", height: "100%", paddingLeft: 0 },
  fieldset: { borderWidth: 0 },
  ".Mui-focused fieldset": { borderWidth: "0 !important" },
}));

export default function FreeTextWithCheckBox() {
  const [checked, setChecked] = React.useState(false);
  const [focused, setFocused] = React.useState(false);

  return (
    <div className={`${style.customFreeText} ${focused ? style.focused : undefined}`}>
      <div className={style.checkboxPos}>
        <StyledCheckBox checked={checked} onChange={(e: React.SyntheticEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)} />
      </div>
      <StyledTextField onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} />
    </div>
  );
}
