import { Button } from 'element-ui'
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'AppendBody',
  setup() {
    const state = reactive({
      dialog: null as Nullable<HTMLDivElement>
    })

    function handleAdd() {
      if (state.dialog) return
      const ele = document.createElement('div')
      ele.innerHTML = 'body中插入position为fixed元素'
      ele.style.cssText =
        'position: fixed; z-index: 100; top: 0; left: 0; width: 400px; text-align: center; height: 100px; line-height: 100px; background-color: #41b883'
      document.body.appendChild(ele)
      state.dialog = ele
    }

    function handleRemove() {
      if (state.dialog) document.body.removeChild(state.dialog)
      state.dialog = null
    }

    return {
      handleAdd,
      handleRemove
    }
  },
  render() {
    return (
      <div>
        <Button onClick={this.handleAdd}>点击插入body</Button>
        <Button onClick={this.handleRemove}>点击删除body</Button>
      </div>
    )
  }
})
