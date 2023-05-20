<template>
  <ul class="flex w-full flex-wrap items-stretch justify-center gap-[1.4rem]">
    <li v-for="tariff in tariffs" :key="tariff.name">
      <MainTariffItem v-bind="tariff" @add="handleAdd" />
    </li>

    <slot />
  </ul>
</template>

<script setup lang="ts">
import { TTariffName, tariffs } from "~/features/constants/tariffs.constants";

const emit = defineEmits<{ add: [tariff: TTariffName] }>();

function handleAdd(tariff: TTariffName) {
  emit("add", tariff);
}
</script>

<style scoped lang="scss"></style>
