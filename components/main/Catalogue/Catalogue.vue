<template>
  <section class="container-big flex flex-col gap-[10rem]">
    <slot />

    <div class="grid w-full griddy justify-start gap-[2.4rem]">
      <nav class="row-span-2 flex h-full w-full flex-col gap-[4rem]">
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

        <MainCatalogueFilterTitle
          title="Продолжительность курса"
          class="relative"
        >
          <div class="flex w-full flex-col gap-[1.5rem]">
            <CommonInputRange
              @min="handleMinRange"
              @max="handleMaxRange"
              min="1"
              max="12"
            />

            <div class="flex w-full justify-between">
              <span class="text-small text-black opacity-30 hover:opacity-100">
                1 месяц
              </span>

              <span class="text-small text-black opacity-30 hover:opacity-100">
                12 месяцев
              </span>
            </div>
          </div>
        </MainCatalogueFilterTitle>

        <MainCatalogueFilterTitle title="По подпискам">
          <MainCatalogueTags
            :tags="subscriptionTags"
            :is-exists="isSubscriptionTag"
            :bg-color="colors.blue"
            :remove-all="removeAllSubscription"
            @tagged="toggleSubscriptionTag"
          />
        </MainCatalogueFilterTitle>
      </nav>

      <TransitionGroup name="popper">
        <MainCourseCard
          v-for="(course, ix) in coursesComputed"
          :key="course.id"
          v-bind="course"
          :style="{
            transitionDelay: `${ix * 5}ms`,
            transitionDuration: `${ix * 50}ms`,
          }"
        />
      </TransitionGroup>
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
import { tariffs } from "~/features/constants/tariffs.constants";
import { ICourse } from "~/features/types/courses.types";
import { ClientOnly } from "~/.nuxt/components";

const makeTags = (map: Record<string, string>) =>
  Object.keys(map).map((key) => ({ slug: key, name: map[key] }));

const searchRef = ref<string>("");

const duplicatedCourses = duplicateArray(courses, 5);

const directionTags = makeTags(courseDirectionMap);
const experienceTags = makeTags(courseExperienceMap);
const subscriptionTags = makeTags(
  tariffs.reduce((acc, cur) => {
    acc[cur.name] = cur.name;
    return acc;
  }, {} as any)
);

console.log(tariffs);
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

const {
  tags: subscriptionRef,
  isTagInTags: isSubscriptionTag,
  toggleTag: toggleSubscriptionTag,
  removeAll: removeAllSubscription,
} = useTag();

const range = ref<string>("1-12");

function handleMinRange(value: string) {
  range.value = `${value}-${range.value.split("-")[1]}`;
}

function handleMaxRange(value: string) {
  range.value = `${range.value.split("-")[0]}-${value}`;
}

// Фильтрация

const coursesComputed = computed<ICourse[]>(() => {
  const filtrations = getFiltrations();

  return composeFunctions(duplicatedCourses, filtrations);
});

type TCourseFiltration = (courses: ICourse[]) => ICourse[];

function composeFunctions(target: ICourse[], fns: TCourseFiltration[]) {
  return fns.reduce((t, fn) => {
    return fn(t);
  }, target);
}

function getFiltrations() {
  const filtrations: TCourseFiltration[] = [];

  if (directionRef.value.length)
    makeTagFiltration(filtrations, directionRef, "direction");
  if (experienceRef.value.length)
    makeTagFiltration(filtrations, experienceRef, "experience");

  if (subscriptionRef.value.length)
    makeTagFiltration(filtrations, subscriptionRef, "subscription");

  filtrations.push((courses: ICourse[]) =>
    courses.filter((c) => {
      const duration = +c.duration;

      const [min, max] = range.value.split("-").map((r) => +r);

      return duration >= min && duration <= max;
    })
  );

  return filtrations;
}

function makeTagFiltration(
  acc: TCourseFiltration[],
  reffy: Ref<ITag[]>,
  field: keyof ICourse
) {
  acc.push(() =>
    duplicatedCourses.filter((c) =>
      reffy.value.some((t) => t.slug === c[field])
    )
  );
}

function duplicateArray<T>(array: T[], times: number): T[] {
  let returning: any[] = [];
  for (let i = 0; i < times; i++) {
    returning = [...returning, ...array];
  }

  return returning;
}
</script>

<style scoped lang="scss">
.popper-enter-from,
.popper-leave-to {
  scale: 0.2;
  rotate: 90deg;
  opacity: 0;
}

.griddy {
  grid-template-columns: repeat(auto-fill, minmax(42rem, 1fr));
}
</style>
