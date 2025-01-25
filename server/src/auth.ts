
import express from 'express'
import helmet from 'helmet'
import fetch from 'node-fetch'
import path from 'path'
import { fileURLToPath } from 'url'
import server from './server'

export interface TokenData {
    access_token: string
    token_type: string
    expires_in: number
    // Add more fields as needed based on the Discord API response
}

const port = process.env.PORT || '53134'
const applicationId = process.env.APPLICATION_ID
const clientSecret = process.env.CLIENT_SECRET
const publicKey = process.env.PUBLIC_KEY
const identifyURL = process.env.VITE_IDENTIFY_URL
const redirectURI = process.env.REDIRECT_URI as string

//secure http header
server.use(
    helmet.contentSecurityPolicy({
      directives: {
        ...helmet.contentSecurityPolicy.getDefaultDirectives()
      },
    })
  );
//end secure http header

// Handle OAuth callback
server.get('/callback', async (req, res) => {
  // console.log("checkpoint0");
  // console.log(req.query);//wtf is this


    const code = req.query.code as string // OAuth code from Discord
    const redirectUri = req.query.redirect_uri as string // Redirect URI used in OAuth request WHY EMPTYY
  
    try {
      if (!applicationId || !clientSecret) {
        throw new Error('OAuth credentials not configured properly')
      }

    // Validate and process the OAuth flow based on the provided redirectUri
    // console.log("Redirect URI:", redirectUri); //undefined???

  
      const tokenResponse = await fetch('https://discord.com/api/oauth2/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          client_id: applicationId,
          client_secret: clientSecret,
          grant_type: 'authorization_code',
          code: code,
          redirect_uri: redirectUri,
        }).toString(),
      });
      
      console.log("checkpoint3");

      console.log(tokenResponse);


  
      // Ensure response is ok
      if (!tokenResponse.ok) {
        throw new Error('Failed to obtain access token')
      }
  
      // Parse and validate tokenData
      const tokenData = await tokenResponse.json() as TokenData; // Assert as TokenData
  
      // Ensure tokenData has access_token property
      if (!tokenData.access_token) {
        throw new Error('Access token not found in OAuth response');
      }
  
      // Determine where to redirect based on your application's logic
      // Example: redirect to '/home' with access token as fragment
      res.redirect(`http://localhost:${port}/#/home#${tokenData.access_token}`);
    } catch (error) {
      console.error('Error during Discord OAuth process:', error)
      res.status(500).json({ error: 'Internal Server Error' })
    }
})

  
// Serve static files from Vite build output directory
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
server.use(express.static(path.join(__dirname, '..', '..', 'kotgh', 'dist')))
// console.log("static:");
// console.log(path.join(__dirname, '..', '..', 'kotgh', 'dist'));

// Route to serve your Vue application's home page
// server.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '..', '..', 'kotgh', 'src', 'views', 'Home', 'HomePage.vue'))
//   // console.log("sendfile:");
//   // console.log(req);
//   // console.log(res);
// });
