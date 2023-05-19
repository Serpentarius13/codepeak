<template>
  <article
    :class="[
      'max-w-screen flex  min-h-[40rem] w-full flex-col justify-between rounded-big p-[4rem]',
      !bgColor && 'borderline-transparent',
    ]"
    :style="{ backgroundColor: bgColor, color }"
  >
    <div class="flex flex-col gap-[2.8rem]">
      <span
        :class="[
          'text-small w-fit rounded-biggest px-[1.6rem] py-[1.2rem]',
          !bgColor && 'borderline-transparent',
        ]"
        :style="tagStyleComputed"
      >
        API
      </span>

      <h4 class="heading-medium">{{ name }}</h4>
    </div>

    <CommonReusedCardBottom :bg-color="bgColor ?? '#fff'" :color="color ?? colors.black" />
  </article>
</template>

<script setup lang="ts">
import { IApi } from "~/features/constants/apis.constants";
import { colors } from "~/features/constants/colors.constants";

const props = defineProps<IApi>()

const tagStyleComputed = computed<{}>(() => {
  let styles: any = {};

  if (props.tagColor && props.tagColor !== '#fff') styles.color = "#fff";
  else styles.color = colors.black;
  styles.backgroundColor = props.tagColor;

  return styles;
});
</script>

<style scoped lang="scss"></style>
