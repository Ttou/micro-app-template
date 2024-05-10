import {
  Button,
  Dialog,
  ElementUIOptions,
  Link,
  Loading,
  Message,
  MessageBox,
  Notification,
  Option,
  Popover,
  Select
} from 'element-ui'
import type { VueConstructor } from 'vue'

export function useElementUI(Vue: VueConstructor) {
  Vue.prototype.$ELEMENT = { size: 'small' } as ElementUIOptions

  // 页面中用到的组件
  Vue.use(Button).use(Popover).use(Dialog).use(Select).use(Option).use(Link)

  // 全局指令
  Vue.prototype.$loading = Loading.service
  Vue.prototype.$msgbox = MessageBox
  Vue.prototype.$alert = MessageBox.alert
  Vue.prototype.$confirm = MessageBox.confirm
  Vue.prototype.$prompt = MessageBox.prompt
  Vue.prototype.$notify = Notification
  Vue.prototype.$message = Message
}
