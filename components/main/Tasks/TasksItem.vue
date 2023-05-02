<template>
  <div
    class="bg-opacited flex w-full justify-between rounded-medium p-[2.4rem] md:flex-col md:gap-[2rem] max-w-screen"
  >
    <div class="flex flex-col gap-[1.6rem]">
      <div class="flex items-center gap-[2rem] md:flex-col md:items-start">
        <CommonRatingStars :stars="rating" level="easy" />

        <ul class="flex gap-[1.6rem] flex-wrap">
          <li>
            <MainTasksExperience
              :text="experience"
              :class="experienceMap[experience]"
            />
          </li>

          <li v-for="task in taskStats" :key="task.icon">
            <MainTasksStat v-bind="task" />
          </li>
        </ul>
      </div>

      <h3 class="subtitle">
        {{ name }}
      </h3>
    </div>

    <NuxtLink
      class="bg-opacited group flex aspect-square w-[6.6rem] cursor-pointer items-center justify-center rounded-small border-2 border-solid border-transparent hover:border-white md:h-[6.6rem] md:w-full"
      title="Открыть задачу"
      aria-label="Открыть задачу"
    >
      <NuxtIcon
        name="tasks/arrow"
        className="w-[2.4rem] aspect-square text-white  opacity-20  group-hover:opacity-80 "
      />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { ITaskStat } from "~/features/types/shared";
import { ITask, TExperience } from "~/features/types/tasks";

interface ITaskItem extends ITask {}

const props = defineProps<ITaskItem>();

const { views, completed, tryes } = props.statistic;

const experienceMap: Record<TExperience, string> = {
  advanced: "text-yellow",
  basic: "text-light-green",
  "basic+": "text-light-green",
};

const taskStats: ITaskStat[] = [
  { icon: "tasks/eye", stat: views },
  { icon: "tasks/star-outline", stat: completed },
  { icon: "tasks/stack", stat: tryes },
];
</script>

<style scoped lang="scss"></style>
