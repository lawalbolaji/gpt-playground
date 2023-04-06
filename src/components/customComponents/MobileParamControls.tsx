import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import ModelTunningControls from "../controls/ParameterTunningControls";
import { modelConfigActions } from "../../reducers/modelConfigReducer";
import { gptConfig } from "../constants";

type MobileParamControlProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  state: gptConfig;
  dispatch: React.Dispatch<modelConfigActions>;
};

export default function MobileParamControls({ open, setOpen, state, dispatch }: MobileParamControlProps) {
  const toggleDrawer = (isOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === "keydown" && ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")) {
      return;
    }

    setOpen(isOpen);
  };

  return (
    <Drawer anchor={"right"} open={open} onClose={toggleDrawer(false)}>
      <ModelTunningControls state={state} dispatch={dispatch} />
    </Drawer>
  );
}
