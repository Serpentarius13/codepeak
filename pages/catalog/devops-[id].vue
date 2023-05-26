<template>{{ JSON.stringify(course) }}</template>

<script setup lang="ts">
import { courses } from "~/features/constants/courses.constants";

const route = useRoute() as { params: { id: string } };

if (!route.params.id) createError({ message: "No course id was provided" });
const course = courses.find((c) => c.query === route.params.id);
</script>

<style scoped lang="scss"></style>
