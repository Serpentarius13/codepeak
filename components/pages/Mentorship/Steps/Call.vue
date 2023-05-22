<template>
  <section
    class="max-w-screen flex w-[40rem] flex-col items-center gap-[3.2rem]"
  >
    <figure class="flex items-center gap-[1.6rem]">
      <NuxtImg
        src="/img/person.png"
        alt="Фотография ментора Владимира Маяковского"
        width="46"
        height="46"
        class="aspect-square w-[4.6rem] rounded-full"
      />

      <div class="flex flex-col gap-[0.3rem]">
        <h3 class="text-medium">Владимир Маяковский</h3>

        <span class="text-[1.4rem] opacity-50"> Специалист JavaScript </span>
      </div>
    </figure>

    <div class="flex w-full flex-col items-end gap-[1rem]">
      <button
        class="group flex w-full items-center justify-between px-[1.7rem] py-[1.1rem]"
        @click="copy"
      >
        <div class="flex items-center gap-[0.9rem]">
          <NuxtIcon name="discord" class="text-blue" />
          <span class="text-small"> {{ link }} </span>
        </div>

        <NuxtIcon
          name="link"
          class="opacity-30 transition-all group-hover:opacity-100"
        />
      </button>

      <span class="text-small opacity-50"> Просто скопируйте ссылку </span>
    </div>
  </section>
</template>

<script setup lang="ts">
const link = "discord.com/invite/mbdJymTe5P";


function copy() {
  navigator.clipboard.writeText(link)
}
</script>

<style scoped lang="scss"></style>
