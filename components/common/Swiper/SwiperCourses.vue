<template>
  <CommonSwiperSkeleton :options="options">
    <SwiperSlide v-for="course in courses" :key="course.id">
      <MainCourseCard v-bind="course" />
    </SwiperSlide>
  </CommonSwiperSkeleton>
</template>

<script setup lang="ts">
import { ICourse } from "~/features/types/courses.types";
import { ISwiperOptions } from "~/features/types/swiper.types";

const options: ISwiperOptions = {
  breakpoints: {
    800: {
      slidesPerView: 2,
      spaceBetween: 15,
    },

    // when window width is >= 640px
    1400: {
      slidesPerView: 2,
      spaceBetween: 35,
    },
  },
};

defineProps<{ courses: ICourse[] }>();
</script>

<style scoped lang="scss"></style>
