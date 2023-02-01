import type { NextApiRequest, NextApiResponse } from "next";
const { createUser } = require("../../../lib/controller/usercontroller");

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      await createUser(req.body);
      res.status(200).json("User Added Successfully");

    } catch (error) {
      res.status(400).json("Something went wrong")
    }
  }
};

export default handler;
