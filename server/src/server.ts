import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const port = process.env.PORT || '53134'

const server = express()


server.get('/', (req, res)=>{
  console.log("info")
  res.status(200).json({ message: 'Hello from the server!' });

})

// Start server
server.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})

export default server