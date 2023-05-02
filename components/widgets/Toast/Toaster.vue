<template>
  <Teleport to="body">
    <Transition name="toast">
      <div
        v-if="toastStore.toasts.length"
        class="fixed bottom-[3%] right-[5%] flex flex-col gap-[1rem]"
      >
        <TransitionGroup name="toast">
          <div
            v-for="toast in toastStore.toasts"
            :class="[
              'rounded-[0.3rem] border-[1px] border-solid bg-black px-[1.6rem] py-[2.2rem]',
              toastColorMap[toast.status],
            ]"
            :key="toast.text"
          >
            <NuxtIcon
              :name="toastIconMap[toast.status]"
              class="aspect-square w-[1.8rem]"
            />

            <span class="text-[1.6rem] font-semibold">
              {{ toast.text }}
            </span>
          </div>
        </TransitionGroup>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import useToastStore, { TToastStatus } from "~/stores/useToastStore";

type NonNullStatus = Exclude<TToastStatus, null>;

export const toastColorMap: Record<NonNullStatus, string> = {
  warning: "border-orange text-orange",
  error: "border-red text-red",
  success: "border-light-green text-light-green",
};

export const toastIconMap: Record<NonNullStatus, string> = {
  error: "toast/error",
  warning: "toast/warning",
  success: "toast/success",
};
const toastStore = useToastStore();
</script>

<style scoped lang="scss">
.toast-enter-from,
.toast-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.toast-enter-active,
.toast-leave-active {
  transition: 0.25s ease all;
}
</style>
