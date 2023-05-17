<template>
  <article
    :class="[
      'grid w-full grid-cols-[0.3fr_0.7fr] gap-[6.4rem] xl:gap-[2rem] rounded-big lg:flex-col lg:flex ',
      !color && 'borderline-transparent',
    ]"
    :style="color && { backgroundColor: color, color: '#fff' }"
  >
    <NuxtImg
      class="h-full w-full rounded-big object-cover"
      src="/img/course.png"
      alt="Заставка курса"
    />

    <div class="flex w-full justify-between px-[6.4rem] py-[2.9rem] xl:gap-[2rem] xl:px-[3.5rem] sm:flex-col">
      <div class="flex max-w-[29.7rem] flex-col gap-[1.6rem]">
      

        <CommonReusedCardStatus :color="color">
          Топовый курс
        </CommonReusedCardStatus>

        <h4 class="heading-smaller">
          {{ name }}
        </h4>
      </div>

      <div class="flex items-start gap-[7.1rem] xl:gap-[3rem] md:flex-col">
        <MainCourseList name="Кураторы курса" :color="color">
          <li
            v-for="{ name, img } in authors"
            :key="name"
            class="flex items-center gap-[1.2rem]"
          >
            <NuxtImg
              :src="img"
              :alt="`Фотография ${name}`"
              width="30"
              height="30"
              class="rounded-full"
            />

            <span class="">
              {{ name }}
            </span>
          </li>
        </MainCourseList>

        <MainCourseList name="Прогресс" :color="color">
          <li class="flex items-center gap-[1.2rem]">
            <NuxtIcon name="flag" class="aspect-square w-[1.4rem]" />
            <span> {{ progress }}%</span>
          </li>
          <li>Отличный темп! Так держать!</li>
        </MainCourseList>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { colors } from "~/features/constants/colors.constants";
import { ICourse } from "~/features/types/courses.types";

const props = defineProps<ICourse & { color?: string }>();

interface ICourseAuthor {
  name: string;
  img: string;
}

const progress = 39;

const authors: ICourseAuthor[] = [
  { name: "Сергей Есенин", img: "/img/person.png" },
  { name: "Райан Гослинг", img: "/img/gosling.webp" },
];
</script>

<style scoped lang="scss"></style>
