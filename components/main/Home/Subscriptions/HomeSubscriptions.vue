<template>
  <section class="container-big flex flex-col gap-[10rem]">
    <div class="flex w-full justify-between">
      <div
        class="h-inherit w-[2.2rem] border-[1.25px] border-r-0 border-solid border-black"
      />

      <h2 class="heading max-w-[80%] text-center">
        Кастомная система <br />
        подписок - это удобно
      </h2>
      <div
        class="h-inherit w-[2.2rem] border-[1.25px] border-l-0 border-solid border-black"
      />
    </div>

    <ul class="flex w-full items-stretch gap-[2.5rem] flex-wrap justify-center">
      <li v-for="tariff in tariffs" :key="tariff.name">
        <MainHomeSubscriptionsItem v-bind="tariff" @add="handleAdd" />
      </li>

      <li>
        <MainHomeSubscriptionsCheckout
          :discount="discount"
          :name="currentTariff"
          :price="tariffs.find(t => t.name === currentTariff)!.price"
        />
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { colors } from "~/features/constants/colors";
import type { IColorTariff, TTariffName } from "~/features/types/tariff";

const tariffs: IColorTariff[] = [
  {
    name: "Dark",
    price: "2,590",
    coursesCount: 178,
    description: "только просмотр уроков, без контроля успехов",
    advantage: "тренажер",
    bgColor: colors.darkestBlack,
    color: "#fff",
  },
  {
    name: "Spotlight",
    price: "3,990",
    coursesCount: 224,
    description:
      "просмотр уроков, доступ к книгам, тренажер на повышение квалификации, помощь с резюме, собственное API",
    advantage: "составим резюме",
    bgColor: colors.blue,
    color: "#fff",
  },
  {
    name: "Sunlight",
    price: "10,000",
    coursesCount: 332,
    description:
      "все от предыдущих подписок + вызов ментора раз в день, гарантия трудоустройства",
    advantage: "трудоустрим",
    bgColor: colors.yellow,
    color: colors.darkestBlack,
  },
];

const discount = "1500";

const currentTariff = ref<TTariffName>(tariffs[2].name);

function handleAdd(name: TTariffName) {
  currentTariff.value = name;
}
</script>

<style scoped lang="scss"></style>
