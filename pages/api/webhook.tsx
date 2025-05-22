// pages/api/webhook.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(" Webhook triggered:", req.body);
  res.status(200).json({ success: true });
}
