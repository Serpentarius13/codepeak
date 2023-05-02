<template>
  <section
    class="max-w-[111rem] flex-1 px-[6rem] py-[4.3rem] flex flex-col gap-[4.6rem] w-full"
  >
    <div class="flex gap-[2rem] items-center">
      <h2 class="subtitle">Задачи для выполнения</h2>

      <CommonNotification class="bg-white !text-black">
        Решенные задачи
      </CommonNotification>
    </div>

    <ul class="flex flex-col gap-[1.6rem] w-max-full">
      <li v-for="task in tasks" :key="task.id">
        <MainTasksItem v-bind="task" />
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { ITask } from "~/features/types/tasks";

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
