<template>
  <ul class="flex flex-col gap-[1.2rem] h-auto relative">
    <li>
      <button
        :class="['tag borderline-transparent text-medium', conditionalClass(tags.every((t) => !isExists(t)))]"
        :style="conditionalStyle(tags.every((t) => !isExists(t)))"
        @click="removeAll"
      >
        Все
      </button>
    </li>
    <li v-for="tag in tags" :key="tag.slug">
      <button
        @click="emit('tagged', tag)"
        :class="['tag borderline-transparent text-medium', conditionalClass(isExists(tag))]"
        :style="conditionalStyle(isExists(tag))"
      >
        {{ tag.name }}
      </button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ITag } from "~/features/types/shared.types";

const props = defineProps<{
  tags: ITag[];
  isExists: (tag: ITag) => boolean;
  bgColor?: string;
  removeAll: () => void;
}>();

const emit = defineEmits<{ tagged: [tag: ITag] }>();

const conditionalClass = (isActive?: boolean) =>
  props.bgColor && isActive ? "text-white border-black" : "border-white";
const conditionalStyle = (isActive?: boolean) =>
  props.bgColor && isActive ? { backgroundColor: props.bgColor } : {};
</script>

<style scoped lang="scss">
.tag {
  @apply  flex h-full w-full items-center justify-center rounded-biggest bg-white px-[2.2rem] py-[1.6rem] transition-all active:scale-95 ;
}
</style>
