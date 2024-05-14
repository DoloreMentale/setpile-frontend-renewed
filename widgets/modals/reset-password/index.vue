<template>
  <UIModal>
    <div class="reset">
      <div class="reset__title">New password</div>
      <form class="reset__form" @submit.prevent="sendForm()">
        <AInputPassword v-model="password" size="large" placeholder="New password" />
        <AInputPassword v-model="password_confirmation" size="large" placeholder="Repeat password" />
        <AButton size="large" type="primary" block htmlType="submit">Reset password</AButton>
      </form>
    </div>
  </UIModal>
</template>

<script setup lang="ts">
const password = ref('');
const password_confirmation = ref('');
</script>

<style scoped lang="scss">
.reset {
  &__title {
    @include txt($font-size: 32px, $color: $black, $font-weight: 700);
    text-align: center;
    margin: 16px 0 24px;
  }

  &__form {
    display: flex;
    flex-direction: column;
    row-gap: 24px;
  }
}
</style>