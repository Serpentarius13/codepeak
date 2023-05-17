<template>
  <section class="container-big flex flex-col items-center gap-[10rem]">
    <div class="grid grid-cols-4 gap-[2.4rem]">
      <div class="row-span-2 flex h-full w-full flex-col gap-[4rem]">
        <CommonInputSearch v-model="searchRef" placeholder="Поиск курса" />

        <MainCatalogueFilterTitle title="Направление">
          <MainCatalogueTags
            :tags="directionTags"
            :is-exists="isDirectionTag"
            :bg-color="colors.blue"
            :remove-all="removeAllDirection"
            @tagged="toggleDirectionTag"
          />
        </MainCatalogueFilterTitle>

        <MainCatalogueFilterTitle title="Уровень сложности">
          <MainCatalogueTags
            :tags="experienceTags"
            :is-exists="isExperienceTag"
            :bg-color="colors.black"
            :remove-all="removeAllExperience"
            @tagged="toggleExperienceTag"
          />
        </MainCatalogueFilterTitle>
      </div>

      <MainCourseCard
        v-for="course in duplicateArray(courses, 5)"
        :key="id"
        v-bind="course"
      />
    </div>
  </section>
</template>

<script setup lang="tsx">
import { courses } from "~/features/constants/courses.constants";

import {
  courseDirectionMap,
  courseExperienceMap,
} from "~/features/constants/courses.constants";
import useTag from "~/features/hooks/useTags.js";
import { ITag } from "~/features/types/shared.types";
import CatalogueFilterTitle from "./CatalogueFilterTitle.vue";

import { colors } from "~/features/constants/colors.constants";

const makeTags = (map: Record<string, string>) =>
  Object.keys(map).map((key) => ({ slug: key, name: map[key] }));

const searchRef = ref<string>("");

const directionTags = makeTags(courseDirectionMap);
const experienceTags = makeTags(courseExperienceMap);

const {
  tags: directionRef,
  isTagInTags: isDirectionTag,
  toggleTag: toggleDirectionTag,
  removeAll: removeAllDirection,
} = useTag();

const {
  tags: experienceRef,
  isTagInTags: isExperienceTag,
  toggleTag: toggleExperienceTag,
  removeAll: removeAllExperience,
} = useTag();

function duplicateArray(array: unknown[], times: number) {
  let returning: any[] = [];
  for (let i = 0; i < times; i++) {
    returning = [...returning, ...array];
  }

  return returning;
}
</script>

<style scoped lang="scss"></style>
