import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thank you for your order',
};

export default function ThankYou() {
  return (
    <div>
      <h1>Thank you</h1>
      <h2>Your purchase:</h2>
      <ul>
        <li>Product 1</li>
        <li>Product 2</li>
        <li>Product 3</li>
      </ul>
    </div>
  );
}
