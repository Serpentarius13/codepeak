<template>
  <section
    class="max-w-screen container flex min-h-screen flex-col gap-[2.6rem]"
  >
    <div class="flex items-center gap-[2.5rem]">
      <div class="flex items-center gap-[1.6rem]">
        <NuxtIcon name="achievement" />
        <h2 class="text-big">Достижения</h2>
      </div>

      <button
        class="text-small z-[10] text-blue opacity-80 hover:opacity-100 active:opacity-100"
        @click="toggleAchievements"
      >
        {{ isAchievementsShowing ? "Скрыть раздел" : "Показать достижения" }}
      </button>
    </div>

    <TransitionGroup tag="ul" class="griddy">
      <li
        v-for="achi in achievements"
        :key="achi.progress"
        :style="{
          transitionDelay: `${makeRandomNumber(3) * 100}ms`,
        }"
        v-if="isAchievementsShowing"
      >
        <PagesProfileAchievementsAchievement v-bind="achi" />
      </li>
    </TransitionGroup>
  </section>
</template>

<script setup lang="ts">
import { IAchievement } from "~/features/types/shared.types";

const titles = [
  "Посмотреть 5 курсов",
  "Закрыть курсовую работу",
  "Заполнить профиль больше чем на 80%",
  "Закончить просмотр первого курса",
];

function makeRandomNumber(to: number) {
  return Math.ceil(Math.random() * to);
}

const achievements: IAchievement[] = titles
  .map((title) => ({
    min: 1,
    max: 10,
    progress: makeRandomNumber(10),
    img: `/img/achievements/${makeRandomNumber(4)}.png`,
    alt: `Картинка достижения ${title}`,
    title,
  }))
  .reduce((acc, cur) => [...acc, ...acc, ...acc, cur], []);

const isAchievementsShowing = ref<boolean>(false);

function toggleAchievements() {
  isAchievementsShowing.value = !isAchievementsShowing.value;
}
</script>

<style scoped lang="scss">
.griddy {
  @apply grid gap-[2.6rem];

  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}

.v-enter-from,
.v-leave-to {
  @apply -translate-x-[10rem] -translate-y-[2rem] scale-[1.1] opacity-0;
}

.v-enter-active,
.v-leave-active {
  transition: 0.25s ease all;
}
</style>
