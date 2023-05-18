<template>
  <article
    class="bg-whitexs:borderline-transparent z-[2] bg-white flex max-w-[44.3rem] flex-col gap-[3.75rem] rounded-[4.6rem] px-[4.2rem] py-[4.5rem] ring-black transition-all 2xl:px-[2rem] 2xl:py-[2.1rem] sm:gap-[1.5rem] sm:rounded-[2rem] sm:p-[1rem] sm:!ring-0"
    ref="wrapperRef"
  >
    <div class="flex items-center gap-[2rem] lg:flex-col sm:gap-[1rem]">
      <span class="text-big sm:text-medium"> {{ name }} </span>
      <span
        class="text-small sm:text-smallest rounded-[15rem] bg-black px-[1.4rem] py-[0.6rem] text-white xs:text-[0.8rem] xs:px-[0.8rem]"
      >
        Стандартная
      </span>
    </div>

    <div class="flex flex-col gap-[1rem]">
      <h3
        class="text-[7.8rem] leading-[120%] -tracking-[0.64px] 2xl:text-[5.5rem] xl:text-[4rem] sm:text-[2.8rem] sm:font-bold xs:text-[1.8rem]"
        ref="priceRef"
      >
        {{ pricey }}
      </h3>

      <p
        class="text-medium xl:text-small sm:text-smallest max-w-[35rem] opacity-[25%] sm:opacity-100 sm:text-[1rem] xs:text-[0.8rem]"
      >
        *на 1 пользователя/на 12 месяцев пользования подпиской. имеется функция
        автопродления
      </p>
    </div>

    <CommonButton
      variant="blue"
      size="small"
      class="mt-[4rem] w-full xl:text-[1.3rem] sm:mt-[1rem] sm:p-[0.3rem] sm:text-[0.7rem] sm:font-bold"
    >
      Оформить подписку</CommonButton
    >
  </article>
</template>

<script setup lang="ts">
import { ITariff } from "~/features/constants/tariffs.constants";
import { animateValue } from "~/features/utils/animateValue";
import { appendCommas } from "~/features/utils/calculateCommaPrice";
import sleep from "~/features/utils/sleep";

interface ITariffProps extends ITariff {
  isMonth: boolean;
}

const props = defineProps<ITariffProps>();

const priceRef = ref<HTMLElement | null>();

const wrapperRef = ref<HTMLElement | null>();

function animateWrapper() {
  if (!wrapperRef.value) return;

  wrapperRef.value.classList.add("ring-4", "scale-[1.01]");

  sleep(600).then(() =>
    wrapperRef!.value!.classList.remove("ring-4", "scale-[1.01]")
  );
}

const pricey = computed<string>(() => {
  animateWrapper();
  if (props.isMonth) {
    animateValue(priceRef.value, props.price);
    return props.price;
  } else {
    const price = +props.price.replaceAll(",", "") * 10;
    animateValue(priceRef.value, price);
    return appendCommas(price);
  }
});
</script>

<style scoped lang="scss"></style>
