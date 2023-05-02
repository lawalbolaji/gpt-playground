import { Button, Snackbar, SnackbarProps, styled } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import ClearIcon from "@mui/icons-material/Clear";

type CustomSnackbarProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  message: string;
};

const StyledSnackbar = styled(Snackbar)<SnackbarProps>(({ theme }) => ({
  ".MuiPaper-root": { minWidth: 0, background: "#47b881" },
}));

export default function CustomSnackbar({ open, setOpen, message }: CustomSnackbarProps) {
  return (
    <StyledSnackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={open}
      onClose={() => setOpen(false)}
      action={
        <Button color="inherit" size="small" onClick={() => setOpen(false)} sx={{ minWidth: 0 }}>
          <ClearIcon sx={{ fontSize: "1rem" }} />
        </Button>
      }
      autoHideDuration={3000}
      message={message}
      sx={{ "MuiPaper-root": { minWidth: 0 } }}
    />
  );
}
