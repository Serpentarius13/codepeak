<template>
  <section class="container-big flex items-center justify-between pt-[7.5rem] xl:flex-col xl:gap-[2rem] xl:items-start">
    <h2 class="heading w-full max-w-[63rem] 2xl:max-w-[55rem]">
      Обучаем только самым нужным профессиям в России
    </h2>

    <ul
      class="flex h-[22rem] flex-wrap items-center gap-[2.4rem] 2xl:gap-[1.8rem] xl:gap-[1.6rem] md:flex-col md:flex-nowrap md:items-end"
    >
      <li v-for="quality in qualities" :key="quality.title">
        <Quality v-bind="quality" />
      </li>

      <li>
        <button
          class="flex h-full max-w-[20.9rem] flex-col justify-start gap-[4.2rem] py-[2.3rem] pl-[2.7rem] pr-[1.6rem]"
        >
          <div class="flex items-center gap-[0.6rem]">
            <h5 class="text-big">12</h5>

            <NuxtIcon name="arrow-top-right" class="aspect-square w-[2rem]" />
          </div>
          <p class="text-medium text-start">
            Больше аргументов за то, чтобы остаться
          </p>
        </button>
      </li>
    </ul>
  </section>
</template>

<script setup lang="tsx">
type TQuality = { title: string; text: string };

const qualities: TQuality[] = [
  {
    title: "Нам невыгодно",
    text: "Зачем нам потеть над репутацией, обучая людей Flash? Мы работаем только с тем, что востребовано на рынке",
  },

  {
    title: "Вам захочеться остаться",
    text: "Люди всегда хотели заработать больше денег. Дав им такую возможность — мы удержим их без обмана и хитростей",
  },
];

const Quality = ({ title, text }: TQuality) => (
  <article class="max-w-screen flex w-[44.4rem] flex-col gap-[3.2rem] py-[3.3rem] pl-[3.9rem] pr-[4.8rem]">
    <h5 class="text-biggest">{title}</h5>

    <p class="text-medium max-w-[35.7rem]">{text}</p>
  </article>
);
</script>

<style scoped lang="scss"></style>
