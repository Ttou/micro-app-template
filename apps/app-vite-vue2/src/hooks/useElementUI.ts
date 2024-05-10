import {
  ElementUIOptions,
  Loading,
  Message,
  MessageBox,
  Notification
} from 'element-ui'
import type { VueConstructor } from 'vue'

export function useElementUI(Vue: VueConstructor) {
  Vue.prototype.$ELEMENT = { size: 'small' } as ElementUIOptions

  // 第三方库中用到的组件

  // 全局指令
  Vue.prototype.$loading = Loading.service
  Vue.prototype.$msgbox = MessageBox
  Vue.prototype.$alert = MessageBox.alert
  Vue.prototype.$confirm = MessageBox.confirm
  Vue.prototype.$prompt = MessageBox.prompt
  Vue.prototype.$notify = Notification
  Vue.prototype.$message = Message
}
