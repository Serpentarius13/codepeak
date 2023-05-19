<template>
  <div id="player" />
</template>

<script setup lang="ts">
import pjs from "~/features/lib/pjs";

const props = defineProps<{ videoUrl: string }>();

onMounted(() => {
  pjs.then(() => {
    //@ts-expect-error undefined variable
    const player = new Playerjs({
      id: "player",
      file: props.videoUrl,
    });

    window.addEventListener("video-start", () => {
      player.api("play");
      player.api("play");
    });
  });
});
</script>

<style scoped lang="scss"></style>
