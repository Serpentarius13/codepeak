<template>
  <section class="container mt-[1.2rem] flex flex-col gap-[3rem]">
    <h1 class="heading-small">Оплата подписки</h1>
    <MainFormComponentsPayment :current-tariff="tariffs[0]" class="mx-auto" />
  </section>
</template>

<script setup lang="ts">
import { tariffs } from "~/features/constants/tariffs.constants";

definePageMeta({ auth: "user" });
</script>

<style scoped lang="scss"></style>
