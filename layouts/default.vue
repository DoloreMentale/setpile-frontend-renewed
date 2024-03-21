<template>
  <main>
    <WidgetHeader />

    <slot />
  </main>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
main {
  min-height: 100vh;
  width: 100%;
}
</style>
