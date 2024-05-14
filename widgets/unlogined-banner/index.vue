<template>
  <div class="default-banner">
    <div v-if="isUnregistrUser" class="default-banner__title">
      Sign In or sign up to continue<br>browsing {{ dynamicTitle }}
    </div>
    <div v-if="isBsicUser" class="default-banner__title">
      Access all {{ dynamicBaseTitle }}
    </div>
    <div v-if="isUnregistrUser" class="default-banner__buttons">
      <div class="default-banner__buttons__social">
        <AButton
          class="default-banner__buttons__social__btn"
          :href="`${$config.backendUrl}/auth/google`"
        >
          <img src="../../assets/img/icons/google.svg" />&nbsp;Google
        </AButton>
        <AButton
          class="default-banner__buttons__social__btn"
          :href="`${$config.backendUrl}/auth/twitter`"
        >
          <img src="../../assets/img/icons/twitter.svg" />&nbsp;Twitter
        </AButton>
      </div>
      <div class="default-banner__buttons__mail">
        <AButton class="default-banner__buttons__social__btn" @click="showSignupModal">
          <MailOutlined />&nbsp;Continue with E-mail
        </AButton>
      </div>
    </div>
    <div class="default-banner__subtitle">
      <div v-if="isUnregistrUser">
        By continuing, you agree to Setpile <NuxtLink class="default-banner__subtitle__link" to="/terms-service">Terms of Service</NuxtLink> and <NuxtLink class="default-banner__subtitle__link" to="/privacy">Privacy Policy.</NuxtLink>
      </div>
      <div v-if="isBsicUser">
        Get unlimited access to the full listing & pro features from <b>$26/month</b> — cancel anytime.
      </div>
    </div>
    <div v-if="isBsicUser">
      <AButton
        type="primary"
        size="large"
        class="default-banner__button-pro"
        @click="setModalState('tariffs', true)"
      >
        Get <img src="/assets/img/icons/pro.svg" alt="pro" />
      </AButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const { setModalState } = useModals();

const props = defineProps({
  isUnregistrUser: Boolean,
  isBsicUser: Boolean,
  dynamicTitle: String,
  dynamicBaseTitle: String
});
</script>

<style scoped lang="scss">
.default-banner {
  text-align: center;
  position: relative;
  bottom: 180px;
  margin-bottom: -112px;
  left: 0;
  width: 100%;
  z-index: 5;
  height: 300px;

  &::before {
    content: '';
    position: absolute;
    background: linear-gradient(180deg, rgba(250, 250, 250, 0) 0%, rgba(250, 250, 250, 0.88) 30.8%, #FAFAFA 55%);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(5px);
    z-index: -1;
  }

  &__title {
    @include txt($font-size: 32px, $font-weight: 700, $color: $black);
  }

  &__buttons {
    margin: 32px auto;
    max-width: 242px;

    &__social {
      display: flex;
      column-gap: 16px;
      margin-bottom: 16px;

      &__btn {
        @include txt($font-size: 16px, $font-weight: 500, $color: $black);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        column-gap: 8px;
        width: 100%;
      }
    }
  }

  &__subtitle {
    @include txt($font-size: 16px, $color: $black);

    &__link {
      font-weight: 700;
    }
  }

  &__button-pro {
    display: flex;
    align-items: center;
    column-gap: 8px;
    margin: 24px auto 0;
  }
}
</style>
