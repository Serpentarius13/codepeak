<template>
  <label class="flex w-full flex-col gap-[0.8rem]">
    <span class="text-small text-start">
      {{ label }}
    </span>

    <slot />

    <CommonInputError :error="error" />
  </label>
</template>

<script setup lang="ts">
defineProps<{ label: string; error?: string | undefined }>();
</script>

<style scoped lang="scss"></style>
