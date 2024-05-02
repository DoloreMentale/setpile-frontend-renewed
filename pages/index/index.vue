<template>
  <div class="general">
    <div class="general__header">
      <div class="general__header__container">
        <h1 class="general__header__title">
          America’s largest network<br />
          of solar industry professionals
        </h1>
        <div class="general__header__tags">
          <div class="general__header__tags-tem general__header__tags-right">
            Sell & Buy inventory
          </div>
          <div class="general__header__tags-tem general__header__tags-left">
            Get side gig
          </div>
          <div class="general__header__tags-tem general__header__tags-left">
            Stay tuned
          </div>
          <div class="general__header__tags-tem general__header__tags-right">
            Find local help
          </div>
          <div class="general__header__tags-tem general__header__tags-left">
            Check availability
          </div>
        </div>
        <a-button
          class="general__header__button btn__orange"
          @click="scrollToProjects"
        >
          Take a platform tour
        </a-button>
      </div>
    </div>

    <div class="general__promo">
      <h2 class="general__promo__title">Setpile is the right fit if...</h2>
      <div class="general__promo__icons">
        <div class="general__promo__icons-item">
          <img src="/assets/img/icons/helpness.svg" alt="helpness" />
          <div class="general__promo__icons__title">
            You’re looking for help on a project
          </div>
        </div>
        <div class="general__promo__icons-item">
          <img src="/assets/img/icons/sales-many.svg" alt="sales-many" />
          <div class="general__promo__icons__title">
            You have excess equipment on sale
          </div>
        </div>
        <div class="general__promo__icons-item">
          <img
            src="/assets/img/icons/advertise-inventory.svg"
            alt="inventory"
          />
          <div class="general__promo__icons__title">
            You’re looking to advertise inventory
          </div>
        </div>
        <div class="general__promo__icons-item">
          <img src="/assets/img/icons/searching.svg" alt="searching" />
          <div class="general__promo__icons__title">
            You’re searching for accurate data
          </div>
        </div>
      </div>
      <div class="general__promo__subtitle">
        ... or if you’re just an active industry player who wants to keep up
        with the market and boost revenues.
      </div>
      <a-button
        class="general__header__button btn__orange"
        @click="showSignupModal"
        >Join Setpile</a-button
      >
    </div>

    <div id="general__projects" class="general__projects">
      <div class="general__projects__container">
        <div class="general__projects__header">
          <div class="general__tag">Projects</div>
          <h2 class="general__title">Post or find solar projects</h2>
          <NuxtLink to="/projects" class="general__link"
            >View active projects and CVs</NuxtLink
          >
        </div>
        <div class="general__projects__image">
          <img
            class="general-projects__image__item"
            src="~assets/img/landing/projects.webp"
            alt=""
          />
        </div>
        <div class="general__projects__description">
          <div class="general__subtitle">Contractor? Get a side gig</div>
          <div class="general__description">
            Whether you’re a professional solar installer, roofer or
            electrician, you’ll find all sort of projects near you. Read the
            description and apply if you think you’re the right fit!
          </div>
          <div class="general__scrolling hidden__scrolling">
            <div class="general__subtitle">
              Company or homeowner? Find local help
            </div>
            <div class="general__description">
              Choose from hundreds of professionals from across the U.S. Study
              and compare their CVs, ask for clarifications, if needed, and hire
              the right person to help you with your project.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="general__inventories">
      <div class="general__projects__header">
        <div class="general__tag">Live Inventories</div>
        <h2 class="general__title">Get one-click product data</h2>
        <NuxtLink to="/live__inventories" class="general__link"
          >Check live inventories</NuxtLink
        >
      </div>
      <div class="general__projects__image">
        <img src="~assets/img/landing/equipment.webp" alt="" />
      </div>
      <div class="general__projects__description">
        <div class="general__subtitle">Find any equipment near you</div>
        <div class="general__description">
          We collect data from a dozen of distributors from across the U.S.
          Share you location and see current availability of over 17,000 solar,
          roofing and electricity products.
        </div>
        <div class="general__scrolling hidden__scrolling">
          <div class="general__subtitle">Compare prices from distributors</div>
          <div class="general__description">
            No need to spend hours surfing the net and trying to find the best
            deal. Setpile groups all available pricing offers to help you make
            the right choice with ease.
          </div>
        </div>
      </div>
    </div>

    <div class="general__joins">
      <div class="general__joins__container">
        <div class="general__projects__header">
          <h2 class="general__title">
            Enjoy your all-in-one professional tool for FREE!
          </h2>
        </div>
        <div class="general__joins__image">
          <img
            class="general-joins__image-item"
            src="~assets/img/landing/engineers.webp"
            alt=""
          />
        </div>
        <div class="general__projects__description">
          <div class="general__joins__counter">
            <div class="general__joins__date">
              <div class="general__joins__date-text">
                <div>30 days free</div>
                <div>First payment on {{ futureDate }}</div>
              </div>
              <img
                class="general-joins__img"
                src="~assets/img/landing/divider.webp"
                alt=""
              />
            </div>
            <a-button
              class="general__joins__btn btn__orange"
              @click="showSignupModal"
            >
              Start 30 days free trial
            </a-button>
          </div>
        </div>
      </div>
    </div>

    <div class="general__market">
      <div class="general__projects__header">
        <div class="general__tag">Marketplace B2B</div>
        <h2 class="general__title">Sell & buy excess inventory</h2>
        <NuxtLink to="/marketplace" class="general__link"
          >See what’s on sale now</NuxtLink
        >
      </div>
      <div class="general__projects__image">
        <img
          class="general-market__image-item"
          src="~assets/img/landing/inventory.webp"
          alt=""
        />
      </div>
      <div class="general__projects__description">
        <div class="general__subtitle">Post listings with your products</div>
        <div class="general__description">
          It all works as easy as Ebay. Upload your product picture and info,
          set delivery and payment preferences and bargain with real customers.
        </div>
        <div class="general__scrolling hidden__scrolling">
          <div class="general__subtitle">Enjoy exclusive deals</div>
          <div class="general__description">
            Find rare, discontinued or discount products put on sale on this B2B
            Marketplace. Check weekly marketplace review to save even more!
          </div>
        </div>
      </div>
    </div>

    <div class="general__news">
      <div class="general__projects__container">
        <div class="general__projects__header">
          <div class="general__tag">Solar news</div>
          <h2 class="general__title">
            Stay at the forefront of industry trends
          </h2>
          <NuxtLink to="/news" class="general__link"
            >Read latest industry news</NuxtLink
          >
        </div>
        <div class="general__projects__image">
          <img src="~assets/img/landing/news.webp" alt="" />
        </div>
        <div class="general__projects__description">
          <div class="general__subtitle">Get the gist</div>
          <div class="general__description">
            Filter the topics you’re really interested in, or just read our
            weekly digest to keep up with the industry trends.
          </div>
          <div class="general__scrolling hidden__scrolling">
            <div class="general__subtitle">Be part of a large community</div>
            <div class="general__description">
              Share, like and comment news articles – this is the place where
              everybody speaks the same language.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="general__tarif">
      <h2 class="general__title general__tarif__title">
        All solar tools in one place for ${{ available_month_price }}/month
      </h2>
      <div class="general__joins__counter">
        <div class="general__joins__date">
          <div class="general__joins__date-text">
            <div>30 days free</div>
            <div>First payment on {{ futureDate }}</div>
          </div>
          <img
            class="general-joins__img"
            src="~assets/img/landing/divider.webp"
            alt=""
          />
        </div>
      </div>
      <!-- <Tariffs :hideStripeButtons="true" :hideSignUpButtons="false" /> -->
    </div>

    <div class="general__footer">
      <div class="general__footer__container">
        <div class="general__footer__width">
          <div class="general__projects__header general__footer__header">
            <img src="/logo.svg" alt="logo" />
            <div class="general__footer__address">
              1854 NW 124th Way, Coral Springs, FL 33071 USA
            </div>
            <div>Setpile CORP</div>
            <div class="general__footer__mail-container">
              <MailFilled />
              <a class="general__footer__mail" href="mailto:pro@setpile.com"
                >pro@setpile.com</a
              >
            </div>
          </div>
          <div class="general__projects__description general__footer__list">
            <div class="general__footer__services">Services</div>
            <ul>
              <li class="general__footer__list-item">
                <NuxtLink to="/projects" class="general__link"
                  >Projects</NuxtLink
                >
              </li>
              <li class="general__footer__list-item">
                <NuxtLink to="/live-inventories" class="general__link"
                  >Live Inventories</NuxtLink
                >
              </li>
              <li class="general__footer__list-item">
                <NuxtLink to="/marketplace" class="general__link"
                  >Marketplace B2B</NuxtLink
                >
              </li>
              <li class="general__footer__list-item">
                <NuxtLink to="/news" class="general__link">News</NuxtLink>
              </li>
            </ul>
          </div>
          <div class="general__projects__image general__footer__privacy">
            <NuxtLink class="general__footer__privacy-item" to="/privacy"
              >Privacy policy</NuxtLink
            >
            <NuxtLink class="general__footer__privacy-item" to="/terms-service"
              >Terms of Service</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useFutureDate } from "~/composables/use-future-date";

