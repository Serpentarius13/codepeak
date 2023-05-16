<template>
  <span> {{ price }}&#8381; </span>
</template>

<script setup lang="ts">
defineProps<{ price: number | string }>();
</script>

<style scoped lang="scss"></style>
