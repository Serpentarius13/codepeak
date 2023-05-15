<template>
  <section
    class="flex min-h-[73rem] w-screen flex-col justify-between px-[3.6rem] pb-[3.2rem] pt-[12rem]"
  >
    <div class="container">
      <div class="flex max-w-[105rem] flex-col gap-[4rem]">
        <h1 class="huge-heading">Поднимаем уровень IT образования в России</h1>

        <div class="flex items-center gap-[1.5rem]">
          <CommonButton variant="blue" size="medium"
            >Тарифы обучения</CommonButton
          >
          <CommonButton variant="outline" size="medium"
            >Наша платформа</CommonButton
          >
        </div>
      </div>
    </div>

    <ul class="flex w-full items-center justify-between">
      <li v-for="tag in tags" :key="tag.text">
        <MainHomeBannerTag v-bind="tag" />
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { IBannerTag } from "~/features/types/shared";

const tags: IBannerTag[] = [
  { text: "Современно", subtext: "Топовые лекторы" },

  { text: "Безопасно", subtext: "Госдеп не пройдет" },
  { text: "Уютно", subtext: "Атмосферные занятия" },
];
</script>

<style scoped lang="scss"></style>
