<template>
  <UIModal>
    <WidgetPayment
      isStripeButton="true"
    />
  </UIModal>
</template>

<script setup lang="ts">
const { setModalState } = useModals();
import { ref } from "vue";
</script>

<style scoped lang="scss">
</style>
