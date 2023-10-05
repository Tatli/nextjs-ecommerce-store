'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

export async function setProductQuantityInCart(productId, quantity) {
  // get the cookie called 'cart' save in cartCookie
  const cartCookie = getCookie('cart');

  // if no cartCookie make it empty array, otherwise parseJson to make it an array of objects
  const cartJson = !cartCookie ? [] : parseJson(cartCookie);

  // find the item(object) whose quantity is to be updated in the Array
  const itemInCart = cartJson.find((item) => {
    return item.id === productId;
  });

  // Convert the quantity inside of the matched item to an integer/number
  if (itemInCart) {
    const updatedQuantity = parseInt(itemInCart.quantity) + parseInt(quantity);
    itemInCart.quantity = updatedQuantity;
  } else {
    cartJson.push({
      id: productId,
      quantity: quantity,
    });
  }

  await cookies().set('cart', JSON.stringify(cartJson));
}

export async function updateCartCookie(quantityInput) {
  // Get current value of total quantity of all products in Cart
  const cartQuantityCookie = getCookie(`cart`);

  // Convert cookie value to a number, or 0 if it's not set
  const currentQuantity = parseInt(cartQuantityCookie) || 0;

  // Convert input field value to a number
  const quantityToAdd = parseInt(quantityInput);

  // Add input field quantity to cart cookie quantity
  const quantityCombined = currentQuantity + quantityToAdd;

  await cookies().set(`cart`, quantityCombined);
}

// // Actions ARE ALWAYS ASYNC and to be AWAITED WHERE THEY ARE USED
// export async function updateProductQuantityCookie(quantityInput, productId) {
//   // Get current value of product quantity in Cart and log in console
//   const productQuantityCookie = getCookie(`cart`);

//   // Convert cookie value to a number, or 0 if it's not set
//   // const currentQuantity = parseInt(productQuantityCookie) || 0;
//   // If the

//   // Convert input field value to a number
//   const quantityToAdd = parseInt(quantityInput);

//   // // Add input field quantity to cookie quantity
//   const quantityCombined = currentQuantity + quantityToAdd;

//   // .set() -> name of the cookie
//   // Parameter [1] -> value to be set to
//   // Set value of cookie 'cart' to {value}
//   // Action has to be awaited
//   await cookies().set(`quantityProductId: ${productId}`, quantityCombined);
// }
