<template>
  <div class="flex items-center gap-[1.6rem]">
    <span class="text-big">
      {{ text }}
    </span>

    <span class="text-smallest opacity-30">
      {{ subtext }}
    </span>
  </div>
</template>

<script setup lang="ts">
import type { IBannerTag } from "~/features/types/shared";

defineProps<IBannerTag>();
</script>

<style scoped lang="scss"></style>
