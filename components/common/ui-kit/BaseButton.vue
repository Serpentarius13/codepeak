<template>
  <button
    :disabled="disabled"
    @mousemove="handleMouseAnimation"
    @click="emits('click')"
    :class="[
      outline ? `btn-outline btn-outline-${theme}` : 'btn w-inherit',
      getClassesController,
    ]"
    v-bind="$attrs"
  >
    <slot v-if="loader" name="loader">
      <span>Loading...</span>
    </slot>
    <slot v-else />
  </button>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  loader: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "sm", // sm, md, lg
  },
  theme: {
    type: String,
    default: "primary", // primary, warning, danger, secondary
  },
  rounded: {
    type: [Boolean, String],
    default: false, // sm md lg full
  },
  outline: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(["click"]);

const mode = props.outline ? "outline" : "default";

const handleMouseAnimation = (event) => {
  const button = event.target;
  const rect = button.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  button.style.setProperty("--x", `${x}px`);
  button.style.setProperty("--y", `${y}px`);
};

const getWrappedSize = computed(() => {
  switch (props.size) {
    case "sm":
      return "btn-size-sm";
    case "md":
      return "btn-size-md";
    case "lg":
      return "btn-size-lg";
    case "big":
      return "sizes";
  }
});

const getWrappedRounded = computed(() => {
  switch (props.rounded) {
    case "sm":
      return "btn-rounded-sm";
    case "md":
      return "btn-rounded-md";
    case "lg":
      return "btn-rounded-lg";
    case "full":
      return "btn-rounded-full";
  }
});

const getWrappedTheme = computed(() => {
  switch (props.theme) {
    case "danger":
      return "btn-theme-danger";
    case "primary":
      return "btn-theme-primary";
    case "success":
      return "btn-theme-success";
    case "secondary":
      return "btn-theme-secondary";
    case "warning":
      return "btn-theme-warning";
    case "error":
      return "btn-theme-error";
  }
});

const getClassesController = computed(() => {
  return [
    !props.outline ? getWrappedTheme.value : null,
    getWrappedSize.value,
    getWrappedRounded.value,
    typeof rounded === "string" ? rounded : null,
  ].join(" ");
});
</script>

<style lang="scss" scoped>
.btn {
  outline: none;
  border: 1px solid transparent;
  transition: 0.5s all;

  &-size {
    &-sm {
      @apply py-2 px-4 font-semibold text-sm;
    }
    &-md {
      @apply py-3 px-6 text-base font-semibold;
    }
    &-lg {
      @apply py-4 px-5 text-base font-semibold;
    }
  }

  &-rounded {
    &-sm {
      @apply rounded-sm;
    }

    &-md {
      @apply rounded-md;
    }

    &-lg {
      @apply rounded-lg;
    }

    &-full {
      @apply rounded-full;
    }
  }

  &-theme {
    &-danger {
      @apply bg-pink text-black;
    }

    &-primary {
      @apply relative bg-darkNeutral overflow-hidden border border-transparent text-spotlight;
      transition: color 0.3s ease;

      &:before {
        content: "";
        position: absolute;
        top: var(--y, 0);
        left: var(--x, 0);
        transform: translate(-50%, -50%);
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background-color: rgb(255, 226, 163, 0.3);
        opacity: 0;
        transition: all 0.3s ease;
      }

      &:hover {
        &::before {
          transform: translate(-50%, -50%) scale(20);
          opacity: 0.3;
        }
      }
    }

    &-success {
      @apply bg-blue-500 text-white;
    }

    &-secondary {
      @apply text-white bg-darkNeutral transition-all;
    }

    &-warning {
      position: relative;

      @apply text-black bg-spotlight;
      &:before {
        content: "";
        position: absolute;
        top: var(--y, 0);
        left: var(--x, 0);
        transform: translate(-50%, -50%);
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background-color: rgba(182, 93, 255, 0.3);
        opacity: 0;
        transition: all 0.3s ease;
      }

      &:hover {
        &::before {
          transform: translate(-50%, -50%) scale(20);
          opacity: 0.3;
        }
      }
    }
  }
}

.btn-outline {
  border: 1px solid currentColor;
  background: transparent;
  color: currentColor;

  &:hover {
    border-color: transparent;
  }

  &-danger {
    @apply text-pink transition-all;

    &:hover {
      @apply bg-pink text-black;
    }
  }

  &-success {
    @apply text-blue-500;

    &:hover {
      @apply bg-blue-300 text-white;
    }
  }

  &-secondary {
    @apply text-darkNeutral transition-all duration-300;

    &:hover {
      @apply bg-pink text-darkNeutral;
    }
  }

  &-warning {
    @apply text-spotlight;

    &:hover {
      @apply bg-spotlight text-black;
    }
  }

  &-error {
    @apply text-red-500;

    &:hover {
      @apply bg-red-600 text-white;
    }
  }
}
</style>