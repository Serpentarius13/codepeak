<template>
  <input
    type="text"
    inputmode="numeric"
    :class="[
      'borderline-transparent text-medium rounded-[0.8rem] bg-white p-[0.8rem] transition-all',
      error && 'border-red border-opacity-100',
    ]"
    v-model="model"
  />
</template>

<script setup lang="ts">
const model = defineModel({ required: true, default: "" });
</script>

<style scoped lang="scss"></style>
