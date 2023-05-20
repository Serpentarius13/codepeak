<template>
  <section class="container mt-[8.2rem] flex flex-col gap-[5rem]">
    <h1 class="heading-small">
        Оплата подписки
    </h1>
    <MainFormComponentsPayment :current-tariff="tariffs[0]" class="mx-auto" />
  </section>
</template>

<script setup lang="ts">
import { tariffs } from "~/features/constants/tariffs.constants";
</script>

<style scoped lang="scss"></style>
