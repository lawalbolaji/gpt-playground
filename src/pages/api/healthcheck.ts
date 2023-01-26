// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function healthCheck(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.send("server is up and running");
  } else {
    res.status(405).send("method not supported");
  }
}
