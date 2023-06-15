<template>
  <section class="container mt-[1.2rem] flex flex-col gap-[3rem]">
    <h1 class="heading-small">Оплата подписки</h1>
    <MainFormComponentsPayment
      :current-tariff="
        tariffs.find((t) => t.name === route.query.course) || tariffs[0]
      "
      class="mx-auto"
    />
  </section>
</template>

<script setup lang="ts">
import { tariffs } from "~/features/constants/tariffs.constants";

const route = useRoute();
</script>

<style scoped lang="scss"></style>
