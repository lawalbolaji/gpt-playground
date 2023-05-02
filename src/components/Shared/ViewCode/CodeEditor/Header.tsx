import { Dispatch, SetStateAction } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { SuportedLanguages, supportedLanguages } from "../../../../utils/generateCodeTemplate";
import styles from "@/styles/shared/viewcode.module.css";
import React from "react";

type ChooseLanguageProps = {
  selectedLanguage: supportedLanguages;
  setSelectedLanguage: Dispatch<SetStateAction<supportedLanguages>>;
};
function ChooseLanguage({ selectedLanguage, setSelectedLanguage }: ChooseLanguageProps) {
  const handleChangeLanguage = React.useCallback(
    (e: React.SyntheticEvent<HTMLSelectElement>) => setSelectedLanguage(e.currentTarget.value as supportedLanguages),
    [setSelectedLanguage]
  );
  return (
    <div className={styles.codeSampleSelectWrap}>
      <div className={styles.codeSampleSelectVal}>{selectedLanguage}</div>
      <select className={styles.codeSampleSelect} value={selectedLanguage} onChange={handleChangeLanguage}>
        {SuportedLanguages.map((language, idx) => (
          <option key={idx} value={language}>
            {language}
          </option>
        ))}
      </select>
      <KeyboardArrowDownIcon sx={{ fontSize: "1em", marginleft: "2px" }} />
    </div>
  );
}

type CopyCodeProps = {
  handleClickCopy: () => void;
};
function CopyCode({ handleClickCopy }: CopyCodeProps) {
  return (
    <div className={styles.codeSampleCopy}>
      <button onClick={handleClickCopy}>
        <span className={styles.btnLabelWrap}>
          <span className={styles.btnNode}>
            <ContentCopyIcon sx={{ fontSize: "1em" }} />
          </span>
          <span className={styles.btnLabelInner}>Copy &zwj;</span>
        </span>
      </button>
    </div>
  );
}

type HeaderProps = {
  selectedLanguage: supportedLanguages;
  setSelectedLanguage: Dispatch<SetStateAction<supportedLanguages>>;
  handleClickCopy: () => void;
};
export default function Header({ selectedLanguage, setSelectedLanguage, handleClickCopy }: HeaderProps) {
  return (
    <div className={styles.codeSampleHeader}>
      <div className={styles.codeSampleTitle}>POST /v1/completions</div>
      <ChooseLanguage selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} />
      <CopyCode handleClickCopy={handleClickCopy} />
    </div>
  );
}
