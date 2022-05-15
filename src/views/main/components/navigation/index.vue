<template>
  <mobile-navigation-cpm v-if="isMobileTerminal" />
</template>

<script setup>
import { isMobileTerminal } from '@/utils/flexible'
import mobileNavigationCpm from './mobile/index.vue'
</script>

<style></style>
