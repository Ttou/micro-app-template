import { defineComponent, reactive, toRefs } from 'vue'
import { RouterLink } from 'vue-router'

import styles from './Nav.module.css'

export default defineComponent({
  name: 'Nav',
  setup() {
    const state = reactive({
      list: [
        {
          title: '首页',
          url: '/home'
        },
        {
          title: '弹窗',
          url: '/dialog'
        },
        {
          title: '路由',
          url: '/location'
        },
        {
          title: '通信',
          url: '/contact'
        }
      ]
    })

    return {
      ...toRefs(state)
    }
  },
  render() {
    const len = this.list.length - 1

    return (
      <div class={styles.nav}>
        {this.list.map((v, i) => (
          <RouterLink key={v.url} to={v.url}>
            {i !== len ? `${v.title} | ` : `${v.title}`}
          </RouterLink>
        ))}
      </div>
    )
  }
})
