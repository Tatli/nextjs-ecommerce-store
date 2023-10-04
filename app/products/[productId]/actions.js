'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';

// Actions ARE ALWAYS ASYNC and to be AWAITED WHERE THEY ARE USED
export async function updateProductQuantityCookie(quantityInput, productId) {
  // Get current value of product quantity in Cart and log in console
  const productQuantityCookie = getCookie(`quantityProductId: ${productId}`);
  console.log(productQuantityCookie);

  // Convert cookie value to a number, or 0 if it's not set
  const currentQuantity = parseInt(productQuantityCookie) || 0;

  // Convert input field value to a number
  const quantityToAdd = parseInt(quantityInput);

  // // Add input field quantity to cookie quantity
  const quantityCombined = currentQuantity + quantityToAdd;

  // .set() -> name of the cookie
  // Parameter [1] -> value to be set to
  // Set value of cookie 'cart' to {value}
  // Action has to be awaited
  await cookies().set(`quantityProductId: ${productId}`, quantityCombined);
}
