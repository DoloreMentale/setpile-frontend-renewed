<template>
  <div class="inventory-item">
    <div class="inventory-item__header">
      <div class="inventory-item__header__preview">
        <template v-if="props.item.images.length">
          <img v-if="props.item.images[0].image_path" :src="props.item.images[0].image_path" />
        </template>
        <div>
          <div class="inventory-item__header__preview__name">{{ props.item.name }}</div>
          <div>
            <div v-if="props.item.id">
              Product ID: {{ props.item.id }}
            </div>
            <div v-if="props.item.manufacturer_part_number">
              MPN: {{ props.item.manufacturer_part_number }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IProps } from "~/widgets/section-items/live-inventories-item/types";

const props = defineProps<IProps>();
</script>

<style scoped lang="scss">
.inventory-item {
  &__header {

  }
}
</style>
