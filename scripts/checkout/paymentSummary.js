import { cart } from '../../data/cart.js';
import { getProduct } from '../../data/products.js';
import { getDeliveryOption } from '../../data/deliveryOptions.js';

export function renderPaymentSummary() {
  let productPricecents = 0;
  let shippingCharges = 0;

  cart.forEach((cartItem) => {
    const product = getProduct(cartItem.productId);
    productPricecents += product.priceCents * cartItem.quantity;
    const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
    shippingCharges += deliveryOption.priceCents;
  });
  console.log(productPricecents);
  console.log(shippingCharges);
}
