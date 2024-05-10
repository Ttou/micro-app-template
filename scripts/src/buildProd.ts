import { run } from './util.js'

export async function buildProd() {
  await run('pnpm -r build', '.')
}
