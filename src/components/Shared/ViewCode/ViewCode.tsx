import React, { Dispatch, SetStateAction, useState } from "react";
import styles from "@/styles/shared/viewcode.module.css";
import { gptConfig } from "../../../constants/constants";
import { Box, Modal, Typography } from "@mui/material";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { getPlainTextFromLexicalNodes } from "../../../utils/getPlainTextFromLexicalNodes";
import { generateCodeTemplate, supportedLanguages } from "../../../utils/generateCodeTemplate";
import { CodeEditor, Header, Body } from "./CodeEditor";
import Link from "next/link";

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "640px",
  bgcolor: "background.paper",
  transition: "opacity 0.4s",
  background: "#fff",
  transitionTimingFunction: "cubic-bezier(0.2, 0.8, 0.4, 1)",
  borderRadius: "5px",
};

type ViewCodeProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  configState: gptConfig;
  isOnMobileScreen: boolean;
  setOpenCopyCodeSnackbar: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ViewCode({ open, setOpen, configState, setOpenCopyCodeSnackbar, isOnMobileScreen }: ViewCodeProps) {
  const [editor] = useLexicalComposerContext();
  const [selectedLanguage, setSelectedLanguage] = useState<supportedLanguages>("node.js");

  // TODO: figure out what is mutating config state continuosly
  const formatedCode = React.useMemo(() => {
    const editorState = editor.getEditorState();
    const plainTextPrompt = getPlainTextFromLexicalNodes(JSON.parse(JSON.stringify(editorState))) || "";

    return generateCodeTemplate(selectedLanguage, configState, plainTextPrompt);
  }, [configState, selectedLanguage, editor]);

  const handleClickCopy = React.useCallback(() => {
    navigator.clipboard.writeText(formatedCode).then(() => {
      setOpenCopyCodeSnackbar(true);
    });
  }, [formatedCode, setOpenCopyCodeSnackbar]);

  return (
    <Modal open={open} onClose={() => setOpen(false)} tabIndex={-1} aria-labelledby="code-sample" aria-modal="true" role="dialog">
      <Box sx={isOnMobileScreen ? { ...modalStyle, width: "100%", height: "100%", overflow: "auto" } : modalStyle}>
        <div className={styles.modalHeader}>View Code</div>
        <div className={styles.modalBody}>
          <Typography sx={{ marginBottom: "1em", fontSize: "14px" }}>
            You can use the following code to start integrating your current prompt and settings into your application.
          </Typography>
          <CodeEditor>
            <Header selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} handleClickCopy={handleClickCopy} />
            <Body formatedCode={formatedCode} />
          </CodeEditor>
          <Typography className={styles.instructions}>
            Your API Key can be found{" "}
            <Link
              href="https://platform.openai.com/account/api-keys"
              target="_blank"
              style={{ color: "#10a37f", cursor: "pointer", textDecoration: "none" }}
            >
              here
            </Link>
            . You should use environment variables or a secret management tool to expose your key to your applications.
          </Typography>
        </div>
        <div className={`${styles.modalFooter} ${isOnMobileScreen ? `${styles.mobileModalFooter}` : undefined}`}>
          <button onClick={() => setOpen(false)}>Close</button>
        </div>
      </Box>
    </Modal>
  );
}
