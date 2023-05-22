<template>
  <PagesCoursePage :lesson="route.query.lesson" />
</template>

<script setup lang="ts">
const route = useRoute();
</script>

<style scoped lang="scss"></style>
