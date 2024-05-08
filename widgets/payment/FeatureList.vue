<template>
  <div class="pro-tariff">
    <div class="pro-tariff__list-title">Projects</div>
    <div class="pro-tariff__subtitle">Basic +</div>
    <ul class="pro-tariff__list">
      <li class="pro-tariff__list__item" v-for="feature in proFeaturesFirst" :key="index"><CheckOutlined /><span v-html="feature" /></li>
    </ul>
    <div class="pro-tariff__list-title">Live Inventories</div>
    <div class="pro-tariff__subtitle">Basic +</div>
    <ul class="pro-tariff__list">
      <li class="pro-tariff__list__item" v-for="feature in proFeaturesSecond" :key="index"><CheckOutlined /><span v-html="feature" /></li>
    </ul>
    <div class="pro-tariff__list-title">Marketplace B2B</div>
    <div class="pro-tariff__subtitle">Basic +</div>
    <ul class="pro-tariff__list">
      <li class="pro-tariff__list__item" v-for="feature in proFeaturesThird" :key="index"><CheckOutlined /><span v-html="feature" /></li>
    </ul>
    <div class="pro-tariff__list-title">News</div>
    <div class="pro-tariff__subtitle">Basic +</div>
    <ul class="pro-tariff__list">
      <li class="pro-tariff__list__item"><CheckOutlined />Personal news feed</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { proFeaturesFirst, proFeaturesSecond, proFeaturesThird } from "./factory.ts";
</script>

<style scoped lang="scss">
.pro-tariff {
  &__list-title {
    @include txt($font-size: 16px, $font-weight: 500, $color: inherit);
  }

  &__subtitle {
    @include txt($font-size: 16px, $color: inherit);
  }

  &__list {
    text-align: left;
    list-style: none;
    padding: 0;

    &__item {
      @include txt($font-size: 16px, $color: inherit);
      display: grid;
      grid-template-columns: 24px 1fr;
      column-gap: 8px;
      align-items: baseline;

      @media(min-width: 660px) {
          grid-template-columns: 24px 235px;
      }

      @media(min-width: 1220px) {
          grid-template-columns: 24px 170px;
      }

      &:not(:last-child) {
          margin-bottom: 12px;
      }
    }
  }
}
</style>