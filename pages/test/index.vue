<template>
  <MainHomeTeamSlider :slides="slides" />
</template>

<script setup lang="ts">
import { ITeamSlide } from "~/features/types/shared";

const slides: ITeamSlide[] = [
  {
    name: "Сергей Есенин",
    position: "Генеральный директор",
    img: "/img/person.png",
    alt: "Фотография Сергея Есенина",
  },
  {
    name: "Volvo",
    position: "Маскот",
    img: "/img/volvo.jpg",
    alt: "Фотография Volvo",
  },
  {
    name: "Сергей Есенин",
    position: "Генеральный директор",
    img: "/img/person.png",
    alt: "Фотография Сергея Есенина",
  },
  {
    name: "Volvo",
    position: "Маскот",
    img: "/img/volvo.jpg",
    alt: "Фотография Volvo",
  },
];
const router = useRouter();

onMounted(() => {
  if (process.env.NODE_ENV !== "development") router.push("/");
});
</script>

<style scoped lang="scss"></style>
