<template>
  <header class="container-big relative mt-[4.8rem] text-center">
    <h1 class="heading-huge">Курс для программистов</h1>

    <div
      class="group absolute -bottom-[6rem] left-1/2 w-full -translate-x-1/2 -rotate-[2deg]"
    >
      <span
        class="relative rounded-[15rem] bg-blue px-[3.7rem] py-[1.7rem] text-[4.5rem] text-white md:text-[3rem]"
      >
        Основы JavaScript
        <NuxtIcon
          name="starly"
          class="absolute -top-[1.5rem] left-0 -rotate-[10deg] text-[#D6FF78] transition-all group-hover:!rotate-[360deg]"
        />
        <NuxtIcon
          name="starly"
          class="absolute -right-[1rem] bottom-0 rotate-[30deg] text-[#D6FF78] transition-all delay-150 duration-1000 group-hover:!rotate-[360deg]"
        />
      </span>
    </div>
  </header>

  <div
    class="mx-auto mb-[5rem] mt-[12.6rem] flex w-full items-center justify-center"
  >
    <CommonButton variant="blue" size="medium" v-if="userStore.user">
      Добавить курс
    </CommonButton>

    <NuxtLink
      href="/subscriptions"
      v-else
      class="text-big opacity-30 hover:opacity-100"
    >
      Требуется подписка Sunlight
    </NuxtLink>
  </div>

  <section class="container-big mt-[7.5rem] flex flex-col gap-[5rem]">
    <div
      class="grid w-full grid-cols-[0.6fr_0.3fr] justify-between md:flex md:flex-col md:gap-[3rem]"
    >
      <h2 class="heading">
        Мы отказываемся от коротких курсов для высасывания денег в пользу
        долговременного, качественного обучения
      </h2>

      <p class="text-medium max-w-[45rem]">
        С увеличением объёма знаний, которые требуются от специалиста
        JavaScript, делать курс менее чем на полгода — немыслимо
      </p>
    </div>

    <NuxtImg
      class="min-h-[94rem] w-full object-cover lg:aspect-video lg:min-h-0"
      height="940"
      src="img/course-img.png"
      alt="Картинка текстового редактора с кодом языка Swift"
    />
  </section>

  <section
    class="container-big mt-[13.4rem] flex flex-col gap-[10.1rem] px-[7.4rem] lg:px-[5rem] md:px-[3rem]"
  >
    <h2 class="heading text-center">Из остальных преимуществ</h2>

    <div>
      <CommonReusedBorderColumns
        class="grid-cols-[0.3fr_0.4fr_0.3fr]"
        cols="3"
      />
      <ul
        class="flex items-start justify-between xl:gap-[3rem] lg:flex-wrap lg:justify-center"
      >
        <li
          v-for="{ title, text } in advantages"
          :key="title"
          class="group flex max-w-[40rem] flex-col gap-[1.8rem] text-center transition-all hover:scale-110"
        >
          <h5 class="text-[2.8rem]">
            {{ title }}
          </h5>

          <p
            class="text-[2rem] leading-[140%] -tracking-[0.16px] opacity-40 transition-all group-hover:opacity-100"
          >
            {{ text }}
          </p>
        </li>
      </ul>
    </div>
  </section>

  <section class="container-big cards mt-[33.6rem] flex flex-col gap-[12.6rem]">
    <div class="flex items-end gap-[1rem] sm:flex-col sm:items-start">
      <h2 class="heading-huge">Структура курса</h2>

      <div
        class="relative h-[7.2rem] w-[12rem] -translate-y-[1rem]"
        tabindex="0"
      >
        <div
          v-for="i in 3"
          :key="i"
          :class="[
            'absolute top-0 block h-full w-[5.6rem] rounded-small ',
            i == 1 ? 'bg-blue' : 'borderline-transparent',
          ]"
          :style="{ left: `${i * 20}%`, zIndex: 3 - i }"
        />
      </div>
    </div>

    <ul class="structure text-medium flex justify-between md:flex-col">
      <li
        class="flex w-full flex-col items-center"
        v-for="(struct, ix) in structure"
        :key="ix"
      >
        <div
          v-for="(str, ix) in struct"
          :key="str"
          :class="[
            'w-full rounded-big border-[1px] py-[4rem]  text-center leading-[110%] lg:px-[1rem]',
            ix == 1 && 'border-[1px] border-blue',
            ix == 2 && 'bg-blue text-white',
          ]"
        >
          {{ str }}
        </div>
      </li>
    </ul>
  </section>

  <section class="container-big mt-[12.9rem]">
    <CommonReusedBorderColumns class="grid-cols-[1fr_0.4fr_0.4fr]" cols="3" />

    <div class="flex justify-between md:flex-col">
      <div class="flex max-w-[85rem] flex-col gap-[5.8rem] md:gap-[3rem]">
        <h2 class="heading max-w-[70%]">
          Официальные партнеры XSLAB по вопросам трудоустройства выпускников
        </h2>

        <CommonIconsSlack />
      </div>

      <div
        class="text-big flex gap-[11.7rem] xl:gap-[7rem] lg:gap-[4rem] md:flex-wrap"
      >
        <p class="max-w-[32.5rem]">
          >68% выпускников устраиваются на работу в течение прохождения курса
        </p>
        <p class="max-w-[28.3rem]">
          средняя зарплата выпускника наших курсов около 48 тысяч рублей
        </p>
      </div>
    </div>
  </section>

  <section
    class="container-big mt-[23.1rem] grid min-h-[100rem] grid-cols-2 gap-[12rem] xl:gap-[6rem] lg:flex lg:flex-col lg:gap-[2rem]"
  >
    <div class="group relative">
      <NuxtImg
        src="/img/person.png"
        alt="Фотография преподавателя"
        height="1000"
        class="h-full w-full object-cover"
      />

      <NuxtIcon
        name="starly"
        class="absolute -right-[8%] -top-[5%] aspect-square w-[16.8rem] rotate-45 stroke-black stroke-[0.5px] text-white transition-all duration-300 group-hover:rotate-[360deg] lg:right-0 lg:w-[8rem]"
      />
      <NuxtIcon
        name="starly"
        class="absolute -bottom-[5%] -left-[8%] aspect-square w-[16.8rem] rotate-45 stroke-black stroke-[0.5px] text-white transition-all duration-700 group-hover:rotate-[360deg] lg:left-0 lg:w-[8rem]"
      />
    </div>

    <div class="flex h-full flex-col justify-between">
      <div
        class="flex flex-col gap-[4.5rem] pt-[10.5rem] lg:gap-[2rem] lg:pt-[3rem]"
      >
        <figure class="flex items-center gap-[1.4rem]">
          <NuxtImg
            src="/img/person.png"
            width="92"
            height="92"
            class="aspect-square w-[6rem] rounded-full lg:w-[9.2rem]"
          />
          <h2 class="heading lg:text-[7rem] md:text-[5rem]">
            Александр Пушкин
          </h2>
        </figure>

        <div class="text-big w-full [&>*]:px-[3.6rem] [&>*]:py-[4.2rem]">
          <p>Ведущий методологист XSLAB, Сеньор-разработчик Java</p>
          <p>Ведущий методологист XSLAB, Сеньор-разработчик Java</p>
        </div>
      </div>

      <ul
        class="grid w-[55rem] max-w-full grid-cols-2 gap-[8rem] xl:gap-[6rem] lg:gap-[3.5rem]"
      >
        <li v-for="{ num, text } in teacherPerks" :key="num">
          <div class="flex flex-col gap-[1rem]">
            <h5 class="heading">
              {{ num }}
            </h5>
            <p class="text-big">
              {{ text }}
            </p>
          </div>
        </li>

        <li>
          <button
            class="borderline-transparent flex items-center gap-[0.6rem] rounded-big px-[3.8rem] py-[3rem] text-[2.8rem]"
          >
            <span> Статьи </span>
            <NuxtIcon name="tasks/arrow" class="-rotate-[45deg]" />
          </button>
        </li>
      </ul>
    </div>
  </section>

  <section
    class="container-big mt-[19rem] flex flex-col gap-[33.1rem] lg:mt-[10rem] lg:gap-[10rem] md:mt-[8rem] md:gap-[5rem] sm:mt-[4rem]"
  >
    <h2 class="heading-huge text-center">Курсы, похожие на эти</h2>

    <div class="flex justify-between 2xl:flex-col 2xl:gap-[3rem]">
      <div class="flex flex-col gap-[3rem]">
        <h5 class="text-big">JavaScript</h5>

        <div class="flex gap-[2rem] lg:hidden">
          <MainCourseCard
            v-for="course in courses.slice(0, 2)"
            :key="course.id"
            v-bind="course"
          />
        </div>

        <div class="hidden w-[95vw] lg:block">
          <CommonSwiperCourses :courses="courses" />
        </div>
      </div>

      <div class="flex flex-col gap-[3rem]">
        <h5 class="text-big">От А. Пушкина</h5>
        <MainCourseCard v-bind="courses[0]" />
      </div>
    </div>
  </section>
