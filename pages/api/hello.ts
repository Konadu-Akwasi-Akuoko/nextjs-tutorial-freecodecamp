// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { setCookie } from "../../utils/cookies";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  setCookie(
    res,
    "auth",
    { user: "konadu", id: "123" },
    { path: "/", maxAge: 2592000 }
  );
  res.status(200).json({ name: "John Doe" });
}
//  TODO: Add a getCookie function to get Cookies