import type { NextApiRequest, NextApiResponse } from "next";
import { withApiAuthRequired } from "@auth0/nextjs-auth0";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default withApiAuthRequired(async function completions(req: NextApiRequest, res: NextApiResponse) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured, please follow instructions in README.md",
      },
    });
    return;
  }

  if (req.method === "POST") {
    try {
      const { model, temperature, max_tokens, top_p, frequency_penalty, presence_penalty, stop } = req.body.config;
      const completion = await openai.createCompletion({
        model,
        prompt: req.body.prompt,
        temperature,
        max_tokens,
        top_p,
        frequency_penalty,
        presence_penalty,
        stop,
      });

      res.status(200).json({ data: { completion: completion.data.choices[0].text } });
    } catch (error: any) {
      if (error.response) {
        res.status(error.response.status).json(error.response.data);
      } else {
        res.status(500).json({
          error: {
            message: "An error occurred during your request.",
          },
        });
      }
    }
  } else {
    res.status(405).json({
      error: {
        message: "Not supported",
      },
    });
  }
});
