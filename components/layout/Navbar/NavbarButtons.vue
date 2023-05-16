<template>
  <nav class="flex items-center gap-[3.2rem]">
    <NuxtLink to="/profile/notifications">
      <NuxtIcon
        name="bell"
        class="'w-[2rem] aspect-square text-white opacity-30 hover:opacity-100"
      />
    </NuxtLink>
    <CommonProfileAvatar />
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
