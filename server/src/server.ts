// import path from 'path'
import express from 'express'
import helmet from 'helmet'
import dotenv from 'dotenv'

dotenv.config()

const applicationId = process.env.APPLICATION_ID
const clientSecret = process.env.CLIENT_SECRET
const publicKey = process.env.PUBLIC_KEY
const identifyURL = process.env.IDENTIFY_URL
const port = '53134'

const server = express()

server.get('/', (request, response) => {
	return response.sendFile('index.html', { root: '.' });//TODO: change for a proper redirect
});


//secure http header
server.use(
    helmet.contentSecurityPolicy({
      directives: {
        ...helmet.contentSecurityPolicy.getDefaultDirectives()
      },
    })
  );
//end secure http header

server.listen(port,()=> console.log(`App listening at http://localhost:${port}`))