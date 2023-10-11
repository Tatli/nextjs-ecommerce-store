'use client';
import { emptyCartGotoThankYou } from './actions';

export default function CheckoutButton() {
  return (
    <button
      formAction={() => emptyCartGotoThankYou()}
      data-test-id="checkout-confirm-order"
    >
      Confirm Order
    </button>
  );
}
