<template>
  <mobile-navigation-cpm :data="categorys" />
</template>

<script setup>
import { isMobileTerminal } from '@/utils/flexible'
import { getCategory } from '@/api/category'
import mobileNavigationCpm from './mobile/index.vue'
import { ALL_CATEGORY_ITEM } from '@/components/constants/index'

import { ref } from 'vue'

const categorys = ref([])

const getCategoryData = async () => {
  try {
    categorys.value = await getCategory()
    categorys.value.unshift(ALL_CATEGORY_ITEM)
  } catch (err) {
    console.log('分类数据---', categorys)
  }
}
getCategoryData()
</script>

<style></style>
