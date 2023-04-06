import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { modelConfigActions } from "../../../../reducers/modelconfigs/modelConfigReducer";
import { gptConfig } from "../../../../constants/constants";
import { ModelTunningControls } from ".";

type MobileParamControlProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  state: gptConfig;
  dispatch: React.Dispatch<modelConfigActions>;
};

export const MobileControlsDrawer = ({ open, setOpen, state, dispatch }: MobileParamControlProps) => {
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
};
