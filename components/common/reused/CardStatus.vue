<template>
  <div
    class="text-smallest borderline-transparent flex w-fit items-center justify-center gap-[0.9rem] rounded-biggest bg-black px-[1.6rem] py-[1rem] text-black"
    :style="bgColor === '#fff' ? {color: colors.black, backgroundColor: bgColor} : {color: '#fff'}"
  >
    <NuxtIcon name="tasks/energy" class="aspect-square w-[1.6rem]" />

    <span> <slot /> </span>
  </div>
</template>

<script setup lang="ts">
import { colors } from "~/features/constants/colors.constants";

defineProps<{ bgColor?: string }>();
</script>

<style scoped lang="scss"></style>
