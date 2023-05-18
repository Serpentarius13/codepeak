export default function useTestTag<
  T extends string | Record<U, number | string | boolean | null | undefined>,
  U extends keyof T | string | symbol | number = keyof T
>(checkProperty?: U, initialTags?: T[]) {
  const tags = ref<T[]>(initialTags ?? []) as Ref<T[]>;

  const accessProp = computed<U | string>(
    () => checkProperty ?? Object.keys(initialTags ?? tags.value)[0]
  );

  function isTagInTags(tag: T) {
    const isobj = isObject(tag);

    console.log(isobj);

    if (isobj)
      return tags.value.some((t) => {
        console.log(t, tag, "tags");
        if (isObject(t)) {
          console.log();
          return t[accessProp.value] === tag[accessProp.value as U];
        }
      });
    else return tags.value.includes(tag);
  }

  function removeTag(tag: T) {
    const isobj = isObject(tag);

    if (isobj) {
      tags.value = tags.value.filter((t) => {
        if (isObject(t)) {
          return t[accessProp.value] !== tag[accessProp.value as U];
        }
      });
    } else {
      tags.value = tags.value.filter((t) => t !== tag);
    }
  }

  function toggleTag(tag: T) {
    isTagInTags(tag) ? removeTag(tag) : tags.value.push(tag);
  }

  function removeAll() {
    tags.value = [];
  }

  return { tags, toggleTag, isTagInTags, removeAll };
}

function isObject(
  value: unknown
): value is Record<
  string | symbol | number,
  number | string | boolean | null | undefined
> {
  return typeof value === "object";
}
