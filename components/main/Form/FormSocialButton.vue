<template>
  <CommonButton
    variant="outline"
    size="medium"
    class="group w-full text-[1.9rem] font-bold"
    type="button"
  >
    <div class="flex items-center gap-[1rem]">
      <NuxtIcon
        :name="icon"
        class="text-white transition-all group-hover:text-black"
      />

      <span> {{ text }} </span>
    </div>
  </CommonButton>
</template>

<script setup lang="ts">
interface ISocialButton {
  icon: string;
  text: string;
}

defineProps<ISocialButton>();
</script>

<style scoped lang="scss"></style>
