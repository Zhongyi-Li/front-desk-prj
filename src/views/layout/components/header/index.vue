<template>
  <div class="w-full bg-white border-b border-b-zinc-200 px-2 py-2">
    <div class="flex items-center">
      <img
        src="https://v3.cn.vuejs.org/logo.png"
        class="h-4 cursor-pointer mr-2"
        alt=""
        @click="onToHome"
      />
      <header-search></header-search>
      <header-theme></header-theme>
      <header-my></header-my>
    </div>
  </div>
</template>

<script setup>
import headerSearch from './header-search/index.vue'
import headerTheme from './header-theme.vue'
import headerMy from './header-my.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const onToHome = () => {
  router.push('/')
}
</script>

<style></style>
