<template>
  <section class="container-big flex flex-col gap-[5.8rem]">
    <div class="mx-auto flex flex-col items-center gap-[2.4rem]">
      <h1 class="heading flex items-center gap-[2.6rem]">
        <span> Доступные API </span>

        <span class="opacity-20"> 324 </span>
      </h1>

      <div class="flex">
        <button class="btny">Весь каталог</button>

        <button class="btny">Мои API</button>
      </div>
    </div>

    <ul class="griddy grid gap-[2.5rem]">
      <li v-for="api in apis" :key="api.name">
        <MainAPIItem v-bind="api" />
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { apis } from "~/features/constants/apis.constants";
</script>

<style scoped lang="scss">
.griddy {
  grid-template-columns: repeat(auto-fill, minmax(40rem, 1fr));
}

.btny {
  @apply text-medium borderline-transparent  rounded-big px-[2rem] py-[1rem] transition-all hover:border-transparent hover:bg-black hover:text-white;
}
</style>
