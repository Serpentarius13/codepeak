<template>
  <ClientOnly>
    <div class="container">
      <PagedProfileAchievements />
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { courses } from "~/features/constants/courses.constants";
import { ITableRow } from "~/features/types/shared.types";

const router = useRouter();

onMounted(() => {
  if (process.env.NODE_ENV !== "development") router.push("/");
});

const table: ITableRow[] = [
  {
    title: "Доступ к платформе с курсами",
    values: ["Безлимитный", "Безлимитный", "Безлимитный"],
  },
  {
    title: "Количество доступных курсов",
    values: [
      { value: "~150 курсов", isBad: true },
      "~350 курсов",
      "~550 курсов",
    ],
  },
  {
    title: "Задачи в тренажере",
    values: [
      { value: "Доступно 20%", isBad: true },
      { value: "Доступно 50%", isBad: true },
      "Доступно 100%",
    ],
  },
  {
    title: "Наличие ментора",
    values: [{ value: "-", isBad: true }, { value: "-", isBad: true }, "Есть"],
  },
];
</script>

<style scoped lang="scss"></style>
