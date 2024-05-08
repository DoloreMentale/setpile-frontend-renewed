<template>
  <UIModal>
    <div v-if="formSended" class="user-card">
        <p class="forgot__title">Check your email</p>
        <p class="forgot__subtitle">We`ve sent you an email to <b>{{ email }}</b> <br>with instructions to reset your password.</p>
        <div class="forgot__bottom">
            <n-link class="ant-btn ant-btn-primary ant-btn-lg" to="/dashboard">Ok</n-link>
        </div>
    </div>
    <div v-else class="user-card">
        <n-link class="forgot__back" to="/user/log-in">
            <Icon :icon="'left'"/>
        </n-link>
        <p class="forgot__title">Reset password</p>
        <p class="forgot__subtitle">Enter your email address that you used to register. We will send you an email with a link to reset your password.</p>
        <form @submit.prevent="sendForm()">
            <a-row :gutter="[16,24]">
                <a-col :span="24">
                    <a-input size="large" placeholder="Email" v-model="email" required />
                </a-col>
                <a-col :span="24">
                    <a-button size="large" type="primary" block htmlType="submit">Reset password</a-button>
                </a-col>
            </a-row>
        </form>
    </div>
  </UIModal>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.forgot {
  &__title {
    @include txt($font-size: 32px, $color: $black, $font-weight: 700);
    text-align: center;
    line-height: 40px;
    margin: 16px 0;
  }

  &__subtitle {
    color: $black;
    opacity: 0.45;
    text-align: center;
    margin-bottom: 40px;
  }
}
</style>