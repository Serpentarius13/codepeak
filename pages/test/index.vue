<template>
  <ClientOnly>
    <PagedProfileHeader class="mt-[11.6rem] sm:mt-[10rem]" />
    <PagedProfileTariffs class="mt-[12rem] sm:mt-[3rem]" />

   
  </ClientOnly>
</template>

<script setup lang="ts">
import { courses } from "~/features/constants/courses.constants";
import { ITableRow } from "~/features/types/shared.types";

const router = useRouter();

definePageMeta({ layout: "profile-subs" });

onMounted(() => {
  if (process.env.NODE_ENV !== "development") router.push("/");
});

</script>

<style scoped lang="scss"></style>
