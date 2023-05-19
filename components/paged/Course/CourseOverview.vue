<template>
  <section class="flex flex-col gap-[4.4rem]">
    <div class="container flex items-center gap-[1.6rem]">
      <h1 class="heading">С возвращением, Дмитрий!</h1>

      <CommonProfileAvatar />
    </div>

    <div class="relative">
      <CommonVideo
        videoUrl="https://www.youtube.com/watch?v=PmPkAAu_QF4"
        class="z-[110]"
      />

      <Transition name="fade">
        <div
          class="shadowed absolute left-0 top-0 z-[120] flex h-full w-full items-center justify-center bg-black bg-opacity-40"
          v-if="!isVideoStarted"
        >
          <button
            class="flex items-center justify-center rounded-full bg-transparent p-[1.4rem] text-white ring-1 ring-white hover:ring-4"
            @click="startVideo"
          >
            <NuxtIcon name="video/play" />
          </button>
        </div>
      </Transition>
    </div>
  </section>

  <section class="container mt-[7rem]">
    <ul class="flex flex-col gap-[5rem]">
      <li v-for="course in courses" :key="course.id">
        <MainCourseItem v-bind="course" />
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { courses } from "~/features/constants/courses.constants";

const isVideoStarted = ref<boolean>(false);

function startVideo() {
  isVideoStarted.value = true;

  window.dispatchEvent(new Event("video-start"));
}
</script>

<style lang="scss">
.shadowed {
  background: radial-gradient(
    ellipse at top,

    transparent 0%,
    rgba(0, 0, 0, 0.705) 70%
  );
}

html {
  scroll-snap-type: y mandatory;
  scroll-padding-top: 144px;
}

section {
  scroll-snap-align: end;
}
</style>
