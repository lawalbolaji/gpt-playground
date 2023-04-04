import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import ParamTunningControls from "../controls/ParameterTunningControls";

type MobileParamControlProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileParamControls({ open, setOpen }: MobileParamControlProps) {
  const toggleDrawer = (isOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === "keydown" && ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")) {
      return;
    }

    setOpen(isOpen);
  };

  return (
    <Drawer anchor={"right"} open={open} onClose={toggleDrawer(false)}>
      <ParamTunningControls />
    </Drawer>
  );
}
