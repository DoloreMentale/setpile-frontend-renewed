<template>
  <div class="tariffs">
    <a-card class="tariffs__card">
      <div class="tariffs__card__title">Basic</div>
      <div class="tariffs__card__subtitle">Free</div>
      <AButton v-if="isStripeButton" :disabled="true" class="tariffs__card__button" @click="startFreePlan">
        Сurrent plan
      </AButton>
      <AButton v-if="isDefaultButton" class="tariffs__card__button" @click="setModalState('register', true)">
        Start free plan
      </AButton>
      <div class="tariffs__card__list-title">Projects</div>
      <ul class="tariffs__card__list">
        <li class="tariffs__card__list__item"><CheckOutlined /><strong>Free</strong> Project posting</li>
        <li class="tariffs__card__list__item"><CheckOutlined /><strong>Free</strong> Resume posting</li>
        <li class="tariffs__card__list__item"><CheckOutlined /><strong>Free 3 responses/month</strong> to projects, resumes or contact reviews</li>
      </ul>
      <div class="tariffs__card__list-title">Live Inventories</div>
      <ul class="tariffs__card__list">
        <li class="tariffs__card__list__item"><CheckOutlined />Access to <strong>{{ totalSum }} products</strong> from <strong>{{ vendors }} distributors</strong></li>
        <li class="tariffs__card__list__item"><CheckOutlined />Availability at the city level</li>
      </ul>
      <div class="tariffs__card__list-title">Marketplace B2B</div>
      <ul class="tariffs__card__list">
        <li class="tariffs__card__list__item"><CheckOutlined />Access to <strong>{{ listingCount }} active</strong> deals</li>
        <li class="tariffs__card__list__item"><CheckOutlined /><strong>3 Free Responses/month</strong> to listings</li>
      </ul>
      <div class="tariffs__card__list-title">News</div>
      <ul class="tariffs__card__list">
        <li class="tariffs__card__list__item"><CheckOutlined />Latest industry news</li>
      </ul>
    </a-card>

    <a-card :class="{ 'tariffs__card--general-tariff': isGeneralTariff }">
      <div :class="{ 'tariffs__card__title--general-tariff': isGeneralTariff }">Pro</div>
      <div class="tariffs__card__price">${{ basic_price }}/month</div>
      <div class="tariffs__card__price">
        <div v-if="codeValid && !month_discount">
          <del>${{ available_month_price }}</del> ${{ promotion_price }}/month
        </div>
        <div v-else>
          ${{ available_month_price }}/month
        </div>
      </div>
      <AButton v-if="isStripeButton" :class="{ 'tariffs__card__button--general-button': isGeneralTariff }" @click="sendStripe()">
        <a-spin v-if="loadingMonthly"/><template v-else>Start 30 days free trial</template>
      </AButton>
      <AButton v-if="isDefaultButton" :class="{ 'tariffs__card__button--general-button': isGeneralTariff }" @click="setModalState('register', true)">
        Start 30 days free trial
      </AButton>
      <WidgetPaymentFeatureList />
    </a-card>

    <div>
      <div class="tariffs__card__tag">10% OFF</div>
      <a-card :class="{ 'tariffs__card--monthly-tariff': isMonthlyTariff }">
        <div class="tariffs__card__title">Pro annual</div>
        <div v-if="codeValid" class="tariffs__card__price">
          <del>$26</del> $24/month
        </div>
        <div v-else class="tariffs__card__price">
          $26/month
        </div>
        <div v-if="codeValid" class="tariffs__card__description">
          <del>${{ available_year_price }}</del> $282 billed annually
        </div>
        <div v-else class="tariffs__card__description">
          ${{ available_year_price }} billed annually
        </div>
        <AButton v-if="isStripeButton" class="tariffs__card__button" @click="sendStripeOneYear()">
          <a-spin v-if="loadingYearly"/> <template v-else>Start 30 days free trial</template>
        </AButton>
        <AButton v-if="isDefaultButton" class="tariffs__card__button" @click="setModalState('register', true)">
          Start 30 days free trial
        </AButton>
        <WidgetPaymentFeatureList />
      </a-card>
    </div>
  </div>
</template>

<script setup lang="ts">
const { setModalState } = useModals();

const props = defineProps({
  isDefaultButton: Boolean,
  isStripeButton: Boolean,
  loadingMonthly: Boolean,
  loadingYearly: Boolean
});

const isGeneralTariff = true;
const isMonthlyTariff = true;
</script>

<style scoped lang="scss">
.tariffs {
  margin: 32px auto 0;

  @media(min-width: 660px) {
    max-width: 328px;
  }

  @media(min-width: 1220px) {
    display: grid;
    grid-template-columns: 278px 314px 278px;
    column-gap: 40px;
    row-gap: 0;
    margin: 54px auto 0;
    max-width: fit-content;
  }

  &__card {
    height: min-content;
    width: 100%;
    padding: 16px;
    border-radius: 12px;

    &--general-tariff {
      background: $blue;
      color: $white;
      padding: 16px;
      border-radius: 12px;
    }

    &--monthly-tariff {
      margin-top: -40px;
      padding: 16px;
      border-radius: 12px;
    }

    &__title {
      @include txt($font-size: 38px, $font-weight: 700, $color: $full-black, $opacity: 0.85);
      &--general-tariff {
        @include txt($font-size: 38px, $font-weight: 700, $color: $white);
      }
    }

    &__subtitle {
      @include txt($font-size: 24px, $font-weight: 700, $color: $full-black, $opacity: 0.85);
      &--general-tariff {
        @include txt($font-size: 24px, $font-weight: 700, $color: $white);
      }
    }

    &__list-title {
      @include txt($font-size: 16px, $font-weight: 500, $color: $full-black, $opacity: 0.85);
    }

    &__list {
      text-align: left;
      list-style: none;
      padding: 0;

      &__item {
        @include txt($font-size: 16px, $color: $full-black);

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        column-gap: 8px;
        align-items: center;

        &:not(:last-child) {
          margin-bottom: 12px;
        }
      }
    }

    &__button {
      border-radius: 12px;
      width: 100%;
      margin: 24px 0;
      padding: 6px auto;

      &--general-button {
        color: $white;
        margin: 32px 0;
        padding: 6px auto;
        background: $orange-medium;
        border: none;
        border-radius: 12px;
        width: 100%;
      }
    }

    &__price {
      @include txt($font-size: 24px, $font-weight: 700, $color: inherit);
    }

    &__description {
      @include txt($font-size: 16px, $color: $full-black, $opacity: 0.75);
    }

    &__tag {
      @include txt($font-size: 20px, $font-weight: 700, $color: $white);
      position: relative;
      top: -23px;
      right: -30%;
      z-index: 10;
      padding: 7px 16px;
      background-color: $red;
      border-radius: 123px;
      width: max-content;
      transform: rotate(3.141deg);
    }
  }
}
</style>
