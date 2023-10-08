import React from 'react';
import { getProductsInCart } from './page';

export default async function CartTotal() {
  const productsInCart = await getProductsInCart();

  let cartTotal = 0;

  productsInCart.forEach((p) => {
    cartTotal += p.price * p.quantity;
  });

  return (
    <span data-test-id="cart-total">Cart Total: {cartTotal.toFixed(2)}</span>
  );
}
