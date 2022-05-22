<template>
  <div class="bg-white sticky top-0 left-0 z-10">
    <ul
      ref="ulTarget"
      class="relative flex overflow-x-auto p-1 text-xs text-zinc-600 overflow-hidden"
    >
      <!-- 滑块 -->
      <li
        ref="sliderTarget"
        class="absolute h-[22px] bg-zinc-900 rounded-lg duration-200"
        :style="sliderStyle"
      ></li>

      <!--svg -->
      <li
        class="z-20 fixed top-0 right-[-1px] h-4 px-1 flex items-center bg-white shadow-l-white"
      >
        <m-svg-icon class="w-1.5 h-1.5" name="hamburger"></m-svg-icon>
      </li>

      <!-- category item -->
      <li
        v-for="item in data"
        :key="item.id"
        class="shrink-0 px-1.5 py-0.5 z-10 duration-200 last:mr-4"
        :ref="setItemRef"
      >
        {{ item.name }}
      </li>
    </ul>
    <div>{{ ulScrollLeft }}</div>
  </div>
</template>

<script setup>
// import { useScroll } from '@vueuse/core'
import { useScroll } from '@vueuse/core'
import { onBeforeUpdate, ref } from 'vue'
defineProps({
  data: {
    type: Array,
    required: true,
    default: () => []
  }
})

const sliderStyle = ref({
  transform: 'translateX(0px)',
  width: '60px'
})

//获取所有滚动的item
let itemRefs = []
const setItemRef = (el) => {
  if (el) {
    itemRefs.push(el)
  }
}

//数据更新之后 DOM更新之前
onBeforeUpdate(() => {
  itemRefs = []
})

const ulTarget = ref(null)
const { x: ulScrollLeft } = useScroll(ulTarget)
</script>

<style></style>
