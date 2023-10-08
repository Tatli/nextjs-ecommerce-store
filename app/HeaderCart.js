import Link from 'next/link';
import { getCookie } from '../util/cookies';
import { parseJson } from '../util/json';

export default function HeaderCart() {
  const cartCookie = getCookie(`cart`);
  const cart = cartCookie ? parseJson(cartCookie) : [];
  let totalQuantity = 0;
  // iterate through each item in the cart and add the quantity to totalQuantity
  cart.forEach((item) => {
    totalQuantity += item.quantity;
  });

  return <Link href="/cart">Items in cart: {totalQuantity}</Link>;
}
