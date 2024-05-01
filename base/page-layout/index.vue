<template>
  <div class="base-page-layout">
    <div class="base-page-layout__header">
      <img class="base-page-layout__header__img" />

      <div class="base-page-layout__header__content">
        <h1 class="base-page-layout__header__content__title">
          {{ section.title }}
        </h1>

        <WidgetSearch :inputs="section.search" />

        <div class="base-page-layout__header__content__benefits">
          <div
            v-for="(benefit, benefitIdx) in section.benefits"
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
            v-for="(action, actionIdx) in section.actions"
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
      :items="posts?.data"
      :meta="posts?.meta"
    />
  </div>
</template>

<script setup lang="ts">
import type { IProps, ISection } from "~/base/page-layout/types";
import { sectionsData } from "~/base/page-layout/data";
import type { IProjectItem } from "~/widgets/section-items/projects-item/types";
import type { TMeta } from "~/base/page-content/types";

const props = defineProps<IProps>();

const section = sectionsData[props.section] as ISection;

const { data: posts } = await useAsyncData(
  `${props.section}-data`,
  () =>
    useApiClient<{ data: Array<IProjectItem>; meta: TMeta }>(
      section.initialReqUrl,
      {
        method: "get",
      },
    ),
  { default: () => {} },
);
</script>

<style scoped lang="scss">
.base-page-layout {
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
