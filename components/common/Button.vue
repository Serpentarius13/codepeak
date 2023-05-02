<template>
  <button :class="buttonVariants({ variant, size })">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "w-fit flex items-center justify-center border-[1px] border-solid border-transparent transition-standard",
  {
    variants: {
      variant: {
        outline:
          "bg-white !border-black text-black hover:bg-black hover:text-white",
        filled:
          "bg-black !border-black text-white hover:bg-white hover:text-black",
        blue: "!border-blue bg-blue text-white hover:bg-white hover:text-blue",
      },
      size: {
        small: "py-[1.4rem] rounded-[1.6rem] px-[3rem] text-[1.9rem]",
        medium: "py-[2rem] px-[4.9rem] rounded-[10rem] text-[2.3rem]",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "medium",
    },
  }
);

type ButtonProps = Required<VariantProps<typeof buttonVariants>>;

const props = defineProps<{
  variant: ButtonProps["variant"];
  size: ButtonProps["size"];
}>();

console.log(props);
</script>

<style scoped lang="scss"></style>
