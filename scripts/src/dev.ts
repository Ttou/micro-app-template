import { run } from './util.js'

export async function dev() {
  await run('pnpm --parallel dev', '..')
}
