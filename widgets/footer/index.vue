<template>
  <div class="footer">
    <div class="footer__main">
      <div class="footer__firstBlock">
        <NuxtLink :to="isHomePage ? '/dashboard' : '/'">
          <img src="/logo.svg" alt="logo" />
        </NuxtLink>
        <div>Setpile CORP</div>
        <div>1854 NW 124th Way, Coral Springs, FL 33071 USA</div>
      </div>
      <div class="footer__secondBlock">
        <div class="footer__secondBlock__mail">
          <MailFilled />
          <a class="footer__secondBlock__mailAcc" href="mailto:pro@setpile.com"
            >pro@setpile.com</a
          >
        </div>
        <div class="footer__privacy">
          <NuxtLink to="/privacy">Privacy policy</NuxtLink>
        </div>
        <div><NuxtLink to="/terms-service">Terms of Service</NuxtLink></div>
      </div>
    </div>
    <div class="footer__nav">
      <NuxtLink to="/projects">Projects</NuxtLink>
      <NuxtLink to="/live-inventories">Live Inventories</NuxtLink>
      <NuxtLink to="/marketplace">Marketplace B2B</NuxtLink>
      <NuxtLink to="/news">News</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const isHomePage = computed(() => useRoute().path === "/");
</script>

<style scoped lang="scss">
.footer {
  @include container($x: 16px);
  @include txt($font-size: 16px, $color: $black, $font-weight: 400);
  display: flex;
  justify-content: space-between;

  margin-top: auto;
  margin-bottom: 16px;
  bottom: 0;
  width: 100%;

  &__firstBlock {
    display: flex;
    column-gap: 32px;
    margin-bottom: 24px;
  }

  &__secondBlock {
    display: flex;
    column-gap: 24px;

    &__mail {
      display: flex;
      align-items: center;
      column-gap: 10px;
    }
  }

  &__nav {
    display: flex;
    column-gap: 16px;
  }
}
</style>
