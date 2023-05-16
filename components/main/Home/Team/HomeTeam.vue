<template>
  <section class="flex flex-col">
    <div class="container-big">
      <h2 class="heading-huge mb-[11.5rem] max-w-[99.1rem]">
        Команда. Те, с кем вы пройдете сложный путь в IT
      </h2>
    </div>
    <nav class="mb-[5.1rem]">
      <ul class="container flex flex-wrap items-center justify-between">
        <li v-for="tab in tabs" :key="tab.type">
          <button
            @click="handleSetTab(tab.type)"
            :class="[
              'text-big underlined',
              tab.type === currentTab && 'underlined-active',
            ]"
          >
            {{ tab.text }}
          </button>
        </li>
      </ul>
    </nav>

    <div class="relative h-[95rem] w-screen md:h-[60rem]">
      <MainHomeTeamSlider :slides="slides" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ITeamSlide } from "~/features/types/shared";

type TNavTabType = "founders" | "teachers" | "vacancy" | "internship";

type TNavTab = { type: TNavTabType; text: string };

const tabs: TNavTab[] = [
  { type: "founders", text: "Основатели" },
  { type: "teachers", text: "Преподаватели" },
  { type: "vacancy", text: "Вакансии" },
  { type: "internship", text: "Стажировка" },
];

const currentTab = ref<TNavTabType>(tabs[0].type);

function handleSetTab(tab: TNavTabType) {
  currentTab.value = tab;
}

const slides: ITeamSlide[] = [
  {
    name: "Сергей Есенин",
    position: "Генеральный директор",
    img: "/img/person.png",
    alt: "Фотография Сергея Есенина",
  },
  {
    name: "Volvo",
    position: "Маскот",
    img: "/img/volvo.jpg",
    alt: "Фотография Volvo",
  },
  {
    name: "Сергей Есенин",
    position: "Генеральный директор",
    img: "/img/person.png",
    alt: "Фотография Сергея Есенина",
  },
  {
    name: "Volvo",
    position: "Маскот",
    img: "/img/volvo.jpg",
    alt: "Фотография Volvo",
  },
];
</script>

<style scoped lang="scss">
@import "~/styles/base/utilities.scss";

.underlined {
  @include underlined(white, black, 3);

  &-active {
    text-decoration-color: black;
  }
}
</style>
