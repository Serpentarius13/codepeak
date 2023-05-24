<template>
  <div class="h-screen w-screen">
    <div class="w-[40rem]">
      <MainFormComponentsPayment :current-tariff="tariffs[0]" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { tariffs } from "~/features/constants/tariffs.constants";
import toaster from "vue-toastification";

const router = useRouter();

const { $toast } = useNuxtApp();

onMounted(() => {
  if (process.env.NODE_ENV !== "development") router.push("/");

  $toast.success("!");
});
</script>

<style scoped lang="scss"></style>
