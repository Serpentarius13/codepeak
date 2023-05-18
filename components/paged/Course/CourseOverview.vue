<template>
  <section class="flex flex-col gap-[4.4rem]">
    <div class="flex items-center gap-[1.6rem] container">
      <h1 class="heading">С возвращением, Дмитрий!</h1>

      <CommonProfileAvatar />
    </div>

    <div class="h-screen w-screen bg-blue" />
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

<style scoped lang="scss"></style>
