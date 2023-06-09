<template>
  <form
    class="flex w-[46.9rem] max-w-[90vw] flex-col gap-[1.6rem]"
    @submit.prevent="onSubmit"
  >
    <MainFormComponentsPaymentSubButton
      :sub="currentTariff"
      :duration="duration"
      @tariff="handleTariffChange"
      @duration="handleDurationChange"
    />
    <div
      class="borderline-transparent flex flex-col gap-[4rem] rounded-semi-big px-[3.9rem] py-[3.2rem] pb-[5.9rem]"
    >
      <div class="flex items-center gap-[1.3rem]">
        <NuxtIcon
          name="input/card"
          class="aspect-square w-[4.2rem] text-blue"
        />
        <span class="text-medium"> Оплата банковской картой </span>
      </div>

      <div class="flex flex-col gap-[2rem]">
        <MainFormComponentsPaymentLabel
          label="Номер карты"
          :error="errors.number"
        >
          <div class="relative">
            <MainFormComponentsPaymentInput
              class="w-full"
              v-model="number"
              :error="errors.number"
              :value="cardNumber"
            />

            <KeepAlive>
              <Transition name="fade">
                <NuxtImg
                  v-if="currentBank"
                  :src="currentBank.img"
                  :alt="`Логотип платежной системы ${currentBank.name}`"
                  height="12"
                  class="absolute right-[1rem] top-1/2 h-[1.2rem] -translate-y-1/2"
                />
              </Transition>
            </KeepAlive>
          </div>
        </MainFormComponentsPaymentLabel>

        <div class="flex w-full justify-between">
          <div class="flex w-[15rem] flex-col">
            <MainFormComponentsPaymentLabel
              label="Срок действия"
              :error="errors.month ?? errors.year"
            >
              <div class="flex items-center gap-[1rem]">
                <MainFormComponentsPaymentInput
                  type="number"
                  v-model="month"
                  class="w-[5.7rem]"
                  min="1"
                  max="12"
                  :error="errors.month"
                />
                <span class="text-small opacity-30"> / </span>

                <MainFormComponentsPaymentInput
                  type="number"
                  v-model="year"
                  class="w-[5.7rem]"
                  :min="minYear"
                  :max="maxYear"
                  :error="errors.year"
                />
              </div>
            </MainFormComponentsPaymentLabel>
          </div>

          <MainFormComponentsPaymentLabel
            label="CVV код"
            :error="errors.cvv"
            class="items-end"
          >
            <MainFormComponentsPaymentInput v-model="cvv" class="w-[8rem]" />
          </MainFormComponentsPaymentLabel>
        </div>

        <div class="mt-[2rem] flex flex-col gap-[2rem]">
          <CommonInputCheckbox
            v-model="autoPayments"
            label="Разрешаю автосписания"
          />
          <CommonInputCheckbox v-model="sendCheck" label="Прислать квитанцию" />
        </div>

        <CommonButton variant="filled" size="small" class="mt-[2rem] w-full">
          Заплатить &nbsp;
          <span ref="priceRef"> {{ currentTariff.price }} </span><CommonRuble />
        </CommonButton>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { z } from "zod";
import { IBank, banks } from "~/features/constants/banks.constants";
import { ITariff } from "~/features/constants/tariffs.constants";
import { TSubDuration } from "~/features/types/shared.types";
import { animateValue } from "~/features/utils/animateValue";

const props = defineProps<{ currentTariff: ITariff }>();

const duration = toRef<TSubDuration>("month");
const currentTariff = toRef(props.currentTariff);

const priceRef = ref<HTMLElement | null>(null);

watch([duration, currentTariff], () => {
  if (!priceRef.value) return;
  animateValue(
    priceRef.value,
    duration.value === "month"
      ? currentTariff.value.price
      : +currentTariff.value.price.replaceAll(",", "") * 10
  );
});

function handleDurationChange(dur: TSubDuration) {
  duration.value = dur;
}

function handleTariffChange(tar: ITariff) {
  currentTariff.value = tar;
}

const getCurrentYear = (): number =>
  +new Date().getFullYear().toLocaleString().slice(2);

const maxYear = getCurrentYear() + 25;
const minYear = getCurrentYear();

const validationSchema = toTypedSchema(
  z.object({
    number: z
      .string()
      .nonempty("Введите номер карты")
      .length(19, "Введите правильный номер карты"),
    month: z.coerce
      .number()
      .max(12, "Месяц не может быть больше 12")
      .min(1, "Месяц не может быть меньше 1"),
    year: z.coerce
      .number()
      .max(maxYear, `Год не может быть больше ${maxYear}`)
      .min(minYear, `Год не может быть меньше ${minYear}`),
    cvv: z
      .string()
      .nonempty("Введите CVV код")
      .length(3, "Длина CVV кода - 3 символа"),
    autoPayments: z.boolean().default(false),
    sendCheck: z.boolean().default(false),
  })
);

const { handleSubmit, errors } = useForm({
  validationSchema,
  initialValues: {
    month: new Date().getMonth() + 1,
    year: getCurrentYear(),
    number: "",
  },
});

const { value: number } = useField<string>("number");
const { value: month } = useField("month");
const { value: year } = useField("year");
const { value: cvv } = useField("cvv");

const { value: autoPayments } = useField("autoPayments");
const { value: sendCheck } = useField("sendCheck");

const onSubmit = handleSubmit((data) => {
  console.log(data);
});

const currentBank = computed<IBank | undefined>(() => {
  if (number.value.length >= 1)
    return banks.find(
      (b) => b.startingDigit === parseInt(number.value[0] as string)
    );
});

const cardNumber = computed<string>(() => {
  if (number.value.length >= 19) return number.value;
  const input = number.value.replace(/\D/g, "").match(/.{1,4}/g);

  console.log(input);

  return input ? input.join("/") : number.value;
});
</script>

<style scoped lang="scss">
.form-bg {
  background: url("/img/form-bg.png") 0 0 / cover no-repeat;
}
</style>
