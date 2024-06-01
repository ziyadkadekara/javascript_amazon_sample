import { cart } from '../../data/cart.js';
import { getProduct } from '../../data/products.js';
import { getDeliveryOption } from '../../data/deliveryOptions.js';
import { formatCurrency } from '../utils/money.js';

export function renderPaymentSummary() {
  let productPricecents = 0;
  let shippingCharges = 0;
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    const product = getProduct(cartItem.productId);
    productPricecents += product.priceCents * cartItem.quantity;
    cartQuantity += cartItem.quantity;
    const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
    shippingCharges += deliveryOption.priceCents;
  });
  const totalBeforeTaxCents = productPricecents + shippingCharges;
  const taxCents = totalBeforeTaxCents * 0.1;
  const totalCents = totalBeforeTaxCents + taxCents;

  const paymentSummaryHTML = `
  <div class="payment-summary-title">Order Summary</div>

  <div class="payment-summary-row">
    <div>Items (${cartQuantity}):</div>
    <div class="payment-summary-money">$${formatCurrency(
      productPricecents
    )}</div>
  </div>

  <div class="payment-summary-row">
    <div>Shipping &amp; handling:</div>
    <div class="payment-summary-money">$${formatCurrency(shippingCharges)}</div>
  </div>

  <div class="payment-summary-row subtotal-row">
    <div>Total before tax:</div>
    <div class="payment-summary-money">$${formatCurrency(
      totalBeforeTaxCents
    )}</div>
  </div>

  <div class="payment-summary-row">
    <div>Estimated tax (10%):</div>
    <div class="payment-summary-money">$${formatCurrency(taxCents)}</div>
  </div>

  <div class="payment-summary-row total-row">
    <div>Order total:</div>
    <div class="payment-summary-money">$${formatCurrency(totalCents)}</div>
  </div>

  <button class="place-order-button button-primary">
    Place your order
  </button>
`;
  document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;
}
