<template>
  <article
    :class="[
      'flex min-h-[60rem] flex-col justify-between px-[4.1rem] pb-[3.6rem] pt-[4.6rem] w-[44.4rem] max-w-[90vw] rounded-semi-big',
      !color && !bgColor && 'borderline-transparent bg-white',
    ]"
    :style="{ color, backgroundColor: bgColor }"
  >
  {{ JSON.stringify([subscription, direction, experience, duration]) }}
    <div class="flex flex-col gap-[3.2rem] text-[1.6rem]">
      <div
        :class="['flex items-center gap-[1.1rem] text-black opacity-40 hover:opacity-100 ', bgColor && 'hover:text-white'] "
      >
        <NuxtIcon name="clock" />

        <span> 30 уроков, примерно неделя </span>
      </div>

      <CommonReusedCardStatus :bg-color="color">
        Топовый курс
      </CommonReusedCardStatus>

      <h4 class="text-[5.3rem] -tracking-[0.64px] leading-[100%] max-w-[30rem]">Основый JS и разбор полетов</h4>

      <p class="text-medium">Только по любой из подписок</p>
    </div>

    <CommonReusedCardBottom :color="color ?? colors.black" :bg-color="bgColor ?? '#fff'" />
  </article>
</template>

<script setup lang="ts">

import { colors } from "~/features/constants/colors.constants";
import { IColoredCourse } from "~/features/types/courses.types";

defineProps<IColoredCourse>();
</script>

<style scoped lang="scss"></style>
