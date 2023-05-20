<template>
  <div class="h-screen w-screen">
    <div class="w-[40rem]">
      <MainFormComponentsPayment />
    </div>
  </div>
</template>

<script setup lang="ts">
//@ts-expect-error No types
import binking from "binking";

const router = useRouter();

onMounted(() => {
  if (process.env.NODE_ENV !== "development") router.push("/");
});
</script>

<style scoped lang="scss"></style>
