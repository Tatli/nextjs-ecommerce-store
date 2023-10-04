import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cart',
};

export default function Cart() {
  return (
    <div>
      <h1>Cart:</h1>
      <Link href="/checkout">
        <button data-test-id="cart-checkout">Proceed to checkout</button>
      </Link>
    </div>
  );
}
