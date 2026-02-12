import express from 'express';

const router = express.Router();

router.get('/auth/discord', (_req, res) => {
  const params = new URLSearchParams({
    client_id: process.env.APPLICATION_ID!,
    response_type: 'code',
    redirect_uri: process.env.REDIRECT_URI!,
    scope: 'identify',
  });

  res.redirect(`https://discord.com/oauth2/authorize?${params.toString()}`);
});

router.get('/auth/discord/callback', async (req, res) => {
  const code = req.query.code as string;

  const tokenResp = await fetch('https://discord.com/api/oauth2/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: process.env.APPLICATION_ID!,
      client_secret: process.env.CLIENT_SECRET!,
      grant_type: 'authorization_code',
      code,
      redirect_uri: process.env.REDIRECT_URI!,
    }),
  });

  const tokenData = await tokenResp.json() as { access_token: string };

  const userResp = await fetch('https://discord.com/api/users/@me', {
    headers: { Authorization: `Bearer ${tokenData.access_token}` },
  });

  const user = await userResp.json() as { username: string };

  const frontendBase = process.env.FRONTEND_BASE ?? 'http://localhost:5173';
  res.redirect(`${frontendBase}/login?ok=1&user=${encodeURIComponent(user.username)}`);
});

export default router;
