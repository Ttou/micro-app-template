import { config } from 'dotenv'
import { createServer } from 'http-server'

const { parsed } = config({ path: '.env.development' })

const PORT = Number(parsed.VITE_APP_PORT)

const server = createServer({
  root: './dist',
  cors: true
})

server.listen(PORT, () => {
  console.log(`App running at http://localhost:${PORT}`)
})
