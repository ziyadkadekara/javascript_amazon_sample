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
//await help us to avoid .then fucntion

//try catch can be used in sychrnous xodes
//throuw helps to give manual error and its catched in catch
// in try it skips balance code if an error occur in particular line of code
//reject helps to create manual error which ccur in futture in prmises
async function loadPage() {
  try {
    //throw 'error2';
    await loadProductsFetch();
    await new Promise((resolve, reject) => {
      loadCart(() => {
        //reject('eerror');
        resolve();
      });
    });
  } catch (error) {
    console.log('error occured');
  }

  renderOrderSummary();
  renderPaymentSummary();
  renderCheckoutHeader();
}
loadPage();

/*
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
*/
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
