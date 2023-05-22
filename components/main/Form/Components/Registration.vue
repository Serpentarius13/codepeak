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
        type="password"
      />

      <CommonInputError :error="confirmError">
        <CommonInputText
          placeholder="Повторите пароль"
          v-model="confirm"
          type="password"
        />
      </CommonInputError>

      <div class="flex flex-col gap-[1rem]">
        <CommonButton variant="blue" size="small" class="w-full" type="submit"
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
import { registerSchema } from "~/features/types/auth.types";
import sleep from "~/features/utils/sleep";
import useToastStore from "~/stores/useToastStore";
import { useUserStore } from "~/stores/useUser";

const { handleSubmit, errors } = useForm({
  validationSchema: toTypedSchema(registerSchema),
});

const confirmError = ref<string | null>(null);

const userStore = useUserStore();
const toast = useToastStore();
const router = useRouter();

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

const onSubmit = handleSubmit(async (values) => {
  if (confirmError.value) return;

  const { confirm, date, ...rest } = values;

  try {
    await userStore.register(rest);
    toast.success({ text: "Вы успешно вошли!" });

    await sleep(400);

    router.push("/profile");
  } catch (error) {}
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
  --dp-input-icon-padding: 5rem;
}

.dp__main input {
  height: 5rem;
}
</style>
