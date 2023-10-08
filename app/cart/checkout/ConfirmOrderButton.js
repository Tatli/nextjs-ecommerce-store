'use client';
import { deleteCookie } from './actions';

export default function CheckoutButton() {
  return (
    <form>
      <button
        formAction={() => deleteCookie()}
        data-test-id="checkout-confirm-order"
      >
        Confirm Order
      </button>
    </form>
  );
}
