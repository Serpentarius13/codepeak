<template>
  <header class="flex min-h-[8.6rem] w-full items-center justify-center">
    <div class="container flex justify-between">
      <div class="flex items-center gap-[1.4rem]">
        <CommonLogo />

        <!-- select -->
      </div>

      <div class="flex items-center gap-[12rem] lg:hidden">
        <nav>
          <LayoutNavbarLinks />
        </nav>
        <LayoutNavbarButtons />
      </div>

      <label class="nav-burger z-[420] hidden lg:flex">
        <input type="checkbox" class="hidden" @change="checkInput" />
        <span />
        <span />
        <span />
      </label>
      <LayoutNavbarMobile class="nav-mobile hidden lg:flex" />
    </div>
  </header>
</template>

<script setup lang="ts">
import { lockBody, unlockBody } from "~/features/utils/overflow";

function checkInput(event: InputEvent) {
  const target = event.target as HTMLInputElement;

  if (target.checked) lockBody();
  else unlockBody();
}
</script>

<style scoped lang="scss">
.nav {
  &-burger {
    @apply relative  hidden h-[3rem] w-[2rem] cursor-pointer flex-col justify-center gap-[0.4rem];
    @screen lg {
      @apply flex;
    }
    span {
      @apply w-[2rem] border-b-2 border-white transition-all;
    }

    input:checked ~ span {
      @apply absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2;
      &:nth-child(2) {
        @apply rotate-45;
      }

      &:nth-child(3) {
        @apply -rotate-45;
      }

      &:nth-child(4) {
        @apply translate-y-full rotate-180 opacity-0;
      }
    }
  }

  &-mobile {
    opacity: 0;
    transform: translateX(-100%);
    transition: 0.25s ease all;
  }

  &-burger:has(input:is(:checked)) + &-mobile {
    opacity: 1;
    transform: translate(0);
  }
}
</style>
