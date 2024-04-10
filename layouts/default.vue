<template>
  <main>
    <WidgetHeader />

    <slot />

    <WidgetFooter v-if="!hideFooter" />

    <Component
      :is="selectedModal"
      v-if="selectedModal"
      :open="isOpen"
      @cancel="setModalState(undefined, false)"
    />
  </main>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
const { isOpen, selectedModal, setModalState } = useModals();

const hideFooter = route.path === "/";
</script>

<style scoped lang="scss">
main {
  min-height: 100vh;
  width: 100%;
  background-color: $gray;
}
</style>
