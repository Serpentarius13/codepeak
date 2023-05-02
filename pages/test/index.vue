<template>
  <main class="container">
    <CommonButton variant="blue" size="medium"> Text </CommonButton>
    <CommonButton variant="filled" size="medium"> Text </CommonButton>
    <CommonButton variant="outline" size="small"> Text </CommonButton>
  </main>
</template>

<script setup lang="ts">
const router = useRouter();

onMounted(() => {
  if (process.env.NODE_ENV !== "development") router.push("/");
});
</script>

<style scoped lang="scss"></style>
