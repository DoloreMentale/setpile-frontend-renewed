<template>
  <main>
    <WidgetHeader />

    <slot />

    <WidgetFooter v-if="!hideFooter" class="main-footer" />
  </main>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
const hideFooter = route.path === '/';
</script>

<style scoped lang="scss">
main {
  min-height: 100vh;
  width: 100%;
  background-color: $gray;
}

.main-footer {
  margin-top: auto;
  margin-bottom: 16px;
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
