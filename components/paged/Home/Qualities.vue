<template>
  <section
    class="container-big flex items-center justify-between pt-[7.5rem] xl:flex-col xl:items-start xl:gap-[2rem]"
  >
    <h2 class="heading w-full max-w-[62.5rem] 2xl:max-w-[55rem]">
      Обучаем только самым нужным профессиям в России
    </h2>

    <ul
      class="flex min-h-[22rem] w-full max-w-[95vw] flex-wrap items-center justify-end gap-[2.4rem] 2xl:gap-[1.8rem] xl:gap-[1.6rem] md:flex-col  md:items-start md:justify-center"
    >
      <li v-for="{ title, text } in qualities" :key="title" class="max-w-full">
        <article class="max-w-screen flex h-full w-[44.4rem] flex-col gap-[3.2rem] py-[3.3rem] pl-[3.9rem] pr-[4.8rem] lg:p-0 md:max-w-[95vw] borderline-transparent rounded-semi-big">
          <h5 class="text-biggest">{{ title }}</h5>
      
          <p class="text-medium max-w-[35.7rem] md:max-w-[90vw]">{{ text }}</p>
        </article>
      </li>

      <li class="md:w-full flex justify-end">
        <button
          class="flex h-full max-w-[20.9rem] flex-col justify-start gap-[4.2rem] py-[2.3rem] pl-[2.7rem] pr-[1.6rem] md:self-end"
        >
          <div class="flex items-center gap-[0.6rem]">
            <h5 class="text-big">12</h5>

            <NuxtIcon
              name="tasks/arrow"
              class="aspect-square w-[2rem] -rotate-45"
            />
          </div>
          <p class="text-medium max-w-[90%] text-start">
            Больше аргументов за то, чтобы остаться
          </p>
        </button>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
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

</script>

<style scoped lang="scss"></style>
