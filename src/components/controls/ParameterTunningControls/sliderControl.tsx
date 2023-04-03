import * as React from "react";
import Slider, { SliderProps } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

interface GenericSliderProp extends Partial<SliderProps> {
  val: number;
  defaultVal: number;
  setVal: React.Dispatch<React.SetStateAction<number>>;
}

const StyledSlider = styled(Slider)<SliderProps>(({ theme }) => ({
  color: "#c5c5d2",
  height: "2px",
  paddingBottom: 0,
  "& .MuiSlider-thumb": {
    height: "12px",
    width: "12px",
    border: "1px solid",
    backgroundColor: "white",
    "&:hover, &.Mui-focusVisible": {
      boxShadow: "none",
    },
    "&.Mui-active": {
      boxShadow: "none",
    },
  },
}));

export default function SliderControl({ val, setVal, defaultVal, ...rest }: GenericSliderProp) {
  return (
    <div>
      <StyledSlider
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
