<template>
  <section class="flex flex-col gap-[3rem]">
    <h1 class="text-white text-[5.8rem] leading-[7rem]">
      {{ formTitle }}
    </h1>

    <slot />
  </section>
</template>

<script setup lang="ts">
defineProps<{ formTitle: string }>();
</script>

<style scoped lang="scss"></style>
