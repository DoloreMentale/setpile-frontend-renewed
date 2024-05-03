<template>
  <div class="news-item">
    <div class="news-item__topics"></div>

    <div class="news-item__content">
      <h3 class="news-item__content__title">
        {{ props.item.title }}
      </h3>
      <div class="news-item__content__descr" v-html="props.item.content" />
      <div class="news-item__content__image">
        <img :src="props.item.image_path" />
      </div>

      <div class="news-item__content__date">
        {{ dateTransform(props.item.created_at) }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IProps } from "~/widgets/section-items/news-item/types";
import { useDateTransform } from '~/composables/use-date-transform';

const { dateTransform } = useDateTransform(new Date());

const props = defineProps<IProps>();
</script>

<style scoped lang="scss">
.news-item {
  background-color: $white;
  padding: 40px;
  border-radius: 12px;
  border: 1px solid $white;
  max-width: 660px;

  &:hover {
    border: 1px solid $blue;
    cursor: pointer;
    transition: all 0.3s;
  }

  &__content {
    &__title {
      @include txt($font-size: 24px, $font-weight: 500, $color: $full-black, $opacity: 0.85);
      margin: 12px 0;
    }

    &__descr {
      @include txt($font-size: 16px, $color: $full-black, $opacity: 0.85);
      position: relative;
      max-height: 100px;
      overflow: hidden;
    }

    &__image {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 217px;
      border-radius: 12px;
      overflow: hidden;
      margin: 40px 0;
    }

    &__date {
      @include txt($font-size: 14px, $color: $full-black, $opacity: 0.45);
    }
  }
}
</style>
