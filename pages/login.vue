<template>
  <main class="container">
    <MainFormComponentsLogin />
  </main>
</template>

<script setup lang="ts">
definePageMeta({ middleware: "requires-guest" });
</script>

<style scoped lang="scss"></style>
