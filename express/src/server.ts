import express from 'express'
import cors from 'cors'

const server = express()

server.use(
  cors({
    origin: '*',
  })
)
server.use(express.static('uploads'))

const port = 3314
server.listen(port, () => console.log(`Server started on port ${port}`))
