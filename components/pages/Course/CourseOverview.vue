<template>
  <section class="snappy flex flex-col gap-[4.4rem]">
    <div class="container flex items-center gap-[1.6rem]">
      <h1 class="heading">С возвращением, Дмитрий!</h1>

      <CommonProfileAvatar />
    </div>

    <CommonVideoLoading
      videoUrl="https://www.youtube.com/watch?v=PmPkAAu_QF4"
    
    />
  </section>

  <section class="container mt-[7rem]">
    <ul class="flex flex-col gap-[5rem]">
      <li v-for="course in courses" :key="course.id">
        <MainCourseItem v-bind="course" />
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { courses } from "~/features/constants/courses.constants";
</script>

<style scoped lang="scss">
.snappy {
  scroll-snap-align: end;
}

:global(html) {
  scroll-snap-type: y proximity;
  scroll-padding-top: 144px;
}
</style>
