<template>
  <UIModal>
    <img class="signup__logo" src="/logo-black.svg" alt="logo" />
    <h1 class="signup__title">Sign up for free</h1>
    <form autocomplete="off" @submit.prevent="sendForm()">
      <a-row :gutter="[16, 24]">
        <a-col :span="12">
          <a-input
            v-model="first_name"
            size="large"
            placeholder="First name"
            required
            autocomplete="nope"
            @blur="trackFieldInteraction('first_name')"
          />
        </a-col>
        <a-col :span="12">
          <a-input
            v-model="last_name"
            size="large"
            placeholder="Last name"
            required
            autocomplete="nope"
            @blur="trackFieldInteraction('last_name')"
          />
        </a-col>
        <a-col :span="24">
          <a-input
            v-model="email"
            size="large"
            placeholder="Business email address"
            type="email"
            required
            autocomplete="nope"
            @blur="trackFieldInteraction('email')"
          />
        </a-col>
        <a-col :span="24">
          <a-input
            v-model="phone"
            size="large"
            placeholder="Phone"
            name="phoneGeneral"
            type="phone"
            required
            autocomplete="new-phone"
            inputmode="numeric"
            pattern="\d*"
            @blur="trackFieldInteraction('phone')"
          />
        </a-col>
        <a-col :span="24">
          <a-input-password
            v-model="password"
            size="large"
            placeholder="Password"
            name="parolOne"
            required
            autocomplete="new-password"
            @blur="trackFieldInteraction('password')"
          />
        </a-col>
        <a-col :span="24">
          <a-input-password
            v-model="password_confirmation"
            size="large"
            placeholder="Confirm password"
            name="parolTwo"
            required
            autocomplete="new-passwordd"
            @blur="trackFieldInteraction('confirm_password')"
          />
        </a-col>
        <a-col :span="24">
          <a-input
            v-model="company_name"
            size="large"
            placeholder="Company name (optional)"
            @blur="trackFieldInteraction('company_name')"
          />
        </a-col>
        <a-col :span="24">
          <a-space direction="vertical" :size="16">
            <div>
              <a-checkbox v-model="privacy"
                >Yes, I understand and agree to the
                <a class="signup__links" target="_blank" href="/terms-service"
                  >Terms of Service</a
                >
                and
                <a class="signup__links" target="_blank" href="/privacy"
                  >Privacy Policy</a
                ></a-checkbox
              >
              <div v-if="privacy_error" class="ant-input-error">
                You should agree to the Terms of Service and Privacy Policy
              </div>
            </div>
          </a-space>
        </a-col>
        <a-col :span="24">
          <a-button
            size="large"
            type="primary"
            block
            html-type="submit"
            @click="fullFormSended"
            >Create my account</a-button
          >
        </a-col>
      </a-row>
      <a-divider>or</a-divider>
      <a-row :gutter="[24, 24]" style="display: flex; justify-content: center">
        <a-col :span="8">
          <AButton class="signup__button">
            <img src="../../../assets/img/icons/google.svg" />
          </AButton>
        </a-col>
        <!-- <a-col :span="8">
                <AButton class="signup__button">
                    <img src="~assets/img/icons/facebook.svg" />
                </AButton>
            </a-col> -->
        <a-col :span="8">
          <AButton class="signup__button">
            <img src="../../../assets/img/icons/twitter.svg" />
          </AButton>
        </a-col>
      </a-row>
      <div class="signup__subtitle">
        Already have an account? <AButton class="signup__links" @click="setModalState('login', true)">Log In</AButton>
      </div>
      <div></div>
    </form>
  </UIModal>
</template>

<script setup lang="ts">
const { setModalState } = useModals();
</script>

<style scoped lang="scss">
.signup {
  &__logo {
    margin: 30px auto 0;
  }

  &__title {
    @include txt($font-size: 32px, $color: $black, $font-weight: 700);
    text-align: center;
    line-height: 40px;
    margin: 10px 0 16px;
  }

  &__subtitle {
    margin-top: 32px;
    text-align: center;
  }

  &__links {
    border: none;
    box-shadow: none;
    color: $blue;
    padding: 0;
  }

  &__button {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
