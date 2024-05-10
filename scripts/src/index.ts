import checkbox from '@inquirer/checkbox'
import { pick } from 'lodash-unified'

import { buildProd } from './buildProd.js'
import { buildStage } from './buildStage.js'
import { deploy } from './deploy.js'
import { dev } from './dev.js'
import { serve } from './serve.js'
import { logEnd, logStart, separator } from './util.js'

const answer = await checkbox({
  message: '选择脚本执行',
  choices: [
    { type: 'separator', separator: separator('Dev') },
    { name: 'dev', value: 'dev' },
    { type: 'separator', separator: separator('Build') },
    { name: 'prod', value: 'buildProd' },
    { name: 'stage', value: 'buildStage' },
    { type: 'separator', separator: separator('Serve') },
    { name: 'serve', value: 'serve' },
    { name: 'deploy', value: 'deploy' }
  ]
}).catch(err => {})

for (const [k, v] of Object.entries(
  pick(
    {
      dev,
      buildProd,
      buildStage,
      serve,
      deploy
    },
    answer!
  )
)) {
  console.group(k)
  logStart()

  await v()

  logEnd()
  console.groupEnd()
}
