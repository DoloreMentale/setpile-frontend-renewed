<template>
  <UIModal>
    <div class="forgot" v-if="formSended">
        <p class="forgot__title">Check your email</p>
        <p class="forgot__subtitle">We`ve sent you an email to <b>{{ email }}</b> <br>with instructions to reset your password.</p>
        <div class="forgot__bottom">
          <NuxtLink class="ant-btn ant-btn-primary ant-btn-lg" to="/dashboard">Ok</NuxtLink>
        </div>
    </div>
    <div class="forgot" v-else>
      <p class="forgot__title">Reset password</p>
      <p class="forgot__subtitle">Enter your email address that you used to register. We will send you an email with a link to reset your password.</p>
      <form @submit.prevent="sendForm()">
        <AInput size="large" placeholder="Email" v-model="email" required />
        <AButton class="forgot__btn" size="large" type="primary" block htmlType="submit">Reset password</AButton>
      </form>
    </div>
  </UIModal>
</template>

<script setup lang="ts">
const formSended = ref(false);
const email = ref('');
</script>

<style scoped lang="scss">
.forgot {
  &__title {
    @include txt($font-size: 32px, $color: $black, $font-weight: 700);
    text-align: center;
    margin: 16px 0;
  }

  &__subtitle {
    color: $black;
    opacity: 0.45;
    text-align: center;
    margin-bottom: 40px;
  }

  &__btn {
    margin-top: 24px;
  }
}
</style>