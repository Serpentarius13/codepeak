<template>
  <div class="flex flex-col gap-[1rem]">
    <slot />
    <Transition name="fade">
      <span v-if="error" class="text-bold text-[1.6rem] text-red">
        {{ error === "Required" ? "Обязательное поле" : error }}
      </span>
    </Transition>
  </div>
</template>

<script setup lang="ts">
defineProps<{ error?: string | undefined | null }>();
</script>

<style scoped lang="scss"></style>
