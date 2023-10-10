import { Metadata } from 'next';
import styles from '../../page.module.scss';
import CartTotal from '../CartTotal';
import ConfirmOrderButton from './ConfirmOrderButton';

export const metadata: Metadata = {
  title: 'Checkout',
};

export default function Checkout() {
  return (
    <main className={styles.main}>
      <h1>Checkout: </h1>
      <br />

      <form>
        <label>
          First Name:
          <input placeholder="First Name" data-test-id="checkout-first-name" />
        </label>
        <br />
        <label>
          Last Name:
          <input placeholder="Last Name" data-test-id="checkout-last-name" />
        </label>
        <br />
        <label>
          E-Mail:
          <input
            placeholder="Email"
            type="email"
            data-test-id="checkout-email"
          />
        </label>
        <br />
        <label>
          Address:
          <input placeholder="Address" data-test-id="checkout-address" />
        </label>
        <br />
        <label>
          City:
          <input placeholder="City" data-test-id="checkout-city" />
        </label>
        <br />
        <label>
          Postal Code:
          <input
            placeholder="Postal Code"
            data-test-id="checkout-postal-code"
          />
        </label>
        <br />
        <label>
          Country:
          <input placeholder="Country" data-test-id="checkout-country" />
        </label>
        <br />
        <label>
          Credit Card Number:
          <input
            placeholder="XXXX XXXX XXXX XXXX"
            data-test-id="checkout-credit-card"
          />
        </label>
        <br />
        <label>
          Expiration Date:
          <input
            placeholder="MM/YYYY"
            data-test-id="checkout-expiration-date"
          />
        </label>
        <br />
        <label>
          Security Code:
          <input placeholder="123" data-test-id="checkout-security-code" />
        </label>
        <br />
      </form>
      <CartTotal />
      <ConfirmOrderButton />
    </main>
  );
}
