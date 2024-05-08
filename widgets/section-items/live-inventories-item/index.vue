<template>
  <div>
    <!-- <img :src="props.item.images.length > 0 ? props.item.images[0].image_path : 'https://via.placeholder.com/158'" /> -->
    <div>{{ props.item.id }}</div>
  </div>
</template>

<script setup lang="ts">
import type { IProps } from "~/widgets/section-items/live-inventories-item/types";

const props = defineProps<IProps>();
</script>

<style scoped lang="scss"></style>
