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

  console.log('filteredCartJson:', filteredCartJson);
  // set updated cart cookie
  // Stringify the cart information, before setting it (cookies are strings)
  cookies().set(`cart`, JSON.stringify(filteredCartJson));
}

export async function addOne(productId) {
  // Get cart Cookie
  const cartCookie = await getCookie('cart');
  // Convert Cart to JSON
  const cartJson = parseJson(cartCookie);

  // Go through each product in cart
  const newCart = cartJson.map((product) => {
    // Find product you'd like to add one more to the cart of
    if (Number(product.id) === productId) {
      const newQuantity = product.quantity + 1;
      product.quantity = newQuantity;
      return product;
    }
    return console.log(`Adding 1 more of product: ${Number(product.id)}`);
  });

  cookies().set('cart', JSON.stringify(newCart));
}

export async function subtractOne(productId) {
  // Get cart Cookie
  const cartCookie = await getCookie('cart');

  // Convert Cart to JSON
  const cartJson = parseJson(cartCookie);

  // Find product to be updated
  const productToBeUpdated = cartJson.find(
    (product) => productId === Number(product.id),
  );

  // If there is only one product left
  if (productToBeUpdated.quantity === 1) {
    // Remove product from array of products and save new array inside newCart
    const newCart = cartJson.filter((product) => {
      // Only keep products, whose id doesn't match the one to be removed
      if (product.id !== productToBeUpdated.id) {
        return product;
      }
      return console.log('Product deleted from cart.');
    });
    // Set Cart to newCart, not containing deleted product
    cookies().set('cart', JSON.stringify(newCart));
  } else {
    // Otherwise reduce item quantity by 1
    // Go through each object in cart
    const updatedCart = cartJson.map((product) => {
      // Find the object
      if (Number(product.id) === productId) {
        // Reduce the quantity by 1 and save it to a
        product.quantity -= 1;
        return product;
      }
      return console.log('Product quantity reduced by 1.');
    });
    cookies().set('cart', JSON.stringify(updatedCart));
  }
}

export async function redirectToCheckout() {
  await redirect('/cart/checkout/');
}
