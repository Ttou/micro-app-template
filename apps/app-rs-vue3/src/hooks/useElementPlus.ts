import {
  ElButton,
  ElDialog,
  ElLink,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
  ElOption,
  ElPopover,
  ElSelect
} from 'element-plus'
import { type App } from 'vue'

export function useElementPlus(app: App) {
  // 页面中用到的组件
  app
    .use(ElButton)
    .use(ElLink)
    .use(ElPopover)
    .use(ElDialog)
    .use(ElSelect)
    .use(ElOption)

  // 全局指令
  app.use(ElMessage).use(ElMessageBox).use(ElNotification).use(ElLoading)
}
