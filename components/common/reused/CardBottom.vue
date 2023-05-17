<template>
    <div
    class="text-big flex items-center gap-[9rem] md:flex-col md:items-start md:gap-[3rem]"
  >
    <button class="underline-span" @click="emit('add')">добавить</button>

    <button class="underline-span" @click="emit('more-info')">подробнее</button>
  </div>


</template>

<script setup lang="ts">


const emit = defineEmits<{(e: 'add'): void, (e: 'more-info'): void}>()

const props = defineProps<{bgColor?: string, color?: string}>()

</script>

<style scoped lang="scss">
@import "~/styles/base/utilities.scss";
.underline-span {
  --bg-color: v-bind(props.bgColor);
  --color: v-bind(props.color ?? '#fff');

  @include underlined(var(--bg-color), var(--color), 1);
}
</style>