<template>
  <div class="view">
    <div class="content">
      <p>弹窗无需子应用做任何处理就可使用</p>
      <h3>1、打开弹窗</h3>
      <div>
        <el-button @click="show = true">点击打开弹窗</el-button>
      </div>
      <h3>2、打开选择器</h3>
      <div>
        <el-select v-model="selected" placeholder="请选择">
          <el-option
            v-for="v in selectOpts"
            :key="v.value"
            :value="v.value"
            :label="v.value"
          />
        </el-select>
      </div>
      <h3>3、打开气泡卡片</h3>
      <div>
        <el-popover
          placement="top-start"
          title="标题"
          :width="200"
          trigger="hover"
          content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
        >
          <template #reference>
            <el-button>hover 激活</el-button>
          </template>
        </el-popover>
      </div>
      <h3>4、手动向body中append弹窗</h3>
      <AppendBody />
    </div>
    <el-dialog v-model="show" title="提示" width="30%" showClose>
      <span>这是一段信息</span>
      <template #footer>
        <span>
          <el-button @click="show = false">取消</el-button>
          <el-button type="primary" @click="show = false"> 确定 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

import { AppendBody } from '@/components'

export default defineComponent({
  components: {
    AppendBody
  },
  setup() {
    const state = reactive({
      show: false,
      selectOpts: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      selected: ''
    })

    return {
      ...toRefs(state)
    }
  }
})
</script>

<style scoped>
.view {
  .content {
    max-width: 740px;
    margin: 0 auto;

    h3 {
      margin: 20px 0;
      padding-bottom: 10px;
      border-bottom: 1px solid #eaecef;
      font-weight: 600;
    }
  }
}
</style>
