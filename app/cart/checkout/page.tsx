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
          <input
            required
            placeholder="First Name"
            data-test-id="checkout-first-name"
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            required
            placeholder="Last Name"
            data-test-id="checkout-last-name"
          />
        </label>
        <br />
        <label>
          E-Mail:
          <input
            required
            placeholder="Email"
            type="email"
            data-test-id="checkout-email"
          />
        </label>
        <br />
        <label>
          Address:
          <input
            required
            placeholder="Address"
            data-test-id="checkout-address"
          />
        </label>
        <br />
        <label>
          City:
          <input required placeholder="City" data-test-id="checkout-city" />
        </label>
        <br />
        <label>
          Postal Code:
          <input
            required
            placeholder="Postal Code"
            data-test-id="checkout-postal-code"
          />
        </label>
        <br />
        <label>
          Country:
          <input
            required
            placeholder="Country"
            data-test-id="checkout-country"
          />
        </label>
        <br />
        <label>
          Credit Card Number:
          <input
            required
            placeholder="XXXX XXXX XXXX XXXX"
            data-test-id="checkout-credit-card"
          />
        </label>
        <br />
        <label>
          Expiration Date:
          <input
            required
            placeholder="MM/YYYY"
            data-test-id="checkout-expiration-date"
          />
        </label>
        <br />
        <label>
          Security Code:
          <input
            required
            placeholder="123"
            data-test-id="checkout-security-code"
          />
        </label>
        <br />

        <CartTotal />
        <ConfirmOrderButton />
      </form>
    </main>
  );
}
