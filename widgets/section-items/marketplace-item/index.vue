<template>
  <div class="marketplace">
    <MoreOutlined class="marketplace-icon" />
    <!-- <WidgetDropdownEdit class="marketplace-icon" /> -->
    <div class="marketplace-item">
      <div class="marketplace-item__header">
        <div class="marketplace-item__header__seller">
          <UserOutlined /> Private Seller
        </div>
        <div class="marketplace-item__header__right">
          <div class="marketplace-item__header__right__location">
            <EnvironmentOutlined />
            {{ location }}
          </div>
          <div v-if="props.item.delivery_method_type" class="marketplace-item__header__right__delivery">
            {{ props.item.delivery_method_type.name }}
          </div>
        </div>
      </div>
      <div class="marketplace-item__main">
        <div class="marketplace-item__main__image">
          <img
            :src="props.item.images.length > 0 ? props.item.images[0].image_path : 'https://via.placeholder.com/158'"
            alt="Main Image"
            class="marketplace-item__main__image__item"
          >
        </div>
        <div class="marketplace-item__main__text">
          <div class="marketplace-item__main__text__title">{{ props.item.title }}</div>
          <div
            v-if="props.item.subtitle"
            class="marketplace-item__main__text__subtitle"
          >
            {{ props.item.subtitle }}
          </div>
          <div
            v-if="props.item.price_value && props.item.price_unit_type.name"
            class="marketplace-item__main__text__price"
          >
            ${{ props.item.price_value }}/{{ props.item.price_unit_type.name }}
          </div>
          <div
            v-if="props.item.quantity"
            class="marketplace-item__main__text__pices"
          >
            {{ props.item.quantity }}&nbsp;pcs available
          </div>
          <div
            v-if="props.item.allow_offers"
            class="marketplace-item__main__text__ready"
          >
            Ready for offers
          </div>
        </div>
      </div>
      <div class="marketplace-item__tags">
        <div v-if="props.item.category" class="marketplace-item__tags__item">
          {{ props.item.category.name }}
        </div>
        <div v-if="props.item.condition_type" class="marketplace-item__tags__item">
          {{ props.item.condition_type.name }}
        </div>
        <div v-if="props.manufacturer" class="marketplace-item__tags__item">
          {{ props.item.manufacturer.name }}
        </div>
        <div v-if="props.item.model_name" class="marketplace-item__tags__item">
          {{ props.item.model_name }}
        </div>
        <div v-if="props.item.application_type" class="marketplace-item__tags__item">
          {{ props.item.application_type.name }}
        </div>
      </div>
      <div
        v-if="props.item.created_at && props.item.updated_at"
        class="marketplace-item__date"
      >
        <template v-if="props.item.created_at === props.item.updated_at">
          {{ dateTransform(props.item.created_at) }}
        </template>
        <template v-else>
          {{ dateTransform(props.item.updated_at) }}
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IProps } from "~/widgets/section-items/marketplace-item/types";
import { useDateTransform } from '~/composables/use-date-transform';

const { dateTransform } = useDateTransform(new Date());

const props = defineProps<IProps>();

const location = computed(
  () =>
    `${props.item.geo_place.attributes.City}, ${props.item.geo_place.attributes.RegionAbbr}, ${props.item.geo_place.attributes.Country}`,
);
</script>

<style scoped lang="scss">
.marketplace {
  background-color: $white;
  border-radius: 12px;
  border: 1px solid $white;

  &:hover {
    border: 1px solid $blue;
    cursor: pointer;
    transition: all 0.3s;
  }
  &-icon {
    display: flex;
    justify-content: end;
    height: 0;
    padding: 8px;
  }
  &-item {
    padding: 8px 40px 40px;

    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      &__seller, &__right__location {
        @include txt($font-size: 14px, $color: $full-black, $opacity: 0.85);
        display: flex;
        flex-direction: row;
        align-items: center;
        column-gap: 8px;
      }

      &__right {
        display: flex;
        flex-direction: row;
        column-gap: 12px;

        &__delivery {
          @include txt($font-size: 14px, $color: $white);
          padding: 0 8px;
          background-color: $lime;
          border-radius: 16px;
        }
      }
    }

    &__main {
      display: flex;
      align-items: flex-start;
      column-gap: 24px;
      margin: 16px 0 32px;

      &__image {
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 158px;
        max-width: 158px;
        height: 158px;
        border-radius: 2px;
        &__item {
          max-width: 100%;
          height: auto;
        }
      }

      &__text {
        &__title {
          @include txt($font-size: 24px, $font-weight: 500, $color: $full-black, $opacity: 0.85);
        }

        &__subtitle {
          @include txt($font-size: 16px, $color: $full-black, $opacity: 0.85);
        }

        &__price {
          @include txt($font-size: 20px, $font-weight: 500, $color: $full-black, $opacity: 0.85);
        }

        &__pices {
          @include txt($font-size: 16px, $font-weight: 500, $color: $full-black, $opacity: 0.85);
        }

        &__ready {
          @include txt($font-size: 16px, $color: $full-black, $opacity: 0.45);
        }
      }
    }

    &__tags {
      display: flex;
      gap: 8px;
      align-items: center;
      flex-wrap: wrap;

      &__item {
        @include txt($font-size: 16px, $color: $full-black, $opacity: 0.85);
        background: $neutral-3;
        padding: 1px 10px;
        border-radius: 100px;
      }
    }

    &__date {
      @include txt($font-size: 14px, $color: $full-black, $opacity: 0.45);
      margin: 32px 0 0;
    }
  }
}
</style>
