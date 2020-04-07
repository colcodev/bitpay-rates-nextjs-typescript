import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { name = 'API' } = req.query
  res.status(200).json({ name })
}
