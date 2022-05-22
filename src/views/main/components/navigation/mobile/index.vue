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
        @click="onShowModal"
      >
        <m-svg-icon class="w-1.5 h-1.5" name="hamburger"></m-svg-icon>
      </li>

      <!-- category item -->
      <li
        v-for="(item, i) in data"
        :key="item.id"
        class="shrink-0 px-1.5 py-0.5 z-10 duration-200 last:mr-4"
        :class="{ 'text-zinc-100': curItemIndex === i }"
        :ref="setItemRef"
        @click="onItemClick(i)"
      >
        {{ item.name }}
      </li>
    </ul>
    <m-popup v-model="isVisable">
      <Menu :categorys="data" @onItemClick="(i) => onItemClick(i)" />
    </m-popup>
  </div>
</template>

<script setup>
import { useScroll } from '@vueuse/core'
import { onBeforeUpdate, ref, watch } from 'vue'
import Menu from '@/views/main/components/menu/index.vue'

defineProps({
  data: {
    type: Array,
    required: true,
    default: () => []
  }
})

const sliderStyle = ref({
  transform: 'translateX(0px)',
  width: '52px'
})

let curItemIndex = ref(0)
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

//监听点击元素的下标
watch(curItemIndex, (val) => {
  const { left, width } = itemRefs[val].getBoundingClientRect()
  sliderStyle.value = {
    //当前元素位置 = ul scrollLeft + li 距左偏移量 - 10 padding
    transform: `translateX(${ulScrollLeft.value + left - 10}px)`,
    width: width + 'px'
  }
  console.log('val---', val)
})

//点击item
const onItemClick = (index) => {
  curItemIndex.value = index
  isVisable.value = false
}

//控制popup
const isVisable = ref(false)
const onShowModal = () => {
  isVisable.value = true
}
</script>

<style></style>
