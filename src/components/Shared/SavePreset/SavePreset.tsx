import React, { useState } from "react";
import styles from "@/styles/shared/savepreset.module.css";
import { Box, Button, ButtonProps, Modal, TextField, Typography, styled } from "@mui/material";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { getPlainTextFromLexicalNodes } from "../../../utils/getPlainTextFromLexicalNodes";
import { CreatePresetPayload, PresetMeta } from "../../../hooks/usePresetPrompts";

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "520px",
  maxWidth: "100%",
  bgcolor: "background.paper",
  transition: "opacity 0.4s",
  background: "#fff",
  transitionTimingFunction: "cubic-bezier(0.2, 0.8, 0.4, 1)",
  borderRadius: "5px",
};

type SaveCodeProps = {
  open: boolean;
  handleClose: (event: {}, reason: string) => void;
  addNewPreset: (createPresetPayload: CreatePresetPayload) => PresetMeta;
  onSuccess: (newPreset: PresetMeta) => void;
  isOnMobileScreen: boolean;
};

// TODO: use variants to handle different button types
const StyledBtn = styled(Button)<ButtonProps>(({ theme }) => {
  return {
    textTransform: "none",
    padding: "6px 12px",
    lineHeight: "20px",
    "&.Mui-disabled": {
      background: "#fff",
    },
  };
});

export default function SavePreset({ open, addNewPreset, onSuccess, isOnMobileScreen, handleClose }: SaveCodeProps) {
  const [editor] = useLexicalComposerContext();
  const [label, setLabel] = useState("");
  const [desription, setDescription] = useState("");

  const handleClickSave = React.useCallback(() => {
    const editorState = editor.getEditorState();
    const plainTextPrompt = getPlainTextFromLexicalNodes(JSON.parse(JSON.stringify(editorState))) || "";
    const newPreset = addNewPreset({
      text: plainTextPrompt,
      label: label,
      group: "My Presets",
    });

    onSuccess(newPreset);
    handleClose({}, "save-btn click");
  }, [addNewPreset, editor, label, onSuccess, handleClose]);

  const handleChangeDesc = (e: React.SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>) => setDescription(e.currentTarget.value);
  const handleChangeLabel = (e: React.SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>) => setLabel(e.currentTarget.value);

  return (
    <Modal open={open} onClose={handleClose} tabIndex={-1} aria-labelledby="code-sample" aria-modal="true" role="dialog">
      <Box sx={isOnMobileScreen ? { ...modalStyle, width: "100%", top: undefined, bottom: "0" } : modalStyle}>
        <div className={styles.scModalHeader}>Save preset</div>
        <div className={styles.scModalHelper}>
          <Typography sx={{ fontSize: "14px" }}>
            This will save the current playground state as a preset which you can access later or share with others.
          </Typography>

          <div className={styles.scInputWrapper}>
            <div className={`${styles.scInputLabel} ${styles.bold}`}>Name</div>
            <TextField fullWidth size="small" value={label} onChange={handleChangeLabel} />
          </div>
          <div className={styles.scInputWrapper}>
            <div className={styles.scInputLabel}>
              <div className={`${styles.labelMain} ${styles.bold}`}>Description</div>
              <div className={styles.labelGuide}>Optional</div>
            </div>
            <TextField fullWidth size="small" value={desription} onChange={handleChangeDesc} />
          </div>
        </div>
        <div className={`${styles.scModalBtns} ${isOnMobileScreen ? `${styles.mobileModalBtns}` : undefined}`}>
          <StyledBtn
            sx={{
              backgroundColor: "#ececf1",
              color: "#353740",
              "&:hover": {
                backgroundColor: "#d9d9e3",
              },
            }}
            onClick={(e: React.SyntheticEvent<HTMLButtonElement>) => handleClose(e, "cancel-btn click")}
          >
            Cancel
          </StyledBtn>
          <StyledBtn
            sx={{
              marginLeft: "8px",
              backgroundColor: "#10a37f",
              color: "#fff",
              "&:hover": { backgroundColor: "#1a7f64" },
            }}
            onClick={handleClickSave}
            disabled={label.length === 0}
          >
            Save
          </StyledBtn>
        </div>
      </Box>
    </Modal>
  );
}
