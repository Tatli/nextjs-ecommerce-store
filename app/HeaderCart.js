import Link from 'next/link';
import { getCookie } from '../util/cookies';

export default function HeaderCart() {
  const cartCookie = getCookie(`cart`);
  return <Link href="/cart">Items in cart: {cartCookie}</Link>;
}
