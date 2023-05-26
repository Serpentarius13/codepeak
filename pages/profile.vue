<template>
  <NuxtPage />
</template>

<script setup lang="ts">
definePageMeta({ middleware: "requires-auth" });
</script>

<style scoped lang="scss"></style>
