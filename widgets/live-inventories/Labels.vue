<template>
  <div class="inventory-labels">
    <div>Location</div>
    <div>Updated</div>
    <div>Qty</div>
    <div class="inventory-labels__tooltip">
      MAP Price
      <ATooltip>
        <template #title>
          <span>MAP (or minimum advertised price) is the minimum amount a manufacturer or wholesaler allows resellers to advertise their products for without consequence from the manufacturer.</span>
        </template>
        <QuestionCircleOutlined />
      </ATooltip>
    </div>
    <div>Distance</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.inventory-labels {
  @include txt($font-size: 12px, $color: $full-black, $opacity: 0.45);
  display: grid;
  grid-template-columns: 1fr 11rem 11rem 12rem 10rem;
  width: calc(50% - 1.2rem);

  div {
    padding-right: 1.6rem;

    &:last-child {
      padding: 0;
    }

    &:nth-child(2) {
      @media (min-width: 768px) {
        text-align: left;
      }
    }
  }

  &__tooltip {
    display: flex;
    align-items: center;
    column-gap: 4px;
  }
}
</style>