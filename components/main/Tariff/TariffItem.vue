<template>
  <article
    class="flex min-h-[67.6rem] max-w-[44.3rem] flex-col justify-between rounded-semi-big px-[4.3rem] py-[3.6rem] md:max-w-[95vw] md:gap-[2rem] md:px-[2rem] md:py-[3rem]"
    :style="{ backgroundColor: bgColor, color }"
  >
    <div class="flex flex-col gap-[5rem]">
      <div
        class="borderline-whute flex w-fit items-center justify-center rounded-biggest px-[2.2rem] py-[1.1rem] text-[1.6rem]"
      >
        <span class="w-full text-center">
          {{ tariffMap[name] }}
        </span>
      </div>

      <h4
        class="pl-[1.1rem] text-[7.8rem] leading-[110%] -tracking-[0.8px] md:text-[5.5rem]"
      >
        {{ name }}
      </h4>

      <ul class="grid w-full grid-cols-[0.7fr_1fr] gap-[4rem]">
        <li
          v-for="({ name, text }, ix) in perks"
          :key="perk.name"
          :class="[ix === perks.length - 1 && 'col-span-2']"
        >
          <div class="flex flex-col gap-[0.4rem]">
            <span class="text-[1.5rem] opacity-30">{{ name }}</span>

            <span class="text-big nowrap"> {{ text }}</span>
          </div>
        </li>
      </ul>
    </div>

    <div class="flex flex-col gap-[2.6rem]">
      <div class="flex items-center gap-[1.6rem]">
        <span
          class="text-big flex items-center justify-center rounded-biggest bg-white px-[3.2rem] py-[1.2rem] text-black"
        >
          {{ price }} <CommonRuble />
        </span>

        <span class="text-[1.5rem] opacity-30"> за месяц </span>
      </div>

      <div
        class="text-big flex items-center gap-[9rem] md:flex-col md:items-start md:gap-[3rem]"
      >
        <button class="underline-span" @click="handleAdd">добавить</button>

        <button class="underline-span">подробнее</button>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import {
  TTariffName,
  IColorTariff,
} from "~/features/constants/tariffs.constants";

import { makeEnding } from "~/features/utils/makeEnding";

type TPerk = { name: string; text: string };

const tariffMap: Record<TTariffName, string> = {
  Dark: "Базовая подписка",
  Spotlight: "Улучшенная подписка",
  Sunlight: "Топовый вариант",
};

const emit = defineEmits<{ (e: "add", tariff: TTariffName): void }>();

const props = defineProps<IColorTariff>();

const perks: TPerk[] = [
  {
    name: "включает в себя",
    text: `${props.coursesCount} курс${makeEnding(props.coursesCount)}`,
  },
  { name: "преимущество", text: props.advantage },
  { name: "что дает?", text: props.description },
];

function handleAdd() {
  emit("add", props.name);
}
</script>

<style scoped lang="scss">
@import "~/styles/base/utilities.scss";
.underline-span {
  --bg-color: v-bind(props.bgColor);

  @include underlined(var(--bg-color), #fff, 1);
}

.nowrap {
  white-space: nowrap;
}
</style>
