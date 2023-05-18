<template>
  <MainFormSkeleton formTitle="Регистрация" @submit.prevent="onSubmit">
    <form class="form-component">
      <CommonInputText
        placeholder="Почта"
        v-model="email"
        :error="errors.email"
      />
      <CommonInputText
        placeholder="Имя и фамилия"
        v-model="name"
        :error="errors.name"
      />

      <CommonInputText
        placeholder="Телефон"
        v-model="phone"
        :error="errors.phone"
      />

      <CommonInputError :error="errors.date">
        <vue-date-picker
          placeholder="Дата рождения"
       
          locale="ru"
          :max-date="new Date('2011-01-01')"
          v-model="date"
          :enable-time-picker="false"
          :prevent-min-max-navigation="true"
          :start-date="new Date('2007-01-01')"
          class="text-black"
        />
      </CommonInputError>
      <CommonInputText
        placeholder="Пароль"
        v-model="password"
        :error="errors.password"
      />

      <CommonInputError :error="confirmError">
        <CommonInputText placeholder="Повторите пароль" v-model="confirm" />
      </CommonInputError>

      <div class="flex flex-col gap-[1rem]">
        <CommonButton
          variant="blue"
          size="small"
          class="w-full"
          type="submit"
          >Зарегестрироваться</CommonButton
        >

        <MainFormSocialButton text="Регистрация через Google" icon="google" />

        <MainFormBottomLink
          question="Уже есть аккаунт?"
          text="Авторизация"
          to="/login"
          class="mt-[4.5rem]"
        />
      </div>
    </form>
  </MainFormSkeleton>
</template>

<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";

import { z } from "zod";

const passwordRegex = z
  .string()
  .min(8, "Пароль должен иметь как минимум 8 символов")
  .regex(
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/,
    "В пароле должен быть как минимум один специальный символ и одна цифра"
  );

const validationSchema = toTypedSchema(
  z.object({
    email: z
      .string()
      .nonempty("Введите емейл")
      .email("Введите правильный емейл"),
    name: z
      .string()
      .nonempty("Введите имя")
      .max(100, "Имя не может иметь больше ста символов"),
    phone: z
      .string()
      .nonempty("Введите телефон")
      .min(10, "Телефон должен иметь как минимум 10 символов")
      .max(20, "Телефон не может иметь больше 20 символов")
      .regex(/^[-+]?(\d+)$/, "Введите правильный телефон"),

    password: passwordRegex,
    confirm: passwordRegex,
    date: z.date(),
  })
);

const { handleSubmit, errors } = useForm({ validationSchema });

const confirmError = ref<string | null>(null);

const { value: email } = useField("email");
const { value: name } = useField("name");
const { value: phone } = useField("phone");
const { value: password } = useField("password");
const { value: confirm } = useField("confirm");
const { value: date } = useField("date");

watch([password, confirm], () => {
  if (password.value !== confirm.value)
    confirmError.value = "Пароли не совпадают";
  else confirmError.value = null;
});

watch(errors, () => {
  console.log(errors.value);
});

const onSubmit = handleSubmit((values) => {
  if (confirmError.value) return;

  console.log(values);
});
</script>

<style lang="scss">
.dp__theme_dark {
  --dp-background-color: #212121;
}

:root {
  --dp-border-radius: 32px;
  --dp-font-size: 1.6rem;
  --dp-font-color: black;
  --dp-font-family: "Suisse Intl", sans-serif;
}
</style>
