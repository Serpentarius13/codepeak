<template>
  <div
    class="p-[3rem] rounded-semi-big flex flex-col gap-[2.7rem] bg-opacited text-white w-[44.5rem] max-w-[90vw]"
  >
    <div class="flex justify-between items-center">
      <div class="flex gap-[1.4rem] items-center">
        <NuxtIcon name="info" class="w-[1.8rem] aspect-square opacity-30" />

        <h2 class="text-[2.1rem]">Решение задачи</h2>
      </div>

      <button @click="modalStore.closeModal">
        <NuxtIcon
          name="close"
          class="w-[2.4rem] aspect-square opacity-60 hover:opacity-100"
        />
      </button>
    </div>

    <p class="text-[1.8rem] opacity-50 leading-[140%]">
      {{ solution }}
    </p>

    <div class="flex flex-col gap-[2rem] items-center">
      <CommonButton
        variant="outline"
        class="w-full"
        @click="modalStore.closeModal"
      >
        Ок, ясно
      </CommonButton>

      <NuxtLink class="opacity-30 hover:opacity-100 text-[1.5rem]" to="/report">
        Нашли ошибку?
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import useModalStore from "~/stores/useModalStore";

interface IModalSolution {
  solution: string;
}

defineProps<IModalSolution>();

const modalStore = useModalStore();
</script>

<style scoped lang="scss"></style>
