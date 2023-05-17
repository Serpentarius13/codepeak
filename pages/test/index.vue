<template>
  <ClientOnly> <MainCourseCard v-for="course in courses" v-bind="course" bg-color="blue" color="white" :key="course.id" />  </ClientOnly>
</template>

<script setup lang="ts">
import { courses } from "~/features/constants/courses.constants";

const router = useRouter();

onMounted(() => {
  if (process.env.NODE_ENV !== "development") router.push("/");
});
</script>

<style scoped lang="scss"></style>
