<template>
  <div
    class="flex flex-col gap-[3.2rem] pr-[2rem] text-start lg:col-span-4 lg:mb-[2rem] lg:items-center lg:pr-0"
  >
    <div
      class="flex w-[33rem] flex-col gap-[1.6rem] xl:w-[20rem] lg:w-full lg:flex-row lg:items-center sm:flex-col sm:items-start"
    >
      <h2 class="heading-small lg:heading">Подписки</h2>
      <p class="text-medium lg:text-big">
        Управляйте вашими подписками в несколько кликов
      </p>
    </div>

    <div
      class="text-medium borderline-transparent flex w-fit gap-[0.5rem] rounded-semi-big p-[0.6rem] text-black transition-all child:rounded-semi-big child:px-[4.8rem] child:py-[0.6rem] child:transition-all xl:flex-col lg:w-full"
    > 
      <button :class="[isMonth && activeClass]" @click="handleDuration(true)">
        Месяц
      </button>

      <button :class="[!isMonth && activeClass]" @click="handleDuration(false)">
        год
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  handleDuration: (isMonth: boolean) => void;
  isMonth: boolean;
}>();

const activeClass = "bg-black text-white";
</script>

<style scoped lang="scss"></style>
