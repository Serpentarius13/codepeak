<template>
  <div class="table-container">
    <table class="text-[2rem]">

      <caption class="text-big text-start pb-[5.2rem]">
        Ключевые функции
      </caption>
      <tbody>
        <tr v-for="{ title, values } in data" :key="title" class="py-[2.6rem] border-t-[1px] last:border-b-[1px] border-black border-opacity-[15%] ">
          <th class="text-start font-normal opacity-40">
            {{ title }}
          </th>

          <td
            v-for="value in values"
            :key="typeof value === 'string' ? value : value.value"
            :style="
              typeof value === 'object' && value.isBad ? { opacity: '40%' } : {}
            "
            class="text-center py-[2.6rem] w-[44.3rem]"
          >
            {{ typeof value === "string" ? value : value.value }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ITableRow } from "~/features/types/shared.types";

defineProps<{ data: ITableRow[] }>();
</script>

<style scoped lang="scss">
.table-container {
  overflow-x: auto;
 
}

table {
  min-width: 85rem;
  width: 100%;
}
</style>
