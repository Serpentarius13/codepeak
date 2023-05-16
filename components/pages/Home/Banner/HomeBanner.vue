<template>
  <section
    class="flex min-h-[73rem] w-screen flex-col justify-between px-[3.6rem] pb-[3.2rem] pt-[3.4rem] lg:px-[1.6rem]"
  >
    <div class="container">
      <div class="flex max-w-[105rem] flex-col gap-[4rem]">
        <h1 class="heading-huge">Поднимаем уровень IT образования в России</h1>

        <div class="flex items-center gap-[1.5rem] md:flex-col md:items-start">
          <CommonButton variant="blue" size="medium"
            >Тарифы обучения</CommonButton
          >
          <CommonButton variant="outline" size="medium"
            >Наша платформа</CommonButton
          >
        </div>
      </div>
    </div>

    <BannerTags />
  </section>
</template>

<script setup lang="tsx">
import { tag } from "type-fest/source/opaque";
import { IBannerTag } from "~/features/types/shared.types";

const tags: IBannerTag[] = [
  { text: "Современно", subtext: "Топовые лекторы" },

  { text: "Безопасно", subtext: "Госдеп не пройдет" },
  { text: "Уютно", subtext: "Атмосферные занятия" },
];

const BannerTags = () => (
  <ul class="flex w-full items-center justify-between md:flex-col md:items-start md:gap-[2rem]">
    {tags.map(({ text, subtext }) => (
      <li v-for="tag in tags" key={text}>
        <div class="flex items-center gap-[1.6rem]">
          <span class="text-big">{ text }</span>

          <span class="text-smallest opacity-30">{ subtext }</span>
        </div>
      </li>
    ))}
  </ul>
);
</script>

<style scoped lang="scss"></style>
