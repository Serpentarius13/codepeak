<template>
  <div class="container"><MainCourseItem v-bind="courses[0]" /></div>
</template>

<script setup lang="ts">
import { courses } from "~/features/constants/courses.constants";

const router = useRouter();

onMounted(() => {
  if (process.env.NODE_ENV !== "development") router.push("/");
});
</script>

<style scoped lang="scss"></style>
