import styled from "@emotion/styled";
import { MenuItem, Select, menuClasses, SelectProps, SelectChangeEvent } from "@mui/material";
import React from "react";

type SelectProbabilityOptionProps = {
  options: validProbOption[];
};

type validProbOption = {
  id: number;
  label: string;
};

const StyledSelect = styled(Select)<SelectProps>(({ theme }) => ({
  // TODO: add theming support, v2
  height: "36px",
  color: "#6e6e80",
  fontSize: 14,
}));

export const RegularSelectComponent = (props: SelectProps) => {
  return <StyledSelect {...props} />;
};

const menuprops = {
  sx: {
    ".MuiMenu-paper": {
      boxShadow: "none",
      margin: "10px 0 0",
    },
    ".MuiMenu-list": {
      padding: 0,
      border: "1px solid #ececf1",
      borderRadius: "5px",
    },
    ".MuiMenu-list li": {
      color: "#6e6e80",
      fontSize: 13,
    },
  },
};

export const SelectProbabilityOption = ({ options }: SelectProbabilityOptionProps) => {
  const [selectedOption, setSelectedOption] = React.useState(1);

  const handleMenuChange = (e: SelectChangeEvent<unknown>) => {
    setSelectedOption(e.target.value as number);
  };

  return (
    <RegularSelectComponent fullWidth value={selectedOption} MenuProps={menuprops} onChange={handleMenuChange}>
      {options.map((option) => (
        <MenuItem key={option.id} value={option.id}>
          {option.label}
        </MenuItem>
      ))}
    </RegularSelectComponent>
  );
};
