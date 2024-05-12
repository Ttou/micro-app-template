import { run } from './util.js'

export async function serve() {
  await run('pnpm --parallel serve', '..')
}
