<template>
  <div class="page-content">
    <div class="page-content__sort">
      <BasePageSort :sortList="sortOptions" />
    </div>
    <div :class="['page-content__list', `page-content__list--${props.section}`]">
      <Component
        :is="componentToRender"
        v-for="item in props.items"
        :key="item.id"
        :item="item"
        class="page-content__list__item"
      />
    </div>

    <a-pagination
      class="page-content__pagination"
      v-model:current="props.meta.currentPage"
      v-model:pageSize="pageSize"
      :total="props.meta.total"
      show-size-changer
      show-less-items
    />
  </div>
</template>

<script setup lang="ts">
import type { IProps, TMeta } from "~/base/page-content/types";
import { itemComponents } from "~/base/page-content/data";
import { projectSortOptions, liveInventoriesSortOptions, marketplaceSortOptions } from "~/base/page-sort/data";

const props = defineProps<IProps>();

const pageSize = ref(20);

const componentToRender = computed(() => {
  return itemComponents[props.section];
});

const getSortOptions = (section: string) => {
  switch (section) {
    case "projects":
      return projectSortOptions;
    case "live-inventories":
      return liveInventoriesSortOptions;
    case "marketplace":
      return marketplaceSortOptions;
    default:
      return [];
  }
};

const sortOptions = computed(() => {
  return getSortOptions(props.section);
});
</script>

<style scoped lang="scss">
.page-content {
  @include container($x: 40px);

  @media (max-width: 768px) {
    @include container($x: 24px, $y: 16px);
  }

  background-color: $gray;

  &__list {
    margin: 40px 0;

    @media (max-width: 768px) {
      margin: 24px 0 32px
    }

    &--projects, &--marketplace {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 40px;

      @media (max-width: 1228px) {
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 24px;
      }
    }

    &--live-inventories {
      display: grid;
      border: 1px solid $neutral-5;
      border-radius: 12px;
      overflow: hidden;
    }

    &--news {
      display: flex;
      flex-direction: column;
      row-gap: 40px;
    }
  }

  &__pagination {
    text-align: center;
  }
}
</style>
