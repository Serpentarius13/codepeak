<template>
  <section
    class="container-big grid min-h-[115rem] grid-cols-[0.65fr_0.35fr]  gap-[6.4rem] xl:flex xl:flex-col"
  >
    <NuxtImg
      src="/img/platform-video.png"
      alt="XSLAB платформа"
      class="h-full flex-1 rounded-semi-big w-full"
    />

    <div
      class="flex min-h-[115rem] flex-col justify-between xl:min-h-0 xl:flex-row xl:gap-[3rem] md:flex-col "
    >
      <div class="flex flex-col gap-[6rem]">
        <h2 class="heading">
          Наша гордость.
          <br />
          Платформа
        </h2>

        <Perks />
      </div>

      <div class="flex flex-col gap-[2.6rem] pb-[6rem]">
        <CommonButton variant="blue" size="medium">
          Демо-режим платформы</CommonButton
        >
        <CommonButton variant="outline" size="medium">
          О создании платформы
        </CommonButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="tsx">
const perks: string[] = [
  "самое важное — опыт. Именно этим мы руководствовались, создавая нашу платформу",
  "удобство платформы это отличительный признак команды XSLAB",
  "создание платформы заняло более года, её создавали ведущие специалисты страны ",
];

const Perks = () => (
  <ul class="max-w-screen flex w-[35.5rem] flex-col gap-[4rem]">
    {perks.map((perk, ix) => (
      <li key={ix} class="grid grid-cols-[0.1fr_1fr] items-center gap-[2.2rem]">
        <div class="borderline text-big  block flex aspect-square w-[3.6rem] items-center justify-center rounded-full">
          {ix + 1}
        </div>

        <p class="text-medium">{perk} </p>
      </li>
    ))}
  </ul>
);
</script>

<style scoped lang="scss"></style>
