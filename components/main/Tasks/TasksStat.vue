<template>
  <figure class="flex gap-[0.6rem] opacity-20 text-white items-center">
    <NuxtIcon :name="icon" class="w-[1.4rem] aspect-square  " />

    <span class="text-[1.5rem]">
      {{ stat }}
    </span>
  </figure>
</template>

<script setup lang="ts">

import { ITaskStat } from '~/features/types/shared.types';


defineProps<ITaskStat>();
</script>

<style scoped lang="scss"></style>
