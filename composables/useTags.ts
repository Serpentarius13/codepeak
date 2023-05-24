import { ITag } from "../features/types/shared.types";

export default function useTag() {
  const tags = ref<ITag[]>([]);

  function isTagInTags(tag: ITag) {
    return !!tags.value.find((t) => t.slug === tag.slug);
  }

  function toggleTag(tag: ITag) {
    isTagInTags(tag)
      ? (tags.value = tags.value.filter((t) => t.slug !== tag.slug))
      : tags.value.push(tag);
  }

  function removeAll() {
    tags.value = [];
  }

  return { tags, toggleTag, isTagInTags, removeAll };
}
