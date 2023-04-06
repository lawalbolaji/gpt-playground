// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { withApiAuthRequired } from "@auth0/nextjs-auth0";

export default withApiAuthRequired(async function completions(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    res.send({ success: { message: "Thank you for using this service, open the console for a surprise!" } });
  } else {
    res.status(405).send("method not supported");
  }
});
