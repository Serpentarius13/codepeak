<template>
  <NuxtLink
    class="mx-auto cursor-pointer pt-[1rem] text-[1.6rem] text-white opacity-30 hover:opacity-100"
    :to="to"
  >
    {{ question }}
    <span class="underline"> {{ text }}</span>
  </NuxtLink>
</template>

<script setup lang="ts">
interface IBottomLink {
  to: string;
  question: string;
  text: string;
}

defineProps<IBottomLink>();
</script>

<style scoped lang="scss"></style>
