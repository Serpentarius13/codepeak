<template>
  <form class="flex w-full flex-col gap-[1.6rem]" @submit.prevent="onSubmit">
    <button
      class="form-bg group flex min-h-[10rem] w-full flex-col gap-[0.6rem] rounded-[1.4rem] px-[3.2rem] py-[2.4rem] text-white"
      type="button"
    >
      <div class="flex items-center gap-[1.2rem] text-[2.1rem]">
        <span> Подписка "Dark", 1 месяц </span>

        <NuxtIcon
          name="input/pencil"
          class="opacity-30 transition-all group-hover:opacity-100"
        />
      </div>

      <span
        class="text-medium opacity-50 transition-all group-hover:opacity-100"
      >
        2590Р
      </span>
    </button>

    <div class="flex flex-col gap-[4rem] px-[3.9rem] py-[3.2rem]">
      <div class="flex items-center gap-[1.3rem]">
        <NuxtIcon
          name="input/card"
          class="aspect-square w-[4.2rem] text-blue"
        />
        <span class="text-medium"> Оплата банковской картой </span>
      </div>

      <div class="flex flex-col gap-[2rem]">
        <MainFormComponentsPaymentLabel label="Номер карты">
          <CommonInputError :error="errors.number">
            <div class="relative">
              <MainFormComponentsPaymentInput class="w-full" v-model="number" />

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
          </CommonInputError>
        </MainFormComponentsPaymentLabel>

        <div class="flex w-full justify-between">
          <div class="w-[15rem]">
            <MainFormComponentsPaymentLabel label="Срок действия">
              <div class="flex items-center gap-[1rem]">
                <MainFormComponentsPaymentInput
                  type="number"
                  v-model="month"
                  class="w-[5.7rem]"
                  min="1"
                  max="12"
                />
                <span class="text-small opacity-30"> / </span>

                <MainFormComponentsPaymentInput
                  type="number"
                  v-model="year"
                  class="w-[5.7rem]"
                  :min="minYear"
                  :max="maxYear"
                />
              </div>
            </MainFormComponentsPaymentLabel>
          </div>

          <MainFormComponentsPaymentLabel
            class="flex items-end"
            label="CVV код"
          >
            <MainFormComponentsPaymentInput v-model="cvv" class="w-[8rem]" />
          </MainFormComponentsPaymentLabel>
        </div>

        <TransitionGroup name="fade" tag="ul">
          <li
            v-for="error in Object.values({ ...errors, number: null }).filter(
              Boolean
            )"
          >
            <CommonInputError :error="error" />
          </li>
        </TransitionGroup>

        <div class="mt-[2rem] flex flex-col gap-[2rem]">
          <CommonInputCheckbox
            v-model="checked"
            label="Разрешаю автосписания"
          />
          <CommonInputCheckbox
            v-model="checkedTwo"
            label="Прислать квитанцию"
          />
        </div>

        <CommonButton variant="filled" size="small" class="mt-[2rem] w-full">
          Заплатить 2590
        </CommonButton>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { z } from "zod";
import { IBank, banks } from "~/features/constants/banks.constants";

const checked = ref<boolean>(false);

const checkedTwo = ref(false);

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
    check: z.boolean().default(false),
  })
);

const { handleSubmit, errors } = useForm({
  validationSchema,
  initialValues: {
    month: new Date().getMonth() + 1,
    year: getCurrentYear(),
  },
});

const { value: number } = useField("number");
const { value: month } = useField("month");
const { value: year } = useField("year");
const { value: cvv } = useField("cvv");

const onSubmit = handleSubmit((data) => {
  console.log(data);
});

const currentBank = computed<IBank | undefined>(() => {
  if (number)
    return banks.find(
      (b) => b.startingDigit === parseInt(number.value as string)
    );
});
</script>

<style scoped lang="scss">
.form-bg {
  background: url("/img/form-bg.png") 0 0 / cover no-repeat;
}
</style>
