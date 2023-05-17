<template>
  <div class="flex max-w-[18.8rem] flex-col gap-[2.2rem]">
    <span
      :class="[
        ' text-smallest flex  items-center justify-center rounded-biggest px-[1.6rem] py-[1rem] w-fit',
        color ? 'borderline-white text-white' : 'borderline-transparent',
      ]"
    >
      {{ name }}
    </span>

    <ul class="text-medium flex flex-col gap-[1.3rem]">
      <slot />
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps<{ color?: string; name: string }>();
</script>

<style scoped lang="scss"></style>
