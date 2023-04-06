export const TEMPERATURE = 0.7;
export const MAX_TOKENS = 256;
export const TOP_P = 1;
export const FREQUENCY_PENALTY = 0;
export const PRESENCE_PENALTY = 0;
export const BEST_OF = 1;

export const completionModels = ["text-davinci-003", "text-curie-001", "text-babbage-001", "text-ada-001"] as const;
export const chatModels = ["hpt-3.5-turbo"] as const;
export const editorModes = ["chat", "complete", "insert", "edit"] as const;

export type supportedModes = typeof editorModes[number];
export type validModelOptions<T extends supportedModes> = T extends "complete"
  ? typeof completionModels[number]
  : typeof chatModels[number];
export type gptPayload = {
  prompt: string;
  config: gptConfig;
};
export type gptConfig = {
  temperature: number;
  max_tokens: number;
  top_p: number;
  frequency_penalty: number;
  presence_penalty: number;
  best_of: number;
  stop: Array<string>;
  model: validModelOptions<"complete"> | validModelOptions<"chat">;
};

export const tokenCount = 100; // will be computed somehow later on
