import Link from 'next/link';
import { getCookie } from '../util/cookies';
import { parseJson } from '../util/json';

export default function HeaderCart() {
  const cartCookie = getCookie(`cart`);
  const cart = cartCookie ? parseJson(cartCookie) : [];
  // console.log('cart', cart);
  let totalQuantity = 0;
  // iterate through each item in the cart and add the quantity to totalQuantity
  cart.forEach((item) => {
    // console.log('typeof item.quantity', typeof item.quantity);
    // console.log('typeof totalQuantity', typeof totalQuantity);
    // handle null to be added
    totalQuantity += item.quantity;
  });

  return (
    <Link data-test-id="cart-link" href="/cart">
      Items in cart: <span data-test-id="cart-count">{totalQuantity}</span>
    </Link>
  );
}
