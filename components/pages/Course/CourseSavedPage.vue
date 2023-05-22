<template>
  <section class="container-big griddy grid gap-[3rem]">
    <MainCourseCard
      v-for="course in dupl(courses)"
      v-bind="course"
      :key="course.id"
    />
  </section>
</template>

<script setup lang="ts">
import { courses } from "~/features/constants/courses.constants";

const dupl = <T>(arr: T[]): T[] =>
  Array.from(Array(5))
    .map(() => arr)
    .flat(1);

console.log(dupl(courses));
</script>

<style scoped lang="scss">
.griddy {
  grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
}
</style>
