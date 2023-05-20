<template>
  <form class="max-w-screen relative w-[50rem]">
    <CommonInputTextarea placeholder="Ваша проблема" v-model="textModel" />

    <label
      class="absolute bottom-0 right-0 flex-col items-end gap-[1rem] p-[2rem]"
    >
      <input
        type="file"
        class="absolute left-0 top-0 h-full w-full cursor-pointer opacity-0"
        multiple
        @input="handleFileInput"
      />

      <div class="flex items-center gap-[1rem]">
        <NuxtIcon name="input/file" />

        <Transition name="fade">
          <button
            @click="clearFiles"
            class="z-[10]"
            v-show="!!fileRef"
            type="button"
          >
            <NuxtIcon name="xmark" class="text-red" />
          </button>
        </Transition>
      </div>

      <ul
        class="flex max-h-[15rem] flex-col items-end gap-[1rem] overflow-auto"
        v-if="fileRef"
      >
        <li v-for="file in fileRef" :key="file.name">
          {{ file.name }}
        </li>
      </ul>
    </label>
  </form>
</template>

<script setup lang="ts">
const textModel = defineModel();

const fileRef = ref<File[] | null>(null);

const emit = defineEmits<{ files: [files: File[]] }>();

function handleFileInput(e: Event) {
  const { files } = e.target as HTMLInputElement;

  if (!files) return;

  emit("files", [...files]);
  fileRef.value = [...files];
}

function clearFiles() {
  fileRef.value = null;
  emit("files", []);
}
</script>

<style scoped lang="scss"></style>
