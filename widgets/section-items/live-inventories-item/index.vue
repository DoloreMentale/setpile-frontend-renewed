<template>
  <div class="inventory-item" ref="inventory">
    <div class="inventory-item__header" @click.prevent.stop="toggleItem">
      <div class="inventory-item__header__preview">
        <div
          class="inventory-item__header__preview__item-image"
          v-if="props.item.images.length"
        >
          <img class="inventory-item__header__preview__image" v-if="props.item.images[0].image_path" :src="props.item.images[0].image_path" />
        </div>
        <div class="inventory-item__header__preview__item-name">
          {{ props.item.name }}
        </div>
        <div class="inventory-item__header__preview__item-params">
          <div v-if="props.item.id">
            Product ID: {{ props.item.id }}
          </div>•
          <div v-if="props.item.manufacturer_part_number">
            MPN: {{ props.item.manufacturer_part_number }}
          </div>
        </div>
      </div>
      <div class="inventory-item__header__buttons">
        <div class="inventory-item__header__buttons__availibility">
          In stock
        </div>
        <AButton
          v-if="props.item.availability_in_stores.length"
          size="large" type="success"
          class="inventory-item__header__buttons__locations"
        >
          {{ props.item.availability_in_stores.length }} locations <DownOutlined />
        </AButton>
        <NuxtLink class="inventory-item__header__buttons__more" :to="`/live-inventories/${props.item.slug}`">
          <AButton size="large">
            View more
          </AButton>
        </NuxtLink>
      </div>
    </div>
    <div v-if="loadMore" class="inventory-item__item-more">
      <WidgetLiveInventoriesLabels class="inventory-item__item-more__labels" />
      <a-tabs default-active-key="1">
        <a-tab-pane key="1" tab="List">
          <WidgetLiveInventoriesLocationItems :item="item" />
        </a-tab-pane>
        <a-tab-pane key="2" tab="On map" force-render>
          <WidgetLiveInventoriesMap />
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IProps } from "~/widgets/section-items/live-inventories-item/types";

const props = defineProps<IProps>();
const loadMore = ref(false);
const activeStoreIndex = ref(null);

const toggleItem = () => {
  const inventory = document.querySelector('.inventory');
  if (inventory?.classList.contains('is-open')) {
    inventory.classList.remove('is-open');
  } else {
    const items = document.querySelectorAll('.inventory-item');
    items.forEach(i => i.classList.remove('is-open'));
    inventory?.classList.add('is-open');
  }
  loadMore.value = !loadMore.value;
};
</script>

<style scoped lang="scss">
.inventory-item {
  $root: &;
  background: $white;
  transition: all .3s;

  &.is-open {
    background: $gray;

    .ant-btn-success {
      .icon {
          transform: rotate(180deg);
      }
    }

    #{$root}__more {
        display: block;
    }
  }

  &:not(:last-child) {
      border-bottom: 1px solid $neutral-5;
  }

  &__header {
    @media (min-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 24px;
      cursor: pointer;
    }

    &:hover {
      @media (min-width: 768px) {
          background: $gray;
      }
    }

    &__preview {
      display: grid;
      grid-template-areas:
      "A A B B B B B B"
      "A A C C C C C C";
      row-gap: 4px;
      column-gap: 16px;

      @media (max-width: 768px) {
        grid-template-areas:
        "A A A B B B B B"
        "C C C C C C C C";
        align-items: center;
      }

      &__item-image {
        grid-area: A;
      }

      &__item-name {
        @include txt($font-size: 16px, $font-weight: 700, $color: $full-black, $opacity: 0.85);
        grid-area: B;
      }

      &__item-params {
        @include txt($font-size: 14px, $color: $full-black, $opacity: 0.45);
        grid-area: C;
        width: 100%;
        display: flex;
        column-gap: 8px;
      }

      &__image {
        width: 50px;
        height: 50px;
      }
    }

    &__buttons {
      display: flex;
      align-items: center;
      column-gap: 32px;

      &__availibility {
        @include txt($font-size: 16px, $font-weight: 700, $color: $green-light);
      }

      &__locations {
        @include txt($font-size: 16px, $color: $green-light);
        background-color: $green-light2;
        border-radius: 100px;
        padding: 4px 12px;
      }
    }
  }

  &__item-more {
    padding: 24px;
    border-top: 1px solid $neutral-5;

    &__labels {
      @media (max-width: 1550px) {
        display: none;
      }
    }
  }
}
</style>
