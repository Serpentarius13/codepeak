<template>
  <div class="w-[36.6rem] max-w-screen">
    <CommonSelect
      :options="techs"
      :currentOption="selectedTechnology"
      @select="selectOption"
    >
      <template #button>
        <PagedMentorshipStepsTechnologyItem
          :name="selectedTechnology.name"
          :img="selectedTechnology.img"
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
            class="text-small  h-full w-full p-[1rem]"
          >
            <PagedMentorshipStepsTechnologyItem
              :name="option.name"
              :img="option.img"
            />
          </button>
        </li>
      </template>
    </CommonSelect>
  </div>
</template>

<script setup lang="ts">
type TTechnology = { name: string; img: string };

const techs: TTechnology[] = [
  {
    name: "Javascript",
    img: "/img/js.png",
  },
  {
    name: "Javascript",
    img: "/img/js.png",
  },
  {
    name: "Javascript",
    img: "/img/js.png",
  },
  {
    name: "Javascript",
    img: "/img/js.png",
  },
  {
    name: "Javascript",
    img: "/img/js.png",
  },
  {
    name: "Javascript",
    img: "/img/js.png",
  },
  {
    name: "Javascript",
    img: "/img/js.png",
  },
  {
    name: "Javascript",
    img: "/img/js.png",
  },
  {
    name: "Javascript",
    img: "/img/js.png",
  },
];

const selectedTechnology = ref<TTechnology>(techs[0]);

const selectOption = (tech: TTechnology) => (selectedTechnology.value = tech);
</script>

<style scoped lang="scss"></style>
