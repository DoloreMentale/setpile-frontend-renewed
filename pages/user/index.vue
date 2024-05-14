<template>
  <div class="user">
    <div class="user__title">Account settings</div>
    <a-row :gutter="[{ xs: 24, sm: 24, md: 40 },{ xs: 24, sm: 24, md: 40 }]">
      <a-col :xs="24" :md="6">
          <!-- <div class="user-avatar__wrapper">
              <div v-if="user.avatar_image_path" class="user-avatar__delete" @click="avatarDelete()">
                  <Icon :icon="'delete'"/>
              </div>
              <a-form-item class="user-avatar__loader" :class="{'loading': loadingImg}" label="Profile photo">
                  <a-upload
                      name="avatar"
                      list-type="picture-card"
                      class="avatar-uploader"
                      :show-upload-list="false"
                      @change="avatarChange"
                  >
                      <UserAvatar :img="user.avatar_image_path" :firstName="user.first_name" :lastName="user.last_name" />
                      <div class="ant-upload-text">Edit</div>
                  </a-upload>
              </a-form-item>
          </div> -->
      </a-col>
      <a-col :xs="24" :md="18">
          <form @submit.prevent="profileUpdate()">
              <a-row :gutter="[16,24]">
                  <a-col :span="12">
                      <a-form-item label="First name">
                          <a-input size="large" placeholder="First name" v-model="user.first_name" required />
                      </a-form-item>
                  </a-col>
                  <a-col :span="12">
                      <a-form-item label="Last name">
                          <a-input size="large" placeholder="Last name" v-model="user.last_name" required />
                      </a-form-item>
                  </a-col>
                  <a-col :span="24">
                      <a-form-item label="Phone number">
                          <a-input size="large" placeholder="Phone" v-model="user.phone" type="tel" required />
                      </a-form-item>
                      <a-form-item label="Your location">
                          <InputGeo :value="user.geo_place" @input="user.geo_place = $event" />
                      </a-form-item>
                      <a-form-item style="margin-top: -15px;" label="Company name (optional)">
                          <a-input size="large" placeholder="Your company name" v-model="user.company_name" />
                      </a-form-item>
                  </a-col>
                  <a-col :span="24" class="user-buttons">
                      <a-button type="primary" size="large" htmlType="submit">Update profile</a-button>
                      <a-button v-if="getEmailVerifyed()" type="primary" size="large" @click="resendConfirmation()">Resend confirmation email</a-button>
                  </a-col>
              </a-row>
          </form>
      </a-col>
      <a-col :xs="24" :md="24">
          <a-row type="flex" justify="space-between">
              <div class="h3">Email</div>
              <!-- <a-button type="link" @click="changeEmail = !changeEmail">
                  <template v-if="changeEmail">Hide</template>
                  <template v-else>Change</template>
              </a-button> -->
          </a-row>
          <br>
          <div>Your email address is <b>{{ user.email }}</b></div>
          <form v-if="changeEmail" class="user-collapse" @submit.prevent="emailChange()">
              <a-row :gutter="[24,24]">
                  <a-col :xs="24" :md="12">
                      <a-form-item label="New email">
                          <a-input size="large" placeholder="Email" v-model="email_new" type="email" required />
                      </a-form-item>
                  </a-col>
                  <a-col :xs="24" :md="12">
                      <a-form-item label="Current password">
                          <a-input-password size="large" v-model="password_current_email" required />
                      </a-form-item>
                  </a-col>
                  <a-col :xs="24" :md="24">
                      <a-button type="primary" size="large" htmlType="submit">Update email</a-button>
                  </a-col>
              </a-row>
          </form>
      </a-col>
      <a-col :xs="24" :md="24">
          <a-row type="flex" justify="space-between">
              <div class="h3">Password</div>
              <a-button type="link" @click="changePass = !changePass">
                  <template v-if="changePass">Hide</template>
                  <template v-else>Change</template>
              </a-button>
          </a-row>
          <form v-if="changePass" class="user-collapse" @submit.prevent="passChange()">
              <a-row :gutter="[24,24]">
                  <a-col :xs="24" :md="8">
                      <a-form-item label="Current password">
                          <a-input-password size="large" v-model="password_current" required />
                      </a-form-item>
                  </a-col>
                  <a-col :xs="24" :md="8">
                      <a-form-item label="New password">
                          <a-input-password size="large" v-model="password" required />
                      </a-form-item>
                  </a-col>
                  <a-col :xs="24" :md="8">
                      <a-form-item label="Confirm password">
                          <a-input-password size="large" v-model="password_confirmation" required />
                      </a-form-item>
                  </a-col>
                  <a-col :xs="24" :md="24">
                      <a-space direction="vertical" :size="16">
                          <a-button type="primary" size="large" htmlType="submit">Update password</a-button>
                          <a-button type="link" size="large" @click="passForgot()">Forgot password?</a-button>
                      </a-space>
                  </a-col>
              </a-row>
          </form>
      </a-col>
      <a-col :xs="24" :md="24">
          <a-row type="flex" justify="space-between">
              <div class="h3">Billing</div>
              <a-button type="link" @click="redirectToBillingPortal()">Manage billing</a-button>
          </a-row>
          <br>

          <div v-htnl="getStatusText" />

          <div v-if="isSudscription">
              <a-button size="large" @click="showModal">
                Get <img src="/assets/img/icons/pro.svg" alt="pro" />
              </a-button>
          </div>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const user = ref(Object);

const isActiveStatus = () => {
  return user && user.subscription && user.subscription.status === 'active';
};

const isTrialing = () => {
  return user && user.subscription && user.subscription.status === 'trialing';
};

const isCanceled = () => {
  return user && user.subscription && user.subscription.status === 'canceled';
};

const isSudscription = () => {
  return this.user && this.user.subscription === null;
};

const getMonthlyPriceValue = () => {
  if (this.user && this.user.subscription && this.user.subscription.billing_period_price) {
    return this.user.subscription.billing_period_price;
  }
  return null;
};

const getCurrentPeriodEndMonth = () => {
  if (this.user && this.user.subscription && this.user.subscription.current_period_end) {
    const currentPeriodEndDate = new Date(this.user.subscription.current_period_end);
    const options = { month: 'long' };
    return currentPeriodEndDate.toLocaleDateString('en-US', options);
  }
  return null;
};

const getCurrentPeriodEndDate = () => {
  if (this.user && this.user.subscription && this.user.subscription.current_period_end) {
    const currentPeriodEndDate = new Date(this.user.subscription.current_period_end);
    return currentPeriodEndDate.getDate();
  }
  return null;
};

const getStatusText = () => {
  if (isActiveStatus()) {
    return `You have a full plan for <b>${getMonthlyPriceValue()}/month</b><br>The next charge is <b>${getCurrentPeriodEndMonth()} ${getCurrentPeriodEndDate()}</b>`;
  } else if (isTrialing()) {
    return `Your trial period ends on <b>${getTrialEndMonth()} ${getTrialEndDate()}</b><br>The next charge is <b>${getCurrentPeriodEndMonth()} ${getCurrentPeriodEndDate()}</b>`;
  } else if (isCanceled()) {
    return `Unlock your solar tools for <b>${{ getMonthlyPriceValue() }}29$/month</b><br>Subscription expires on <b>${{ getCurrentPeriodEndMonth() }} ${{ getCurrentPeriodEndDate() }}</b>`;
  } else if (isSudscription()) {
    return `Unlock your solar tools for <b>${{ getMonthlyPriceValue() }}29$/month</b>`;
  }
};
</script>

<style scoped lang="scss">
.user {

}
</style>