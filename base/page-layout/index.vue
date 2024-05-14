<template>
  <div class="base-page-layout">
    <div class="base-page-layout__header">
      <img class="base-page-layout__header__img" />

      <div class="base-page-layout__header__content">
        <h1 class="base-page-layout__header__content__title">
          {{ selectedSection.title }}
        </h1>

        <WidgetSearch :inputs="selectedSection.search" />

        <div class="base-page-layout__header__content__benefits">
          <div
            v-for="(benefit, benefitIdx) in selectedSection.benefits"
            :key="benefitIdx"
            class="base-page-layout__header__content__benefits__item"
          >
            <CheckOutlined
              class="base-page-layout__header__content__benefits__item__icon"
            />

            <p class="base-page-layout__header__content__benefits__item__text">
              {{ benefit }}
            </p>
          </div>
        </div>

        <div class="base-page-layout__header__content__actions">
          <AButton
            v-for="(action, actionIdx) in selectedSection.actions"
            :key="actionIdx"
            :type="action.type"
            class="base-page-layout__header__content__actions__item"
          >
            {{ action.text }}
          </AButton>
        </div>
      </div>

      <img class="base-page-layout__header__img" />
    </div>

    <BasePageContent
      :section="props.section"
      :items="data?.data"
      :meta="data?.meta"
    />

    <!-- <WidgetUnloginedBanner :isBsicUser="true" /> -->
    <!-- <WidgetUnloginedBanner :isUnregistrUser="true" /> -->
  </div>
</template>

<script setup lang="ts">
import type { IProps } from "~/base/page-layout/types";
import { sectionsData } from "~/base/page-layout/data";
import { useApi } from "~/composables/use-api";

const props = defineProps<IProps>();

const selectedSection = computed(() => sectionsData[props.section]);

const { data } = await useApi[selectedSection.value.initialReq](props.section);
</script>

<style scoped lang="scss">
.base-page-layout {
  @media (max-width: 768px) {
    @include container($y: 16px);
  }
  &__header {
    width: 100%;
    display: flex;

    justify-content: space-between;

    &__img {
    }

    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;

      padding: 60px 0;

      &__title {
        @include txt($font-size: 48px, $font-weight: 700);

        margin-bottom: 20px;
        text-align: center;

        @media (max-width: 768px) {
          @include txt($font-size: 40px, $font-weight: 700);
        }
      }

      &__benefits {
        display: flex;

        margin-bottom: 24px;

        &__item {
          display: flex;
          align-items: center;

          &:not(:last-child) {
            margin-right: 24px;
          }

          &__icon {
            font-size: 20px;

            margin-right: 15px;
          }

          &__text {
            @include txt($font-size: 16px, $font-weight: 700);
          }
        }
      }

      &__actions {
        display: flex;

        &__item {
          @include txt($color: "");
          @include base-button;

          padding: 20px 16px;
          margin-right: 16px;
        }
      }
    }
  }
}
</style>
