import Link from 'next/link';
import { getParsedCookie } from '../util/cookies';

export default async function HeaderCart() {
  const cart = await getParsedCookie();
  console.log('cart inside HeaderCart: ', cart);
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
