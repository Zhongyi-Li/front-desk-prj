import { computed } from 'vue'
import { useWindowSize } from '@vueuse/core'
import { PC_DEVICE_WIDTH } from '@/components/constants'

const { width } = useWindowSize()

//判断当前是否为移动设备  判断依据屏幕宽度是否小于一个指定宽度（1280）
export const isMobileTerminal = computed(() => {
  return width.value < PC_DEVICE_WIDTH
})

// export const isMobileTerminal = computed(() => {
//   return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
//     navigator.userAgent
//   )
// })
