import { config } from 'dotenv'
import { createServer } from 'http-server'

const { parsed } = config({ path: '.env' })

const PORT = Number(parsed.VUE_APP_PORT)

const server = createServer({
  root: './dist',
  cors: true,
  proxy: `http://localhost:${PORT}?`
})

server.listen(PORT, () => {
  console.log(`App running at http://localhost:${PORT}`)
})
