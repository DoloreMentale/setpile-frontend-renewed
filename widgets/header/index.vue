<template>
  <div
    class="header"
    :style="{ backgroundColor: isHomePage ? blueColor : whiteColor }"
  >
    <NuxtLink :to="isHomePage ? '/dashboard' : '/'">
      <img
        class="header__logo"
        :src="isHomePage ? '/logo-white.svg' : '/logo.svg'"
        alt="logo"
      />
    </NuxtLink>

    <div class="header__content">
      <NuxtLink
        v-for="(headerItem, headerItemIdx) in headerItems"
        :key="headerItemIdx"
        :class="[
          'header__content__item',
          { 'header__content__item--active': isActive(headerItem.link) },
          { 'header__content__item--white': isHomePage },
        ]"
        :to="headerItem.link"
      >
        {{ headerItem.text }}
      </NuxtLink>
    </div>

    <div class="header__actions">
      <AButton
        type="text"
        :class="[
          'header__actions__login',
          { 'header__actions__login--white': isHomePage },
        ]"
        @click="openModal"
        >Log In</AButton
      >
      <AButton class="header__actions__signup" @click="openSignInModal"
        >Sign up for free</AButton
      >
    </div>
    <WidgetLogIn :modal-visible="modalVisible" @close="closeModal" />
    <WidgetRegistr
      :sign-in-modal-visible="signInModalVisible"
      @sign-in-close="closeSignInModal"
    />
  </div>
</template>

<script setup lang="ts">
import { headerItemsData } from "~/widgets/header/data";

const headerItems = ref(headerItemsData);

const isHomePage = computed(() => useRoute().path === "/");

const blueColor = "#1890ff";
const whiteColor = "#FFFFFF";

const modalVisible = ref(false);
const signInModalVisible = ref(false);

const openModal = () => {
  modalVisible.value = true;
};

const openSignInModal = () => {
  signInModalVisible.value = true;
};

const closeModal = () => {
  modalVisible.value = false;
};

const closeSignInModal = () => {
  signInModalVisible.value = false;
};

const isActive = (link: string): boolean => link === useRoute().matched[0].path;
</script>

<style scoped lang="scss">
.header {
  @include container($x: 16px);

  width: 100%;
  display: flex;
  align-items: center;

  box-shadow: 0 0.2rem 0.8rem #f0f1f2;

  &__logo {
    height: 16px;
    width: 53px;
    margin-right: 16px;
  }

  &__content {
    display: flex;

    &__item {
      @include txt($color: $gray-medium);

      cursor: pointer;

      &:not(:last-child) {
        margin-right: 16px;
      }

      &:hover {
        color: $dark-medium;
      }

      &--active {
        @include txt($font-weight: 600);
      }

      &--white {
        color: $white;
      }
    }
  }

  &__actions {
    display: flex;
    margin-left: auto;

    &__login {
      @include txt($font-size: 14px, $color: $blue);

      margin-right: 16px;

      &--white {
        color: $white;
      }
    }

    &__signup {
      @include txt($font-size: 14px, $color: $white);
      @include base-button;

      background-color: $orange;
      border: none;

      transition: background-color 300ms;

      &:hover {
        background-color: $orange-dark;
        color: $white;
      }
    }
  }
}
</style>
