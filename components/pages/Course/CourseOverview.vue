<template>
  <section class="flex min-h-full w-full flex-col gap-[4.4rem]">
    <div class="video-container z-[600] flex flex-col gap-[2rem]">
      <div class="container flex items-center gap-[1.6rem]">
        <h1 class="heading">С возвращением, Дмитрий!</h1>
        <CommonProfileAvatar />
      </div>

      <div
        class="relative flex aspect-video h-[85vh] w-screen overflow-hidden video-box"
        ref="videoContainer"
        @mouseenter="openNav"
        @mouseleave="closeNav"
      >
        <video
          class="video"
          poster="https://vjs.zencdn.net/v/oceans.png"
          ref="videoRef"
          @click.self="handlePlaying"
        >
          <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4" />
          <source src="//vjs.zencdn.net/v/oceans.webm" type="video/webm" />

          <p class="vjs-no-js">
            To view this video please enable JavaScript, and consider upgrading
            to a web browser that
            <a href="https://videojs.com/html5-video-support/" target="_blank"
              >supports HTML5 video</a
            >
          </p>
        </video>

        <Transition name="nav">
          <div
            class="absolute bottom-0 left-0 min-h-[10rem] w-full max-w-full bg-white bg-opacity-40 p-[2rem]  "
            v-if="isNavOpened"
          >
            <nav class="flex items-center gap-[2.4rem] flex-wrap md:justify-end ">
              <button @click="handlePlaying">
                <NuxtIcon
                  :name="controls.isPlaying ? 'video/pause' : 'video/play'"
                />
              </button>

              <div class="group relative">
                <Transition name="pop">
                  <ul
                    v-if="isPlaybackOpened"
                    class="borderline-transparent text-big absolute -top-[50vh] left-[40%] z-[2] flex flex-col gap-[1.2rem] rounded-small bg-white py-[1rem]"
                  >
                    <li
                      v-for="playback in playbacks"
                      :key="playback"
                      :class="[
                        'h-full w-full bg-opacity-30 px-[1rem] py-[0.25rem] hover:bg-gray-300 hover:text-black',
                        playback === controls.playback &&
                          'bg-black !bg-opacity-100 text-white',
                      ]"
                    >
                      <button
                        @click="handlePlayback(playback)"
                        class="h-full w-full"
                      >
                        {{ playback }}
                      </button>
                    </li>
                  </ul>
                </Transition>
                <button
                  @click="handleOpenPlayback"
                  class="flex h-full items-center gap-[1rem]"
                >
                  <span class="text-big flex items-center justify-center">
                    {{ controls.playback }}x
                  </span>
                  <NuxtIcon
                    name="video/speed"
                    class="!w-[3rem] group-hover:opacity-100"
                  />
                </button>
              </div>
              <label class="relative flex flex-1 items-center gap-[1rem]">
                <button @click="handleOpenVolume" @focus="handleOpenVolume">
                  <NuxtIcon :name="volumeIconComputed" />
                </button>

                <div class="relative flex w-[20rem] items-center md:w-[10rem]">
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="any"
                    v-model="controls.volume"
                    class="range z-[1] w-full"
                    ref="volumeRef"
                  />

                  <progress
                    class="absolute left-0 top-1/2 w-[20rem] -translate-y-1/2 md:w-[10rem]"
                    :value="controls.volume"
                  />
                </div>
              </label>

              <div class="relative flex items-center gap-[1rem]">
                <button @click="rewindBack">
                  <NuxtIcon name="video/rewind" />
                </button>

                <button @click="rewindForwards">
                  <NuxtIcon name="video/ff" />
                </button>
              </div>

              <button @click="toggleFullscreen">
                <NuxtIcon
                  :name="
                    isFullScreen
                      ? 'video/fullscreen-on'
                      : 'video/fullscreen-off'
                  "
                />
              </button>

              <button @click="togglePictureInPicture">
                <NuxtIcon
                  :name="
                    isPictureInPicture
                      ? 'video/picture-on'
                      : 'video/picture-off'
                  "
                />
              </button>
            </nav>
          </div>
        </Transition>

        <Transition name="fade">
          <button
            class="fullscreened group absolute left-0 top-0 z-[10] flex h-full w-full items-center justify-center bg-black bg-opacity-[30%]"
            v-if="!isInitallyStarted"
            @click="startVideo"
          >
            <div
              class="borderline-white flex items-center justify-center rounded-full bg-black bg-opacity-70 p-[2rem] opacity-50 group-hover:border-opacity-100 group-hover:opacity-100"
            >
              <NuxtIcon name="video/play" />
            </div>
          </button>
        </Transition>
      </div>
    </div>

   
  </section>
