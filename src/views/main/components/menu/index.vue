<template>
  <div class="py-2 h-[80vh] flex flex-col">
    <h2 class="text-xl text-zinc-900 font-bold mb-2 px-1">所有内容</h2>
    <ul class="overflow-y-scroll">
      <li
        v-for="(item, i) in categorys"
        :key="i"
        class="text-lg text-zinc-900 px-1 py-1.5 duration-100 active:bg-zinc-100"
        @click="$emit('onItemClick', i)"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  categorys: {
    type: Array,
    required: true
  }
})

//推荐再手动注册一遍emits
defineEmits(['onItemClick'])
</script>

<style></style>
