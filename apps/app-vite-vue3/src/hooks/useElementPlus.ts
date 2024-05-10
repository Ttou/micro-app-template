import {
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification
} from 'element-plus'
import { type App } from 'vue'

export function useElementPlus(app: App) {
  // 第三方库中用到的组件

  // 全局指令
  app.use(ElMessage).use(ElMessageBox).use(ElNotification).use(ElLoading)
}
