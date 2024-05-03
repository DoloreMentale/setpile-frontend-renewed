<template>
    <ADropdown>
      <AButton type="link">
        <MoreOutlined />
      </AButton>
      <AMenu slot="overlay">
          <AMenuItem>
              <NuxtLink :to="`/marketplace/update?id=${props.item.id}`">Edit</NuxtLink>
          </AMenuItem>
          <AMenuItem>
              <a @click.prevent="confirmModal()" href="#">Delete</a>
          </AMenuItem>
      </AMenu>
    </ADropdown>
</template>

<script setup lang="ts">
import type { IProps } from "~/widgets/section-items/marketplace-item/types";

const props = defineProps<IProps>();
</script>

<style scoped lang="scss"></style>