</template>

<script setup lang="ts">
import anime from "animejs";
import { courses } from "~/features/constants/courses.constants";

import sleep from "~/features/utils/sleep";

const videoRef = ref<HTMLVideoElement | null>(null);
const videoContainer = ref<HTMLDivElement | null>(null);

const isVideoInViewport = ref<boolean>(false);

const playbacks = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.5, 3, 3.5];

let timeout: NodeJS.Timeout;

interface IVideoControls {
  isPlaying: boolean;
  playback: number;
  volume: number;
}

const controls = reactive<IVideoControls>({
  isPlaying: false,
  playback: 1,
  volume: 1,
});

onMounted(() => {
  if (!videoRef.value) return;

  videoRef.value.addEventListener("ended", () => (controls.isPlaying = false));
  videoRef.value.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement) isFullScreen.value = false;
  });

  videoRef.value.addEventListener('leavepictureinpicture', () => {
    isPictureInPicture.value = false
    handlePlaying()
  })

  videoRef.value.addEventListener('mousemove', (e) => {
    clearTimeout(timeout)
    if(!isNavOpened.value) openNav()
    timeout = setTimeout(() => {
      closeNav()
    }, 3000)
  })

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) isVideoInViewport.value = true;
      });
    },
    { root: null, rootMargin: "0px", threshold: 0.3 }
  );

  observer.observe(videoRef.value);

  window.addEventListener("keydown", (e: KeyboardEvent) => {
    if (!isInitallyStarted.value) return;

    if (!videoRef.value) return;

    console.log('!');

    if (isVideoInViewport.value || controls.isPlaying) e.preventDefault();
    switch (e.key.toLowerCase()) {
      case "enter":
      case " ": {
        handlePlaying();
        break;
      }
      case "a":
      case "ArrowLeft": {
        rewindBack(); break;
      }
      case "d":
      case "ArrowRight": {
        rewindForwards(); break;
      }
      case "s": {
        stopPlaying(); break;
      }
      case "f": {
        toggleFullscreen(); break;
      }
    }
  });
});

// Play
function handlePlaying() {
  controls.isPlaying = !controls.isPlaying;
}

function stopPlaying() {
  controls.isPlaying = false;
}

watch(
  () => controls.isPlaying,
  (isPlaying) => {
    if (!videoRef.value) return;

    if (isPlaying) {
      videoRef.value.play();
    } else {
      videoRef.value.pause();
      openNav();
    }
  }
);

// Playback

const isPlaybackOpened = ref<boolean>(false);

function handlePlayback(playback: number) {
  controls.playback = playback;
  handleOpenPlayback();
}

function handleOpenPlayback() {
  isPlaybackOpened.value = !isPlaybackOpened.value;
}

// Rewind

function rewindBack() {
  if (!videoRef.value) return;

  const { currentTime } = videoRef.value;

  if (currentTime > 5) videoRef.value.currentTime = currentTime - 5;
}

function rewindForwards() {
  if (!videoRef.value) return;

  const { currentTime, duration } = videoRef.value;

  if (currentTime < duration - 5) videoRef.value.currentTime = currentTime + 5;
}

