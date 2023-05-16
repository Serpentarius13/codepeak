<template>
  <section class="wrap">
    <div class="scene" ref="sceneRef"></div>
    <div class="viewer" ref="viewerRef"></div>
  </section>
</template>

<script setup lang="ts">
type TDivRef = HTMLDivElement | null;
const sceneRef = ref<TDivRef>(null);
const viewerRef = ref<TDivRef>(null);

const coordsListener = (e: MouseEvent) => {
  if (!viewerRef.value) return;

  const target = e.target as HTMLDivElement;

  const halfSize = viewerRef.value.offsetWidth / 2;
  const rect = target.getBoundingClientRect();
  const x = e.clientX - rect.left - halfSize;
  const y = e.clientY - rect.top - halfSize;

  viewerRef.value.style.transform = "translate(" + x + "px," + y + "px)";
  viewerRef.value.style.backgroundPosition = -x + "px" + " " + -y + "px";
};

onMounted(() => {
  if (!sceneRef.value || !viewerRef.value) return;

  console.log("fired");

  sceneRef.value.addEventListener("mousemove", coordsListener);
});
</script>

<style scoped lang="scss">
$width: 100vw;
$height: 100vh;

$background: url("/img/home-image.png") 50% 50% no-repeat;
.wrap {
  width: $width;
  height: $height;

  @apply relative cursor-pointer overflow-hidden;
}
.scene {
  width: $width;
  height: $height;

  background: $background;
  background-size: $width $height;

  @apply absolute inset-0 m-auto;
  filter: blur(38px);
}
.viewer {
  background: $background;
  background-size: $width $height;

  @apply pointer-events-none z-[5] aspect-square w-[30rem] rounded-full opacity-0;

  box-shadow: inset 0 0 12px;

  transition: opacity 0.25s ease;
}
.wrap:hover .viewer {
  @apply opacity-100;
}
</style>
