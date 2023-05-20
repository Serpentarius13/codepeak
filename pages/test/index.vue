<template>
  <div class="h-screen w-screen">
    <CommonLoading size="32" duration="1000" />
  </div>
</template>

<script setup lang="ts">
const router = useRouter();

onMounted(() => {
  if (process.env.NODE_ENV !== "development") router.push("/");
});
</script>

<style scoped lang="scss"></style>
