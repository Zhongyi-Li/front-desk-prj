<template>
  <mobile-navigation-cpm v-if="isMobileTerminal" :data="categorys" />
</template>

<script setup>
import { isMobileTerminal } from '@/utils/flexible'
import { getCategory } from '@/api/category'
import mobileNavigationCpm from './mobile/index.vue'
import { ref } from 'vue'

const categorys = ref([])

const getCategoryData = async () => {
  try {
    categorys.value = await getCategory()
  } catch (err) {
    console.log('分类数据---', categorys)
  }
}
getCategoryData()
</script>

<style></style>