</template>

<script setup lang="tsx">
import { courses } from "~/features/constants/courses.constants";
import { useUserStore } from "~/stores/useUserStore.js";

type TAdvantage = { title: string; text: string };

const advantages: TAdvantage[] = [
  {
    title: "Наличие ментора",
    text: "Человек, который поможет вам разобрать сложную задачу и направить вектор обучения",
  },
  {
    title: "Собственный тренажер",
    text: "Не придется искать задачи, чтобы закреплять изученную информацию",
  },
  {
    title: "Проработанная программа",
    text: "Курс подготовлен по самым новым технологиям и принципам. Мы успеем охватить самые важные аспекты",
  },
];

const structure: string[][] = [
  ["Основы JavaScript"],
  ["Теоретический блок"],
  ["Закрепление полученных знаний", "Отработка на тренажере"],
  ["Готовим проект в портфолио", "Ищем работу для вас", "Устраиваем на работу"],
  ["Фидбэк и направление!"],
];

type TTeacherPerk = { num: number | string; text: string };

const teacherPerks: TTeacherPerk[] = [
  { num: "7", text: "Лет успешно работает в нашей команде" },
  { num: ">100.000", text: "Человек прошли через курсы, которые создал Саша" },
  { num: "12", text: "Лет работает JS-программистом" },
];

const userStore = useUserStore();
</script>

<style scoped lang="scss">
.cards {
  &:hover,
  .block:hover,
  &:focus-within {
    .block {
      @apply transition-all duration-200;
      &:nth-child(2) {
        @apply translate-x-[70%] bg-blue opacity-40 delay-100 hover:opacity-100;
      }

      &:nth-child(3) {
        @apply translate-x-[130%] bg-blue opacity-20 duration-100 hover:opacity-100;
      }
    }
  }
}
</style>
