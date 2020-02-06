/**
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
 */

document.addEventListener('DOMContentLoaded', () => {
  const interval = setInterval(() => {
    if (window.paypalSdkPsCheckout !== undefined) {
      initPsCheckout();
      clearInterval(interval);
    }
  }, 200);
});

function initPsCheckout() {
  if (typeof paypalOrderId === 'undefined') {
    throw new Error('No paypal order id');
  }

  initSmartButtons();
}

function initSmartButtons() {
  // remove "amp;" from the url
  const orderValidationLinkByPaypal = validateOrderLinkByPaypal.replace(/\amp;/g, '');

  paypalSdkPsCheckout.Buttons({
    style: {
      shape: 'pill',
      size: 'small',
    },
    createOrder() {
      return paypalOrderId;
    },
    onApprove() {
      window.location.replace(orderValidationLinkByPaypal);
    },
  }).render('#paypal-button-container');
}
