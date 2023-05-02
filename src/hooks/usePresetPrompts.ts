import React from "react";
import { defaultPresets } from "../constants/prompt.presets";
import { nanoid } from "nanoid";

export type PresetPayload = {
  id: string;
  label: string;
  text: string;
  group: "Examples" | "My Presets";
  createdAt: string;
};
export type PresetMeta = Omit<PresetPayload, "text" | "createdAt">;
export type CreatePresetPayload = Omit<PresetPayload, "id" | "createdAt">;
const _savedPresetKey = "editor.saved-presets";

const fetchPresets = () => {
  const t = window.localStorage.getItem(_savedPresetKey);
  return !!t ? JSON.parse(t) : [];
};

const savePresets = (presets: PresetPayload[]) => {
  // Throws a "QuotaExceededError" DOMException exception if the new value couldn't be set. (Setting could fail if, e.g., the user has disabled storage for the site, or if the quota has been exceeded.)
  window.localStorage.setItem(_savedPresetKey, JSON.stringify(presets));
};

const usePresets = () => {
  const [savedPresets, setSavedPresets] = React.useState<PresetPayload[]>(fetchPresets());
  return {
    allPresets: savedPresets.concat(defaultPresets).sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)),
    savedPresets,
    setSavedPresets,
  };
};

export const usePresetPrompts = (): {
  presetsMeta: Array<PresetMeta>;
  updatePreset: (presetId: string, text: string, label?: string) => void;
  addNewPreset: (createPresetPayload: CreatePresetPayload) => PresetMeta;
  deletePreset: (presetId: string) => void;
  getPresetById: (presetId: string) => PresetPayload | undefined;
} => {
  const { allPresets, setSavedPresets } = usePresets();
  const updatePreset = (presetId: string, text: string, label?: string) => {
    setSavedPresets((presets) => {
      const updatedPresets = presets
        .filter((preset) => preset.id !== presetId)
        .concat(
          label !== undefined
            ? ({
                ...presets.find((preset) => preset.id === presetId)!,
                id: presetId,
                text,
                label,
              } satisfies PresetPayload)
            : {
                ...presets.find((preset) => preset.id === presetId)!,
                id: presetId,
                text,
              }
        );

      savePresets(updatedPresets);
      return updatedPresets;
    });
  };
  const deletePreset = (presetId: string) => {
    setSavedPresets((presets) => {
      const updatedPresets = presets.filter((preset) => preset.id !== presetId);
      savePresets(updatedPresets);
      return updatedPresets;
    });
  };
  const addNewPreset = (createPresetPayload: CreatePresetPayload) => {
    const newPreset = {
      ...createPresetPayload,
      id: nanoid(10),
      createdAt: new Date().toUTCString(),
    };

    setSavedPresets((presets) => {
      const updatedPresets = structuredClone(presets).concat(newPreset);
      savePresets(updatedPresets);
      return updatedPresets;
    });

    return newPreset;
  };
  const getPresetById = (presetId: string): PresetPayload | undefined => {
    return allPresets.find((preset) => preset.id === presetId);
  };

  return {
    presetsMeta: allPresets.map((preset) => ({ id: preset.id, label: preset.label, group: preset.group })),
    updatePreset,
    addNewPreset,
    deletePreset,
    getPresetById,
  };
};
