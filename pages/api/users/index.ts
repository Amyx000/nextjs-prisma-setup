import type { NextApiRequest, NextApiResponse } from 'next'
const { getUsers } = require("../../../lib/controller/usercontroller");



export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  try {
    const data = await getUsers()
    res.status(200).json(data)
  } catch (error) {
    res.status(400).json("Something went wrong")
  }
  
}