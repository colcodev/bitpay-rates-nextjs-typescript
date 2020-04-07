import { NextApiRequest, NextApiResponse } from 'next'
import bitpayRates from 'bitpay-rates'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { code } = req.query
  bitpayRates.get(code)
    .then(rates => res.status(200).json(rates))
    .catch(err => {
      console.log('ERROR', err)
      res.status(500).json({ message: 'Internal error' })
    })
}
