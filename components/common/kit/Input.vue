<template>
  <label class="relative flex items-center justify-center" v-if="icon !== false">
    <nuxt-icon class="absolute left-4 text-inherit" filled :name="icon" />
    <input v-bind="$attrs" :placeholder="placeholder" :value="modelValue" @input="emits('update:modelValue', $event.target.value)"
      :class="['input w-full !px-12', getClassesController]" type="text">
  </label>
  <input v-else v-bind="$attrs" :placeholder="placeholder" :value="modelValue" @input="emits('update:modelValue', $event.target.value)"
    :class="['input', getClassesController]" type="text">
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  theme: {
    default: "default",
    type: String,
  },
  size: {
    type: String,
    default: "lg"
  },
  outline: {
    type: Boolean,
    default: true
  },
  rounded: {
    type: String,
    default: ""
  },
  placeholder: String,
  icon: {
    type: [Boolean, String],
    default: false
  },
  modelValue: String
});

const emits = defineEmits(['update:modelValue']);

const getWrappedTheme = computed(() => {
  const themeMap = {
    default: 'input-theme-default',
    danger: "input-theme-danger",
    success: "input-theme-success",
    secondary: "input-theme-secondary",
    warning: "input-theme-warning",
    error: "input-theme-error",
  };
  return themeMap[props.theme] ?? "input-default";
});

const getWrappedRounded = computed(() => {
  const roundedClasses = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  };

  return roundedClasses[props.rounded] || "";
});

const getWrappedSize = computed(() => {
  const sizeMap = {
    lg: "text-sm py-3 px-2",
    md: "text-sm py-3 px-2"
  };
  return sizeMap[props.size] ?? "";
});

const getClassesController = computed(() => {
  return [getWrappedTheme.value, getWrappedRounded.value, getWrappedSize.value, props.outline ? 'input-outline' : null].join(" ");
});
</script>

<style lang="scss" scoped>
.input {
  @apply outline-none;

  &-theme {
    &-default {
      @apply bg-darkNeutral placeholder:text-darkNeutral600 text-spotlight;
    }
    &-danger {
      @apply bg-pink text-white;
    }
  
    &-warning {
      @apply border-spotlight bg-white30 text-spotlight placeholder:text-spotlight;
    }
  }

  &:focus {
    font-size: 16px;
  }
}

.input-outline {
 @apply border-current border rounded-md bg-transparent;
}
</style>