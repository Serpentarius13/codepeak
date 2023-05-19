<template>
  <div id="player" class="w-full h-full" />
</template>

<script setup lang="ts">
import pjs from "~/features/lib/pjs";

onMounted(() => {
  pjs.then(() => {
    //@ts-expect-error undefined variable
    let player = new Playerjs({
      id: "player",
      file: "https://www.youtube.com/watch?v=CxzsKU_e2Js",
    });
  });
});
</script>

<style scoped lang="scss">


</style>
