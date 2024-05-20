<template>
  <div class="categories">
    <ul class="categories__list">
      <li class="categories__list__item">
        <a class="categories__list__item__link">All Products</a>
      </li>
      <li
        v-for="(category, index) in categoriesData"
        :key="index"
        class="categories__list__item"
      >
        <NuxtLink
          :to="`/live-inventories/category/${category.slug}`"
          class="categories__list__item__link"
        >
          <div class="categories__list__item__link__image">
            <img v-if="category.image_path" :src="category.image_path" />
            <img v-else src="/assets/img/icons/placeholder-picture.svg" />
          </div>
          {{ category.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useApi } from "~/composables/use-api";
import { useRoute } from 'vue-router';
const route = useRoute();

const currentRouteType = route.path.includes('live-inventories') ? 'inventory' : 'marketplace';

let categoriesData: any[] = [];
if (currentRouteType === 'inventory') {
  const { data } = useApi.PRODUCT_CATEGORIES('');
  categoriesData = data;
} else if (currentRouteType === 'marketplace') {
  const { data } = useApi.MARKETPLACE_CATEGORIES('');
  categoriesData = data;
} else {
  categoriesData = [];
}

</script>

<style scoped lang="scss">
.categories {
  &__list {
    display: flex;
    align-items: flex-start;
    list-style: none;
    gap: 16px;
    flex-wrap: wrap;

    &__item {
      &__link {
        @include txt($font-size: 16px, $color: $full-black, $opacity: 0.85);
        padding: 12px 16px;
        display: flex;
        align-items: center;
        column-gap: 8px;
        border: 1px solid $neutral-5;
        background: $white;
        border-radius: 12px;
        white-space: nowrap;
        height: 31px;
        cursor: pointer;

        &:hover, &:active {
          border: 1px solid $full-black;
          color: $full-black;
          transition: all 0.3s;
        }

        &__image {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          img {
            max-height: 100%;
            object-fit: contain;
        }
        }
      }
    }
  }
}
</style>