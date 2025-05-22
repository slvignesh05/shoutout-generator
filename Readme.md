# Shoutout Generator – Attacker PoC

This Vercel-hosted PoC simulates an attacker-controlled domain (`shoutout-generator.vercel.app`)
used when a MiniKit app forgets to define `NEXT_PUBLIC_URL`.

## Features

- `/api/webhook` – Logs all incoming frame interactions.
- `/api/og-image` – Injects phishing Open Graph metadata.

Use this to demonstrate:

- Frame metadata hijacking
- OG preview phishing
- Webhook data exfiltration
