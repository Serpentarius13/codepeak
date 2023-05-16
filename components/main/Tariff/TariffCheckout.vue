<template>
  <article class="flex h-full min-h-[67.6rem] flex-col gap-[1.8rem] bg-white">
    <div
      class="text-medium borderline-transparent flex w-full justify-between rounded-semi-big px-[3.4rem] py-[2.7rem]"
    >
      <h4 class="flex items-center gap-[2.4rem]">
        Подписка <span ref="subRef" class="block"> {{ name }} </span>
      </h4>

      <div>
        <span ref="priceRef"> {{ price }} </span> <CommonRuble />
      </div>
    </div>

    <div
      class="borderline-transparent flex flex-1 flex-col justify-between rounded-semi-big px-[3.2rem] py-[3.5rem]"
    >
      <div class="flex flex-col gap-[2.8rem]">
        <h5 class="heading-small">Чекаут</h5>

        <ul
          class="borderline-transparent flex w-full flex-col gap-[1.8rem] border-l-0 border-r-0 py-[2.8rem]"
        >
          <li v-for="pricing in pricings" :key="pricing.name">
            <Pricing v-bind="pricing" />
          </li>
        </ul>
      </div>

      <div class="flex flex-col gap-[2.4rem]">
        <div class="text-big flex w-full items-center justify-between">
          <span> Итого </span>

          <div>
            <span ref="totalRef">
              {{ calculateCommaPrice(price, discount) }}
            </span>
            <CommonRuble />
          </div>
        </div>

        <CommonButton variant="filled" size="small">
          Перейти к оформлению
        </CommonButton>
      </div>
    </div>
  </article>
</template>

<script setup lang="tsx">
import { ITariff, TTariffName } from "~/features/constants/tariffs.constants";

import { gsap } from "gsap";

import calculateCommaPrice, {
  appendCommas,
} from "~/features/utils/calculateCommaPrice";

import { Elastic } from "gsap";

type TPricing = { name: string; price: ITariff["price"] };

interface ISubscriptionCheckout {
  name: TTariffName;
  price: ITariff["price"];
  discount: ITariff["price"];
}

const priceRef = ref<HTMLElement | null>(null);
const totalRef = ref<HTMLElement | null>(null);

const subRef = ref<HTMLElement | null>(null);

const props = defineProps<ISubscriptionCheckout>();

const price = ref(props.price);
const discount = ref(props.discount);

const pricings = computed<TPricing[]>(() => {
  return [
    { name: "Сумма заказа", price: props.price },
    { name: "Скидка", price: props.discount },
  ];
});

const Pricing = ({ name, price }: TPricing) => (
  <div class="text-medium flex w-full items-center justify-between">
    <span class="opacity-[40%]">{name}</span>

    <span>{price}&#8381;</span>
  </div>
);

function animateValue(
  reffy: Ref<HTMLElement | null>,
  starting = props.price,
  duration: number = 0.8
) {
  if (!reffy.value) return;

  const Cont = { val: 0 };



  starting = parseFloat(String(starting).replaceAll(",", ""));

  gsap.to(Cont, {
    duration,
    roundProps: "val",
    val: starting,
    onUpdate() {
      if (!reffy.value) return;

      reffy.value!.innerHTML = appendCommas(Cont.val);
    },
  });
}

function animateRotate(reffy: Ref<HTMLElement | null>) {
  gsap.from(reffy.value, {
    duration: 2,
    ease: Elastic.easeOut,
    rotate: "360deg",
  });
}

onMounted(() => {
  animateValue(priceRef);
});

watch(props, () => {
  animateValue(priceRef);
  animateValue(totalRef, calculateCommaPrice(props.price, props.discount));
  animateRotate(subRef);
});
</script>

<style scoped lang="scss"></style>
