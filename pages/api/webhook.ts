// pages/api/webhook.ts
export default async function handler(req, res) {
  const body = req.body;

  console.log("Webhook hit! Exfiltrated data:", JSON.stringify(body, null, 2));

  // Log for debugging PoC
  res.status(200).json({ received: true });
}