const { futureDate } = useFutureDate();

const scrollToProjects = () => {
  const projectsSection = document.getElementById("general__projects");
  if (projectsSection) {
    projectsSection.scrollIntoView({ behavior: "smooth" });
  }
};

const handleScroll = () => {
  const scrollingBlocks = document.querySelectorAll(".general__scrolling");

  scrollingBlocks.forEach((block) => {
    const bounding = block.getBoundingClientRect();
    if (bounding.top >= 0 && bounding.top <= window.innerHeight) {
      block.classList.add("visible");
    }
  });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped lang="scss">
.general {
  font-family: "Roboto";
  background-color: $white;

  &__tag {
    @include txt($font-size: 16px, $color: $white, $font-weight: 700);
    background: $black;
    border-radius: 123px;
    padding: 7px 16px;
    text-align: center;
    width: fit-content;
    max-width: 156px;
    margin: 0 auto;

    @media (min-width: 768px) {
      text-align: left;
      margin: 0;
    }
  }

  &__title {
    @include txt($font-size: 32px, $color: $black, $font-weight: 700);
    line-height: 40px;
    text-align: center;
    margin: 32px 0 16px;

    @media (min-width: 768px) {
      font-size: 56px;
      line-height: 64px;
      letter-spacing: 0em;
      text-align: left;
      margin: 56px 0 16px;
      max-width: 538px;
    }
  }

  &__link {
    @include txt($font-size: 16px, $color: $blue, $font-weight: 700);
    text-align: center;
    text-decoration: underline;

    @media (min-width: 768px) {
      text-align: left;
      margin-bottom: 0;
    }
  }

  &__subtitle {
    @include txt($font-size: 24px, $color: $black, $font-weight: 700);
    text-align: center;
    margin: 32px 0 12px;

    @media (min-width: 768px) {
      margin: 0 0 16px;
      font-size: 28px;
      line-height: 36px;
      text-align: left;
    }
  }

  &__description {
    max-width: 538px;
    margin: 0 auto;
    text-align: center;

    &:not(:last-child) {
      margin-bottom: 32px;
    }

    @media (min-width: 768px) {
      text-align: left;
      margin: 0;

      &:not(:last-child) {
        margin-bottom: 56px;
      }
    }
  }

  &__scrolling {
    opacity: 0;
    transform: translateY(120px);
    transition:
      opacity 2.5s ease,
      transform 2s ease;
  }

  &__scrolling.visible {
    opacity: 1;
    transform: translateY(0);
  }

  &__header {
    background: $blue !important;

    &__container {
      padding: 88px 16px 72px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      @media (min-width: 768px) {
        padding: 200px 20px 136px;
        column-gap: 44px;
      }
    }

    &__title {
      @include txt($font-size: 40px, $color: $white, $font-weight: 700);
      line-height: 48px;

      @media (min-width: 768px) {
        font-size: 80px;
        line-height: 94px;
        max-width: 1116px;
        text-align: center;
      }
    }

    &__tags {
      display: flex;
      justify-content: center;
      column-gap: 26px;
      row-gap: 20px;
      margin: 32px 0;
      flex-wrap: wrap;

      @media (min-width: 768px) {
        margin: 40px 0 56px;
      }
    }

    &__tags-right {
      transform: rotate(3.031deg);
    }

    &__tags-left {
      transform: rotate(-3.031deg);
    }

    &__tags-tem {
      @include txt($font-size: 16px, $color: $black, $font-weight: 700);
      padding: 9px 16px;
      background: $white;
      border-radius: 123px;
      width: max-content;
    }

    &__button {
      @include txt($font-size: 16px, $font-weight: 700);
      max-width: 392px;
      width: 100%;
      border: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 36px 0;

      &:hover {
        color: cl("white", 0.85);
      }

      @media (min-width: 768px) {
        font-size: 24px;
        line-height: 32px;
      }

      &:focus {
        color: $white;
        opacity: 0.85;
        background: $orange;
      }
    }
  }

  &__promo {
    padding: 72px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 768px) {
      padding: 100px 16px;
    }

    &__title {
      @include txt($font-size: 32px, $font-weight: 700);
      line-height: 40px;
      text-align: center;

      @media (min-width: 768px) {
        font-size: 56px;
        line-height: 64px;
      }
    }

    &__icons {
      display: flex;
      flex-wrap: wrap;
      row-gap: 40px;
      column-gap: 32px;
      margin: 40px 0;
      justify-content: center;

      @media (min-width: 768px) {
        margin: 56px 0;
      }
    }

    &__icons-item {
      @include txt($font-size: 24px, $font-weight: 700);
      display: flex;
      align-items: center;
      flex-direction: column;
      text-align: center;
      max-width: 300px;
      row-gap: 24px;
      line-height: 32px;

      @media (min-width: 768px) {
        font-size: 28px;
        line-height: 36px;
      }
    }

    &__subtitle {
      font-size: 16px;
      text-align: center;
      margin-bottom: 40px;
      max-width: 570px;

      @media (min-width: 768px) {
        margin-bottom: 56px;
      }
    }
  }

  &__projects {
    padding: 0 16px;

    &__container {
      padding: 72px 16px;
      background: $blue-2;
      display: block;
      border-radius: 16px;

      @media (min-width: 768px) {
        display: grid;
        padding: 80px 149px;
        grid-template-areas:
          "B B B B   A A A A A"
          "B B B B   A A A A A"
          "B B B B   C C C C C"
          "B B B B   C C C C C";
        gap: 56px;
        justify-content: center;
      }
    }

    &__header {
      grid-area: A;
      text-align: center;

      @media (min-width: 768px) {
        text-align: left;
      }
    }

    &__image {
      grid-area: B;
      margin-top: 32px;
      text-align: center;

      @media (min-width: 768px) {
        margin-top: 0;
      }
    }

    &__image-item {
      max-width: 296px;
      max-height: 374px;

      @media (min-width: 768px) {
        max-width: 484px;
        max-height: 612px;
      }
    }

    &__description {
      grid-area: C;
    }
  }

  &__inventories {
    padding: 72px 16px;
    display: block;
    border-radius: 16px;

    @media (min-width: 768px) {
      max-width: 1174px;
      margin: 0 auto;
      display: grid;
      align-items: center;
      padding: 100px 16px;
      grid-template-areas:
        "A A A A   B B B B B"
        "A A A A   B B B B B"
        "C C C C   B B B B B"
        "C C C C   B B B B B";
      column-gap: 34px;
      row-gap: 56px;
    }
  }

  &__joins {
    padding: 0 16px;

    &__container {
      padding: 40px 16px 72px;
      background: $blue-2;
      display: block;
      border-radius: 16px;

      @media (min-width: 768px) {
        display: grid;
        padding: 24px 149px 0 117px;
        grid-template-areas:
          "B B B B   A A A A A"
          "B B B B   A A A A A"
          "B B B B   C C C C C"
          "B B B B   C C C C C";
        gap: 56px;
        justify-content: center;
      }
    }

    &__image-item {
      position: relative;
      top: 6px;

      max-width: 296px;
      max-height: 281px;

      @media (min-width: 768px) {
        max-width: 509px;
        max-height: 483px;
      }
    }

    &__counter {
      max-width: 523px;
      margin: 0 auto;
    }

    &__date {
      margin: 32px auto 16px;

      @media (min-width: 768px) {
        margin: 0 auto 16px;
      }
    }

    &__date-text {
      display: flex;
      justify-content: space-between;
    }

    &__image {
      grid-area: B;
      text-align: center;

      @media (min-width: 768px) {
        align-self: self-end;
      }
    }

    &__btn {
      @include txt($font-size: 16px, $color: $black, $font-weight: 700);
      max-width: 523px;
      height: 64px;
      width: 100%;
      border: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 36px 0;

      &:hover {
        color: $white;
        opacity: 0.85;
      }

      &:focus {
        color: $white;
        opacity: 0.85;
        background-color: $orange;
      }

      @media (min-width: 768px) {
        font-size: 24px;
        line-height: 32px;
        margin-bottom: 80px;
      }
    }
  }

  &__market {
    padding: 72px 16px;
    display: block;
    border-radius: 16px;

    @media (min-width: 768px) {
      max-width: 1174px;
      margin: 0 auto;
      display: grid;
      align-items: center;
      padding: 100px 16px;
      grid-template-areas:
        "A A A A   B B B B B"
        "A A A A   B B B B B"
        "C C C C   B B B B B"
        "C C C C   B B B B B";
      column-gap: 34px;
      row-gap: 56px;
    }

    &__image-item {
      width: 328px;
      height: 302px;

      @media (min-width: 768px) {
        width: 484px;
        height: 445px;
      }
    }
  }

  &__news {
    padding: 0 16px;
  }

  &__tarif {
    padding: 72px 16px;

    @media (min-width: 768px) {
      padding: 100px 16px;
    }

    &__title {
      max-width: 663px;
      margin: 0 auto 32px;
      text-align: center;
    }
  }

  &__footer {
    padding: 0 16px 32px;

    &__container {
      background: $blue-2;
      border-radius: 16px;
      padding: 16px 16px 32px;
    }

    &__width {
      display: block;
      max-width: 910px;
      margin: 0 auto;

      @media (min-width: 768px) {
        display: grid;
        padding: 32px 0;
        grid-template-areas:
          "A A A A   C C C C C"
          "A A A A   C C C C C"
          "B B B B   C C C C C"
          "B B B B   C C C C C";
      }
    }

    &__header {
      text-align: left;
    }

    &__privacy {
      text-align: left;
      display: flex;
      column-gap: 24px;
      margin-top: 32px;

      @media (min-width: 768px) {
        margin-top: 24px;
      }
    }

    &__privacy-item {
      color: $neutral-2;
    }

    &__mail-container {
      display: flex;
      align-items: flex-end;
      column-gap: 8px;
    }

    &__services {
      font-weight: 700;
      margin-bottom: 24px;
      margin-top: 32px;

      @media (min-width: 768px) {
        margin-top: 0;
      }
    }

    ul {
      list-style: none;
      padding: 0;
    }

    &__address {
      margin: 8px 0;
    }

    &__mail {
      color: $black;
      margin-top: 24px;
    }

    &__list {
      justify-content: left;
      display: grid;

      @media (min-width: 768px) {
        justify-content: center;
      }
    }

    &__list-item {
      &:not(:last-child) {
        margin-bottom: 16px;
      }
    }
  }
}
</style>
