<template>
  <div class="flex items-center gap-[1.2rem]">
    <NuxtImg
      :src="img"
      :alt="`Иконка технологии ${name}`"
      width="22"
      height="22"
      class="aspect-square w-[2.2rem]"
    />

    <span class="translate-y-[0.2rem] leading-[50%]">
      {{ name }}
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps<{ img: string; name: string }>();
</script>

<style scoped lang="scss"></style>
