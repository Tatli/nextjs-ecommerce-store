'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export async function deleteProduct(productId) {
  console.log('productId inside deleteProduct:', typeof productId);
  // Get cart Cookie
  const cartCookie = await getCookie('cart');

  // if no cartCookie make it empty array, otherwise parseJson to make it an array of objects
  const cartJson = !cartCookie ? [] : parseJson(cartCookie);

  // filter out the product from the cart
  const filteredCartJson = cartJson.filter((item) => {
    // Convert item.id (string) to Integer so the subsequent comparison works
    const itemId = parseInt(item.id);
    // Compare id of item in cart with the id coming from the props
    if (itemId !== productId) {
      // return only products, which don't match the id of product to be deleted/given product
      return item;
    }
  });

  // set updated cart cookie
  // Stringify the cart information, before setting it (cookies are strings)
  cookies().set(`cart`, JSON.stringify(filteredCartJson));
}

export async function addOne(productId) {
  console.log('Hello from addOne');
  // Get cart Cookie
  const cartCookie = await getCookie('cart');

  // Convert Cart to JSON
  const cartJson = parseJson(cartCookie);

  const newCart = cartJson.map((product) => {
    if (Number(product.id) === productId) {
      console.log('product inside addOne', product);
      const newQuantity = product.quantity + 1;
      product.quantity = newQuantity;
      return product;
    } else {
      return product;
    }
  });

  cookies().set('cart', JSON.stringify(newCart));
}

export async function subtractOne(productId) {
  console.log('Hello from subtractOne');
  // Get cart Cookie
  const cartCookie = await getCookie('cart');

  // Convert Cart to JSON
  const cartJson = parseJson(cartCookie);

  const newCart = cartJson.map((product) => {
    if (Number(product.id) === productId) {
      console.log('product inside addOne', product);
      const newQuantity = product.quantity - 1;
      product.quantity = newQuantity;
      return product;
    } else {
      return product;
    }
  });

  cookies().set('cart', JSON.stringify(newCart));
}

export async function redirectToCheckout() {
  await redirect('/cart/checkout/');
}
