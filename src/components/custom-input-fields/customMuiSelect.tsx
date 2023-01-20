import Select, { SelectProps } from "@mui/material/Select";
import { styled } from "@mui/material";

export const CustomMuiSelect = styled(Select)<SelectProps>(
  ({ theme }) => ({
    // top level customizations go here
    color: "#6e6e80",
    "& ul": {
      backgroundColor: "white",
    },
    "& li": {
      color: "black",
    },
  })
);
