<template>
  <div class="dashboard">
    <div class="dashboard__card--active">
      <h2 class="dashboard__card__title">
        <NuxtLink class="dashboard__card__title__block" to="/projects">
          Solar Jobs <ArrowRightOutlined class="dashboard__card__icon" />
        </NuxtLink>
      </h2>

      <div class="dashboard__card__counter">

      </div>

      <div class="dashboard__card__content">
        <div class="dashboard__card__links--active">
          <NuxtLink class="dashboard__card__links__item">Post a Job</NuxtLink>
          <NuxtLink class="dashboard__card__links__item">Post a Resume</NuxtLink>
        </div>
      </div>
    </div>

    <div class="dashboard__card">
      <h2 class="dashboard__card__title">
        <NuxtLink class="dashboard__card__title__block" to="/live-inventories">
          Live Inventories <ArrowRightOutlined class="dashboard__card__icon" />
        </NuxtLink>
      </h2>
      <div class="dashboard__card__subtitle">Products</div>
      <div class="dashboard__card__content">
        <div v-for="topic in topics" :key="topic.id" class="dashboard__card__links">
          <NuxtLink class="dashboard__card__links__item">
            {{ topic.name }}
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="dashboard__card--active">
      <h2 class="dashboard__card__title">
        <NuxtLink class="dashboard__card__title__block" to="/projects">
          Marketplace <ArrowRightOutlined class="dashboard__card__icon" />
        </NuxtLink>
      </h2>

      <div class="dashboard__card__content">
        <div class="dashboard__card__links--active">
          <NuxtLink class="dashboard__card__links__item">Post a Job</NuxtLink>
          <NuxtLink class="dashboard__card__links__item">Post a Resume</NuxtLink>
        </div>
      </div>
    </div>

    <div class="dashboard__card">
      <h2 class="dashboard__card__title">
        <NuxtLink class="dashboard__card__title__block" to="/news">
          News <ArrowRightOutlined class="dashboard__card__icon" />
        </NuxtLink>
      </h2>
      <div class="dashboard__card__subtitle">Topics</div>
      <div class="dashboard__card__content">
        <div v-for="topic in topics" :key="topic.id" class="dashboard__card__links">
          <NuxtLink class="dashboard__card__links__item">
            {{ topic.name }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const topics = ref([
  { id: 1, name: 'Solar Jobs' },
  { id: 2, name: 'Live Inventories' },
  { id: 3, name: 'Marketplace B2B' },
  { id: 4, name: 'News' },
  { id: 1, name: 'Solar Jobs' },
  { id: 2, name: 'Live Inventories' },
  { id: 3, name: 'Marketplace B2B' },
  { id: 4, name: 'News' },
]);
</script>

<style scoped lang="scss">
  .dashboard {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 150px;

    &__card {
      padding: 24px;
      border-radius: 12px;
      background-color: $white;
      border: 1px solid $white;
      min-width: 292px;

      &--active {
        position: relative;
        width: 292px;
        height: 408px;
        padding: 24px;
        border-radius: 12px;
        background-color: $white;
        border: 1px solid $white;
        min-width: 292px;

        &:hover {
          border: 1px solid $blue;

          .dashboard__card__icon {
            display: block;
            color: $blue;
          }
        }
      }

      &:hover {
        border: 1px solid $blue;

        .dashboard__card__icon {
          display: block;
          color: $blue;
        }
      }

      &__icon {
        display: none;
      }

      &__title {
        @include txt($font-size: 24px, $font-weight: 700);
        opacity: 0.85;
        margin-bottom: 24px;

        &__block {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      }

      &__subtitle {
        @include txt($font-size: 16px, $font-weight: 400);
        opacity: 0.45;
        margin-bottom: 16px;
      }

      &__counter {
      }

      &__content {
        display: flex;
        flex-direction: column;

        overflow-y: scroll;
        max-height: 260px;
      }

      &__links {
        @include txt($font-size: 16px, $font-weight: 400);
        opacity: 0.85;

        &:not(:last-child) {
          margin-bottom: 16px;
        }

        &--active {
          @include txt($font-size: 16px, $font-weight: 400);
          opacity: 0.85;
          position: absolute;
          bottom: 24px;
        }

        &__item {
          width: 100%;
          max-width: 210px;
          padding: 8px 16px 6px;
          border: 1px solid $neutral-5;
          border-radius: 12px;
          display: inline-block;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;

          &:hover {
            border: 1px solid $neutral-1;
          }
        }
      }
    }
  }
</style>
