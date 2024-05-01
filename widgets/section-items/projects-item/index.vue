<template>
  <div class="project-item">
    <div class="project-item__header">
      <p class="project-item__header__title">{{ props.item.title }}</p>

      <p class="project-item__header__location">
        <EnvironmentOutlined class="project-item__header__location__icon" />

        {{ location }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IProps } from "~/widgets/section-items/projects-item/types";

const props = defineProps<IProps>();

const location = computed(
  () =>
    `${props.item.geo_place.attributes.City}, ${props.item.geo_place.attributes.RegionAbbr}, ${props.item.geo_place.attributes.Country}`,
);
</script>

<style scoped lang="scss">
.project-item {
  background-color: $white;
  padding: 40px;
  border-radius: 12px;

  &__header {
    &__title {
      @include txt($font-size: 24px, $font-weight: 700);

      margin-bottom: 12px;
    }

    &__location {
      @include txt($font-size: 16px);

      &__icon {
        margin-right: 8px;
      }
    }
  }
}
</style>
