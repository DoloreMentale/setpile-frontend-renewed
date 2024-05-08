<template>
  <UIModal>
    <h1 class="login__title">Sign In to Setpile</h1>
    <form autocomplete="off" @submit.prevent="sendForm()">
      <a-row :gutter="[16, 24]">
        <a-col :span="24">
          <a-input
            v-model="email"
            size="large"
            placeholder="E-mail"
            required
            autocomplete="nope"
          />
        </a-col>
        <a-col :span="24">
          <a-input-password
            v-model="password"
            size="large"
            placeholder="Password"
            required
            autocomplete="nope"
          />
          <AButton class="login__links" @click="setModalState('tariffs', true)">
            Forgot password
          </AButton>
        </a-col>
        <a-col :span="24">
          <a-button size="large" type="primary" block html-type="submit"
            >Sign In</a-button
          >
        </a-col>
      </a-row>
      <a-divider>or</a-divider>
      <a-row :gutter="[24, 24]">
        <a-col :span="8">
          <AButton
            class="login__button"
            :href="`${$config.backendUrl}/auth/google`"
          >
            <img src="../../../assets/img/icons/google.svg" />
          </AButton>
        </a-col>
        <!-- <a-col :span="8">
                <AButton class="login__button" :href="`${$config.backendUrl}/auth/facebook`">
                    <img src="~assets/img/icons/facebook.svg" />
                </AButton>
            </a-col> -->
        <a-col :span="8">
          <AButton
            class="login__button"
            :href="`${$config.backendUrl}/auth/twitter`"
          >
            <img src="../../../assets/img/icons/twitter.svg" />
          </AButton>
        </a-col>
      </a-row>
      <div class="login__subtitle">
        Don't have a Setpile account?
        <AButton class="login__links" @click="setModalState('sign-up', true)">Sign up</AButton>
      </div>
    </form>
  </UIModal>
</template>

<script setup lang="ts">
const { setModalState } = useModals();
import { ref } from "vue";
const email = ref("");
const password = ref("");
</script>

<style scoped lang="scss">
.login {
  &__title {
    @include txt($font-size: 32px, $color: $black, $font-weight: 700);
    text-align: center;
    line-height: 40px;
    margin: 16px 0;
  }

  &__button {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
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
}
</style>
