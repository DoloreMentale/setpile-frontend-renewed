<template>
  <UIModal>
    <div class="verify">
      <p class="verify__title">Verify your email</p>
      <p class="verify__desc">Please check the confirmation email we sent
        <!-- <br>to <b>{{ user.email }}</b> -->
      </p>
      <div class="verify__btn">
        <AButton size="large" type="primary" block @click="resendConfirmation()">Resend confirmation email</AButton>
      </div>
    </div>
  </UIModal>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.verify {
  &__title {
    @include txt($font-size: 32px, $color: $black, $font-weight: 700);
    text-align: center;
    margin: 16px 0 24px;
  }

  &__desc {
    @include txt($color: $black, $opacity: 0.45);
    margin-bottom: 24px;
    text-align: center;
  }
}
</style>