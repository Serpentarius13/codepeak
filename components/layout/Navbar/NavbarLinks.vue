<template>
 
    <ul class="flex gap-[4rem] text-[1.7rem] text-white">
      <li v-for="{ slug, text } in navLinks" :key="text">
        <NuxtLink
          :to="slug"
          :class="$route.path.includes(slug) ? '' : 'opacity-30 hover:opacity-[40]'"
        >
          {{ text }}
        </NuxtLink>
      </li>
    </ul>
  
</template>

<script setup lang="ts">
interface INavLink {
  readonly slug: string;
  readonly text: string;
}

const navLinks: INavLink[] = [
  { slug: "/courses", text: "мои курсы" },
  { slug: "/trainer", text: "тренажер" },
  { slug: "/chat", text: "чат с ментором" },
  { slug: "/catalog", text: "каталог курсов" },
  { slug: "/articles", text: "статьи" },
];
</script>

<style scoped lang="scss"></style>
