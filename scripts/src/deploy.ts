import cpy from 'cpy'
import { deleteAsync } from 'del'

import { resolve } from './util.js'

export async function deploy() {
  await deleteAsync([resolve('/demo')], { force: true })

  const apps = [
    { name: 'app-main', index: true },
    { name: 'app-vue2', index: false },
    { name: 'app-vue3', index: false },
    { name: 'app-vite-vue2', index: false },
    { name: 'app-vite-vue3', index: false }
  ]

  for (const app of apps) {
    const { name, index } = app
    const dest = index ? '' : name + '/'

    await cpy(resolve(`/apps/${name}/dist/**`), resolve(`demo/${dest}`))
    await cpy(resolve(`/demo/${dest}index.html`), './', {
      rename: '404.html'
    })
  }
}
