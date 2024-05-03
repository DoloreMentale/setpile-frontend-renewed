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
          <AButton class="login__links" @click="openModal"
            >Forgot password</AButton
          >
          <WidgetForgotPassword
            :forgot-pass-modal-visible="forgotPassModalVisible"
            :close-forgot-pass="closeModal"
          />
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
        <AButton class="login__links" @click="openSignUpModal">Sign up</AButton>
      </div>
    </form>
  </UIModal>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  modalVisible: boolean;
}>();

const forgotPassModalVisible = ref(false);
const modalSignUpVisible = ref(false);

const openModal = () => {
  forgotPassModalVisible.value = true;
};

const closeModal = () => {
  forgotPassModalVisible.value = false;
};

const openSignUpModal = () => {
  modalSignUpVisible.value = true;
};

const closeSignUpModal = () => {
  modalSignUpVisible.value = false;
};

const { emit } = defineEmits();

const loading = ref(false);
const email = ref("");
const password = ref("");
const handleClose = () => {
  emit("close");
};
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
