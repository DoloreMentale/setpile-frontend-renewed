<template>
  <a-modal :footer="false" :open="modalSignUpVisible" :confirm-loading="loading" @update="handleSignUpClose">
    <img class="signup__logo" src="/logo-black.svg" alt="logo">
    <h1 class="signup__title">Sign up for free</h1>
    <form @submit.prevent="sendForm()" autocomplete="off">
        <a-row :gutter="[16,24]">
            <a-col :span="12">
                <a-input size="large" placeholder="First name" v-model="first_name" required autocomplete="nope" @blur="trackFieldInteraction('first_name')" />
            </a-col>
            <a-col :span="12">
                <a-input size="large" placeholder="Last name" v-model="last_name" required autocomplete="nope" @blur="trackFieldInteraction('last_name')" />
            </a-col>
            <a-col :span="24">
                <a-input size="large" placeholder="Business email address" v-model="email" type="email" required autocomplete="nope" @blur="trackFieldInteraction('email')" />
            </a-col>
            <a-col :span="24">
                <a-input size="large" placeholder="Phone" v-model="phone" name="phoneGeneral" type="phone" required autocomplete="new-phone" inputmode="numeric" pattern="\d*" @blur="trackFieldInteraction('phone')"/>
            </a-col>
            <a-col :span="24">
                <a-input-password size="large" placeholder="Password" name="parolOne" v-model="password" required autocomplete="new-password" @blur="trackFieldInteraction('password')" />
            </a-col>
            <a-col :span="24">
                <a-input-password size="large" placeholder="Confirm password" name="parolTwo" v-model="password_confirmation" required autocomplete="new-passwordd" @blur="trackFieldInteraction('confirm_password')" />
            </a-col>
            <a-col :span="24">
                <a-input size="large" placeholder="Company name (optional)" v-model="company_name" @blur="trackFieldInteraction('company_name')" />
            </a-col>
            <a-col :span="24">
                <a-space direction="vertical" :size="16">
                    <div>
                        <a-checkbox v-model="privacy">Yes, I understand and agree to the <a class="signup__links" target="_blank" href="/terms-service">Terms of Service</a> and <a class="signup__links" target="_blank" href="/privacy">Privacy Policy</a></a-checkbox>
                        <div v-if="privacy_error" class="ant-input-error">You should agree to the Terms of Service and Privacy Policy</div>
                    </div>
                </a-space>
            </a-col>
            <a-col :span="24">
                <a-button size="large" type="primary" block htmlType="submit" @click="fullFormSended">Create my account</a-button>
            </a-col>
        </a-row>
        <a-divider>or</a-divider>
        <a-row :gutter="[24,24]" style="display: flex; justify-content: center;">
            <a-col :span="8">
                <AButton class="signup__button">
                    <img src="~assets/img/icons/google.svg" />
                </AButton>
            </a-col>
            <!-- <a-col :span="8">
                <AButton class="signup__button">
                    <img src="~assets/img/icons/facebook.svg" />
                </AButton>
            </a-col> -->
            <a-col :span="8">
                <AButton class="signup__button">
                    <img src="~assets/img/icons/twitter.svg" />
                </AButton>
            </a-col>
        </a-row>
        <div class="signup__subtitle">
            Already have an account? <AButton class="signup__links">Log In</AButton>
        </div>
        <div>
      </div>
    </form>
  </a-modal>
</template>

<script setup lang="ts">
const { props } = defineProps<{
  modalSignUpVisible: boolean;
}>();

const handleSignUpClose = () => {
  emit('close-sign-up');
};
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