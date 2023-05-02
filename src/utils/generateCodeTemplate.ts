import { gptConfig } from "../constants/constants";

export type supportedLanguages = "node.js" | "python" | "curl" | "json";
export const SuportedLanguages = ["node.js", "python", "curl", "json"];
export const generateCodeTemplate = (language: supportedLanguages, configs: gptConfig, plainTextPrompt: string) => {
  const { model, temperature, max_tokens, top_p, frequency_penalty, presence_penalty, stop, best_of } = configs;
  const prompt = plainTextPrompt.length > 0 ? plainTextPrompt.split("\n").join("\\n") : "Write a tag line for an ice cream shop";

  const languageTemplates: { [P in supportedLanguages]: string } = {
    "node.js":
      `const { Configuration, OpenAIApi } = require("openai");\n\n` +
      `const configuration = new Configuration({\n` +
      `      apiKey: process.env.OPENAI_API_KEY,\n` +
      `});\n` +
      `const openai = new OpenAIApi(configuration);\n\n` +
      `const response = await openai.createCompletion({\n` +
      `      model: "${model}",\n` +
      `      prompt: "${prompt}",\n` +
      `      temperature: ${temperature},\n` +
      `      max_tokens: ${max_tokens},\n` +
      `      top_p: ${top_p},\n` +
      `      frequency_penalty: ${frequency_penalty},\n` +
      `      presence_penalty: ${presence_penalty},\n` +
      `      stop: [${stop.map((data) => `"${data}"`).join(", ")}]\n` +
      `});\n`,
    python:
      `import os\n` +
      `import openai\n\n` +
      `openai.api_key = os.getenv("OPENAI_API_KEY")\n\n` +
      `response = openai.Completion.create(\n` +
      `   model="${model}",\n` +
      `   prompt="${prompt}",\n` +
      `   temperature=${temperature},\n` +
      `   max_tokens=${max_tokens},\n` +
      `   top_p=${top_p},\n` +
      `   frequency_penalty=${frequency_penalty},\n` +
      `   presence_penalty=${presence_penalty},\n` +
      `   stop=[${stop.map((data) => `"${data}"`).join(", ")}]\n` +
      `)`,
    curl:
      `curl https://api.openai.com/v1/completions \ \n` +
      `  -H "Content-Type: application/json" \ \n` +
      `  -H "Authorization: Bearer $OPENAI_API_KEY" \ \n` +
      `  -d '{ \n` +
      `  "model": "${model}", \n` +
      `  "prompt": "${prompt}", \n` +
      `  "temperature": ${temperature}, \n` +
      `  "max_tokens": ${max_tokens}, \n` +
      `  "top_p": ${top_p}, \n` +
      `  "frequency_penalty": ${frequency_penalty}, \n` +
      `  "presence_penalty": ${presence_penalty}, \n` +
      `  "stop": [${stop.map((data) => `"${data}"`).join(", ")}] \n` +
      `}'`,
    json:
      `{\n` +
      `\t"prompt": "${prompt}",\n` +
      `\t"model": "${model}",\n` +
      `\t"temperature": ${temperature},\n` +
      `\t"max_tokens": ${max_tokens},\n` +
      `\t"top_p": ${top_p},\n` +
      `\t"frequency_penalty": ${frequency_penalty},\n` +
      `\t"presence_penalty": ${presence_penalty},\n` +
      `\t"best_of": ${best_of},\n` +
      `\t"stop": [${stop.map((data) => `"${data}"`).join(", ")}]\n` +
      `}`,
  };

  return languageTemplates[language];
};
