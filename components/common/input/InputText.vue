<template>
  <CommonInputError :error="error">
    <div class="borderline-transparent relative w-full">
      <input
        :class="[
          'peer w-full border-none bg-transparent pb-[1.1rem] text-[1.9rem] font-medium text-white  focus:outline-none ',
          icon && 'pl-[2.9rem]',
        ]"
        :type="inputType"
        :placeholder="placeholder"
        v-model="model"
      />

      <NuxtIcon
        v-if="icon"
        :name="icon"
        class="absolute left-[2px] top-[35%] aspect-square w-[1.5rem] -translate-y-1/2 text-white opacity-20 peer-focus-visible:text-light-green peer-focus-visible:opacity-100"
      />

      <button
        class="absolute right-0 top-0 h-[1.2rem]"
        @click="changeInputType"
        type="button"
      >
        <NuxtIcon
          v-if="props.type === 'password'"
          :name="iconNameComputed"
          class="w-[2.2rem] text-light-green"
        />
      </button>
    </div>
  </CommonInputError>
</template>

<script setup lang="ts">
type TInputType = "text" | "password";
interface ITextInput {
  type?: TInputType;
  placeholder: string;
  icon?: string;
  error?: string | undefined;
}

const props = withDefaults(defineProps<ITextInput>(), { type: "text" });

const inputType = ref<TInputType>(props.type);

const iconNameComputed = computed<"input/eye-off" | "input/eye">(() => {
  if (inputType.value === "password") return "input/eye";
  else return "input/eye-off";
});

function changeInputType() {
  if (inputType.value === "password") inputType.value = "text";
  else inputType.value = "password";
}

const model = defineModel();
</script>

<style scoped lang="scss"></style>
