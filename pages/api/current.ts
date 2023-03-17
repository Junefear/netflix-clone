import { NextApiRequest, NextApiResponse } from "next";

import serverAuth from "@/lib/serverAuth";
export default async function hanler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  try {
    const { curretUser } = await serverAuth(req);
    return res.status(200).json(curretUser);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
