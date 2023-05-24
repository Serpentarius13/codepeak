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

    <PagesHomeSubscriptionsTariffSubscriptions @add="handleAdd">
      <li>
        <PagesHomeSubscriptionsTariffCheckout
          :discount="discount"
          :name="currentTariff"
          :price="tariffs.find(t => t.name === currentTariff)!.price"
        />
      </li>
    </PagesHomeSubscriptionsTariffSubscriptions>
  </section>
</template>

<script setup lang="ts">
import { TTariffName } from "~/features/constants/tariffs.constants";
import { tariffs } from "~/features/constants/tariffs.constants";

const discount = "1500";

const currentTariff = ref<TTariffName>(tariffs[2].name);

function handleAdd(name: TTariffName) {
  currentTariff.value = name;
}
</script>

<style scoped lang="scss"></style>
