<template>
  <article class="flex h-full flex-col gap-[1.8rem] bg-white min-h-[67.6rem] ">
    <div
      class="text-medium borderline borderish flex w-full justify-between px-[3.4rem] py-[2.7rem]"
    >
      <h4>Подписка {{ name }}</h4>

      <MainHomeSubscriptionsPrice :price="price" />
    </div>

    <div
      class="borderline borderish flex flex-1 flex-col justify-between px-[3.2rem] py-[3.5rem]"
    >
      <div class="flex flex-col gap-[2.8rem]">
        <h5 class="heading-small">Чекаут</h5>

        <ul
          class="borderline flex w-full flex-col gap-[1.8rem] border-l-0 border-r-0 border-opacity-30 py-[2.8rem]"
        >
          <li v-for="pricing in pricings" :key="pricing.name">
            <Pricing v-bind="pricing" />
          </li>
        </ul>
      </div>

      <div class="flex flex-col gap-[2.4rem]">
        <div class="text-big flex w-full items-center justify-between">
          <span> Итого </span>

          <MainHomeSubscriptionsPrice
            :price="calculateCommaPrice(price, discount)"
          />
        </div>

        <CommonButton variant="filled" size="small">
          Перейти к оформлению
        </CommonButton>
      </div>
    </div>
  </article>
</template>

<script setup lang="tsx">
import { ITariff, TTariffName } from "~/features/types/tariff";
import calculateCommaPrice from "~/features/utils/calculateCommaPrice";

type TPricing = { name: string; price: ITariff["price"] };

interface ISubscriptionCheckout {
  name: TTariffName;
  price: ITariff["price"];
  discount: ITariff["price"];
}

const props = defineProps<ISubscriptionCheckout>();

const pricings = computed<TPricing[]>(() => [
  { name: "Сумма заказа", price: props.price },
  { name: "Скидка", price: props.discount },
]);

const Pricing = ({ name, price }: TPricing) => (
  <div class="text-medium flex w-full items-center justify-between">
    <span class="opacity-[40%]">{name}</span>

    <span>{price}&#8381;</span>
  </div>
);
</script>

<style scoped lang="scss">
.borderish {
  @apply rounded-semi-big border-opacity-30;
}
</style>
