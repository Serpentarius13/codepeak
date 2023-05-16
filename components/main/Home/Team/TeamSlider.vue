<template>
  <KeepAlive>
    <div
      class="h-full w-full brightness-100"
      :style="{
        background: `url('${slides[currentSlide].img}') 50% 0 / cover no-repeat`,
      }"
      :title="slides[currentSlide].alt"
      ref="slideRef"
    >
      <div
        class="absolute bottom-[6%] left-[3.6rem] flex flex-col gap-[1rem] text-black md:bottom-[20%]"
      >
        <h3 class="heading">
          {{ slides[currentSlide].name }}
        </h3>
        <span class="text-big">
          {{ slides[currentSlide].position }}
        </span>
      </div>
    </div>
  </KeepAlive>
  <ul
    class="absolute bottom-[6%] right-[3.6rem] z-[5] flex gap-[2.6rem] md:gap-[1.8rem] sm:gap-[1.4rem]"
  >
    <li v-for="(slide, ix) in slides" :key="slide.name">
      <button
        @click="() => handleSetSlide(ix)"
        :class="[
          ' aspect-square w-[5.2rem] rounded-full ring-white hover:ring-4',
          ix === currentSlide && 'ring-4 ',
        ]"
      >
        <NuxtImg
          :src="slide.img"
          :alt="`To slide with ${slide.name}`"
          width="52"
          height="52"
          class="obejct-cover aspect-square w-[5.2rem] rounded-full"
        />
      </button>
    </li>
  </ul>

  <div class="left shadowed">
    <NuxtIcon name="tasks/arrow" />
  </div>

  <div class="right shadowed">
    <NuxtIcon name="tasks/arrow" />
  </div>
</template>

<script setup lang="ts">
import { ITeamSlide } from "~/features/types/shared";

import { gsap } from "gsap";

const slideRef = ref<HTMLDivElement | null>(null);

const currentSlide = ref<number>(0);

interface ITeamSlider {
  slides: ITeamSlide[];
}

function handleAnimation(slide: number) {
  if (!slideRef.value) return;
  const tl = gsap.timeline();

  tl.to(slideRef.value, {
    filter: "brightness(0.5)",
    duration: 0.7,
    onComplete: () => void (currentSlide.value = slide),
  });

  tl.to(slideRef.value, {
    filter: "brightness(1)",
    duration: 1,
  });
}

const props = defineProps<ITeamSlider>();

function handleSetSlide(slide: number) {
  if (currentSlide.value === slide) return;
  handleAnimation(slide);
}

function handleGoLeft() {
  if (currentSlide.value === 0) handleSetSlide(props.slides.length - 1);
  else handleSetSlide(currentSlide.value - 1);
}

function handleGoRight() {
  if (currentSlide.value === props.slides.length - 1) handleSetSlide(0);
  else handleSetSlide(currentSlide.value + 1);
}

function handleKey(e: KeyboardEvent) {
  console.log(e.key);
  switch (e.key) {
    case "ArrowRight" || "ArrowUp": {
      handleGoRight();
    }

    case "ArrowLeft" || "ArrowDown": {
      handleGoLeft();
    }
  }
}

function handleClick(e: MouseEvent) {
  const { clientX: position } = e;

  const target = e?.target as HTMLElement;

  if (!slideRef.value) return;

  console.log(target);
  if (
    slideRef.value === target ||
    target.classList.contains("shadowed") ||
    target.closest("div")?.classList.contains("shadowed")
  ) {
    const halfOfScreen = window.innerWidth / 2;

    if (position <= halfOfScreen) {
      handleGoLeft();
    } else {
      handleGoRight();
    }
  }
}

onMounted(() => {
  document.addEventListener("keydown", handleKey);

  document.addEventListener("click", handleClick);
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleKey);
});
</script>

<style scoped lang="scss">
.shadowed {
  @apply absolute flex h-full w-1/4 cursor-pointer items-center justify-center text-black opacity-0 backdrop-blur-[3px] transition-opacity hover:opacity-100;

  span {
    @apply z-[5]  flex aspect-square w-[6rem] items-center justify-center rounded-full bg-white p-[1.4rem];
  }

  &.right {
    @apply right-0 top-0;
  }

  &.left {
    @apply left-0 top-0;

    span {
      @apply rotate-180;
    }
  }
}
</style>
