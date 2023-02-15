import { Checkbox, TextField } from "@mui/material";
import React, { FocusEvent } from "react";

export default function FreeTextWithCheckBox() {
  const [checked, setChecked] = React.useState(false);
  const [focused, setFocused] = React.useState(false);

  const handleChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setChecked(e.currentTarget.checked);
  };

  const setInFocus = (e: FocusEvent<HTMLInputElement>) => {
    setFocused(true);
  };

  const removeFocus = (e: FocusEvent<HTMLInputElement>) => {
    setFocused(false);
  };

  return (
    <div className={`custom-free-text ${focused ? "focused" : undefined}`}>
      <div className="move-check">
        <Checkbox
          checked={checked}
          onChange={handleChange}
          sx={{
            padding: 0,
            // color: "#10a37f",
            borderWidth: "1px",
            "&.Mui-checked": {
              color: "#10a37f",
            },
          }}
        />
      </div>
      <TextField
        sx={{
          height: "32px",
          marginLeft: "32px",
          ".MuiInputBase-root": { height: "100%" },
          ".MuiInputBase-input": { boxSizing: "border-box", height: "100%" },
          fieldset: { borderWidth: 0 },
          ".Mui-focused fieldset": { borderWidth: "0 !important" },
        }}
        onFocus={setInFocus}
        onBlur={removeFocus}
      />
      <style jsx>{`
        .custom-free-text {
          position: relative;
          border: 1px solid rgba(0, 0, 0, 0.23);
          border-radius: 4px;
        }

        .custom-free-text.focused {
          border: 2px solid #10a37f;
        }

        .move-check {
          position: absolute;
          top: 3px;
          left: 4px;
        }
      `}</style>
    </div>
  );
}
