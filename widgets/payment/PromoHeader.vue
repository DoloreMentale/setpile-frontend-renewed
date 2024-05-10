<template>
  <div class="payment-header">
    <div class="payment-header__container">
      <div class="payment-header__container__left">
        <div class="payment-header__container__left__top payment-header__container__tag">Live Inventories</div>
        <div class="payment-header__container__left__bottom payment-header__container__tag">Projects</div>
      </div>
      <div>
        <div class="payment-header__container__title">All professional tools in one place</div>
      </div>
      <div class="payment-header__container__right">
        <div class="payment-header__container__right__top payment-header__container__tag">News</div>
        <div class="payment-header__container__right__bottom payment-header__container__tag">Marketplace B2B</div>
      </div>
    </div>
    <div class="payment-header__input" v-show="inputVisible || codeValid">
      <AInput size="large" placeholder="Promo code (optional)" v-model="code">
        <template v-slot:addonAfter>
          <template v-if="codeValid">
            <CheckOutlined />
          </template>
          <template v-else>
            <AButton class="payment-header__input__button" @click="validatePromocode()">Apply</AButton>
          </template>
        </template>
      </AInput>
    </div>
    <div v-if="month_discount">
      <div class="payment-header__input__next" v-if="codeValid">Next <del>${{ basic_price }}</del> ${{ promotion_price }} a month</div>
    </div>
    <div>
      <AButton class="payment-header__input__descr" @click="toggleInputVisibility" v-show="!inputVisible && !codeValid">
        Have a promo code?
      </AButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const inputVisible = ref(false);

const toggleInputVisibility = () => {
  inputVisible.value = !inputVisible.value;
};
</script>

<style scoped lang="scss">
.payment-header {
  text-align: center;
  max-width: 736px;
  margin: 100px auto 0;

  &__container {
    display: flex;
    justify-content: space-between;
    width: max-content;
    margin: 0 auto;

    @media(max-width: 1220px) {
      width: auto;
    }

    &__tag {
      @include txt($font-size: 12px, $color: $white);
      background: $green;
      padding: 7px 16px;
      border-radius: 123px;
      position: relative;
    }

    &__title {
      @include txt($font-size: 32px, $font-weight: 700, $color: $full-black, $opacity: 0.85);
      max-width: 480px;
    }

    &__left {
      &__top {
        transform: rotate(-6.017deg);
        right: -71px;
        top: -60px;
      }

      &__bottom {
        transform: rotate(-7.958deg);
        top: 60px;
      }
    }

    &__right {
      &__top {
        transform: rotate(6.02deg);
        left: -71px;
        top: -60px;
      }

      &__bottom {
        transform: rotate(7.96deg);
        top: 60px;
      }
    }

    &__left, &__right {
      @media(max-width: 850px) {
        display: none;
      }
    }
  }

  &__input {
    max-width: 392px;
    margin: 0 auto -20px;
    padding: 30px 0 4px;

    &__next {
      margin-top: 16px;
    }

    &__button {
      border: none;
      color: $blue;
      border-left: none;
      border-right: none;
      box-shadow: none;

      .ant-input {
          border-right: none;
      }
    }

    &__descr {
      margin-top: 20px;
      border: none;
      color: $blue;
      box-shadow: none;
      background: transparent;
    }
  }
}
</style>