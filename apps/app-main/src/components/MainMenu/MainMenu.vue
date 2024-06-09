<template>
  <a class="main-menu">
    {{ title }}
    <span v-if="alive" class="alive">保活</span>
    <img
      :class="['main-icon', { active }]"
      src="@/assets/images/up-one.png"
      @click.prevent="handleFlag"
    />
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainMenu',
  props: {
    name: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    alive: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update'],
  setup(props, { emit }) {
    function handleFlag() {
      emit('update', props.name)
    }

    return {
      handleFlag
    }
  }
})
</script>

<style scoped>
.main-icon {
  width: 44px;
  padding: 0 10px;
  transition: transform 0.3s ease-in;
  cursor: pointer;
}

.main-icon.active {
  transform: rotate(180deg);
}

.alive {
  display: inline-block;
  white-space: nowrap;
  background-color: rgb(241 107 95);
  border-radius: 8px;
  margin-left: 4px;
  font-size: 10px;
  vertical-align: top;
  padding: 1px 4px;
  color: white;
}
</style>
