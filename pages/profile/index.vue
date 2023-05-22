<template>
  <PagesProfileHeader />

  <div class="container-big pt-[2.6rem]">
    <PagesProfileAchievements />
  </div>
</template>

<script setup lang="ts">
import useModalStore from "~/stores/useModalStore";

import ModalAchievement from "~/components/widgets/Modal/ModalAchievement.vue";

const modalStore = useModalStore();

onMounted(() => {
  modalStore.openModal({ component: ModalAchievement });
});
</script>

<style scoped lang="scss"></style>
