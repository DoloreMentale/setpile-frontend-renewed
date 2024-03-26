<template>
  <div class="search">
    <AInputGroup>
      <AInput
        v-for="input in inputs"
        :id="input.id"
        :key="input.id"
        :placeholder="input.placeholder"
        :class="[
          'search__input',
          `search__input__${input.id}`,
          { 'search__input__search-value--news': inputs.length === 1 },
        ]"
      >
        <template #prefix>
          <label class="search__input__label">{{ input.label }}</label>

          <EditOutlined v-if="input.id === 'search-value'" />

          <EnvironmentOutlined v-if="input.id === 'search-location'" />
        </template>
      </AInput>
    </AInputGroup>

    <AButton class="search__btn" type="primary" :icon="h(SearchOutlined)" />
  </div>
</template>

<script setup lang="ts">
import type { IProps } from "~/widgets/search/types";
import { SearchOutlined } from "#components";

defineProps<IProps>();
</script>

<style scoped lang="scss">
.search {
  width: 100%;
  display: flex;

  margin-bottom: 16px;

  &__input {
    position: relative;

    @include txt();

    padding: 20px 16px 6px 20px;

    &__search-value {
      width: 60%;

      border-radius: 12px 0 0 12px;

      &--news {
        width: 100%;
      }
    }

    &__search-location {
      border-left: none;
      border-radius: 0;

      width: 40%;
    }

    &__label {
      position: absolute;

      z-index: 2;

      @include txt($font-size: 14px, $font-weight: 600);

      top: 6px;
      left: 38px;
    }
  }

  &__btn {
    height: 100%;
    width: 60px;

    border-radius: 0 12px 12px 0;
  }
}
</style>
