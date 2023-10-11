'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getParsedCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export async function deleteProduct(productId) {
  console.log('productId inside deleteProduct:', typeof productId);

  // if no cartCookie make it empty array, otherwise parseJson to make it an array of objects
  const cartJson = await getParsedCookie();

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
  // Convert Cart to JSON
  const cartJson = await getParsedCookie();

  // Go through each product in cart
  const newCart = cartJson.map((product) => {
    // Find product you'd like to
    if (Number(product.id) === productId) {
      // add one more to the cart of that product
      product.quantity += 1;
      return product;
    }
    // also add the other products, but don't change their quantity
    return product;
  });

  cookies().set('cart', JSON.stringify(newCart));
}

export async function subtractOne(productId) {
  console.log('productId inside subtractOne', productId);
  // Convert Cart to JSON
  const cartJson = await getParsedCookie();

  // Find product to be updated
  const productToBeUpdated = cartJson.find(
    (product) => productId === Number(product.id),
  );

  // If there is only one product left
  if (productToBeUpdated.quantity === 1) {
    await deleteProduct(Number(productToBeUpdated.id));
  } else {
    // Otherwise reduce item quantity by 1
    // Go through each object in cart
    const updatedCart = cartJson.map((product) => {
      // Find the object
      if (Number(product.id) === productId) {
        // Reduce the quantity by 1
        product.quantity -= 1;
        return product;
      }
      // also add the other products, but don't change their quantity
      return product;
    });
    cookies().set('cart', JSON.stringify(updatedCart));
  }
}

export async function redirectToCheckout() {
  await redirect('/cart/checkout/');
}
