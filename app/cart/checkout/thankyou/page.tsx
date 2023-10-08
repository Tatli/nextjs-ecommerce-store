import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thank you for your order',
};

export default function ThankYou() {
  return (
    <div>
      <h1>Thank you for your purchase</h1>
      <h2>Come again</h2>
    </div>
  );
}
