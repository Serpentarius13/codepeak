<template>
  <div
    class="form-bg group min-h-[12.4rem] rounded-[1.4rem] px-[3.2rem] py-[2.4rem] text-white"
  >
    <Transition name="switch" mode="out-in">
      <button
        class="flex w-full flex-col gap-[0.6rem]"
        type="button"
        @click="showOptions"
        v-if="!isShowingOptions"
      >
        <div class="flex items-center gap-[1.2rem] text-[2.1rem]">
          <span> Подписка "{{ sub.name }}", 1 месяц </span>

          <NuxtIcon
            name="input/pencil"
            class="opacity-30 transition-all group-hover:opacity-100"
          />
        </div>

        <span
          class="text-medium opacity-50 transition-all group-hover:opacity-100"
        >
          {{ sub.price }}<CommonRuble />
        </span>
      </button>

      <div v-else class="flex w-full justify-between">
        <div class="flex gap-[2rem]">
          <button
            class="flex h-full items-center justify-center"
            @click="closeOptions"
            type="button"
          >
            <NuxtIcon name="tasks/arrow" class="rotate-180" />
          </button>

          <ul>
            <li
              v-for="tariff in tariffs.filter((t) => t.name != sub.name)"
              :key="tariff.name"
            >
              <button
                @click="switchTariff(tariff)"
                class="flex items-center gap-[5rem]"
                type="button"
              >
                <h4 class="text-medium">
                  {{ tariff.name }}
                </h4>

                <div class="text-[2.4rem] font-bold">
                  <span ref="priceRef" :data-price="tariff.price">
                    {{ tariff.price }}
                  </span>
                  <CommonRuble />
                </div>
              </button>
            </li>
          </ul>
        </div>

        <div
          class="text-medium flex flex-col justify-center gap-[0.5rem] child:rounded-semi-big child:px-[1rem] child:py-[0.4rem] child:transition-all"
        >
          <button
            @click="switchDuration('month')"
            :class="
              duration === 'month'
                ? 'bg-white text-black'
                : 'bg-black text-white'
            "
            type="button"
          >
            На месяц
          </button>

          <button
            @click="switchDuration('year')"
            :class="
              duration === 'year'
                ? 'bg-white text-black'
                : 'bg-black text-white'
            "
            type="button"
          >
            На год
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ITariff, tariffs } from "~/features/constants/tariffs.constants";
import { TSubDuration } from "~/features/types/shared.types";
import { animateValue } from "~/features/utils/animateValue";

const isShowingOptions = ref<boolean>(false);

const props = defineProps<{ sub: ITariff; duration: TSubDuration }>();

const priceRef = ref<HTMLElement[] | null>(null);

const emit = defineEmits<{
  duration: [duration: TSubDuration];
  tariff: [tariff: ITariff];
}>();

function switchDuration(duration: TSubDuration) {
  emit("duration", duration);
}

function switchTariff(tariff: ITariff) {
  emit("tariff", tariff);
}

function showOptions() {
  isShowingOptions.value = true;
}

function closeOptions() {
  isShowingOptions.value = false;
}

watch(
  () => props.duration,
  () => {
    if (!priceRef.value) return;

    priceRef.value.forEach((el) => {
      if (!el.dataset.price) return;
      animateValue(
        el,
        props.duration === "month"
          ? el.dataset.price
          : +el.dataset.price.replaceAll(",", "") * 10
      );
    });
  }
);
</script>

<style scoped lang="scss">
.switch-enter-from,
.switch-leave-to {
  @apply opacity-0 -translate-x-[20%];

}

.switch-enter-active,
.switch-leave-active {
  transition: 0.25s ease all;
}
</style>
