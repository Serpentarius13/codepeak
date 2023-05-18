<template>
  <div
    class="grid h-[3.9rem] w-full border-t-[1px] border-black border-opacity-[15%] "
  >
    <div
      v-for="i in +cols"
      :key="i"
      class="border-r-[1px] border-black border-opacity-[15%] last:border-r-0"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{ cols: number | string }>();
</script>

<style scoped lang="scss"></style>
