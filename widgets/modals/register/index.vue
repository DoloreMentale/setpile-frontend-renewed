<template>
  <UIModal>
    <div class="sign-modal">
      <h2 class="sign-modal__title">
        Access all professional<br />
        tools in one place
      </h2>
      <div :gutter="[12, 12]" class="sign-modal__socials">
        <div class="sign-modal__button-block">
          <AButton class="sign-modal__button">
            <img
              class="sign-modal__button-icon"
              src="../../../assets/img/icons/google.svg"
            />
            Continue with Google
          </AButton>
        </div>
        <div class="sign-modal__button-block">
          <AButton class="sign-modal__button">
            <img
              class="sign-modal__button-icon"
              src="../../../assets/img/icons/twitter.svg"
            />
            Continue with Twitter
          </AButton>
        </div>
        <!-- <div class="sign-modal__button-block">
            <AButton class="sign-modal__button" :href="socialUrl('facebook')">
                <img class="sign-modal__button-icon" src="~assets/img/icons/facebook.svg" />Continue with Facebook
            </AButton>
        </div> -->
        <div class="sign-modal__button-block">
          <img
            class="sign-modal__divider"
            src="../../../assets/img/icons/divider-line.svg"
          />
        </div>
        <div class="sign-modal__button-block">
          <AButton
            style="width: 100%"
            class="sign-modal__button"
            @click="setModalState('sign-up', true)"
          >
            <img
              class="sign-modal__button-icon"
              src="../../../assets/img/icons/mail.svg"
            />
            Continue with E-mail
          </AButton>
        </div>
      </div>
      <div class="sign-modal__login">
        Already have an account?
        <AButton class="sign-modal__btn-log" @click="setModalState('login', true)">Log In</AButton>
      </div>
      <div class="sign-modal__subtitle">
        By continuing, you agree to Setpile<br />
        <b><NuxtLink class="sign-modal__links" to="/terms-service">
            Terms of Service</NuxtLink></b>and
        <b><NuxtLink class="sign-modal__links" to="/privacy"
            >Privacy Policy.</NuxtLink></b>
      </div>
    </div>
  </UIModal>
</template>

<script setup lang="ts">
const { setModalState } = useModals();
</script>

<style scoped lang="scss">
.sign-modal {
  &__title {
    @include txt($font-size: 32px, $color: $black, $font-weight: 700);
    text-align: center;
    line-height: 40px;
    margin: 16px 0;
  }

  &__socials {
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 16px;
  }

  &__button-block {
    width: 100%;
  }

  &__button {
    @include txt($font-size: 16px, $color: $black, $font-weight: 500);
    width: 100%;
    height: 58px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__login {
    margin: 16px 0 32px;
    text-align: center;
  }

  &__btn-log {
    border: none;
    box-shadow: none;
    color: $blue;
    padding: 0;
  }

  &__subtitle {
    text-align: center;
    @include txt($font-size: 16px, $color: $black, $font-weight: 400);
    opacity: 0.45;
  }

  &__divider {
    width: 16px;
    height: 1px;
    margin: 8px auto;
  }

  &__button-icon {
    margin-right: 8px;
  }
}
</style>
