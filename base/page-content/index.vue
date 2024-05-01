<template>
  <div class="page-content">
    <div
      :class="['page-content__list', `page-content__list--${props.section}`]"
    >
      <Component
        :is="componentToRender"
        v-for="item in props.items"
        :key="item.id"
        :item="item"
        class="page-content__list__item"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IProps } from "~/base/page-content/types";
import { itemComponents } from "~/base/page-content/data";

const props = defineProps<IProps>();

const componentToRender = computed(() => {
  return itemComponents[props.section];
});
</script>

<style scoped lang="scss">
.page-content {
  @include container($x: 56px);

  background-color: $gray;

  &__list {
    &--projects {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 40px;
    }

    &__item {
    }
  }
}
</style>
