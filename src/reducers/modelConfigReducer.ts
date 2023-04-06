import { gptConfig } from "../components/constants";

export const getInitConfigState = (): gptConfig => ({
  model: "text-davinci-003",
  temperature: 0.19,
  max_tokens: 771,
  top_p: 1,
  frequency_penalty: 0.77,
  presence_penalty: 0,
  best_of: 1,
  stop: [],
});

export type modelConfigActions = {
  type: keyof gptConfig;
  data: gptConfig[keyof gptConfig];
};

export const modelConfigReducer = (state: gptConfig, action: modelConfigActions): gptConfig => {
  return { ...state, [action.type]: action.data };
};
