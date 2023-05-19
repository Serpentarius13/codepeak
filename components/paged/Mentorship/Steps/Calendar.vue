<template>
  <ul class="flex w-screen max-w-[111rem] justify-between flex-wrap xl:px-[3rem] lg:px-[2rem] lg:items-start">
    <li
      v-for="(date, ix) in week"
      class="flex flex-col items-center gap-[2.4rem]"
    >
      <div class="grid grid-rows-3 gap-[0.5rem] text-center">
        <span class="text-[1.5rem] opacity-50">
          {{ dayNames[ix] }}
        </span>
        <h4 class="text-medium font-bold">
          {{ days[date.getDay()] }}
        </h4>

        <span class="text-[1.5rem] opacity-50">
          {{ date.getDate() }} {{ shrinkMonthName(months[date.getMonth()]) }}
        </span>
      </div>
      <ul class="flex flex-col gap-[1.4rem]">
        <li v-for="hour in 7">
          <button
            :class="[
              'text-small rounded-[1.6rem] px-[2.4rem] py-[1.2rem] transition-all',
              makeTime(hour) === selected.time &&
                date === selected.date &&
                'bg-blue text-white',
            ]"
            @click="emit('date', { time: `${makeTime(hour)}`, date: date })"
          >
            {{ `~${makeTime(hour)}` }}
          </button>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { days, months } from "~/features/constants/dates.constants";
import { createWeek, shrinkMonthName } from "~/features/utils/dates.js";

const week = createWeek(new Date());

type TDateValues = { time: string; date: Date };

const emit = defineEmits<{ date: [TDateValues] }>();

const props = defineProps<{ selected: TDateValues }>();

const dayNames = ["Сегодня", "Завтра", "Послезавтра"];

function makeTime(hour: number) {
  return `1${hour}:00`;
}
</script>

<style scoped lang="scss"></style>
