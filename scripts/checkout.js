import { renderCheckoutHeader } from './checkout/checkoutHeader.js';
import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadProducts, loadProductsFetch } from '../data/products.js';
import { loadCart } from '../data/cart.js';
//import '../data/cart-class.js';
//import '../data/backend-practice.js';

//async makes a fucntion return promise
//await let us wrute assynchronouscode like normal code
//await - wait to finish the promise

async function loadPage() {
  console.log('loadpage');
  return 'valuetobeinthen';
}
loadPage().then((value) => {
  console.log(value);
  console.log('next step');
});

Promise.all([
  loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  }),
]).then((values) => {
  console.log(values); //disaplys value1giv.. and undefined sice 2nd resolve is not given
  renderOrderSummary();
  renderPaymentSummary();
  renderCheckoutHeader();
});

/*
Promise.all([
  new Promise((resolve) => {
    loadProducts(() => {
      resolve('value1giventothen');
    });
  }),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  }),
]).then((values) => {
  console.log(values); //disaplys value1giv.. and undefined sice 2nd resolve is not given
  renderOrderSummary();
  renderPaymentSummary();
  renderCheckoutHeader();
});
*/
//Old Promise Method
// new Promise((resolve) => {
//   loadProducts(() => {
//     resolve();
//   });
// })
//   .then(() => {
//     return new Promise((resolve) => {
//       loadCart(() => {
//         resolve();
//       });
//     });
//   })
//   .then(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
//     renderCheckoutHeader();
//   });

// loadProducts(() => {
//   renderOrderSummary();
//   renderPaymentSummary();
//   renderCheckoutHeader();
// }); callbacking ucntions like thses cause more nesteed callbacks inorder to avoid thast promises are used
//promise.all runs all the promise at same time and only after competing it it comes outof the fucntion
