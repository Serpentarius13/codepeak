<template>
  <div class="h-screen w-screen">
    <div class="w-[40rem]">
      <MainFormComponentsPayment :current-tariff="tariffs[0]" />
    </div>
  </div>
</template>

<script setup lang="ts">
//@ts-expect-error No types
import binking from "binking";
import { tariffs } from "~/features/constants/tariffs.constants";

const router = useRouter();

onMounted(() => {
  if (process.env.NODE_ENV !== "development") router.push("/");
});
</script>

<style scoped lang="scss"></style>
