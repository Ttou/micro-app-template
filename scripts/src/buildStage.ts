import { run } from './util.js'

export async function buildStage() {
  await run('pnpm -r stage', '.')
}