watch(
  () => controls.playback,
  (playback) => {
    if (!videoRef.value) return;

    videoRef.value.playbackRate = playback;
  }
);

// volume

const isVolumeOpened = ref<boolean>(false);

const volumeRef = ref<HTMLInputElement | null>(null);

function handleOpenVolume() {
  if (!volumeRef.value) return;

  isVolumeOpened.value = !isVolumeOpened.value;

  const value = isVolumeOpened.value ? "100%" : 0;

  anime({
    targets: [volumeRef.value, volumeRef.value.nextSibling],
    width: value,
    opacity: value,
    easing: "linear",
    duration: 200,
  });
}

watch(
  () => controls.volume,
  (volume) => {
    if (!videoRef.value) return;

    videoRef.value.volume = volume;
  }
);

const volumeIconComputed = computed<string>(() => {
  const { volume } = controls;

  if (volume == 0) return "video/volume-muted";
  else if (volume > 0 && volume < 0.3) return "video/volume-low";
  else if (volume > 0.3 && volume < 0.7) return "video/volume-medium";
  else return "video/volume-full";
});

// fullscreen

const isFullScreen = ref<boolean>(false);

async function toggleFullscreen() {
  if (!videoContainer.value) return;

  isFullScreen.value = !isFullScreen.value;

  if (isFullScreen.value) videoContainer.value.requestFullscreen();
  else {
    document.exitFullscreen();
    await sleep(100).then(() =>
      videoRef.value?.scrollIntoView({ block: "end", behavior: "smooth" })
    );
  }
}

// initial screen

const isInitallyStarted = ref<boolean>(false);

function startVideo() {
  isInitallyStarted.value = true;

  controls.isPlaying = true;

  videoRef.value?.scrollIntoView({ block: "end", behavior: "smooth" });
}

// is nav opened

const isNavOpened = ref<boolean>(false);

function openNav() {
  if (isInitallyStarted.value) isNavOpened.value = true;
}

function closeNav() {
  isNavOpened.value = false;
}

// picture in picture

const isPictureInPicture = ref<boolean>(false)
function togglePictureInPicture() {

  isPictureInPicture.value = !isPictureInPicture.value
  if (isPictureInPicture.value) {
    videoRef.value?.requestPictureInPicture();
  } else document.exitPictureInPicture()
}
</script>

<style lang="scss">
html {
  scroll-snap-type: y proximity;

  scroll-padding-top: 8.6rem;
}

.video {
  @apply relative h-full w-full object-fill;

  &::-webkit-media-controls {
    display: none !important;
  }

  &-container {
    scroll-snap-align: end;

   
    span {
      @apply aspect-square w-[4rem] text-white opacity-80 hover:opacity-100;
    }
  }

  &-box {
    @apply lg:aspect-video lg:h-auto;
  }
}

.pop-enter-from,
.pop-leave-to {
  opacity: 0;

  transform: scale(0) translateY(100%);
}

.pop-enter-active,
.pop-leave-active {
  transition: 0.25s ease all;
}

.volume-enter-from,
.volume-leave-to {
  width: 0%;
}

.volume-enter-active,
.volume-leave-active {
  width: 100%;
  transition: 0.25s ease all;
}

.nav-enter-from,
.nav-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

.nav-enter-active,
.nav-leave-active {
  transition: 0.25s ease all;
}

.range {
  @apply h-0 appearance-none rounded-semi-big;

  &::-webkit-slider-thumb {
    @apply aspect-square w-[2.5rem] cursor-e-resize appearance-none  rounded-full bg-black ring-1 ring-white transition-all hover:ring-4 focus:ring-4;
  }

  & + progress {
    &::-webkit-progress-bar {
      @apply rounded-semi-big bg-white;
    }

    &::-webkit-progress-value {
      @apply rounded-semi-big bg-blue;
    }
  }
}

.fullscreened {
  box-shadow: inset 0 0 400px black;
}
</style>
