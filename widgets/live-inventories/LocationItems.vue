<template>
  <div class="inventory-location">
    <div
      v-for="(product, index) in props.item.availability_in_stores"
      :key="index"
      class="inventory-location__store"
    >
      <div class="inventory-location__store__params">
        <div class="inventory-location__store__params__location">
          <div class="inventory-location__store__params__label">Location</div>
          <div class="inventory-location__store__params__item">
            <div>
              <b v-if="product.city || product.state">
                <template v-if="product.city">{{ product.city }}</template>
                <template v-if="product.city && product.state">,</template>
                <template v-if="product.state">{{ product.state }}</template>
              </b>
            </div>
            <template v-if="product.vendor_name">
              <a class="inventory-location__store__params__item__link" :href="product.vendor_website_url" target="blank">({{ product.vendor_name }})</a>
            </template>

            <div v-else class="inventory-location__store__params__item__link">(Show distributor)</div>
          </div>
        </div>

        <div class="inventory-location__store__params__updated">
          <div class="inventory-location__store__params__label">Updated</div>
          <div class="inventory-location__store__params__item">
              <div v-if="product.updated_at">
                {{ product.updated_at }}
              </div>
            <div v-else class="inventory-location__link">Show</div>
          </div>
        </div>

        <div class="inventory-location__store__params__quantity">
          <div class="inventory-location__store__params__label">Qty</div>
            <div class="inventory-location__store__params__item">
              <div v-if="product.amount">
                {{ product.amount }} itm.
              </div>
              <div v-else class="inventory-location__link">Show</div>
            </div>
        </div>

        <div class="inventory-location__store__params__price">
          <div class="inventory-location__store__params__label inventory-location__store__params__tooltip">
            MAP Price
            <ATooltip>
                <template #title>
                <span>MAP (or minimum advertised price) is the minimum amount a manufacturer or wholesaler allows resellers to advertise their products for without consequence from the manufacturer.</span>
                </template>
                <QuestionCircleOutlined />
            </ATooltip>
          </div>
          <div class="inventory-location__store__params__item">
              <div v-if="product.price">
                {{ product.price }}
              </div>
          </div>
        </div>
      </div>
      <div class="inventory-location__store__distance">
        <template v-if="item.distance_from_user">
          {{ product.distance_from_user }} mi away
        </template>
        <template v-else>–</template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IProps } from "~/widgets/section-items/live-inventories-item/types";

const props = defineProps<IProps>();
</script>

<style scoped lang="scss">
.inventory-location {
  &__store {
    display: flex;
    align-items: flex-start;
    margin-top: 1px;
    padding: 16px 16px 0;
    background: $white;
    border-radius: 12px;
    border: 1px solid $white;
    transition: all .3s;

    @media (min-width: 768px) {
      padding: 16px 24px 0 16px;
    }

    &:hover, &.is-active {
      background: $blue-2;
      border: 1px solid $blue;
    }

    & + & {
      margin: 16px 0 0;
    }

    &__distance {
        white-space: nowrap;
        font-size: 12px;

        @media (min-width: 768px) {
          min-width: 110px;
          font-size: 16px;
          text-align: center;
        }
    }

    &__params {
      display: flex;
      align-items: flex-start;
      flex-grow: 1;

      @media (max-width: 870px) {
        flex-wrap: wrap;
      }

      &__location {
        @media (min-width: 768px) {
          flex-grow: 1;
        }
      }

      &__label {
        @include txt($font-size: 12px, $color: $full-black, $opacity: 0.45);
        padding: 0 16px 4px 0;

        @media (min-width: 1550px) {
          display: none;
        }
      }

      &__item {
        min-width: 110px;
        min-height: 40px;

        &__link {
          text-transform: capitalize;
        }
      }
    }
  }
}
</style>