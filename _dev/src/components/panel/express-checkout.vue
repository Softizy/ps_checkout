<!--**
 * 2007-2019 PrestaShop and Contributors
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2019 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 *-->
<template>
  <b-card no-body>
    <template v-slot:header>
      <i class="material-icons">picture_in_picture</i> {{ $t('panel.express-checkout.title') }}
    </template>

    <b-card-body>
      <b-col
        sm="12"
        md="10"
        lg="10"
        class="m-auto"
      >
        <b-form>
          <b-form-group
            id="fieldset-1"
            :label="$t('panel.express-checkout.pageLocation')"
            label-for="express-checkout"
          >
            <b-form-row class="mr-0 ml-0">
              <b-col>
                <PSCheckbox
                  id="order-page"
                  v-model="orderPageIsActive"
                  class="mb-2"
                />
                <img
                  @click="toggleOrderPage()"
                  v-if="orderPageIsActive"
                  class="active-img mb-2"
                  src="@/assets/images/preview_cart-page_active.png"
                >
                <img
                  @click="toggleOrderPage()"
                  v-else
                  class="mb-2"
                  src="@/assets/images/preview_cart-page_inactive.png"
                >
                <div>{{ $t('panel.express-checkout.orderPage') }}</div>
                <div class="text-muted">
                  ({{ $t('panel.express-checkout.recommended') }})
                </div>
              </b-col>
              <b-col>
                <PSCheckbox
                  id="checkout-page"
                  v-model="checkoutPageIsActive"
                  class="mb-2"
                />
                <img
                  @click="toggleCheckoutPage()"
                  v-if="checkoutPageIsActive"
                  class="active-img mb-2"
                  src="@/assets/images/preview_checkout-page_active.png"
                >
                <img
                  @click="toggleCheckoutPage()"
                  v-else
                  class="mb-2"
                  src="@/assets/images/preview_checkout-page_inactive.png"
                >
                <div>{{ $t('panel.express-checkout.checkoutPage') }}</div>
              </b-col>
              <b-col>
                <PSCheckbox
                  id="product-page"
                  v-model="productPageIsActive"
                  class="mb-2"
                />
                <img
                  @click="toggleProductPage()"
                  v-if="productPageIsActive"
                  class="active-img mb-2"
                  src="@/assets/images/preview_product-page_active.png"
                >
                <img
                  @click="toggleProductPage()"
                  v-else
                  class="mb-2"
                  src="@/assets/images/preview_product-page_inactive.png"
                >
                <div>{{ $t('panel.express-checkout.productPage') }}</div>
              </b-col>
            </b-form-row>
          </b-form-group>

          <div class="text-muted small">
            {{ $t('panel.express-checkout.shippingCost') }}
          </div>
        </b-form>
      </b-col>
    </b-card-body>

    <b-card-body>
      <b-col
        sm="12"
        md="10"
        lg="10"
        class="m-auto"
      >
        <b-alert
          variant="info"
          show
        >
          <h4 class="alert-heading">
            {{ $t('panel.express-checkout.alertTitle') }}
          </h4>
          <p>
            {{ $t('panel.express-checkout.alertContent') }}
          </p>
        </b-alert>
      </b-col>
    </b-card-body>
  </b-card>
</template>

<script>
  import PSCheckbox from '@/components/form/checkbox';

  export default {
    components: {
      PSCheckbox,
    },
    computed: {
      orderPageIsActive: {
        get() {
          return this.$store.state.configuration.expressCheckout.orderPage;
        },
        set(payload) {
          this.$store.dispatch('toggleECOrderPage', payload);
        },
      },
      checkoutPageIsActive: {
        get() {
          return this.$store.state.configuration.expressCheckout.checkoutPage;
        },
        set(payload) {
          this.$store.dispatch('toggleECCheckoutPage', payload);
        },
      },
      productPageIsActive: {
        get() {
          return this.$store.state.configuration.expressCheckout.productPage;
        },
        set(payload) {
          this.$store.dispatch('toggleECProductPage', payload);
        },
      },
    },
    methods: {
      toggleOrderPage() {
        this.$store.dispatch('toggleECOrderPage', !this.orderPageIsActive);
      },
      toggleCheckoutPage() {
        this.$store.dispatch('toggleECCheckoutPage', !this.checkoutPageIsActive);
      },
      toggleProductPage() {
        this.$store.dispatch('toggleECProductPage', !this.productPageIsActive);
      },
    },
  };
</script>

<style scoped>
  img {
    cursor: pointer;
    border-style: solid !important;
    outline: 1px solid #cfcfcf;
  }
  .active-img {
    outline: 2px solid #25b9d7;
  }
</style>
