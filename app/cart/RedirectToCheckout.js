'use client';
import { redirectToCheckout } from './actions';

export default function RedirectToCheckout() {
  return (
    <form>
      <button
        formAction={() => {
          redirectToCheckout();
        }}
        data-test-id="cart-checkout"
      >
        Proceed to checkout
      </button>
    </form>
  );
}
