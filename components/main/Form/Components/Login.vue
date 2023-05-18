<template>
  <MainFormSkeleton formTitle="Авторизация">
    <form class="form-component" @submit.prevent="handleSubmit">
      <CommonInputText
        placeholder="Ваш емейл"
    
        v-model="email"
        :error="errors.email"
      />
      <CommonInputText
        placeholder="Пароль"
    
        type="password"
        v-model="password"
        :error="errors.password"
      />

      <div class="flex flex-col gap-[1rem]">
        <CommonButton variant="blue" size="small" class="w-full">
          Авторизоваться
        </CommonButton>

        <MainFormSocialButton icon="vk" text="Войти через Vk" />

        <MainFormSocialButton icon="google" text="Войти через Google" />

        <MainFormBottomLink
          question="Еще нет аккаунта?"
          text="Регистрация"
          to="/registration"
        />
      </div>
    </form>
  </MainFormSkeleton>
</template>

<script setup lang="ts">
import { z } from "zod";
const validationSchema = toTypedSchema(
  z.object({
    email: z
      .string()
      .nonempty("Введите емейл")
      .email("Введите правильный емейл"),

    password: z.string().nonempty("Введите пароль"),
  })
);

const { handleSubmit, errors } = useForm({ validationSchema });

const { value: email } = useField("email");
const { value: password } = useField("password");

const onSubmit = handleSubmit((values) => {
  console.log(values);
});
</script>

<style scoped lang="scss"></style>
