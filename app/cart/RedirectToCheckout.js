'use client';
import { redirect } from 'next/navigation';

export default function RedirectToCheckout() {
  return (
    <form>
      <button
        formAction={() => {
          redirect('/cart/checkout/');
        }}
        data-test-id="cart-checkout"
      >
        Proceed to checkout
      </button>
    </form>
  );
}
