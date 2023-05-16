<template>
  <section
    class="flex w-full max-w-[111rem] flex-1 flex-col gap-[4.6rem] px-[6rem] py-[4.3rem]"
  >
    <div class="flex items-center gap-[2rem]">
      <h2 class="subtitle">Задачи для выполнения</h2>

      <CommonNotification class="bg-white !text-black">
        Решенные задачи
      </CommonNotification>
    </div>

    <ul class="w-max-full flex flex-col gap-[1.6rem]">
      <li v-for="task in tasks" :key="task.id">
        <MainSharedTasksItem v-bind="task" />
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { ITask } from "~/features/types/tasks.types";

const tasks: ITask[] = [
  {
    name: "Создайте массив из простых чисел",
    description:
      "Необходимо создать массив из простых чисел, допустим: 1,2,3,4,5,6. После выполнения задачи нажмите кнопку 'Тестировать'!",
    course: "javascript-axao",
    id: 1,
    experience: "basic",
    statistic: {
      views: 700,
      completed: 400,
      tryes: 200,
    },
    rating: "popular", // это топ/полезное: popular/basic+
  },
  {
    name: "Создайте массив из простых чисел",
    description:
      "Необходимо создать массив из простых чисел, допустим: 1,2,3,4,5,6. После выполнения задачи нажмите кнопку 'Тестировать'!",
    course: "javascript-axao",
    id: 2,
    experience: "basic+",
    statistic: {
      views: 500,
      completed: 400,
      tryes: 200,
    },
    rating: "basic+", // это топ/полезное: popular/basic+
  },
  {
    name: "Создайте массив из простых чисел",
    description:
      "Необходимо создать массив из простых чисел, допустим: 1,2,3,4,5,6. После выполнения задачи нажмите кнопку 'Тестировать'!",
    course: "c++",
    id: 3,
    experience: "advanced",
    statistic: {
      views: 500,
      completed: 400,
      tryes: 200,
    },
    rating: "basic+", // это топ/полезное: popular/basic+
  },
  {
    name: "Создайте массив из простых чисел",
    description:
      "Необходимо создать массив из простых чисел, допустим: 1,2,3,4,5,6. После выполнения задачи нажмите кнопку 'Тестировать'!",
    course: "c++",
    id: 3,
    experience: "advanced",
    statistic: {
      views: 500,
      completed: 400,
      tryes: 200,
    },
    rating: "basic+", // это топ/полезное: popular/basic+
  },
  {
    name: "Создайте массив из простых чисел",
    description:
      "Необходимо создать массив из простых чисел, допустим: 1,2,3,4,5,6. После выполнения задачи нажмите кнопку 'Тестировать'!",
    course: "c++",
    id: 3,
    experience: "advanced",
    statistic: {
      views: 500,
      completed: 400,
      tryes: 200,
    },
    rating: "basic+", // это топ/полезное: popular/basic+
  },
  {
    name: "Создайте массив из простых чисел",
    description:
      "Необходимо создать массив из простых чисел, допустим: 1,2,3,4,5,6. После выполнения задачи нажмите кнопку 'Тестировать'!",
    course: "c++",
    id: 3,
    experience: "advanced",
    statistic: {
      views: 500,
      completed: 400,
      tryes: 200,
    },
    rating: "basic+", // это топ/полезное: popular/basic+
  },
  {
    name: "Создайте массив из простых чисел",
    description:
      "Необходимо создать массив из простых чисел, допустим: 1,2,3,4,5,6. После выполнения задачи нажмите кнопку 'Тестировать'!",
    course: "c++",
    id: 3,
    experience: "advanced",
    statistic: {
      views: 500,
      completed: 400,
      tryes: 200,
    },
    rating: "basic+", // это топ/полезное: popular/basic+
  },
  {
    name: "Создайте массив из простых чисел",
    description:
      "Необходимо создать массив из простых чисел, допустим: 1,2,3,4,5,6. После выполнения задачи нажмите кнопку 'Тестировать'!",
    course: "c++",
    id: 3,
    experience: "advanced",
    statistic: {
      views: 500,
      completed: 400,
      tryes: 200,
    },
    rating: "basic+", // это топ/полезное: popular/basic+
  },

  {
    name: "Создайте массив из простых чисел",
    description:
      "Необходимо создать массив из простых чисел, допустим: 1,2,3,4,5,6. После выполнения задачи нажмите кнопку 'Тестировать'!",
    course: "c++",
    id: 3,
    experience: "advanced",
    statistic: {
      views: 500,
      completed: 400,
      tryes: 200,
    },
    rating: "basic+", // это топ/полезное: popular/basic+
  },
  {
    name: "Создайте массив из простых чисел",
    description:
      "Необходимо создать массив из простых чисел, допустим: 1,2,3,4,5,6. После выполнения задачи нажмите кнопку 'Тестировать'!",
    course: "c++",
    id: 3,
    experience: "advanced",
    statistic: {
      views: 500,
      completed: 400,
      tryes: 200,
    },
    rating: "basic+", // это топ/полезное: popular/basic+
  },
].map((el) => ({ ...el, rating: Math.ceil(Math.random() * 5) }));
</script>

<style scoped lang="scss"></style>
