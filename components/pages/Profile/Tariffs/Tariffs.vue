<template>
  <section
    class="container-big relative z-[50] flex flex-col gap-[10rem] lg:gap-[4rem]"
  >
    <PagesProfileTariffsToggler
      :handleDuration="setDuration"
      :isMonth="isMonth"
      class="mt-[4rem] hidden lg:mt-[2rem] lg:flex"
    />
    <CommonTable :data="table" caption="Ключевые функции">
      <template #thead>
        <PagesProfileTariffsToggler
          class="pb-[4rem] lg:hidden"
          :handleDuration="setDuration"
          :isMonth="isMonth"
        />
      </template>

      <template #tdata>
        <td
          v-for="tariff in tariffs"
          :key="tariff.price"
          class="max-w-[15vw] pb-[3rem]"
        >
          <LazyPagesProfileTariffsProfileTariff
            v-bind="tariff"
            :is-month="isMonth"
            class="!max-w-[23vw] lg:!max-w-[30vw]"
          />
        </td>
      </template>
    </CommonTable>

    <CommonTable :data="tableTwo" caption="Дополнительные гарантии" />
  </section>
</template>

<script setup lang="ts">
import { tariffs } from "~/features/constants/tariffs.constants";
import { ITableRow } from "~/features/types/shared.types";

const isMonth = ref<boolean>(true);

function setDuration(isMonthe: boolean = true) {
  isMonth.value = isMonthe;
}

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
