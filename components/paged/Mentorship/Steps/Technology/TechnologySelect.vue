<template>
  <form class="max-w-screen w-[36.6rem]">
    <CommonSelect
      :options="techs"
      :currentOption="modelValue"
      @select="selectOption"
    >
      <template #button>
        <PagedMentorshipStepsTechnologyItem
          :name="modelValue.name"
          :img="modelValue.img"
        />
      </template>
      <template #options="{ options: { options, selectOption } }">
        <li
          class="py-1 hover:bg-black hover:bg-opacity-20"
          v-for="(option, ix) in options"
          role="menuitem"
          tabindex="-1"
        >
          <button
            @click="selectOption(option)"
            class="text-small h-full w-full p-[1rem]"
            type="button"
          >
            <PagedMentorshipStepsTechnologyItem
              :name="option.name"
              :img="option.img"
            />
          </button>
        </li>
      </template>
    </CommonSelect>
  </form>
</template>

<script setup lang="ts">
import { TTechnology, techs } from "~/features/constants/techs.constants";

const props = defineProps<{ modelValue: TTechnology}>();

const model = defineModel();

const selectOption = (tech: TTechnology) => {
  model.value = tech;
};
</script>

<style scoped lang="scss"></style>
