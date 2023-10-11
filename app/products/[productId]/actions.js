'use server';
import { cookies } from 'next/headers';
import { getParsedCookie } from '../../../util/cookies';
import { setProductQuantityInCart } from '../../../util/functions';

export async function setProductQuantity(productId, quantity, cookie) {
  const cookieData = await setProductQuantityInCart(
    productId,
    quantity,
    cookie,
  );
  console.log('cookieData inside setProductQuantity:', cookieData);
  cookies().set('cart', JSON.stringify(cookieData));
}

export async function updateCartCookie(quantityInput) {
  // Get current value of total quantity of all products in Cart
  const cartQuantityCookie = await getParsedCookie();

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
