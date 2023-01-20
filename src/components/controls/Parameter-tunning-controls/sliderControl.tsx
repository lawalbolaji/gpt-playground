import * as React from "react";
import Slider, { SliderProps } from "@mui/material/Slider";
import { alpha, styled } from "@mui/material/styles";

const StyledMuiSlider = styled(Slider)<SliderProps>(({ theme }) => ({
  color: "#6e6e80",
  "& .MuiSlider-thumb": {
    height: "15px",
    width: "15px",
    border: "2px solid",
    backgroundColor: "white",
    "&:hover, &.Mui-focusVisible": {
      // boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`,
      boxShadow: "none",
    },
    "&.Mui-active": {
      // boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.success.main, 0.16)}`,
      boxShadow: "none",
    },
  },
}));

interface GenericSliderProp extends Partial<SliderProps> {
  val: number;
  defaultVal: number;
  setVal: React.Dispatch<React.SetStateAction<number>>;
}

export default function SliderControl({ val, setVal, defaultVal, ...rest }: GenericSliderProp) {
  return (
    <div>
      <StyledMuiSlider
        defaultValue={defaultVal}
        value={val}
        onChange={(e: any) => {
          setVal(e.target.value!!);
        }}
        {...rest}
      />
    </div>
  );
}
