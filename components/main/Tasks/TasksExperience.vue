<template>
  <figure class="flex items-center gap-[0.6rem]">
    <NuxtIcon name="tasks/energy" class="aspect-square w-[1.4rem]" />

    <span class="text-[1.5rem]">
      {{ taskTierMap[text] }}
    </span>
  </figure>
</template>

<script setup lang="ts">
import { taskTierMap } from "~/features/constants/task-tier.constants";
import { TExperience } from "~/features/types/tasks.types";

defineProps<{ text: TExperience }>();
</script>

<style scoped lang="scss"></style>
