<template>
  <section class="snappy flex flex-col gap-[4.4rem]">
    <div class="container flex items-center gap-[2.4rem]">
      <h1 class="heading">Привязка данных. Работа с компонентами.</h1>

      <div class="flex items-center gap-[1.2rem]">
        <CommonNotification> Spotlight </CommonNotification>

        <span class="text-medium"> 2 из 4 </span>
      </div>
    </div>

    <CommonVideoLoading
      videoUrl="https://www.youtube.com/watch?v=PmPkAAu_QF4"
    />
  </section>

  <section class="container mt-[9rem] flex flex-col gap-[2.8rem]">
    <div class="flex w-full items-end justify-between">
      <h2 class="heading">Материалы</h2>

      <button
        @click="downloadAll"
        class="flex items-center gap-[0.8rem] text-blue opacity-80 hover:opacity-100"
      >
        <NuxtIcon name="download" />

        <span class="text-medium underline-blue"> Скачать все </span>
      </button>
    </div>

    <ul class="text-medium flex flex-col gap-[2rem]">
      <li
        v-for="{ name, image, size } in files"
        :key="name"
        class="flex w-full items-center justify-between"
      >
        <figure class="flex items-center gap-[1.6rem]">
          <NuxtImg
            :src="image"
            :alt="`Картинка файла ${name} размером ${size}`"
            width="20"
            height="20"
          />

          <span>
            {{ name }}
          </span>
        </figure>

        <button
          class="group flex items-center gap-[0.8rem]"
          @click="downloadFile()"
        >
          <NuxtIcon
            name="download"
            class="text-black opacity-30 group-hover:opacity-100"
          />

          <span class="underline-gray group-hover:border-opacity-100">
            {{ size }} мб
          </span>
        </button>
      </li>
    </ul>
  </section>
</template>

<script setup lang="tsx">
interface IFile {
  image: string;
  name: string;
  size: string;
}

const files: IFile[] = [
  { image: "/img/gosling.webp", name: "Райан гослинг!", size: "69.13" },
  { image: "/img/gosling.webp", name: "Райан гослинг!", size: "69.13" },
  { image: "/img/gosling.webp", name: "Райан гослинг!", size: "69.13" },
];

function downloadFile() {}

function downloadAll() {}
</script>

<style scoped lang="scss">
@import "~/styles/base/utilities.scss";
.underline-blue {
  @include underlined(white, #0500ff, 2);
}

.underline-gray {
  @include underlined(white, black, 2);
}

.snappy {
  scroll-snap-align: end;
}

:global(html) {
  scroll-snap-type: y proximity;
  scroll-padding-top: 144px;
}
</style>
