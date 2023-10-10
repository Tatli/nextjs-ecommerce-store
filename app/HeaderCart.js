import Link from 'next/link';
import { getCookie } from '../util/cookies';
import { parseJson } from '../util/json';

export default function HeaderCart() {
  const cartCookie = getCookie(`cart`);
  const cart = cartCookie ? parseJson(cartCookie) : [];
  let totalQuantity = 0;
  // iterate through each item in the cart and add the quantity to totalQuantity
  cart.forEach((item) => {
    totalQuantity += parseInt(item.quantity.toString());
  });

  return (
    <Link data-test-id="cart-link" href="/cart">
      Items in cart: <span data-test-id="cart-count">{totalQuantity}</span>
    </Link>
  );
}
