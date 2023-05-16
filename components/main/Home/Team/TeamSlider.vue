<template>
  <div class="relative h-[95rem] w-screen md:h-[60rem]">
    <div
      class="h-full w-full"
      :style="{
        background: `url('${slides[currentSlide].img}') 50% 0 / cover no-repeat`,
      }"
      :title="slides[currentSlide].alt"
      ref="slideRef"
    >
      <div
        class="absolute bottom-[6%] left-[3.6rem] flex flex-col gap-[1rem] text-white md:bottom-[20%] text-black"
      >
        <h3 class="heading">
          {{ slides[currentSlide].name }}
        </h3>
        <span class="text-big">
          {{ slides[currentSlide].position }}
        </span>
      </div>
    </div>

    <ul
      class="absolute bottom-[6%] right-[3.6rem] z-[5] flex gap-[2.6rem] md:gap-[1.8rem] sm:gap-[1.4rem]"
    >
      <li v-for="(slide, ix) in slides" :key="slide.name">
        <button
          @click="() => handleSetSlide(ix)"
          :class="[
            ' aspect-square w-[5.2rem] rounded-full hover:ring-4 hover:ring-white',
            ix === currentSlide && 'borderline',
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
  </div>
</template>

<script setup lang="ts">
import { ITeamSlide } from "~/features/types/shared";
import sleep from "~/features/utils/sleep";
import { gsap } from "gsap";

const slideRef = ref<HTMLDivElement | null>(null);

const currentSlide = ref<number>(0);

const isShowingSlide = ref<boolean>(true);

interface ITeamSlider {
  slides: ITeamSlide[];
}

function handleAnimation(slide: number) {
  const tl = gsap.timeline();
  tl.to(slideRef.value, {
    translateX: "-100%",
    opacity: 0.4,
    duration: 0.8,
    ease: "rough",
    onComplete: () => void (currentSlide.value = slide),
  });

  tl.to(slideRef.value, {
    translateX: "100%",
    duration: 0,
    opacity: 4,
  });

  tl.to(slideRef.value, { translateX: "0%", opacity: 1, duration: 0.9 });
}

const props = defineProps<ITeamSlider>();

function handleSetSlide(slide: number) {
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
  const { clientX: target } = e;

  const halfOfScreen = window.innerWidth / 2;

  if (target <= halfOfScreen) {
    handleGoLeft();
  } else {
    handleGoRight();
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
