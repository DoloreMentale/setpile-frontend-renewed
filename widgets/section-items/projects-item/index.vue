<template>
  <div class="project-item">
    <div class="project-item__header">
      <div v-if="props.item.title" class="project-item__header__title">
        {{ props.item.title }}
      </div>

      <div v-if="location" class="project-item__header__location">
        <EnvironmentOutlined class="project-item__header__location__icon" />
        {{ location }}
      </div>

      <div class="project-item__header__params">
        <div class="project-item__header__params__item">
          <div class="project-item__header__params__item__value">
            ${{ props.item.week_rate_from }} - ${{ props.item.week_rate_to }}
            {{ props.item.payment_rate_type }}
          </div>
          <div class="project-item__header__params__item__label">Price</div>
        </div>
        <div class="project-item__header__params__item">
          <div class="project-item__header__params__item__value">
            {{ props.item.experience_level }}
          </div>
          <div class="project-item__header__params__item__label">
            Experience lavel
          </div>
        </div>
        <div class="project-item__header__params__item">
          <div class="project-item__header__params__item__value">
            {{ props.item.employment_type }}
          </div>
          <div class="project-item__header__params__item__label">
            Employer type
          </div>
        </div>
      </div>

      <div v-if="props.item.description" class="project-item__header__descr">
        {{ props.item.description }}
      </div>

      <div v-if="props.item.tags" class="project-item__header__tags">
        <div v-for="tag in props.item.tags.default_tags" :key="tag.id">
          {{ tag.name }}
        </div>
        <div v-for="tag in props.item.tags.user_tags" :key="tag.id">
          {{ tag.name }}
        </div>
      </div>

      <div class="project-item__header__buttons">
        <div v-if="props.item.is_external" v-html="noindexBtn" />
        <template v-else-if="props.item.can_edit">
          <AButton
            v-if="props.item.total_responses_count > 0"
            size="large"
            type="primary"
          >
            See {{ props.item.total_responses_count }}
            <template v-if="props.item.total_responses_count === 1"
              >response</template
            >
            <template v-else>responses</template>
          </AButton>
          <AButton v-else size="large" disabled> 0 responses </AButton>
          <div
            v-if="props.item.unread_responses_count > 0"
            class="ant-badge ant-badge-error"
          >
            New +{{ props.item.unread_responses_count }}
          </div>
        </template>
        <template v-else>
          <AButton v-if="props.item.user_response" size="large" type="success">
            <CheckOutlined />
            Answered
          </AButton>
          <AButton v-else size="large" @click="setModalState('send-offer', true)">
            <MessageOutlined />
            Apply for a job
          </AButton>
        </template>
      </div>

      <div
        v-if="props.item.created_at && props.item.updated_at"
        class="project-item__header__date"
      >
        <template v-if="props.item.created_at === props.item.updated_at">
          {{ dateTransform(props.item.created_at) }}
        </template>
        <template v-else>
          {{ dateTransform(props.item.updated_at) }}
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IProps } from "~/widgets/section-items/projects-item/types";
import { useDateTransform } from "~/composables/use-date-transform";

const { setModalState } = useModals();
const { dateTransform } = useDateTransform(new Date());

const props = defineProps<IProps>();

const location = computed(
  () =>
    `${props.item.geo_place.attributes.City}, ${props.item.geo_place.attributes.RegionAbbr}, ${props.item.geo_place.attributes.Country}`,
);
</script>

<style scoped lang="scss">
.project-item {
  background-color: $white;
  padding: 40px;
  border-radius: 12px;
  border: 1px solid $white;

  &:hover {
    border: 1px solid $blue;
    cursor: pointer;
    transition: all 0.3s;
  }

  &__header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;

    &__title {
      @include txt($font-size: 24px, $font-weight: 700);

      margin-bottom: 12px;
    }

    &__location {
      @include txt($font-size: 16px);

      &__icon {
        margin-right: 8px;
      }
    }

    &__params {
      display: flex;
      align-items: flex-start;
      flex-wrap: wrap;
      margin: 40px 0;

      &__item {
        margin: 0 40px 24px 0;

        &__value {
          @include txt(
            $font-size: 24px,
            $font-weight: 500,
            $color: $full-black,
            $opacity: 0.85
          );
        }

        &__label {
          @include txt($font-size: 16px, $color: $full-black, $opacity: 0.45);
        }
      }
    }

    &__descr {
      @include txt($font-size: 16px, $color: $full-black, $opacity: 0.85);
      max-height: 72px;
    }

    &__tags {
      margin: 40px 0;
    }

    &__buttons {
      margin: auto 0 40px;
      position: relative;
      z-index: 2;
      display: flex;
      align-items: center;
    }

    &__date {
      @include txt($font-size: 14px, $color: $full-black, $opacity: 0.45);
    }
  }
}
</style>
