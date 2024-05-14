<template>
  <div class="answers">
    <div class="answers__title">Send an offer</div>
    <div class="answers__title__content">
      <!-- <div v-if="props.item.title" class="answers__title">
        {{ props.item.title }}
      </div>
      <div v-if="props.item.company_name" class="answers__subtitle">
        <UsergroupAddOutlined />
        {{ props.item.company_name }}
      </div> -->
    </div>
    <form class="answers__form" @submit.prevent="sendForm()">
      <ATextarea resize="false" placeholder="Write offer" :rows="4"  v-model="message" required />
      <ACheckbox class="answers__form__check" v-model="share_author_contacts">Share my contacts</ACheckbox>
      <AButton
          type="primary"
          size="large"
          class="answers__form__btn"
          block
          @click="setModalState('tariffs', true)"
      >
          Send <img src="/assets/img/icons/pro.svg" alt="pro" />
      </AButton>
      <!-- <AButton type="primary" size="large" block htmlType="submit">Send</AButton> -->
      <div class="answers__form__subtitle">
          <div class="answers__form__subtitle__text">{{ remainingOffers }} offers/month remaining</div>
          <AButton class="answers__form__subtitle__btn" @click="setModalState('tariffs', true)">Upgrade</AButton>
      </div>
    </form>
    <NuxtLink v-if="props.isApply" :to="`/projects/jobs/${job.slug}`">
      <AButton type="link" size="large" block>Read more</AButton>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type { IProps } from "~/widgets/section-items/projects-item/types";
const { setModalState } = useModals();
const message = ref('');
const share_author_contacts = ref(true);

const props = defineProps<IProps>();
</script>

<style scoped lang="scss">
.answers {
  &__title {
    @include txt($font-size: 24px, $font-weight: 700, $color: $full-black, $opacity: 0.85);
    margin: 3.2rem 0 1.2rem;
    text-align: center;
  }

  &__subtitle {
    @include txt($font-size: 16px, $font-weight: 700, $color: $full-black, $opacity: 0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 8px;
  }

  &__form {
    &__check {
      margin: 6px 0 24px;
    }

    &__btn {
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 8px;
    }

    textarea.ant-input {
      margin: 0 0 16px;
    }

    &__subtitle {
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 8px;
      margin-top: 12px;

      &__text {
        @include txt($font-size: 14px, $color: $full-black, $opacity: 0.45);
      }

      &__btn {
        border: none;
        box-shadow: none;
        color: $blue;
        padding: 0;
        cursor: pointer;
      }
    }
  }
}
</style>