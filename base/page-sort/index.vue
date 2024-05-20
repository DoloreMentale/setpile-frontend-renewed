<template>
  <div class="sort">
    <ADropdown v-model="sortShow">
      <a class="sort__current" @click.prevent="sortShow = !sortShow">
        {{ currentSort?.label }}
        <DownOutlined />
      </a>
      <template #overlay>
        <AMenu>
          <AMenuItem v-for="(item, index) in sortList" :key="index">
            <a @click.prevent="selectSort(item)">
              {{ item.label }}
            </a>
          </AMenuItem>
        </AMenu>
      </template>
    </ADropdown>
  </div>
</template>

<script setup lang="ts">
import type { SortOption } from "~/base/page-sort/types";
const props = defineProps({
  sortList: {
    type: Array as () => SortOption[],
    required: true,
  },
});

const sortShow = ref(false);
const sortField = ref(props.sortList[0]);
const currentSort = computed(() => sortField.value);

const selectSort = (sortOption: SortOption) => {
  sortField.value = sortOption;
  sortShow.value = false;
};
</script>

<style scoped lang="scss">
.sort {
  &__current {
    @include txt($font-size: 16px, $color: $black, $opacity: 0.85);
    cursor: pointer;
  }
}
.ant-dropdown-link {
  @include txt($font-size: 16px, $color: $black, $opacity: 0.85);
  cursor: pointer;
}
</style>
