<template>
  <div class="group flex w-full flex-col gap-[2.2rem]">
    <div class="flex items-center gap-[1.2rem]">
      <div
        class="w-[3.5rem] rounded-big border-b-[1px] border-black transition-all group-hover:flex-1"
      />
      <h5 class="text-medium">{{ title }}</h5>
    </div>

    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string }>();
</script>

<style scoped lang="scss"></style>
