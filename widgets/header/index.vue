<template>
  <div class="header">
    <NuxtLink to="/">
      <img class="header__logo" src="/logo.svg" alt="logo" />
    </NuxtLink>

    <div class="header__content">
      <NuxtLink
        v-for="(headerItem, headerItemIdx) in headerItems"
        :key="headerItemIdx"
        :class="[
          'header__content__item',
          { 'header__content__item--active': isActive(headerItem.link) },
        ]"
        :to="headerItem.link"
      >
        {{ headerItem.text }}
      </NuxtLink>
    </div>

    <div class="header__actions">
      <AButton type="text" class="header__actions__login">Log In</AButton>

      <AButton class="header__actions__signup">Sign up for free</AButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { headerItemsData } from "~/widgets/header/data";

const headerItems = ref(headerItemsData);

const isActive = (link: string): boolean => link === useRoute().matched[0].path;
</script>

<style scoped lang="scss">
.header {
  @include container($x: 16px);

  width: 100%;
  display: flex;
  align-items: center;

  background-color: $white;
  box-shadow: 0 0.2rem 0.8rem #f0f1f2;

  &__logo {
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
    }
  }

  &__actions {
    display: flex;
    margin-left: auto;

    &__login {
      @include txt($font-size: 14px, $color: $blue);

      margin-right: 16px;
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