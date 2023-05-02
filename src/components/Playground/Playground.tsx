import React, { useState } from "react";
import style from "@/styles/playground.module.css";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { EditorContainer } from "./Editor";
import { SearchAndFilter } from "../Shared/SearchAndFilter";
import { modelConfigReducer, getInitConfigState } from "../../reducers/modelconfigs/modelConfigReducer";
import { MobileControlsDrawer, ModelTunningControls } from "./Controls/ModelTunningControls";
import { useEditorState } from "../../hooks/useEditorState";
import { PresetMeta, usePresetPrompts } from "../../hooks/usePresetPrompts";
import ActionBtnGroup from "./Controls/ActionBtnGroup";
import ViewCode from "../Shared/ViewCode/ViewCode";
import SavePreset from "../Shared/SavePreset/SavePreset";
import CustomSnackbar from "../Shared/CustomSnackbar";

type PlaygroundProp = {
  isOnMobileScreen: boolean;
};

export const Playground = ({ isOnMobileScreen }: PlaygroundProp) => {
  const [currentPreset, setCurrentPreset] = useState<PresetMeta | "">("");
  const [openViewCodeModal, setOpenViewCodeModal] = useState(false);
  const [openSavePresetModal, setOpenSavePresetModal] = useState(false);
  const [openSaveCodeSnackbar, setOpenSaveCodeSnackbar] = useState(false);
  const [openCopyCodeSnackbar, setOpenCopyCodeSnackbar] = useState(false);
  const [openMobileControls, setOpenMobileControls] = React.useState(false);

  const [state, dispatch] = React.useReducer(modelConfigReducer, getInitConfigState());
  const { getPresetById, presetsMeta, addNewPreset } = usePresetPrompts();
  const { handleClickSubmit, loadingGptResponse, loadInitConfig, gptCompletionError } = useEditorState({ configState: state });

  return (
    <LexicalComposer initialConfig={loadInitConfig()}>
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.header}>
            <div className={style.plgHeaderTitle}>
              <h4 className={style.pageTitle}>Playground</h4>
            </div>
            <div className={style.plgPresetSelectContainer}>
              <SearchAndFilter
                presetsMeta={presetsMeta}
                currentPreset={currentPreset}
                setCurrentPreset={setCurrentPreset}
                getPresetById={getPresetById}
              />
            </div>
            <div className={style.plgHeaderActions}>
              <ActionBtnGroup
                isOnMobileScreen={isOnMobileScreen}
                setOpenMobileControls={setOpenMobileControls}
                setOpenCodeModal={setOpenViewCodeModal}
                setOpenSavePresetModal={setOpenSavePresetModal}
              />
            </div>
          </div>

          {openViewCodeModal ? (
            <ViewCode
              open={openViewCodeModal}
              setOpen={setOpenViewCodeModal}
              configState={state}
              setOpenCopyCodeSnackbar={setOpenCopyCodeSnackbar}
              isOnMobileScreen={isOnMobileScreen}
            />
          ) : (
            <></>
          )}

          {openSavePresetModal ? (
            <SavePreset
              open={openSavePresetModal}
              addNewPreset={addNewPreset}
              isOnMobileScreen={isOnMobileScreen}
              onSuccess={(newPreset: PresetMeta) => {
                setCurrentPreset(newPreset);
                setOpenSaveCodeSnackbar(true);
              }}
              handleClose={(event: {}, reason: string) => {
                setOpenSavePresetModal(false);
              }}
            />
          ) : (
            <></>
          )}

          {openSaveCodeSnackbar ? (
            <CustomSnackbar open={openSaveCodeSnackbar} setOpen={setOpenSaveCodeSnackbar} message={"Preset created successfully!"} />
          ) : (
            <></>
          )}

          {openCopyCodeSnackbar ? (
            <CustomSnackbar open={openCopyCodeSnackbar} setOpen={setOpenCopyCodeSnackbar} message={"Code Copied to Clipboard"} />
          ) : (
            <></>
          )}

          <div className={style.body}>
            <div className={style.editor}>
              <EditorContainer isOnMobileScreen={isOnMobileScreen} {...{ handleClickSubmit, loadingGptResponse, gptCompletionError }} />
            </div>
            {isOnMobileScreen ? (
              <MobileControlsDrawer open={openMobileControls} setOpen={setOpenMobileControls} state={state} dispatch={dispatch} />
            ) : (
              <div className={style.rightControls}>
                <ModelTunningControls state={state} dispatch={dispatch} />
              </div>
            )}
          </div>
        </div>
      </div>
    </LexicalComposer>
  );
};
