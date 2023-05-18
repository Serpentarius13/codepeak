<template>
  <figure
    :class="[
      'borderline-transparent flex w-fit flex-col gap-[2rem] rounded-semi-big bg-white px-[3.8rem] py-[3.1rem] min-w-[25rem] items-center',
      progress === max && 'opacity-40',
    ]"
  >
    <NuxtImg
      width="130"
      height="130"
      class="rounded-full"
      :src="img"
      :alt="alt"
    />

    <h5 class="text-medium max-w-[13rem] text-center">Посмотреть 5 курсов</h5>

    <div class="progress relative w-full">
      <progress
        :min="min"
        :max="max"
        :value="progress"
        class="borderline-transparent h-[0.4rem] w-full rounded-semi-big"
      />

      <template v-if="progress !== max">
        <span class="text-small left-0 opacity-20">
          {{ min }}
        </span>

        <span class="text-small right-0 opacity-20">
          {{ max }}
        </span>

        <span
          :style="{ left: `${(progress / max) * 100}%` }"
          class="text-small text-blue"
        >
          {{ progress }}
        </span>
      </template>

      <span v-else class="text-small left-1/2 -translate-x-1/2 text-blue">
        Выполнено
      </span>
    </div>
  </figure>
</template>

<script setup lang="ts">
import { IAchievement } from "~/features/types/shared.types";

defineProps<IAchievement>();
</script>

<style scoped lang="scss">
progress {


  &::-webkit-progress-bar {
    @apply rounded-semi-big bg-gray-400 bg-opacity-30;
  }

  &::-webkit-progress-value {
    @apply rounded-semi-big bg-blue;
  }
}

.progress {
  span {
    @apply absolute -bottom-[2rem];
  }
}
</style>
