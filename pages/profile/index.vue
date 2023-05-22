<template>
  <PagedProfileHeader class="mt-[11.6rem] sm:mt-[10rem]" />
  <PagedProfileTariffs class="mt-[12rem] sm:mt-[3rem]" />
</template>

<script setup lang="ts">
definePageMeta({ layout: "profile-subs", auth: "user"});
</script>

<style scoped lang="scss"></style>
