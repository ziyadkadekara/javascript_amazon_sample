import { renderCheckoutHeader } from './checkout/checkoutHeader.js';
import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadProducts } from '../data/products.js';
import { loadCart } from '../data/cart.js';
//import '../data/cart-class.js';
//import '../data/backend-practice.js';

// loadProducts(() => {
//   renderOrderSummary();
//   renderPaymentSummary();
//   renderCheckoutHeader();
// });

new Promise((resolve) => {
  loadProducts(() => {
    resolve();
  });
}).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
  renderCheckoutHeader();
});
