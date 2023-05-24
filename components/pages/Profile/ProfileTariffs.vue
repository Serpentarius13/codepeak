<template>
  <section
    class="container-big relative z-[10] grid grid-cols-[0.2fr_0.3fr_0.3fr_0.3fr] grid-rows-[0.3fr_1fr] gap-x-[2.6rem] overflow-x-auto pt-[0.7rem] lg:grid-cols-3 lg:gap-x-[1.2rem]"
  >
    <div
      class="flex flex-col gap-[3.2rem] pr-[2rem] lg:col-span-4 lg:mb-[2rem] lg:items-center lg:pr-0"
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
        class="text-medium borderline-transparent flex gap-[0.5rem] rounded-semi-big p-[0.6rem] w-fit text-black transition-all child:rounded-semi-big child:px-[4.8rem] child:py-[0.6rem] child:transition-all xl:flex-col lg:w-full"
      >
        <button :class="[isMonth && activeClass]" @click="toggleDuration(true)">
          Месяц
        </button>

        <button
          :class="[!isMonth && activeClass]"
          @click="toggleDuration(false)"
        >
          год
        </button>
      </div>
    </div>

    <PagesProfileTariff
      v-for="tariff in tariffs"
      :key="tariff.price"
      class="h-full"
      v-bind="tariff"
      :is-month="isMonth"
    />

    <div
      class="col-span-4 flex w-full min-w-[90vw] flex-col gap-[10rem] pt-[6.6rem] !text-start md:gap-[5rem] sm:pt-[2rem]"
    >
      <CommonTable :data="table" caption="Ключевые функции" />
      <CommonTable :data="tableTwo" caption="Дополнительные гарантии" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { tariffs } from "~/features/constants/tariffs.constants";
import { ITableRow } from "~/features/types/shared.types";

const isMonth = ref<boolean>(true);

function toggleDuration(val: boolean) {
  isMonth.value = val;
}

const activeClass = "bg-black text-white";

const table: ITableRow[] = [
  {
    title: "Доступ к платформе с курсами",
    values: ["Безлимитный", "Безлимитный", "Безлимитный"],
  },
  {
    title: "Количество доступных курсов",
    values: [
      { value: "~150 курсов", isBad: true },
      "~350 курсов",
      "~550 курсов",
    ],
  },
  {
    title: "Задачи в тренажере",
    values: [
      { value: "Доступно 20%", isBad: true },
      { value: "Доступно 50%", isBad: true },
      "Доступно 100%",
    ],
  },
  {
    title: "Наличие ментора",
    values: [{ value: "-", isBad: true }, { value: "-", isBad: true }, "Есть"],
  },
];

const tableTwo: ITableRow[] = [
  {
    title: "Составление резюме",
    values: [{ value: "-", isBad: true }, "Есть", "Есть"],
  },
  {
    title: "Гарантия трудоустройства",
    values: [{ value: "-", isBad: true }, { value: "-", isBad: true }, "Есть"],
  },
];
</script>

<style scoped lang="scss"></style>
